import React from "react";

const Todo = ({ item }) => {
  return (
    <>
      <tr>
        <td>{item._id}</td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{item?.isComplete ? "completed" : "pending"}</td>
        <td >
          <div className=" flex gap-3 justify-center">
            <button className="bg-black text-white p-2 hover:bg-purple-600 duration-300 transition-all">
              Delete
            </button>

            <button className="bg-black text-white p-2 hover:bg-purple-600 duration-300 transition-all">
              Update
            </button>
            <button className="bg-black text-white p-2 hover:bg-purple-600 duration-300 transition-all">
              Mark Complete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Todo;
