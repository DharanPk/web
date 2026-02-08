import "./Home.css";

function Home() {
  return (
    <>
      <div className="main">
        <div className="sub">
          <h1>GREAT DEAL</h1>
          <h3>WITH 50% OFFER</h3>
          <p>
            Fresh patties , Melted Cream , Crispy Chicken and Special Desserts.
          </p>
          <button>ORDER NOW</button>
        </div>
      </div>
      <div className="features-section">
        <div className="features-container">

          <div className="feature-box">
            <span> <i class="fa-solid fa-pizza-slice"></i></span>
            <h4>ORIGINAL</h4>
            <p>Authentic taste with fresh ingredients.</p>
          </div>

          <div className="feature-box">
            <span>
          <i class="fa-solid fa-bowl-food"></i>
          </span>
            <h4>QUALITY FOODS</h4>
            <p>We serve premium quality food always.</p>
          </div>

          <div className="feature-box">
            <span>
           <i class="fa-solid fa-truck"></i></span>
            <h4>FAST DELIVERY</h4>
            <p>Hot food delivered at your doorstep.</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
