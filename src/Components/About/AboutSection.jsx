import "./About.css";

function AboutSection() {
  return (
    <section className="about">
      <div className="container">
        <div className="images">
          <img src="https://th.bing.com/th/id/OIP.FtWuQthx-GipD3R_CrDrqQHaE8?w=254&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3" alt="food" />
          <img src="https://th.bing.com/th/id/OIP.WEpg1wbfUn5OGyzH3O-f1gHaE8?w=264&h=185&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3" alt="burger" />
        </div>

       <section className="area">
  <div className="con">
    <h2>
      NOTHING BRINGS PEOPLE TOGETHER <br />
      LIKE GREAT FOOD
    </h2>

    <p>
      At Foodie, we believe food is more than just a meal — it’s an experience.
      From the first bite to the last, we focus on flavor, freshness, and fast delivery.
    </p>

    <ul>
      <li>Freshly prepared meals using premium ingredients</li>
      <li>Fast & reliable delivery</li>
      <li>Wide variety of delicious dishes</li>
      <li>Hygienic cooking and safe packaging</li>
      <li>Easy ordering & secure payments</li>
    </ul>
  </div>
</section>
      </div>
    </section>
  );
}

export default AboutSection;
