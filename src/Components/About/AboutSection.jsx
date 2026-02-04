import "./About.css";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-images">
          <img src="https://th.bing.com/th/id/OIP.FtWuQthx-GipD3R_CrDrqQHaE8?w=254&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3" alt="food" />
          <img src="https://th.bing.com/th/id/OIP.WEpg1wbfUn5OGyzH3O-f1gHaE8?w=264&h=185&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3" alt="burger" />
        </div>

        <div className="about-content">
          <h2>NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD BURGER</h2>
          <p>
            Fresh ingredients, handcrafted burgers and fast delivery.
          </p>

          <ul>
            <li>✔ Fresh quality food</li>
            <li>✔ Fast doorstep delivery</li>
            <li>✔ Affordable prices</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
