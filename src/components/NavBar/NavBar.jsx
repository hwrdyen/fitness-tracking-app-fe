import "./NavBar.scss";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="NavBar__container">
        <NavLink to={"/"} className="NavBar__link">
          <div className="NavBar__title">FitnessTrack</div>
        </NavLink>

        <div className="NavBar__nav--container">
          <NavLink to={"/profile"} className="NavBar__link">
            <div className="NavBar__nav--title">Profile</div>
          </NavLink>
          <NavLink to={"/workoutplan"} className="NavBar__link">
            <div className="NavBar__nav--title">Workout Plan</div>
          </NavLink>
          <NavLink to={"/exercisetype"} className="NavBar__link">
            <div className="NavBar__nav--title">Exercise Type</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
