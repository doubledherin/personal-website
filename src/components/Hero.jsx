export default function Hero() {
  return (
    <div
      id="text-overlay"
      className="absolute top-2/3 left-1/2 w-[calc(100%-40px)] -translate-x-1/2 -translate-y-2/3 transform py-4 lg:left-1/2 lg:w-fit lg:translate-x-0 lg:text-left"
    >
      <div
        id="name-overlay"
        className="font-didot w-fit rounded-2xl px-2 pt-2 pb-3 text-5xl font-extralight tracking-wide md:text-7xl"
      >
        Wendy Dherin
      </div>
      <div className="flex flex-col text-2xl font-extralight md:text-4xl">
        <div
          id="dev-overlay"
          className="w-fit rounded-2xl px-2 py-1 text-white"
        >
          full-stack developer.
        </div>
        <div
          id="generative-artist-overlay"
          className="w-fit rounded-2xl px-2 py-1 text-white"
        >
          generative artist.
        </div>
      </div>
    </div>
  );
}
