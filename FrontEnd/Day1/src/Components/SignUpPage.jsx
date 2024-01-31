import { GiChessKing } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import './SignUpPage.css';
import Nav from "./Nav";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    alert("Registration Successful!");
  }

  return (
    <div className="signup-page">
      <Nav />
      <div className="ok">
        <div className='wrappe'>
          <form onSubmit={handleSubmit}>
            <h1>Hey New Broskii!!</h1>
            <br></br>
            {/* <label htmlFor="Role">Choose a Role:</label> */}
            {/* <select name="Role" id="Role">
              <option value="Admin">Admin</option>
              <option value="Competitor">Competitor</option>
            </select> */}
            <div className='input-boxi'>
              <GiChessKing className="icon" />
              <input type='text' placeholder='FirstName' required />
            </div>
            <div className='input-boxi'>
              <IoIosMail className="icon" />
              <input type='text' placeholder='Email Id' required />
            </div>
            <div className='input-boxi'>
              <MdOutlinePassword className="icon" />
              <input type='password' placeholder='Password' required />
            </div>
            <div className='input-boxi'>
              <MdOutlinePassword className="icon" />
              <input type='password' placeholder='Confirm-Password' required />
            </div>
            <button type='submi'><Link to='/SignIn'>SignIn</Link></button>
            <div className='register-link'></div>
            <br></br>
            <p>Already have an account?<Link to='/SignIn'>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
