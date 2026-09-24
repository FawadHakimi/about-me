const projects = [
  { name: "Restaurant Ordering System", text: "A Django app where guests order from a table and staff manage the orders." },
  { name: "Uber Ride Bookings Dashboard", text: "A Power BI dashboard that explores ride bookings in the NCR region." },
  { name: "Malta.af", text: "My edtech venture idea to make learning easier to reach in Afghanistan." },
  { name: "Async JavaScript Lab", text: "A vanilla JS project about closures, promises and the event loop." },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <article className="card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
