import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// JSON
import Exercise_Json from "./assets/jsons/exercise_type.json";

// Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ExerciseTypePage from "./pages/ExerciseTypePage/ExerciseTypePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AddWorkoutPlanPage from "./pages/AddWorkoutPlanPage/AddWorkoutPlanPage";

function App() {
  const [AllExerciseType, setAllExerciseType] = useState(Exercise_Json);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/profile"} element={<ProfilePage />} />
          <Route path={"/workoutplan"} element={<AddWorkoutPlanPage />} />

          <Route
            path={"/exercisetype"}
            element={<ExerciseTypePage AllExerciseType={AllExerciseType} />}
          />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
