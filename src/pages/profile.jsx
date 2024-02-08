import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./profile.css";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <h2>USER PROFILE-</h2>
      </div>
      <div className="profile-info">
        <h3>Name-</h3>
        <h3>DOB-</h3>
        <h3>Adress-</h3>
        <h3>Contact-</h3>
        <h3>Enter Email-</h3>
        <h3>Phone no.-</h3>
      </div>
      <div className="profile-buttons">
        <button>Submit</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export { ProfilePage };
