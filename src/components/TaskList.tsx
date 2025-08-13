// Next we need to properly format the list
// We will need some sort of modal for the user to end new task, or maybe if nothing entered
//    in task we just remove it form the list
// Try to remove item from the list, if we want to be able to do this, we may
//    need to pass the current state of the list to the TaskItem component and
//    update there if we decide to remove an item?

"use client";
import React, { useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddingNewTask = () => {
    const newTask = Math.random().toString();
    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  return (
    <div className="pl-5">
      {tasks.map((task, index) => (
        <TaskItem key={task} taskId={task} setTasks={setTasks} />
      ))}
      <button
        type="button"
        className="hover:text-zinc-950 hover:font-bold cursor-pointer"
        onClick={handleAddingNewTask}
      >
        Add New Task...
      </button>
    </div>
  );
}
