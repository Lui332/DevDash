import { NextRequest, NextResponse } from "next/server";
import { Octokit } from "octokit";
import { GitHubCommit } from "@/types/gitHubCommit";

export async function GET(req: NextRequest) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_KEY,
  });

  const response = await octokit.request("GET /repos/{owner}/{repo}/commits", {
    owner: "Lui332",
    repo: "DevDash",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  var commitHistory: GitHubCommit[] = [];

  response.data.forEach((item) => {
    var newCommit: GitHubCommit = {} as GitHubCommit;
    newCommit.sha = item.sha;
    newCommit.url = item.html_url;
    newCommit.message = item.commit.message;
    newCommit.committer = item.author?.login ?? "Uknown";

    commitHistory.push(newCommit);
  });

  return NextResponse.json(commitHistory);
}
