import React from "react";

const Todo = ({ item, del, complete }) => {
  return (
    <>
      <tr>
        <td>{item._id}</td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{item?.isComplete ? "completed" : "pending"}</td>
        <td>
          <div className=" flex gap-3 justify-center">
            <button
              className="bg-black text-white p-2 hover:bg-purple-600 duration-300 transition-all"
              onClick={() => del(item._id)}
            >
              Delete
            </button>
            {!item?.isComplete ? (
              <button
                className="bg-green-600 text-white p-2 hover:bg-purple-600 duration-300 transition-all"
                onClick={() => complete(item._id)}
              >
                Mark Complete
              </button>
            ) : (
              <></>
            )}
          </div>
        </td>
      </tr>
    </>
  );
};

export default Todo;
