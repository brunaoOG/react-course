import { useState } from "react";
import { ListItem } from "../types/ListItem";

export const ToDoList = () => {
  const [itemInput, setItemInput] = useState("");
  const [list, setList] = useState<ListItem[]>([]);
  const [editingInput, setEditingInput] = useState("");

  const handlerAddButton = () => {
    if (itemInput.trim() == "") return;
    setList([
      ...list,
      {
        label: itemInput,
        checked: false,
        isEditing: false,
        id: list.length + 1,
      },
    ]);
    setItemInput("");
  };

  const deleteItem = (targetId: number) => {
    setList(
      list.filter((item) => {
        return item.id !== targetId;
      })
    );
  };

  const toggleItem = (targetId: number) => {
    let newList = [...list];

    for (let i in newList) {
      if (newList[i].id == targetId) {
        newList[i].checked = !newList[i].checked;
      }
    }
    //newList[targetKey].checked = !newList[targetKey].checked;
    setList([...newList]);
  };

  const sendEdit = (targetId: number) => {
    if (editingInput.trim() == "") return;
    showEditingInput(targetId);
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id == targetId) {
        newList[i].label = editingInput;
      }
    }
    setList(newList); 
    setEditingInput("");
  };

  const showEditingInput = (targetId: number) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id == targetId) {
        newList[i].isEditing = !newList[i].isEditing;
      }
      if (list[i].id == targetId) {
        setEditingInput(list[i].label);
      }
    }
    setList(newList);
  };

  return (
    <div className="bg-black/30 rounded-lg p-6 w-[450px] container m-auto mt-12 flex flex-col gap-3">
      <h1 className="text-2xl font-bold text-center">Lista de Tarefas</h1>
      <div className="bg-blue-500 p-5 rounded-md">
        <input
          type="text"
          placeholder="O que manda hoje?"
          className="py-2 px-3 rounded-lg text-black"
          value={itemInput}
          onChange={(e) => {
            setItemInput(e.target.value);
          }}
        />
        <button
          className="py-2 px-3 rounded-lg font-bold"
          onClick={handlerAddButton}
        >
          Adicionar
        </button>
      </div>
      {list.length < 1 && (
        <p className="text-center text-sm my-2">Sem itens na lista</p>
      )}
      {list.length < 2 && list.length > 0 && (
        <p className="text-center text-sm my-2">{list.length} item na lista</p>
      )}
      {list.length >= 2 && (
        <p className="text-center text-sm my-2">{list.length} itens na lista</p>
      )}

      <ul className="list-disc px-5">
        {list.map((item) => {
          return (
            <li key={item.id} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={item.checked}
                className="size-3"
                onChange={() => toggleItem(item.id)}
              />

              {!item.isEditing && item.label}
              {item.isEditing && (
                <div key={item.id} className="flex">
                  <input
                    type="text"
                    className="z-10 outline-0 text-black w-[150px] rounded-s-md  bg-gray/50 px-1  text-sm border-2 border-blue-500"
                    placeholder="Edite aqui..."
                    value={editingInput}
                    onChange={(e) => setEditingInput(e.target.value)}
                  />
                  <button
                    className="px-2 bg-blue-500 rounded-e-md  text-sm  font-bold"
                    onClick={() => {
                      sendEdit(item.id);
                    }}
                  >
                    Enviar
                  </button>
                </div>
              )}

              <div className=" flex gap-2 bg-black/80 rounded-md px-3">
                <button
                  className="font-bold text-red-500"
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                >
                  Deletar
                </button>
                <button
                  className="font-normal text-white/20"
                  onClick={() => {
                    showEditingInput(item.id);
                  }}
                >
                  Editar
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
