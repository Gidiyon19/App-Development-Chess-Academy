import './Homepage.css'; // Make sure to replace 'YourComponent' with the actual name of your React component
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
// Create a functional component
const Homepage = () => {
  return (
    <div>
      <Nav/>
      
      <div className="imgbg">
        <div className="overlay"></div>
      </div>
      <div className="center">
        <div className="title">"Checkmate Your Potential at Our Knights Quests!"</div>
        <div className="sub_title">Choose Your Role !</div>
        <div className="btns">
         <Link to="/SignInPage"> <button>ADMIN</button></Link>
        <Link to="/SignUpPage"><button>USER</button></Link> 
        </div>
      </div>
      <div className="down">
        <div className="ev">
          <h2>You May Love These Too</h2>
        </div>
        <div className="dw">
          <h2>Experience</h2>
          <p>Discover a world of unique experiences.</p>
        </div>
        <div className="dw">
          <h2>Thorough Planning</h2>
          <p>Begin by defining the purpose and theme of the party.
Create a detailed checklist outlining tasks, timelines, and responsibilities.</p>
        </div>
        <div className="dw">
          <h2>Guest Experience</h2>
          <p>Prioritize guest comfort and enjoyment.
Consider personalized touches, such as welcome gifts or interactive elements.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Homepage;