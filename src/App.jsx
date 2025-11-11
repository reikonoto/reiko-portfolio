import "./styles.css";

const projects = [
  {
    title: "Reiko’s Violin Show",
    tech: ["React", "Hooks", "State"],
    description:
      "Audience-based UI with timed updates using React Hooks. Input size → dynamic message, emoji, and background.",
    demoUrl: "https://YOUR-VIOLIN-APP-URL", // 後で差し替え
    codeUrl: "https://github.com/YOUR_GH/violin-app", // 後で差し替え
  },
];

export default function App() {
  return (
    <main className="container">
      {/* HERO */}
      <section className="hero">
        <h1>Reiko — Front-End Developer</h1>
        <p>
          React / JavaScript / UI with vibes. Based in Japan, shipping to the
          world.
        </p>
        <a className="btn" href="#projects">
          View Projects
        </a>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="tags">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="actions">
                <a
                  className="link"
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  className="link"
                  href={p.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>About</h2>
        <p>
          Hi, I’m Reiko — a front-end developer who loves clean UX, neon
          aesthetics, and turning ideas into products. Currently learning React
          deeply and building fun + practical apps.
        </p>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Contact</h2>
        <p>
          DM me on{" "}
          <a
            className="link"
            href="https://github.com/YOUR_GH"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          or email: <span className="mono">you@example.com</span>
        </p>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Reiko</footer>
    </main>
  );
}
