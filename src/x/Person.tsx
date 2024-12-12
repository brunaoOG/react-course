const getWeekDay = (today: Date) => {
  return new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(today);
};

type Propz = {
  name: string;
  avatar?: string;
  roles: string[];
};

export const Person = ({
  name,
  avatar = "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
  roles,
}: Propz) => {
  return (
    <div className="m-5 p-4 w-full flex flex-col gap-5 items-center bg-black/40 rounded-lg">
      <img src={avatar} alt="Father" className="rounded-full w-60 h-60" />
      <h1>{name}</h1>
      <ul className="grid grid-cols-3 gap-1">
        <li className="text-center p-3 bg-black/60 rounded-lg flex items-center justify-center">
          {roles[0]}
        </li>
        <li className="text-center p-3 bg-black/60 rounded-lg flex items-center justify-center">
          {roles[1]}
        </li>
        <li className="text-center p-3 bg-black/60 rounded-lg flex items-center justify-center">
          {roles[2]}
        </li>
      </ul>
    </div>
  );
};
