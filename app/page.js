"use client";
import Image from "next/image";
import Todo from "@/components/Todo";
import { useState } from "react";
export default function Home() {
  const initial = { title: "", description: "" };
  const [inputs, setInputs] = useState(initial);

  const handler = (e, input) => {
    setInputs({ ...inputs, [input]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log("Hello");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="w-full md:w-[70%] py-24 px-2 mx-auto shadow-md">
        <form onSubmit={submit}>
          <div className="mb-3">
            <input
              type="text"
              className="w-full px-3 py-2 h-10 border border-black"
              placeholder="Enter Titile"
              onChange={(e) => handler(e, "title")}
              value={inputs?.title}
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              className="w-full px-3 py-2  border border-black"
              placeholder="Enter Description"
              rows={5}
              onChange={(e) => handler(e, "description")}
              value={inputs?.description}
            />
          </div>
          <div className="mb-3 flex justify-center">
            <button className="bg-black text-white p-4 hover:bg-purple-600 duration-300 transition-all">
              Add Todo
            </button>
          </div>
        </form>

        <div className="py-10">
          <table className="w-full  border border-black">
            <thead className="bg-black text-white">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Descrption</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="border border-black text-center">
              <Todo />
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
