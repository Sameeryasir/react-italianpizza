import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';

function App() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isDarkMode, setDarkMode] = useState(false);
    const [products, setProducts] = useState([]);
    const menuRef = useRef(null);
    const navbarRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://gold-uninterested-calf.cyclic.app/products');
            const jsonData = await response.json();
            setProducts(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    
    

    const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        setMenuOpen(false);
    };

  return (
    <div>
      <header>
      <a href="#" class="logo">
          <img src="./images/pizza-1-01-removebg-preview.png" />
      </a>
          <ul className="navbar">
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#categories">Categoires</a></li>
              <li><a href="#history">Our History</a></li>
              <li><a href="#menu">Popular Items</a></li>
              <li><a href="#testimonial">Testimonial</a></li>
              <li><a href="#contact">Contact Us</a></li>
          </ul>
          <div class="header-icons">
              <a href="#"><i className='bx bx-search'></i></a>
              <a href="#"><i className='bx bx-bell' ></i></a>
              <a href="#"><i className='bx bx-cart' ></i></a>
              <div className="bx bx-menu" id="menu-icon"></div>
          </div>
      </header>
      <section className="home" id="home" >
          <div className="home-text">
              <h1>Order Your <br /> Favourite Meal.</h1>
              <p>we promise you will enjoy every sweet moment to find your favourite.Eat
                  what you love and save your time.
              </p>
              <div className="home-btnn">
                  <a href="#" className="btn">Place an order</a>
                  <a href="#" className="btn2"><span><span className="iconify" data-icon="material-symbols:play-arrow-outline-rounded"></span></span>Watch videos</a>

              </div>
          </div>
          <div className="home-img">
              <img src="./images/5526266-removebg-preview.png" alt="" />
          </div>
      </section>
      
      <section className="categories"id="categories">
          <div className="center-text">
              <strong>Categoires</strong>
              <h2>Our Categories Menu</h2>
          </div>
          <div className="categories-content">
              <div className="box">
                  <div className="box-img">
                      <img src="./images/fries.png" />            
                  </div>
                  <h3>Food Items</h3>
                  <p>Looking for a delicious and satisfying snack? 
                      Try our crispy, golden French fries! Made with fresh potatoes and fried to perfection.
                  </p>
              </div>

              <div className="box">
                  <div className="box-img">
                      <img src="./images/burger.png" style={{width: "250px", height: "200px"}}/>               
                  </div>
                  <h3>Food  Items</h3>
                  <p> Craving a mouthwatering burger that's juicy, flavorful, and satisfying? Look no further than our 
                      signature burgers! Made with high-quality beef.</p>
              </div>

            <div className="box">
                  <div className="box-img">
                      <img src="./images/coca.png"  />               
                  </div>
                  <h3>Drink Items</h3>
                  <p>
                      Coca-Cola, or Coke for short, is a carbonated soft drink that has been enjoyed by people all over
                        the world for over a century. </p>
              </div>
          </div>
      </section>
      
      <section className="history" id="history">
          <div className="history-img">
              <img src="./images/history.png" />
          </div>

          <div className="history-text">
              <strong>Our history</strong>
              <h2>Discover our glory begining</h2>
              <p>We promis you"ll enjoy every sweet moment to find your,
              favourite eat what you love and save your time</p>

              <a href="#" className="btn">Learn More</a>
          </div>
      </section>

      <section className="menu" id="menu">
          <div className="center-text">
              <strong>Our Popular Menu</strong>
              <h2>Some Popular itmes</h2>
          </div>
          <div className="menu-content">
          {products && products.map((product) => {
            return (
                <div className="row">
                  <div className="row-img">
                      <img src={"./images/"+ product.image} />
                  </div>
                      <h5>{product.name}</h5>
                      <h6>{product.price}$</h6>
                    <div class="ratings">
                      <a href="#"><span className="iconify" data-icon="ic:baseline-star-rate"></span></a>
                      <a href="#"><span className="iconify" data-icon="ic:baseline-star-rate"></span></a>
                      <a href="#"><span className="iconify" data-icon="ic:baseline-star-rate"></span></a>
                      <a href="#"><span className="iconify" data-icon="ic:baseline-star-rate"></span></a>
                      <a href="#"><span className="iconify" data-icon="ic:baseline-star-rate"></span></a>
                    </div>
                </div>
            )
          })}
        </div>
                      
        <div className="menu-btnn">
          <a href="#" className="btn">More Item</a>

        </div>
      </section>
        
      <section className="testimonial" id="testimonial">
          <div className="testimonial-left">
              <strong>Testimonial</strong>
              <h2>What People Say <br/>About Us</h2>
          </div>
          <div className="testimonial-righ">
              <div className="testimonial-img">
                  <img src="./images/man-testimonial-logo-icon-design-can-be-used-as-complement-to-128470040-removebg-preview.png" />
              </div>
              <h4>Ali</h4>
              <h5>Islamabad,Pakistan</h5>
              <p>"The taste was excellent the service was good,very fast
                  response.The food was delicious ,thank you so much."</p>
          </div>
      </section>
          
      <section className="newsletter">
      <div className="center-text">
          <h2>Subscribe newsletter</h2>

      </div>
      <form action="">
          <input type="email"  name =""placeholder="Enter your email" className="email"
          required />
          <input type="submit" value="Subscribe" className="btn" />
      </form>

      </section>
      
      <section className="contact" id="contact">
          <div className="contact-box footer-social">
              <a href="" class="logo footer">
                  <img src="./images/pizza-1-01-removebg-preview.png" alt=""/>
              </a>
              <div className="icons">
                  <a href="https://www.facebook.com/people/Italian-Pizza/100092538245440/?mibextid=ZbW"><i class='bx bxl-facebook-circle'></i></a>
                  <a href="https://www.instagram.com/"><i className='bx bxl-instagram-alt' ></i></a>
                  <a href="https://twitter.com/home?lang=en"><i className='bx bxl-twitter' ></i></a>
                  <a href="https://www.youtube.com/"><i className='bx bxl-youtube' ></i></a>
              </div>
          </div>
          <div className="contact-box">
              <h3>Support</h3>
              <li><a href="#">Home</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Contact</a></li>
          </div>
          <div className="contact-box">
              <h3>Links</h3>
              <li><a href="#">Home</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Contact</a></li>
          </div>
          <div className="contact-box">
              <h3>Our Menu</h3>
              <li><a href="#">Home</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Contact</a></li>
          </div>
      </section>
      <div className="copyright">
          <p>Created by SameerYasir,ZainulEmaan,OwaisAhmed,FarazHabib
          </p>
      </div>
  </div>
  );
}
export default App;
