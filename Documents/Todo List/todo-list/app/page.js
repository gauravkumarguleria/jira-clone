"use client";

import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) return; // prevent empty tasks
    setMainTask((prev) => [...prev, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = (
    <p className="text-gray-500 italic text-center py-5">
      🎉 No task available. Add your first task above!
    </p>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li
          className="flex items-center justify-between bg-white shadow-md p-4 rounded-xl mb-3 hover:shadow-lg transition-all"
          key={i}
        >
          <div className="flex flex-col text-left w-2/3">
            <h5 className="text-lg font-semibold text-gray-800">{t.title}</h5>
            <h6 className="text-sm text-gray-600">{t.desc}</h6>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
            onClick={() => deleteHandler(i)}
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 flex flex-col items-center">
      {/* Title */}
      <h1 className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 font-extrabold text-center text-5xl shadow-md w-full">
        📝 My Todo List
      </h1>

      {/* Form */}
      <form
        onSubmit={submitHandler}
        className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10 bg-white p-6 rounded-2xl shadow-lg w-11/12 md:w-3/4 lg:w-2/3"
      >
        <input
          type="text"
          className="text-lg border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full md:w-1/3"
          placeholder="Enter Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          className="text-lg border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full md:w-1/3"
          placeholder="Enter Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-lg font-bold hover:bg-indigo-700 transition w-full md:w-auto">
          ➕ Add Task
        </button>
      </form>

      {/* Task List */}
      <div className="bg-slate-100 mt-10 px-6 py-4 rounded-2xl shadow-inner w-11/12 md:w-3/4 lg:w-2/3">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};

export default Page;
