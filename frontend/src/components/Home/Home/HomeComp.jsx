import { useContext } from "react";
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

      <div className=" py-[25px]">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">How it works?</h2>
          <p className="subtitle text-xl">It is so easy.</p>
        </div>
      </div>

      <section className="how-it-works pb-[45px]">
        <div className="px-[5%]">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px] justify-center place-content-center">
            <div className="text-left">
              <img
                className="object-cover rounded-md h-[250px] w-full"
                src="https://i.ibb.co/5K6sMn4/pexels-mikebirdy-114675.jpg"
                alt="Unlock image"
              />
              <h3 className="py-[15px] text-2xl font-semibold">Unlock it</h3>
              <p>Pick out a bike and use the Paddle app to scan its QR code.</p>
            </div>
            <div className="text-left">
              <img
                className="object-cover rounded-md h-[250px] w-full object-top"
                src="https://i.ibb.co/zHLs7NM/pexels-pixabay-163491.jpg"
                alt="Ride image"
              />
              <h3 className="py-[15px] text-2xl font-semibold">Ride it</h3>
              <p>Hop on and start cruising through the city.</p>
            </div>
            <div className="text-left">
              <img
                className="object-cover rounded-md h-[250px] w-full"
                src="https://i.ibb.co/mDV3vRx/pexels-pixabay-276517.jpg"
                alt="Park image"
              />
              <h3 className="py-[15px] text-2xl font-semibold">Park it</h3>
              <p>When the lock-in light turns green, you are all set.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <h2 className="text-xl text-center">Plans & Pricing</h2>
        <div className="px-[5%]">
          <div className="pricing-cards">
            <div className="bg-white p-[20px] rounded-md grid place-items-center">
              <h3 className="text-xl font-semibold pb-[15px]">Single ride</h3>
              <img
                className="object cover w-full h-[250px] rounded-md"
                src="https://i.ibb.co/72CT3b3/pexels-pixabay-163407-1.jpg"
                alt="Single ride image"
              />
              <div className="text-left py-[10px]">
                <p className="text-xl font-semibold">100 taka</p>
                <p>Go where your heart takes you. (And your legs.)</p>
              </div>
            </div>
            <div className="bg-white p-[20px] rounded-md grid place-items-center">
              <h3 className="text-xl font-semibold pb-[15px]">Day pass</h3>
              <img
                className="object cover w-full h-[250px] rounded-md"
                src="https://i.ibb.co/bj03LP0/pexels-pavel-danilyuk-5807684.jpg"
                alt="Single ride image"
              />
              <div className="text-left py-[10px]">
                <p className="text-xl font-semibold">200 taka</p>
                <p>24 hours of unlimited 45-min rides on our bikes.</p>
              </div>
            </div>
            <div className="bg-white p-[20px] rounded-md grid">
              <h3 className="text-xl font-semibold pb-[15px]">Yearly pass</h3>
              <img
                className="object cover w-full h-[250px] rounded-md"
                src="https://i.ibb.co/4f3yWKX/pexels-rachel-claire-4997809.jpg"
                alt="Single ride image"
              />
              <div className="text-left py-[10px]">
                <p className="text-xl font-semibold">10,000 taka</p>
                <p>Unlimited 45-minute rides on our all kind of bikes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeComp;
