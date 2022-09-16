import { Scroll } from "@react-three/drei"
import store from "../services/store"
import social from "../services/social"
import logo from "../assets/media/logo.jpg"


export default function Html() {
  return (
    <Scroll html>
       <div className='navbar'>
        <div className='navbar-container'>
        <div className='logo-container'>
            <img src={logo} alt=" " />
        </div>
        <div className='navbar-text'>
            <p className='name'>Aden Digital Promo</p>
        </div>
        </div>
        </div>
        <div className="hero">
         <h1 className="header">Creating Unique Solutio for unique people</h1>
        </div>
        <div className="main">
         <div className="main-container">
          <h1 className="heading">Accelerating Young Brands — to Success.</h1>
          <p className="sub-title">Young creative kids with instinct to invent and apply new knowledge and technologies in progress gaining invaluable expirience</p>
          <p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus </p>
         </div>
        </div>
        <div className="motion">
         <h1 className="heading">Transforming the Concept of Design in the Eyes of People</h1>
         <p className="sub-title">
          We prioritizes measurable results and has
          assisted businesses in developing
          sustainable growth to generate momentum
          that lasts for years</p>
         <div className="motion-break-design-limit-container">
         <h1 className="left-break">Break</h1>   
         <h1 className="middle-design">Design</h1>
        <h1 className="right-limits">Limit</h1>
         </div>        
        </div>
        <div className="demonstration">
         <h1 className="short-project-description">Every project we develope — is suistanble sulotion for impress peoples eyes and express emotions</h1>
         <h1 className="short-inspiration-description">We use the latest technology to create sophisticated applications with breathtaking design and great functionality <br /> <br /> We use the latest technology to create sophisticated applications with breathtaking design and great functionality</h1>
        </div>
        <div className="technology">
         <div className="technology-container">
            {store.map((store, index) => {
            return (
            <div className="technology-images" key={index}>
            <img src={store.first} alt=" "  />
            <img src={store.second} alt=" " />
            </div>
            )
            })}
         </div>
        </div>
        <div className='footer'>
        <h1 className="header">You can Contact Us Here</h1>
        <div className="contact-container">
        <div className="contact-form">
          <div className="contact-form-container">
          <div className="c-group-index">
          <div className="form-group">
            <div className="input">
            <h3>Your Name:</h3>
            <input type="text" id="Name" name="Name" class="fcf-form-control" placeholder="Your name" required />
            </div>
          </div>
          <div className="form-group">
            <div className="input">
            <h3>Email:</h3>
            <input type="email" id="Email" name="Email" class="fcf-form-control" placeholder="Email" required />
            </div>
          </div>
          </div>
          <div className="form-group">
            <div className="input">
            <h3>Project details:</h3>
            <textarea id="Message" name="Message" class="fcf-form-control" placeholder="Message" rows="6" maxlength="3000" required></textarea>
            </div>
          </div>
          </div>
          <div className="btn-container">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
         <defs>
             <filter id="gooey">
                
                 <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                 <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                 <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
            </filter>
         </defs>
         </svg>
          <button id="gooey-button">S*nd Message
          <span class="bubbles">
             <span class="bubble"></span>
             <span class="bubble"></span>
             <span class="bubble"></span>
             <span class="bubble"></span>
             <span class="bubble"></span>
             <span class="bubble"></span>
             <span class="bubble"></span>
             <span class="bubble"></span>
             <span class="bubble"></span>
             <span class="bubble"></span>
          </span>
          </button>
          </div>
        </div>
        <div className='social'>
          <div className='social-media-container'>
            {social.map((social, index) => {
            return (
            <div className="social-media-links" key={index}>
            <img src={social.img} alt=" " />
            <h3>{social.text}</h3>
            </div> )
            })}
          </div>
        </div>
        </div>
        {/* <div className="contact">
          <div className="contact-container">
            <h3>Email: contact@adenwrld.com</h3>
            <h3>Phone: +380 99 2346788</h3>
            <h3>Adress: Uzhghorod, Transcarpathian region, zip: 88000</h3>
          </div>
        </div> */}
        
        </div>
    </Scroll>
  )
}
