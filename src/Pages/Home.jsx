import React from "react";
import Form from "./Form";
import { NavLink } from 'react-router-dom';
import "./Home.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <section className="showcase-area" id="showcase">
        <div className="showcase-container">
          <h1 className="main-title" id="home">
            Desi Flames
          </h1>
          <p>Eat Healty, it is good for our health.</p>
          <a href="#food-menu" className="btn btn-primary">
            Place Order
          </a>
        </div>
      </section>
      <section id="about">
        <div className="about-wrapper container">
          <div className="about-text">
            <p className="small">About Us</p>
            <h2>We've being making healthy food last for 10 years</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab
              eos omnis, nobis dignissimos perferendis et officia architecto,
              fugiat possimus eaque qui ullam excepturi suscipit aliquid optio,
              maiores praesentium soluta alias asperiores saepe commodi
              consequatur? Perferendis est placeat facere aspernatur!
            </p>
          </div>
          <div className="about-img">
            <img
              src="https://s.inyourpocket.com/gallery/helsinki/2019/11/shutterstock-1306257490.jpg"
              alt="food"
            />
          </div>
        </div>
      </section>
      <section id="food">
        <h2>Types of food</h2>
        <div className="food-container container">
          <div className="food-type fruite">
            <div className="img-container">
              <img
                src="https://img.taste.com.au/_8J0jkOc/w1200-h630-cfill/taste/2016/11/balti-mattar-paneer-78526-1.jpeg"
                alt="error"
              />
              <div className="img-content">
                <h3>Veg</h3>
                <a
                  href="https://en.wikipedia.org/wiki/Fruit"
                  className="btn btn-primary"
                  target="blank"
                >
                  <NavLink exact="true" to="/form">Order</NavLink>

                </a>
              </div>
            </div>
          </div>
          <div className="food-type grin">
            <div className="img-container">
              <img
                src="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/1/25/w900X450/Non_Veg.jpg"
                alt="error"
              />
              <div className="img-content">
                <h3>Non-Veg</h3>
                <a
                  href="https://en.wikipedia.org/wiki/Grain"
                  className="btn btn-primary"
                  target="blank"
                >
                  Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <h2 className="testimonial-title">What Our Customers Say</h2>
        <div className="testimonial-container container">
          <div className="testimonial-box">
            <div className="customer-detail">
              <div className="customer-photo">
                <img
                  src="https://i.postimg.cc/5Nrw360Y/male-photo1.jpg"
                  alt=""
                />
                <p className="customer-name">Ross Lee</p>
              </div>
            </div>
            <div className="star-rating">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              voluptas cupiditate aspernatur odit doloribus non.
            </p>
          </div>
          <div className="testimonial-box">
            <div className="customer-detail">
              <div className="customer-photo">
                <img
                  src="https://i.postimg.cc/sxd2xCD2/female-photo1.jpg"
                  alt=""
                />
                <p className="customer-name">Amelia Watson</p>
              </div>
            </div>
            <div className="star-rating">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              voluptas cupiditate aspernatur odit doloribus non.
            </p>
          </div>
          <div className="testimonial-box">
            <div className="customer-detail">
              <div className="customer-photo">
                <img
                  src="https://i.postimg.cc/fy90qvkV/male-photo3.jpg"
                  alt=""
                />
                <p className="customer-name">Ben Roy</p>
              </div>
            </div>
            <div className="star-rating">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
            </div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              voluptas cupiditate aspernatur odit doloribus non.
            </p>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="contact-container container">
          <div className="contact-img">
            <img src="https://i.postimg.cc/1XvYM67V/restraunt2.jpg" alt="" />
          </div>
          <div className="form-container">
            <h2>Contact Us</h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="E-Mail" />
            <textarea
              cols={30}
              rows={6}
              placeholder="Type Your Message"
              defaultValue={""}
            />
            <a href="#/" className="btn btn-primary">
              Submit
            </a>
          </div>
          ``
        </div>
      </section>
      <footer id="footer">
        <h2>Restraunt © all rights reserved</h2>
      </footer>
      {/* 
    .................../ JS Code for smooth scrolling /...................... */}
    </div>
  );
}

export default Home;
