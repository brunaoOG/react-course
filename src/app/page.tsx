"use client";
import { useEffect, useReducer, useState } from "react";
import { EditProp } from "../types/EditProp";
import { listReducer } from "../../reducers/listReducer";

const Page = () => {
  //Reducer
  const [list, dispatch] = useReducer(listReducer, []);

  //States de input
  const [inputValue, setInputValue] = useState<string>("");
  const [editingValue, setEditingValue] = useState<string>("");

  //Edit toggle stuff
  const [editing, setEditing] = useState<EditProp>({
    isEditing: false,
    key: null,
  });
  const showEdit = (key: number) => {
    setEditing({ isEditing: true, key });
  };

  return (
    <div className="p-5 flex justify-center items-center h-screen">
      <div className="rounded-lg bg-gray-200 text-black p-10 w-fit">
        <h1 className="text-2xl font-bold">To-Do List</h1>
        <div className="flex gap-5 py-4">
          <input
            type="text"
            placeholder="O que manda?"
            className="p-2 rounded-md"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="rounded-md py-2 px-4 bg-blue-300"
            onClick={() => {
              if (inputValue) {
                dispatch({
                  type: "add",
                  payload: { text: inputValue },
                });
                setInputValue("");
              }
            }}
          >
            Adicionar
          </button>
        </div>
        <ul className="flex-col flex gap-2  ">
          {list &&
            list.map((item, index) => {
              return (
                <li
                  key={index}
                  className=" flex items-center bg-black/5 py-2 px-3 rounded-lg gap-2"
                >
                  <span className="flex-1">
                    <span className="font-bold text-sm">
                      <input
                        type="checkbox"
                        className="size-3 mr-2"
                        checked={item.done}
                        onChange={() =>
                          dispatch({
                            type: "toggleDone",
                            payload: { id: index },
                          })
                        }
                      />
                      {item.text}
                    </span>
                  </span>

                  <span
                    className="p-2 text-[10px] bg-red-500 rounded-lg cursor-pointer"
                    onClick={() => {
                      if (
                        !window.confirm(
                          `Tem certeza que deseja excluir o item "${item.text}"?`
                        )
                      )
                        return;
                      dispatch({
                        type: "remove",
                        payload: { id: index },
                      });
                    }}
                  >
                    🗑️
                  </span>
                  <span
                    className="p-2 text-[10px] cursor-pointer  bg-blue-500 rounded-lg"
                    onClick={() => showEdit(index)}
                  >
                    ✏️
                  </span>
                  {editing.isEditing && editing.key == index && (
                    <div className="absolute ml-5 bg-blue-500 cursor-pointer py-1 px-1 rounded-md">
                      <input
                        placeholder="Insira o novo texto"
                        className=" rounded-md p-1 text-sm border w-[160px]"
                        onChange={(e) => setEditingValue(e.target.value)}
                        value={editingValue}
                      ></input>
                      <button
                        className="px-3 text-white font-bold"
                        onClick={() => {
                          if (editingValue) {
                            dispatch({
                              type: "edit",
                              payload: { id: index, text: editingValue },
                            });
                            setEditing({ isEditing: false, key: editing.key });
                          }
                        }}
                      >
                        {"->"}
                      </button>
                    </div>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Page;
