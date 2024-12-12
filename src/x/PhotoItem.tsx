import { Photo } from "../types/Photo";

type Props = {
  photo: Photo;
  clickHandler: () => void;
};

export const PhotoItem = ({ photo, clickHandler }: Props) => {
  return (
    <div
      onClick={clickHandler}
      className="w-full hover:opacity-75 cursor-pointer"
    >
      <img
        className=" h-[150px] w-full rounded-md"
        src={`/assets/${photo.url}`}
      />
    </div>
  );
};

