export default function AboutComponent({ me }) {
  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse max-w-6xl mx-auto items-center gap-20 mt-14">
        <div className="flex-2 text-justify text-lg ">
          <p>{me}</p>
          <br />
        </div>

        <div className="flex-1">
          <div className="w-52 h-52 rounded-full">
            <img src="avatar.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
