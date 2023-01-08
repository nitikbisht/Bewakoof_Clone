import React from "react";
import styles from "./styles/Navbar.module.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { BsHeart, BsBagCheck } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_SIGN_OUT } from "../../Store/Auth/auth.types";

const Navabar = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    if (isAuthenticated) {
      dispatch({
        type: AUTH_SIGN_OUT,
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: "#eeeeee" }}>
        <div className={styles.upper}>
          <div className={styles.one}>
            <li>Offers</li>
            <li>Fanbook</li>
            <li>Download App</li>
            <li>TriBe Membership</li>
          </div>
          <div className={styles.two}>
            <li>Contact Us</li>
            <li>Track Order</li>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "white", borderBottom: "1px solid" }}>
        <div className={styles.bottom}>
          <div onClick={()=>navigate("/")}>
          <img
                  className={styles.logo}
                  src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
                  alt=""
                />
          </div>
          <div style={{display:"flex",gap:"20px",cursor:"pointer"}}>
            
            <h4 onClick={()=>navigate("/men-clothing")}>MEN</h4>
            <h4 onClick={()=>navigate("/women-section")}>WOMEN</h4>
            <h4>MOBILE COVER</h4>
          </div>
          <div>
            <input type="search" placeholder="Search" style={{width:"300px",height:"30px",borderRadius:"3px",border:"1px solid rgb(216, 216, 216)",padding:"5px",marginLeft:"200px",marginRight:"-5px"}}/>
          </div>
          <div style={{cursor:"pointer"}}>
            <h4 onClick={handleLoginClick}>{isAuthenticated ? "Logout" : "Login"}</h4>
          </div>
          <div style={{marginLeft:"-30px",cursor:"pointer"}}>
          <img src="https://cdn0.iconfinder.com/data/icons/gender-thinline-set/144/Love-512.png" width={"35px"}/>
          </div>
          <div style={{marginLeft:"-30px",cursor:"pointer"}} >
            <Link to={"/bag"}>
          <img src="https://th.bing.com/th/id/R.31822d029a7c7ab165498083fb555f81?rik=aytzJVKxZGWFRg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_98582.png&ehk=ZdzrfZIZtoxw2d6FbFfImZuDSeSblb1p1XfHxj0vdm8%3d&risl=&pid=ImgRaw&r=0" width={"25px"}/>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navabar;