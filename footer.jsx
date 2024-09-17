import React,{Component} from 'react';
import './footer.css';



class Footer extends Component { 
  constructor(props) {
    super(props);    
    this.state = {
      footerSections: 
        [
          {
            id:1,
            title: 'companyLinks',
            links: [
              { name: 'Home', url: '/home' },
              { name: 'Placements', url: '/placements' },
              { name: 'corporate Training', url: '/corporate' },
              { name: 'Contact Us', url: '/contact' }
            ]
          },
          {
            id:2,
            title: 'trendingCourses',
            links: [
              { name: 'UI Development Course', url: '/developmnet' },
              { name: 'Angular Js course', url: '/angular' },
              { name: 'react js course', url: '/reactjs' },
              { name: 'digital Marketing Course', url: '/digital marketing' },
              { name: 'Pyhon Course', url: '/python' }
            ]
          }          
      ]
    };
  }
render(){

  return (
    <footer className="footer">
      <div className="footer-container">      
       
        <div className="footer-section">
          <div className="footer-logo">
            <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="Logo" />
            <p>
              AchieversIT – Provides a wide group of opportunities for freshers and experienced candidates 
              who can develop their skills and build their career opportunities across multiple companies.
            </p>
          </div>
        </div>

       
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            {this.state.footerSections[0].links.map((link, index) => (
              <li key={index}>
                <a href="#">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="footer-section">
          <h4>TRENDING COURSES</h4>
          <ul>
            {this.state.footerSections[1].links.map((course, index) => (
              <li key={index}>
                <a href="#">{course.name}</a>
              </li>
            ))}
          </ul>
        </div>       
        <div className="footer-section">
          <h4>CONTACT INFO</h4>
          <p>#63, 1st Floor, 16th Main, 8th Cross, BTM 1st Stage, Bangalore, India - 560029</p>
          <p>India: +91 8431-040-457</p>
          <p>Email: info@achieversit.com</p>
        </div>        
      </div>      
      <div className="footer-bottom">
        <div>
          <p>Copyright © 2024 putta pavani. All Rights Reserved</p>
        </div>
        <div>
          <p>Privacy Policy | Terms of Use | Refund Policy</p>
        </div>
      </div>
    </footer>
  );
}
}
export default Footer;




