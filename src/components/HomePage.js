import React, { useEffect, useState } from 'react';

const ApiData = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  

  useEffect(() => {
	  
    const menuToggle = document.getElementById('menu-toggle');
    const menuList = document.getElementById('menu-list');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuToggleMobile = document.querySelector('#menu-toggle');

    // Add event listener to toggle the desktop menu
    const handleMenuToggleClick = () => {
      menuList.classList.toggle('active');
    };

    menuToggle.addEventListener('click', handleMenuToggleClick);

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
      mobileMenu.classList.toggle('active');
    };

    // Add event listener to toggle the mobile menu
    menuToggleMobile.addEventListener('click', toggleMobileMenu);

    // This is the method to consume the endpoints but commented out due to CORS origin error
    
	/*fetch('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws', { mode: 'no-cors' })
	  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then((jsonData) => {
    // jsonData is the parsed JSON data
    console.log(jsonData);
    // You can now use the JSON data as needed
    // For example, if jsonData is an array, you can iterate through it
    for (const item of jsonData) {
      console.log(item);
    }
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });*/

    let jsonResponse = [
      {
        imageUrl:
          'https://d2vcaowhp5v7jq.cloudfront.net/olympian.jpeg',
        description:
          'The only athlete in the world to do her Olympic routine in 2020',
        title: 'The Olympian'
      },
      {
        imageUrl:
          'https://d2vcaowhp5v7jq.cloudfront.net/dragon.jpeg',
        description:
          'Grow your savings treasure and grow your dragon.',
        title: 'The Savings Jar'
      },
      {
        imageUrl:
          'https://d2vcaowhp5v7jq.cloudfront.net/skhokho.jpeg',
        description:
          'Helping South Africans become #CashCleva with Skhokho and TymeBank',
        title: 'Skhokho seMali'
      },
    ];
    setData(jsonResponse);
	return () => {
      menuToggle.removeEventListener('click', handleMenuToggleClick);
      menuToggleMobile.removeEventListener('click', toggleMobileMenu);
    };
  }, []);

  // Function to slide the content to the left
  const slideToLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // Automatically slide to the next one every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(slideToLeft, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [data]);

  // Function to update the slider with JSON data
  const updateSlider = () => {
    return data.map((item, index) => (
      <div
        key={index}
        className={`slide ${index === currentIndex ? 'active' : ''}`}
      >
        <img src={item.imageUrl} alt={item.title} />
        <div className="overlay-slide">
          <h2 className="slider-heading">{item.title}</h2>
          <p className="slider-paragraph">{item.description}</p>
        </div>
      </div>
    ));
  };

  return (
  
    <div className="container" id="root">
      {/* Start of the menu */}
      <nav className="menu">
        <div className="logo">
          <img src="assets/img/logo.png" alt="Logo" />
        </div>
        <div className="menu-toggle" id="menu-toggle">
          <img src="assets/img/menu-icon.png" height="20" width="25" alt="Menu Icon" />
        </div>
        <ul className="menu-list" id="menu-list">
          <li><a href="#">Services</a></li>
          <li><a href="#">Industries</a></li>
          <li><a href="#">Cases</a></li>
          <li><a href="#">Contact</a></li>
          {/* Add a button */}
          <li className="talk-button">
            <a href="#">
              <img src="assets/img/btn-primary.png" alt="Description of the image" />
            </a>
          </li>
        </ul>
      </nav>
      {/* End of the menu */}
      {/* Start of the Menu in mobile device */}
      <div className="mobile-menu" id="mobile-menu">
        <ul>
          <li><a href="#">Services</a></li>
          <li><a href="#">Industries</a></li>
          <li><a href="#">Cases</a></li>
          <li><a href="#">Contact</a></li>
          <li className="talk-button">
            <a href="#">
              <img src="assets/img/btn-primary.png" alt="Description of the image" />
            </a>
          </li>
        </ul>
      </div>
      {/* End of the Menu in the mobile device */}
      {/* Start of the Hero Image area */}
      <div className="hero-image">
        <img src="assets/img/hero-image.png" alt="Image" />
        <div className="hero-content overlay-hero">
          <h1>Live with Confidence</h1>
          <p>José Mourinho brings confidence to pan-African Sanlam campaign.</p>
          <input type="submit" className="btn-primary" value="View Project" />
        </div>
      </div>
      {/* End of the Hero Image area */}
      {/* Start of the Hero Image area */}
      <div className="inner-container">
        <div className="content-inner">
          {/* Start of what we do (about us) section */}
          <div className="section">
            <div className="row">
              <div className="col">
                <div className="custom-title">
                  <p>What we do</p>
                </div>
              </div>
            </div>
            <div className="content-row">
              <p className="content-text">We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</p>
            </div>
            <div className="row">
              <div className="about-card">
                <img src="assets/img/web_dev/icon.svg" alt="Local SVG Image" />
                <h2 className="col-heading">Web development</h2>
                <p className="col-paragraph new-line">We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.</p>
              </div>
              <div className="about-card">
                <img src="assets/img/UX/icon.svg" alt="Local SVG Image" />
                <h2 className="col-heading">User experience & design</h2>
                <p className="col-paragraph new-line">Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.</p>
              </div>
              <div className="about-card">
                <img src="assets/img/app_dev/icon.svg" alt="Local SVG Image" />
                <h2 className="col-heading">Mobile app development</h2>
                <p className="col-paragraph new-line">Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.</p>
              </div>
              <div className="about-card">
                <img src="assets/img/blockchain/icon.svg" alt="Local SVG Image" />
                <h2 className="col-heading">Blockchain solutions</h2>
                <p className="col-paragraph new-line">We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.</p>
              </div>
            </div>
          </div>
          {/* End of what we do (about us) section */}
          {/* Start of Case Studies section */}
          <div className="section">
            <div className="col">
              <div className="custom-title">
                <p>Case studies</p>
              </div>
            </div>
            <div className="slider-container">
			  <div className="slider">{updateSlider()}</div>
			</div>
          </div>
          {/* End of Case Studies section */}
          {/* Start of You'll be in good company section */}
          <div className="section">
            <div className="row">
              <div className="col">
                <div className="custom-title">
                  <p>You'll be in good company</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="content-text">Trusted by leading brands</label>
              </div>
            </div>
            <br />
            <div className="brand-card">
              <div className="row">
                <div className="brand-col"><img className="svg-image" src="assets/img/brands/visa-black.svg" alt="Image 1" /></div>
                <div className="brand-col"><img className="svg-image" src="assets/img/brands/tyme-bank-black.svg" alt="Image 2" /></div>
                <div className="brand-col"><img className="svg-image" src="assets/img/brands/distell-black1.svg" alt="Image 3" /></div>
                <div className="brand-col"><img className="svg-image" src="assets/img/brands/spotify-black1.svg" alt="Image 4" /></div>
                <div className="brand-col"><img className="svg-image" src="assets/img/brands/microsoft-black-1.svg" alt="Image 5" /></div>
              </div>
              <div className="row">
                <div className="brand-col"><img className="svg-image" src="assets/img/frames/engen-black-1.svg" alt="Image 2" /></div>
                <div className="brand-col"><img className="svg-image" src="assets/img/frames/Vector.svg" alt="Image 2" /></div>
                <div className="brand-col"><img className="svg-image" src="assets/img/frames/wesgrow-black-1.svg" alt="Image 3" /></div>
                <div className="brand-col"><img className="svg-image" src="assets/img/frames/multichoice-black-1.svg" alt="Image 4" /></div>
                <div className="brand-col"><img className="svg-image" src="assets/img/frames/pnp-black-1.svg" alt="Image 5" /></div>
              </div>
              <div className="row">
                <div className="brand-col"><img className="svg-image" src="assets/img/brands/liquid.svg" alt="Image 2" /></div>
                <div className="brand-col"><img className="svg-image" src="assets/img/brands/tfg-black-1.svg" alt="Image 2" /></div>
                <div className="brand-col"><img className="svg-image" src="assets/img/brands/sanlam-black-1.svg" alt="Image 3" /></div>
                <div className="brand-col"><img className="svg-image" src="assets/img/brands/santam-black-1.svg" alt="Image 4" /></div>
                <div className="brand-col"><img className="svg-image" src="assets/img/brands/bbc-black-1.svg" alt="Image 5" /></div>
              </div>
            </div>
          </div>
          {/* End of You'll be in good company section */}
        </div>
        {/* Start of Footer section */}
        <div className="section footer-section">
          <div className="row">
            <div className="col">
              <div className="custom-title ">
                <p className="text-color-white">Contact Us</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="content-text text-color-white">Have a project in mind? Let's make it happen</p>
            </div>
            <div className="col">
              <div className="contact-info">
                <p>22 Street Name, Suburb, 8000,</p>
                <p>Cape Town, South Africa</p>
                <p>+27 21 431 0001</p>
                <p><a className="text-color-white" href="mailto:enquiry@website.co.za">enquiry@website.co.za</a></p>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <div className="footer-links">
                <ul>
                  <li><a href="#">Terms of service</a></li>
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Impressum</a></li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-links">
                <ul>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Twitter</a></li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-links">
                <ul>
                  <li><a href="#">Github</a></li>
                  <li><a href="#">Linkedin</a></li>
                  <li><a href="#">Teams</a></li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-links">
                <ul>
                  <li><a href="#">Youtube</a></li>
                  <li><a href="#">Behance</a></li>
                  <li><a href="#">Dribbble</a></li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-links">
                <ul>
                  <li><a href="#">Explore open jobs</a></li>
                  <li><a href="#">©2000—2023 Company Name</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End of Footer section */}
      </div>
      {/* End of the Container class */}
    </div>
  );
}


export default ApiData;
