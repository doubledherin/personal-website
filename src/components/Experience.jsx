export default function Experience() {
  return (
    <section id="dev-experience" className="scroll-mt-[65px] px-10">
      <p className="text-md pb-2 text-center lg:text-2xl">Check out my</p>
      <div className="pb-7 text-center text-4xl lg:text-5xl">
        Dev Experience
      </div>
      <div className="mb-6 flex justify-center">
        <a href="./assets/wendydherin.pdf" download="wendy_dherin_resume.pdf">
          <button className="bg-sand hover:text-sand hov mr-10 w-[160px] cursor-pointer rounded-full px-6 py-1 text-black hover:border hover:bg-black">
            Resume
          </button>
        </a>
        <a href="https://www.linkedin.com/in/wendydherin/" target="_blank">
          <button className="border-sand hover:bg-sand w-[160px] cursor-pointer rounded-full border px-6 py-1 hover:text-black">
            LinkedIn
          </button>
        </a>
      </div>
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <p>
          I’m a full-stack engineer with more than a decade of experience
          building and scaling product-led platforms at high-growth startups. I
          do my best work in fast-moving, remote-first environments where
          engineers collaborate closely with product, design, and leadership to
          ship meaningful improvements and learn from real user behavior.
        </p>

        <p>
          Much of my work sits at the intersection of engineering, product, and
          growth. I enjoy leading cross-functional initiatives from early
          shaping through launch — figuring out the right technical approach,
          keeping stakeholders aligned, and helping teams deliver thoughtful,
          well-tested features that move important product and business metrics.
        </p>

        <p>
          In recent roles, I’ve helped modernize application architecture,
          expand products from closed platforms to public-facing ecosystems, and
          build internal systems that make experimentation and iteration easier
          for teams.
        </p>

        <p>
          I like thinking strategically about how systems should evolve over
          time, while staying pragmatic about the tradeoffs needed to ship and
          keep momentum. My goal is always to help teams move the product
          forward while maintaining a codebase that’s healthy and maintainable.
        </p>

        <p>
          I’m especially energized by collaborative teams and human-centered
          leadership. I care about creating environments where engineers can do
          their best work — mentoring newer developers, encouraging thoughtful
          technical discussion, and building a culture of clarity, trust, and
          shared ownership. Ultimately, I want to help teams build products that
          users love and systems that engineers genuinely enjoy working in.
        </p>
      </div>
    </section>
  );
}
