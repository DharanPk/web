import "./About.css";

function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-box">
        <i className="fa-solid fa-burger feature-icon"></i>
        <h4>ORIGINAL</h4>
        <p>Authentic recipes & taste.</p>
      </div>

      <div className="feature-box">
        <i className="fa-solid fa-bowl-food feature-icon"></i>
        <h4>QUALITY FOODS</h4>
        <p>Fresh and premium ingredients.</p>
      </div>

      <div className="feature-box">
        <i className="fa-solid fa-truck feature-icon"></i>
        <h4>FAST DELIVERY</h4>
        <p>Hot food at your doorstep.</p>
      </div>
    </section>
  );
}

export default FeatureSection;
