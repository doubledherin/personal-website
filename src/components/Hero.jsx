import { useEffect } from "react";

export default function Hero({ p5Loaded }) {
  useEffect(() => {
    if (!p5Loaded) return;

    const steadyNervesScript = document.createElement("script");
    steadyNervesScript.src =
      "/javascript/sketches/steady-nerves/steady-nerves.js";
    document.body.appendChild(steadyNervesScript);

    const sandGrainScript = document.createElement("script");
    sandGrainScript.src = "/javascript/sketches/steady-nerves/sand-grain.js";
    document.body.appendChild(sandGrainScript);

    return () => {
      const steadyScript = document.querySelector(
        'script[src="/javascript/sketches/steady-nerves/steady-nerves.js"]',
      );
      const sandScript = document.querySelector(
        'script[src="/javascript/sketches/steady-nerves/sand-grain.js"]',
      );

      if (steadyScript && document.body.contains(steadyScript)) {
        document.body.removeChild(steadyScript);
      }
      if (sandScript && document.body.contains(sandScript)) {
        document.body.removeChild(sandScript);
      }
    };
  }, [p5Loaded]);

  return (
    <section
      id="home"
      className="border-sand relative min-h-[calc(100vh-65px)] border-b"
    >
      <div id="sketch-container"></div>
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
    </section>
  );
}
