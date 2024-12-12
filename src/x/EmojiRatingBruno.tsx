type Props = {
  rate: number;
};

export const EmojiRating = ({ rate }: Props) => {
  let emojiBuild: string[] = ["😵", "😵", "😵", "😵", "😵"];
  for (let i = 0; i < rate; i++) {
    emojiBuild[i] = "😁";
  }

  return (
    <>
      <div className="flex justify-center items-center gap-4 p-5 ">
        <div className="text-3xl bg-black/40 rounded-lg p-6 ">{rate}.0</div>
        <div className="text-[36px] p-3 bg-black/20 rounded-md">
          {emojiBuild.join("")}
        </div>
      </div>
    </>
  );
};
