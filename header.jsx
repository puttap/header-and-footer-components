import React,{Component} from 'react';
import './header.css'; 

class Header extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      navItems: [
        { id: 1, name: 'Allcourses', link: '/' },
        { id: 2, name: 'Placement', link: '/Placement' },
        { id: 3, name: 'Internship', link: '/Internship' },
        { id: 4, name: 'Existing Students', link: '/students' },
        { id: 5, name: 'Aboutus', link: '/Aboutus' },
        { id: 6, name: 'Review', link: '/review' },
        { id: 7, name: 'Blog', link: '/blog' }
      ]
    };
  }
  render() {
    return (
      <header>
        <div><img src="https://www.achieversit.com/assets/images/logo-white.png" alt="logo"/></div>
        <nav className="nav-list">
          <ul>
            {this.state.navItems.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
