import nervureVideo from "/assets/nervure.mp4";
import steadyNervesVideo from "/assets/steady-nerves.mp4";
import ripplingSpots from "/assets/rippling-spots.mp4";
import doubtVideo from "/assets/doubt.mp4";
import mandalaEffectVideo from "/assets/mandala-effect.mp4";
import noiseFlowerImg from "/assets/noise-flower.png";
import peterImg from "/assets/peter.png";
import insecurityImg from "/assets/insecurity.png";
import nervureGif from "/assets/originals/nervure.gif";
import steadyNervesGif from "/assets/originals/steady-nerves.gif";
import mandalaEffectGif from "/assets/originals/mandala-effect.gif";
import ripplingSpotsGif from "/assets/originals/rippling-spots.gif";
import doubtGif from "/assets/originals/doubt.gif";

export default function GenerativeArt({ onArtClick }) {
  return (
    <section id="generative-art" className="scroll-mt-[65px]">
      <p className="text-md pb-2 text-center">Browse my recent</p>
      <div className="pb-7 text-center text-4xl">Generative Art</div>
      <div className="pb-7 text-xl">
        Some of these works were inspired by tutorials from artists who have
        been important inpirations to me along my learning path as a generative
        artist.
      </div>
      <div className="pb-7 text-xl">
        In particular, "Steady Nerves" is a spinoff of a Patt Vira tutorial on
        Chladni patterns, and was commissioned by the band Chaos Fiction to
        promote the release of their new album. "Mandala Effect" is a spinoff of
        a tutorial released by The Dot Is Black. "Rippling Spots" is from a
        tutorial by Etienne Jacobs, and "Doubt" is inspired by a Patt Vira
        tutorial on using the OpenType library with p5.js.
      </div>
      <div className="pb-7 text-xl">
        Other works are purely original. I've learned the most from Dan Shiffman
        — both from his Coding Train videos and his
        <i>Nature of Code</i>
        book — and from Patt Vira's videos, and I'm so grateful for their
        generous teachings.
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Nervure */}
        <div
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white bg-black transition-transform duration-300 hover:scale-105"
          onClick={() => onArtClick("nervure")}
        >
          <div className="relative h-[300px] w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            >
              <source src={nervureVideo} type="video/mp4" />
              <img
                src={nervureGif}
                alt="Nervure generative art"
                loading="lazy"
                className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <div className="text-xl font-medium text-white">"Nervure"</div>
              <div className="mt-1 text-sm text-gray-300">
                Slime mold simulation
              </div>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <button className="bg-sand hover:bg-sand/90 rounded-lg px-6 py-2 font-medium text-black transition-colors">
                View Live
              </button>
            </div>
          </div>
        </div>
        {/* Steady Nerves */}
        <div
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white bg-black transition-transform duration-300 hover:scale-105"
          onClick={() => onArtClick("steady-nerves")}
        >
          <div className="relative h-[300px] w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            >
              <source src={steadyNervesVideo} type="video/mp4" />
              <img
                src={steadyNervesGif}
                alt="Steady Nerves generative art"
                loading="lazy"
                className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <div className="text-xl font-medium text-white">
                "Steady Nerves"
              </div>
              <div className="mt-1 text-sm text-gray-300">Chladni patterns</div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <button className="bg-sand hover:bg-sand/90 rounded-lg px-6 py-2 font-medium text-black transition-colors">
                View Live
              </button>
            </div>
          </div>
        </div>
        {/* Mandala Effect */}
        <div
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white bg-black transition-transform duration-300 hover:scale-105"
          onClick={() => onArtClick("mandala-effect")}
        >
          <div className="relative h-[300px] w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            >
              <source src={mandalaEffectVideo} type="video/mp4" />
              <img
                src={mandalaEffectGif}
                alt="Mandala Effect generative art"
                loading="lazy"
                className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <div className="text-xl font-medium text-white">
                "Mandala Effect"
              </div>
              <div className="mt-1 text-sm text-gray-300">Rotating mandala</div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <button className="bg-sand hover:bg-sand/90 rounded-lg px-6 py-2 font-medium text-black transition-colors">
                View Live
              </button>
            </div>
          </div>
        </div>
        {/* Noise Flower */}
        <div
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white bg-black transition-transform duration-300 hover:scale-105"
          onClick={() => onArtClick("noise-flower")}
        >
          <div className="relative h-[300px] w-full">
            <img
              src={noiseFlowerImg}
              alt="Noise Flower generative art"
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <div className="text-xl font-medium text-white">
                "Noise Flower"
              </div>
              <div className="mt-1 text-sm text-gray-300">
                Perlin noise pattern
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <button className="bg-sand hover:bg-sand/90 rounded-lg px-6 py-2 font-medium text-black transition-colors">
                View Live
              </button>
            </div>
          </div>
        </div>
        {/* Rippling Spots */}
        <div
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white bg-black transition-transform duration-300 hover:scale-105"
          onClick={() => onArtClick("rippling-spots")}
        >
          <div className="relative h-[300px] w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            >
              <source src={ripplingSpots} type="video/mp4" />
              <img
                src={ripplingSpotsGif}
                alt="Rippling Spots generative art"
                loading="lazy"
                className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <div className="text-xl font-medium text-white">
                "Rippling Spots"
              </div>
              <div className="mt-1 text-sm text-gray-300">
                Rippling animation
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <button className="bg-sand hover:bg-sand/90 rounded-lg px-6 py-2 font-medium text-black transition-colors">
                View Live
              </button>
            </div>
          </div>
        </div>
        {/* Peter */}
        <div
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white bg-black transition-transform duration-300 hover:scale-105"
          onClick={() => onArtClick("peter")}
        >
          <div className="relative h-[300px] w-full">
            <img
              src={peterImg}
              alt="Peter generative art"
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <div className="text-xl font-medium text-white">"Peter"</div>
              <div className="mt-1 text-sm text-gray-300">
                Triangular shapes
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <button className="bg-sand hover:bg-sand/90 rounded-lg px-6 py-2 font-medium text-black transition-colors">
                View Live
              </button>
            </div>
          </div>
        </div>
        {/* Insecurity */}
        <div
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white bg-black transition-transform duration-300 hover:scale-105"
          onClick={() => onArtClick("insecurity")}
        >
          <div className="relative h-[300px] w-full">
            <img
              src={insecurityImg}
              alt="Insecurity generative art"
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <div className="text-xl font-medium text-white">"Insecurity"</div>
              <div className="mt-1 text-sm text-gray-300">
                Overlapping circles
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <button className="bg-sand hover:bg-sand/90 rounded-lg px-6 py-2 font-medium text-black transition-colors">
                View Live
              </button>
            </div>
          </div>
        </div>
        {/* Doubt */}
        <div
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white bg-black transition-transform duration-300 hover:scale-105"
          onClick={() => onArtClick("doubt")}
        >
          <div className="relative h-[300px] w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            >
              <source src={doubtVideo} type="video/mp4" />
              <img
                src={doubtGif}
                alt="Doubt generative art"
                loading="lazy"
                className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <div className="text-xl font-medium text-white">"Doubt"</div>
              <div className="mt-1 text-sm text-gray-300">
                Typography animation
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <button className="bg-sand hover:bg-sand/90 rounded-lg px-6 py-2 font-medium text-black transition-colors">
                View Live
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
