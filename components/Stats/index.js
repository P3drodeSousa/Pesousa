import Stat from "./Stat";
import differenceInHours from "date-fns/differenceInHours";

export default function Stats({ stats, text, days, code }) {
  // Calculate diference between two dates (days Alive)
  const getDifferenceInDays = (date1, date2) => {
    const diffInMs = Math.abs(date2 - date1);
    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  };

  const result = differenceInHours(new Date(), new Date(2020, 1, 1));

  return (
    <div className="mx-auto max-w-screen-xl">
      <h2 className="text-center text-5xl font-semibold mt-28">Stats</h2>
      <div className="text-justify text-lg max-w-6xl mx-auto my-14">
        {text} Enjoy{" "}
        <span role="img" aria-label="Peace Emoji">
          ✌🏻
        </span>
      </div>
      <div className="flex w-full gap-5 md:flex-row flex-col-reverse">
        <Stat
          title={days}
          stat={getDifferenceInDays(new Date(), new Date("02/20/1992"))}
        />
        <Stat title="GitHub Folders" stat={stats} />
        <Stat title={code} stat={result} />
      </div>
    </div>
  );
}
