// To use your own photo: put it in /public as profile.jpg and change the src below to "./profile.jpg".
export default function Hero() {
  return (
    <header className="hero">
      <img className="avatar" src="./avatar.svg" alt="Portrait of Fawad" width="180" height="180" />
      <div>
        <h1>Hi, I'm Fawad</h1>
        <p className="tagline">Student developer and data analyst, building useful things for education.</p>
        <a className="btn" href="#contact">Get in touch</a>
      </div>
    </header>
  );
}
