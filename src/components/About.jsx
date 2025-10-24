export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-[calc(100vh-65px)] scroll-mt-[65px] flex-col justify-center pt-0"
    >
      <p className="text-md pb-2 text-center lg:text-2xl">A little something</p>
      <div className="pb-7 text-center text-4xl lg:text-5xl">About Me</div>
      <p>
        I’m a senior full-stack engineer with
        <strong>10+ years at high-growth startups</strong>, thriving in
        fast-paced, remote-first environments. I’m at my best leading
        cross-functional projects from roadmap to release — scoping, and
        coordinating the work, keeping stakeholders aligned, and shipping
        quickly to drive measurable impact.
      </p>
      <p>
        I specialize in growth engineering, partnering with product, design, and
        data teams to <strong>build to learn</strong> — running rapid,
        data-driven experiments, balancing technical trade-offs with business
        goals, and iterating fast to discover what moves key metrics.
      </p>
      <p>
        Outside of that, I explore creative technology projects at the
        intersection of software, art, and storytelling. I enjoy working with
        generative-art languages like p5.js and Processing, and creating
        AI-powered interactive experiences that stretch my thinking about how
        software can engage and delight people.
      </p>
    </section>
  );
}
