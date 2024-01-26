"use client";
import Image from "next/image";
import Todo from "@/components/Todo";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
export default function Home() {
  const initial = { title: "", description: "" };
  const [inputs, setInputs] = useState(initial);
  const [todos, setTodos] = useState([]);

  const handler = (e, input) => {
    setInputs({ ...inputs, [input]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(inputs, "******");
    try {
      const response = await axios.post("/api", inputs);
      toast.success(response?.data?.msg);
      formReset();
      FetchTodos();
    } catch (error) {
      console.log(error);
      toast.error("Error Occurred in Todo Creation");
    }
  };

  const formReset = () => {
    setInputs(initial);
  };

  const FetchTodos = async () => {
    try {
      const response = await axios.get("/api");
      setTodos(response.data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchTodos();
  }, []);
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
              {todos.length > 0 &&
                todos.map((item, index) => {
                  return <Todo item={item} />;
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
