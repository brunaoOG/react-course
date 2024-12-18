import { Item } from "../src/types/Item";

type AddAction = {
  type: "add";
  payload: { text: string };
};
type EditTextAction = {
  type: "edit";
  payload: { id: number; text: string };
};
type ToggleDoneAction = {
  type: "toggleDone";
  payload: { id: number };
};
type RemoveAction = {
  type: "remove";
  payload: { id: number };
};

type listActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;

export const listReducer = (list: Item[], actions: listActions) => {
  switch (actions.type) {
    case "add":
      return [
        ...list,
        {
          id: list.length,
          text: actions.payload.text,
          done: false,
        },
      ];
    case "edit":
      return list.map((t) => {
        if (t.id === actions.payload.id) t.text = actions.payload.text;
        return t;
      });
    case "toggleDone":
      return list.map((t) => {
        if (t.id === actions.payload.id) {
          return { ...t, done: !t.done };
        }
        return t;
      });
    case "remove":
      return list.filter((t) => {
        return t.id !== actions.payload.id;
      });
    default:
      return list;
  }
};
