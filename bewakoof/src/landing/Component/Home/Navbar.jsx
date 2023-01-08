import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles/Nav.module.css";

const Navabar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.Nonee}></div>
        <div className={styles.Nav}>
        <div>
            <h4 >LIVE NOW!</h4>
          </div>
          <div>
            <h4 onClick={() => navigate("/men-section")}>Men</h4>
          </div>
          <div>
            <h4 onClick={() => navigate("/women-section")}>Women</h4>
          </div>
          <div>
            <h4 >Accessories</h4>
          </div>
        </div>
        <div className={styles.Nonee}></div>
      </div>

      
    </div>
  );
};

export default Navabar;