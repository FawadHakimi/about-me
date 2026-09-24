const skills = ["HTML & CSS", "JavaScript", "React", "Python & Django", "Power BI", "Data analytics", "Teamwork", "Entrepreneurship"];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="chips">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
