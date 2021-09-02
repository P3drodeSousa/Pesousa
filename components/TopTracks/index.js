import useSWR from "swr";

import fetcher from "@/lib/fetcher";
import Track from "./Track";

export default function TopTracks({ tracks }) {
  const { data } = useSWR("/api/top-tracks", fetcher);

  if (!data) {
    return null;
  }

  return (
    <div className="text-justify text-lg max-w-6xl mx-auto my-36">
      <h2 className="text-center text-5xl font-semibold">Top Tracks</h2>
      <p className="my-14">{tracks}</p>

      <div>
        {data.tracks.map((track, index) => (
          <Track ranking={index + 1} key={track.songUrl} {...track} />
        ))}
      </div>
    </div>
  );
}
