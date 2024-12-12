type Props = {
  toggleModal: () => void;
  imageUrl: string;
};

export const Modal = ({ toggleModal, imageUrl }: Props) => {
  return (
    <div
      onClick={toggleModal}
      className="absolute top-0 left-0 w-screen h-screen flex  justify-center items-center bg-black/80 "
    >
      <button
        className="absolute self-end top-5 cursor-pointer right-5 text-[50px]"
        onClick={toggleModal}
      >
        ✖
      </button>
      <img src={`/assets/${imageUrl}`} className="max-w-screen max-h-screen " />
    </div>
  );
};
