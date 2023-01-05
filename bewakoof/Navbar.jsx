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
            <h4 onClick={() => navigate("/categories")}>LIVE NOW!</h4>
          </div>
          <div>
            <h4 onClick={() => navigate("/categories")}>Men</h4>
          </div>
          <div>
            <h4 onClick={() => navigate("/categories/Women")}>Women</h4>
          </div>
          <div>
            <h4 onClick={() => navigate("/categories/accessories")}>Accessories</h4>
          </div>
          <div>
            <h4 onClick={() => navigate("/categories")}>WINTERWEAR</h4>
          </div>
        </div>
        <div className={styles.Nonee}></div>
      </div>
    </div>
  );
};

export default Navabar;
