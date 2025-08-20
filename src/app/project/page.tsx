// We should move everything down and have the project name at the top

import ProjectCard from "@/components/ProjectCard";
import TimerCard from "@/components/TimerCard";
import GitHubCard from "@/components/GitHubCard";

export default function Home() {
  return (
    <div className=" grid grid-cols-3 gap-4 p-4">
      <ProjectCard description="This will be a long description at some point" />
      <TimerCard />
      <GitHubCard />
      <h1 className="bg-gray-600">test</h1>
    </div>
  );
}
