import "./ExerciseBubble.scss";
import { NavLink } from "react-router-dom";

function ExerciseBubble(props) {
  return (
    <>
      <div className="ExerciseBubble__container">
        <NavLink
          to={props.SingleExerciseInfo?.video}
          className="ExerciseBubble__link"
        >
          <div className="ExerciseBubble__info--container">
            <div className="ExerciseBubble__info--icon"></div>
            <div className="ExerciseBubble__info--title">
              {props.SingleExerciseInfo?.name}
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default ExerciseBubble;
