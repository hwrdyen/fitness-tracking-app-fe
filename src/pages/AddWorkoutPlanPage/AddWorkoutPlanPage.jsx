import "./AddWorkoutPlanPage.scss";
import { useNavigate } from "react-router-dom";

// Icon
import LeftArrow_Icon from "../../assets/icons/arrow_back-24px.svg";

// JSON
import Exercise_Type from "../../assets/jsons/exercise_type.json";

function AddWorkoutPlanPage() {
  const navigate = useNavigate();

  return (
    <>
      <form className="AddWorkoutPlanPage__container">
        <div className="AddWorkoutPlanPage__title--container">
          <img
            src={LeftArrow_Icon}
            alt="Left Arrow Icon"
            onClick={() => navigate("/")}
          />
          <div className="AddWorkoutPlanPage__title">Create Workout Plan</div>
        </div>
        <div className="AddWorkoutPlanPage__totalinputcontainer">
          <div className="AddWorkoutPlanPage__input--container">
            <div className="AddWorkoutPlanPage__input--subcontainer">
              <label className="AddWorkoutPlanPage__input--label">
                Exercise Type
              </label>
              <select className="AddWorkoutPlanPage__input--input">
                {Exercise_Type.map((exercise) => (
                  <option>{exercise?.name}</option>
                ))}
              </select>
            </div>
            <div className="AddWorkoutPlanPage__input--subcontainer">
              <label className="AddWorkoutPlanPage__input--label">
                Set Number
              </label>
              <input className="AddWorkoutPlanPage__input--input" type="text" />
            </div>
            <div className="AddWorkoutPlanPage__input--subcontainer">
              <label className="AddWorkoutPlanPage__input--label">
                Reps Number
              </label>
              <input className="AddWorkoutPlanPage__input--input" type="text" />
            </div>
            <div className="AddWorkoutPlanPage__input--buttoncontainer">
              <button className="AddWorkoutPlanPage__input--cancelbutton">
                Cancel
              </button>
              <button className="AddWorkoutPlanPage__input--addbutton">
                + Add Exercise
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddWorkoutPlanPage;
