"use client";

import { useState } from "react";
import { Person } from "../types/Person";

const Page = () => {
  //States:
  const [fullName, setFullName] = useState<Person>({
    name: "",
    lastName: "",
  });

  const [userConfirmed, setConfirmation] = useState({
    isConfirmed: false,
    fullName: "",
  });

  //Delete handlers
  const handlerDelName = () => setFullName({ ...fullName, name: "" });
  const handlerDelLastName = () => setFullName({ ...fullName, lastName: "" });
  const handlerClear = () => setFullName({ name: "", lastName: "" });

  //Typing and Confirm handlers
  const handlerTypeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName({ ...fullName, name: e.target.value });
  };
  const handlerTypeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName({ ...fullName, lastName: e.target.value });
  };
  const handlerConfirm = () => {
    setConfirmation({
      isConfirmed: true,
      fullName: fullName.name + " " + fullName.lastName,
    });
    setFullName({ name: "", lastName: "" });
  };

  return (
    <div className="m-10 flex flex-col w-fit bg-black/50 p-6 rounded-lg gap-5">
      <h1 className="text-center text-xl font-bold">Login</h1>
      <div className="flex-col flex gap-2">
        <div className="flex">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-s-lg  px-3 py-2 text-black   "
            value={fullName.name}
            onChange={handlerTypeName}
          />
          <button
            className="rounded-e-lg bg-blue-500 px-2"
            onClick={handlerDelName}
          >
            Delete
          </button>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full rounded-s-lg  px-3 py-2 text-black   "
            value={fullName.lastName}
            onChange={handlerTypeLastName}
          />
          <button
            className="rounded-e-lg bg-blue-500 px-2"
            onClick={handlerDelLastName}
          >
            Delete
          </button>
        </div>
        <div className="w-full flex gap-3">
          <button
            className="w-1/4 bg-blue-500 rounded-lg mt-1 py-2"
            onClick={handlerClear}
          >
            Clear
          </button>
          <button
            className="flex-1 bg-green-500 rounded-lg mt-1 py-2"
            onClick={handlerConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <p>Glad to see you, </p>
        {userConfirmed.isConfirmed && (
          <span className="text-xl font-bold bg-green-500/50 p-3 rounded-lg ">
            {userConfirmed.fullName}
          </span>
        )}
        {!userConfirmed.isConfirmed && (
          <span className="text-xl font-bold bg-blue-500/20 p-3 rounded-lg ">
            {fullName.name + " " + fullName.lastName}
          </span>
        )}
      </div>
    </div>
  );
};

export default Page;
