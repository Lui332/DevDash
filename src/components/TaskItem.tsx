// TODO: Size of the input box should be dynamic based on the text length
// TODO: Would be cool to put a line through the text if checked, and vice versa
// TODO: If we want to keep track of some progress bar based on task completed, this component might be the
//         best place for that functionality

"use client";
import React, { useState } from "react";

type TaskItemProps = {
  taskId: string;
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function TaskItem({ taskId, setTasks }: TaskItemProps) {
  const [taskChecked, setTaskChecked] = useState<boolean>(false);
  const [taskDescription, setTaskDescription] =
    useState<string>("Enter new task...");

  const handleCheckboxChange = () => {
    setTaskChecked((itemChecked) => !itemChecked);
  };

  const handleDeleteTaskItem = () => {
    setTasks((currentTasks) => currentTasks.filter((task) => task !== taskId));
  };

  return (
    <div className="group">
      <input
        type="checkbox"
        checked={taskChecked}
        onChange={handleCheckboxChange}
        className=""
      />
      <input
        type="text"
        maxLength={30}
        className={"pl-2"}
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      ></input>
      <button
        type="button"
        className="opacity-0 group-hover:opacity-100 pl-2 text-red-500 hover:text-red-400 hover:font-bold cursor-pointer"
        onClick={handleDeleteTaskItem}
      >
        DELETE
      </button>
    </div>
  );
}
