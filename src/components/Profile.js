import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const Profile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [healthConditions, setHealthConditions] = useState("");
  const [medications, setMedications] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [dietaryPreferences, setDietaryPreferences] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      age,
      gender,
      healthConditions,
      medications,
      activityLevel,
      dietaryPreferences,
    });
    navigate("/");
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h1 className="profile-title">Profile Page</h1>
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="form-input"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Health Conditions:</label>
            <input
              type="text"
              value={healthConditions}
              onChange={(e) => setHealthConditions(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Medications:</label>
            <input
              type="text"
              value={medications}
              onChange={(e) => setMedications(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Activity Level:</label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="form-input"
            >
              <option value="">Select</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="form-group">
            <label>Dietary Preferences:</label>
            <input
              type="text"
              value={dietaryPreferences}
              onChange={(e) => setDietaryPreferences(e.target.value)}
              className="form-input"
            />
          </div>
          <button type="submit" className="btn-save">
            Save Profile
          </button>
        </form>
        <button className="btn-back" onClick={() => navigate("/")}>
          Back to Weather Forecast
        </button>
      </div>
    </div>
  );
};

export default Profile;


