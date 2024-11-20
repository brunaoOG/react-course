type Props = {
  rate: number;
};

export const EmojiRating = ({ rate }: Props) => {
  let emojiBuild: string[] = ["😵", "😵", "😵", "😵", "😵"];
  for (let i = 0; i < rate; i++) {
    emojiBuild[i] = "😁";
  }

  return (
    <div className="text-[36px] p-3 bg-black/20 rounded-md">
      {emojiBuild.join("")}
    </div>
  );
};

