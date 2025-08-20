import { NextRequest, NextResponse } from "next/server";
import { Octokit } from "octokit";

export async function GET(req: NextRequest) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_KEY,
  });

  console.log("We at least made it in lol");
  const test = await octokit.request("GET /repos/{owner}/{repo}/commits", {
    owner: "Lui332",
    repo: "DevDash",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  console.log(test);
  return NextResponse.json({
    message: "Success",
    status: 200,
  });
}
