import { useState } from "react";
import { Post } from "../src/types/Post";

type AddAction = {
  type: "add";
  payload: { title: string; body: string };
};

type RemoveAction = {
  type: "remove";
  payload: { id: number };
};

type EditAction = {
  type: "edit";
  payload: { id: number; title: string; body: string };
};

export type PostActions = AddAction | RemoveAction | EditAction;

export const postReducer = (posts: Post[], action: PostActions) => {
  switch (action.type) {
    case "add":
      return [
        ...posts,
        {
          id: posts.length,
          title: action.payload.title,
          body: action.payload.body,
        },
      ];
    case "remove":
      return posts.filter((item) => item.id !== action.payload.id);

    case "edit":
      posts.forEach((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.body = action.payload.body;
        }
      });

    default:
      return posts;
  }
};
