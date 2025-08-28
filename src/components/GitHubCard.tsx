"use client";
import { useState, useEffect } from "react";
import { GitHubCommit } from "../types/gitHubCommit";

export default function GitHubCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/GitHub");
      if (!response.ok) {
        throw new Error(
          "Error fetching data within GitHub card - failed response"
        );
      }
      const result = await response.json();
      setData(result);
    } catch (e) {
      console.log("Error fetching data within GitHub card");
    }
  };

  return (
    <div className="p-5 flex flex-col col-span-1 bg-gray-900 font-sans rounded-xl">
      <div className="flex flex-row">
        <h1 className="text-3xl">Git Hub Commits</h1>
      </div>
      {data.map((x: GitHubCommit) => (
        <div key={x.sha} className="p-2">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <a href={x.url}>{x.message}</a>
              <p className="text-sm">{x.committer}</p>
            </div>
            <div className="flex flex-row">
              <a href={x.url}>{x.sha.substring(0, 7)}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
