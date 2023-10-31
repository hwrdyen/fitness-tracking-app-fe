import "./ExerciseTypePage.scss";

// Components
import ExerciseList from "../../components/ExerciseList/ExerciseList";

function ExerciseTypePage(props) {
  return (
    <>
      <div className="ExerciseTypePage__container">
        <ExerciseList AllExerciseType={props.AllExerciseType} />
      </div>
    </>
  );
}

export default ExerciseTypePage;
