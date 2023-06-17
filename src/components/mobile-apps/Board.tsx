import { Column, ColumnType } from "./Column";
import type { CardProps } from "./Card";
import { useState, useCallback, type FC } from "react";
import { DndProvider } from "react-dnd";
import update from "immutability-helper";
import { HTML5Backend } from "react-dnd-html5-backend";

export const Board: FC = () => {
  const [tasks, setTasks] = useState<CardProps[]>([
    {
      priorityStatus: "Low",
      title: "Brainstorming",
      description:
        "Brainstorming brings team members' diverse experience into play.",
      commentCount: 12,
      fileCount: 0,
      status: "todo",
      subscriberImages: ["/people/0.png", "/people/3.png", "/people/2.png"],
    },
    {
      priorityStatus: "High",
      title: "Research",
      description:
        "User research helps you to create an optimal product for users.",
      commentCount: 10,
      fileCount: 3,
      status: "todo",
      subscriberImages: ["/people/1.png", "/people/5.png"],
    },
    {
      priorityStatus: "High",
      title: "Wireframes",
      description:
        "Low fidelity wireframes include the most basic content and visuals.",
      commentCount: 4,
      fileCount: 2,
      status: "todo",
      subscriberImages: ["/people/0.png", "/people/5.png", "/people/3.png"],
    },
    {
      priorityStatus: "Low",
      title: "Onboarding Illustrations",
      images: ["/cardImages/onprogress-1.png"],
      commentCount: 14,
      fileCount: 15,
      status: "onprogress",
      subscriberImages: ["/people/2.png", "/people/3.png", "/people/0.png"],
    },
    {
      priorityStatus: "Low",
      title: "Moodboard",
      images: [
        "/cardImages/onprogress-2-1.png",
        "/cardImages/onprogress-2-2.png",
      ],
      commentCount: 9,
      fileCount: 10,
      status: "onprogress",
      subscriberImages: ["/people/2.png"],
    },
    {
      priorityStatus: "Completed",
      title: "Mobile App Design",
      images: ["/cardImages/done-1.png"],
      commentCount: 12,
      fileCount: 15,
      status: "done",
      subscriberImages: ["/people/5.png", "/people/3.png"],
    },
    {
      priorityStatus: "Completed",
      title: "Design System",
      description: "It just needs to adapt the UI from what you did before",
      commentCount: 12,
      fileCount: 15,
      status: "done",
      subscriberImages: ["/people/0.png", "/people/2.png", "/people/3.png"],
    },
  ]);
  const changeTaskStatus = useCallback(
    (title, columnID) => {
      let task = tasks.find((task) => task.title === title) as CardProps;
      const taskIndex = tasks.indexOf(task);
      let newTasks = update(tasks, {
        [taskIndex]: { $set: { ...task, status: columnID } },
      });
      setTasks((_) => [...newTasks]);
    },
    [tasks]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex space-x-[15px]">
        <Column
          id="todo"
          title="To Do"
          cardCount={4}
          separatorColor="#5030E5"
          indicatorColor="#5030E5"
          cardProps={tasks.filter((task) => task.status === "todo")}
          changeTaskStatus={changeTaskStatus}
        />
        <Column
          id="onprogress"
          title="On Progress"
          cardCount={3}
          separatorColor="#FFA500"
          indicatorColor="#FFA500"
          cardProps={tasks.filter((task) => task.status === "onprogress")}
          changeTaskStatus={changeTaskStatus}
        />
        <Column
          id="done"
          title="Done"
          cardCount={2}
          separatorColor="#8BC48A"
          indicatorColor="#76A5EA"
          cardProps={tasks.filter((task) => task.status === "done")}
          changeTaskStatus={changeTaskStatus}
        />
      </div>
    </DndProvider>
  );
};
