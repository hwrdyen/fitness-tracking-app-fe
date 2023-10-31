import "./ExerciseList.scss";

// Components
import ExerciseBubble from "../ExerciseBubble/ExerciseBubble";

function ExerciseList(props) {
  return (
    <>
      <div className="ExerciseTypeList__container">
        {props.AllExerciseType.map((exercise) => (
          <ExerciseBubble SingleExerciseInfo={exercise} />
        ))}
      </div>
    </>
  );
}

export default ExerciseList;
