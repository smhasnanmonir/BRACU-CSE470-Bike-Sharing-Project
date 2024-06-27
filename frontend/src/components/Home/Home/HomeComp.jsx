/* eslint-disable @next/next/no-img-element */
import "./Home.css";
const HomeComp = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Ride with Paddle!</h1>
          <p>
            Explore the city with our easy, affordable, and super-fun bicycle
            rentals. Hop on and enjoy the ride!
          </p>
          <a href="#" className="btn">
            Get started
          </a>
        </div>
        <div className="hero-image">
          <img
            className="max-w-[650px]"
            src="https://i.ibb.co/Mpwyxjc/max-bender-YOk0-D5sz3e4-unsplash.jpg"
            alt="Riders enjoying bikes"
          />
        </div>
      </section>

      <div className=" py-[25px] text-center">
        <div className="header-text">
          <h2 className="text-3xl font-semibold">How it works?</h2>
          <p className="subtitle text-xl">It is so easy.</p>
        </div>
      </div>

      <section className="how-it-works pb-[45px]">
        <div className="container">
          <div className="steps">
            <div className="step grid place-items-center">
              <img
                className=""
                src="https://i.ibb.co/1zwR3C8/image.png"
                alt="Unlock image"
              />
              <h3>1. Unlock it</h3>
              <p>Pick out a bike and use the Paddle app to scan its QR code.</p>
            </div>
            <div className="step grid place-items-center">
              <img src="https://i.ibb.co/1zwR3C8/image.png" alt="Ride image" />
              <h3>2. Ride it</h3>
              <p>Hop on and start cruising through the city.</p>
            </div>
            <div className="step grid place-items-center">
              <img src="https://i.ibb.co/1zwR3C8/image.png" alt="Park image" />
              <h3>3. Park it</h3>
              <p>
                Find an open space at any Paddle docking station. When the
                lock-in light turns green, you are all set.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <h2 className="text-xl text-center">Plans & Pricing</h2>
        <div className="container">
          <div className="pricing-cards">
            <div className="pricing-card grid place-items-center">
              <h3>Single ride</h3>
              <img
                src="https://i.ibb.co/FKBJWCc/image.png"
                alt="Single ride image"
              />
              <p>
                <i className="fas fa-dollar-sign"></i> 100 taka
              </p>
              <p>
                <i className="fas fa-bicycle"></i> Go where your heart takes
                you. (And your legs.)
              </p>
            </div>
            <div className="pricing-card grid place-items-center">
              <h3>Day pass</h3>
              <img
                src="https://i.ibb.co/FKBJWCc/image.png"
                alt="Day pass image"
              />
              <p>
                <i className="fas fa-dollar-sign"></i> 1000 taka
              </p>
              <p>
                <i className="fas fa-bicycle"></i> 24 hours of unlimited 45-min
                rides on classNameic bikes.
              </p>
            </div>
            <div className="pricing-card grid place-items-center">
              <h3>Annual membership</h3>
              <img
                src="https://i.ibb.co/FKBJWCc/image.png"
                alt="Annual membership image"
              />
              <p>
                <i className="fas fa-dollar-sign"></i> 15000 taka
              </p>
              <p>
                <i className="fas fa-bicycle"></i> Unlimited 45-minute rides on
                classNameic bikes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeComp;
