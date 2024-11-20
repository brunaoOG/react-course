import { students } from "../data/students";

export const DataTable = () => {
  return students.map(({ id, name, active, grade1, grade2, email, avatar }) => {
    return (
      <tr key={id} className="border-b border-black/20">
        <td className="flex p-4 items-center gap-3">
          <img className="w-10 h-10 rounded-2xl" src={avatar} />
          <div className="text-sm">
            <p className="font-bold">{name}</p>
            <p className="text-black/70"> {email}</p>
          </div>
        </td>
        {active && (
          <td>
            <div className="text-center text-[12px] py-2 px-2 rounded-lg 
            bg-green-500 w-fit text-white ">
              Active
            </div>
          </td>
        )}
        {!active && (
          <td>
            <div className="text-center text-[12px] py-2 px-2 rounded-lg 
            bg-red-500 w-fit text-white ">
              Inactive
            </div>
          </td>
        )}
        <td>{grade1}</td>
        <td>{grade2}</td>
        <td className="font-bold">
          {!active && "--"} {active && ((grade1 + grade2) / 2).toFixed(1)}
        </td>
      </tr>
    );
  });
};
