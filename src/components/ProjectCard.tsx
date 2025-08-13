{
  /*TODO: 
    1. Think of how you want this designed to fit eveything in the card
    2. Might need to come from else where, but lets limit the char count for the text content if possible
    3. Add edit button to make changes to the project card
    */
}
import TaskList from "./TaskList";

export default function ProjectCard({
  description,
}: {
  projectTitle?: string;
  description?: string;
}) {
  return (
    <div className="p-5 flex flex-col col-span-2 h-96 gap-y-5 bg-gray-900 font-sans rounded-xl">
      <h1 className="text-3xl">Project Overview</h1>
      <div className=" flex flex-row overflow-y-hidden overflow-x-auto flex-1 gap-x-10">
        <div className="flex flex-col flex-1 gap-y-2">
          <h1 className="text-lg">Description</h1>
          <p className="italic">{description}</p>
          <h1 className="text-lg">Goal</h1>
          <p className="italic">
            This will be the goals of the project. this is a test this This will
            beThis will be the goals of the project. this is a test this This
            will be the goals of the project. this is a test this This will be
            the goals of the project. this is a test this This will be the goals
            of the project. this is a test this the goals of the project. this
            is a test this This will be the goals of the project. this is a test
            this is a test this is testinThis will be the goals of the project.
            this is a test this is a test this is testinThis will be the goals
            of the project. this is a test this is a test this is testinThis
            will be the goals of the project. this is a test this is a test this
            is testinThis will be the goals of the project. this is a test this
            is a test this is testinThis will be the goals of the project. this
            is a test this is a test this is testinThis will be the goals of the
            project. this is a test this is a test this is testinThis will be
            the goals of the project. this is a test this is a test this is
            testinThis will be the goals of the project. this is a test this is
            a test this is testin
          </p>
        </div>
        <div className="flex flex-col flex-1 overflow-auto gap-y-2">
          <h1 className="text-lg">Objectives</h1>
          <div className="flex item-center">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}
