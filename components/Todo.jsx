import React from "react";

const Todo = () => {
  return (
    <>
      <tr>
        <td>ID</td>
        <td>Title</td>
        <td>Descrption</td>
        <td>Status</td>
        <td>
          <button className="bg-black text-white p-2 hover:bg-purple-600 duration-300 transition-all m-3">
            Delete
          </button>

          <button className="bg-black text-white p-2 hover:bg-purple-600 duration-300 transition-all">
            Update
          </button>
        </td>
      </tr>
    </>
  );
};

export default Todo;
