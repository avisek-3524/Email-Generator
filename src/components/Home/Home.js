import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="container mx-auto">
        <div className="hero">
          <h1>A simple Email Generator that works Amazing!</h1>
          <button>TRY IT NOW!</button>
        </div>
      </section>
      <section className="feature">
        <div className="card-grid container mx-auto">
          {Cards.map((c) => (
            <div className="card" key={c.title}>
              <h1>{c.title}</h1>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="container mx-auto" style={{display: 'flex',justifyContent: 'flex-end',textAlign: 'right'}}>
          <div className="hero">
            <h1>Are you Still not convinced? Allow Us for a Live Demo!</h1>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

let Cards = [
  {
    title: "Affordable",
    p:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in tellus. Eget gravida cum sociis natoque penatibus et. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Penatibus et magnis dis parturient montes nascetur. Elementum eu facilisis sed odio morbi quis commodo.",
  },
  {
    title: "Optimised",
    p:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in tellus. Eget gravida cum sociis natoque penatibus et. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Penatibus et magnis dis parturient montes nascetur. Elementum eu facilisis sed odio morbi quis commodo.",
  },
  {
    title: "Scalable",
    p:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in tellus. Eget gravida cum sociis natoque penatibus et. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Penatibus et magnis dis parturient montes nascetur. Elementum eu facilisis sed odio morbi quis commodo.",
  },
];
