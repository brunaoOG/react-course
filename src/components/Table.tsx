import { DataTable } from "./DataTable";

export const Table = () => {
  return (
    <table className="w-full bg-white text-black rounded-2xl overflow-hidden">
      <thead className="bg-slate-700 text-white ">
        <tr className="text-left text-sm">
          <th className="p-4">Name</th>
          <th>Status</th>
          <th>Grade 1</th>
          <th>Grade 2</th>
          <th>Final Grade</th>
        </tr>
      </thead>
      <tbody>
        <DataTable />
      </tbody>
    </table>
  );
};
