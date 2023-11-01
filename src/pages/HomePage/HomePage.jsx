import "./HomePage.scss";
import { useNavigate } from "react-router-dom";

// Logos
import Cover_Image from "../../assets/logo/cover-img.png";
import Ad_one from "../../assets/logo/homepage-ad-1.jpg";
import Ad_twp from "../../assets/logo/homepage-ad-2.jpg";
import Ad_three from "../../assets/logo/homepage-ad-3.jpg";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="HomePage__container">
        <div className="HomePage__title--container">
          <div className="HomePage__title--titlecontainer">
            <div className="HomePage__title--title">
              Exercise is the Key to a Healthy Lifestyle
            </div>
            <div className="HomePage__title--subtitle">
              A health and fitness tracking platform to help you get fit and
              stay fit
            </div>
            <button
              className="HomePage__title--button"
              onClick={() => navigate("/workoutplan")}
            >
              Create Your Workout Plan
            </button>
          </div>
          <img
            className="HomePage__title--image"
            src={Cover_Image}
            alt="Fitness Cover Image"
          />
        </div>

        <div className="HomePage__demo--container">
          <div className="HomePage__demo">
            <img className="HomePage__demo--image" src={Ad_one} alt="Ad One" />
            <div className="HomePage__demo--titlecontainer">
              <div className="HomePage__demo--title">Pilates Training</div>
              <div className="HomePage__demo--subtitle">
                Containing Lorem Ipsum Passagesand More Recently With...
              </div>
            </div>
          </div>
          <div className="HomePage__demo">
            <img className="HomePage__demo--image" src={Ad_twp} alt="Ad Two" />
            <div className="HomePage__demo--titlecontainer">
              <div className="HomePage__demo--title">Aerobic Training</div>
              <div className="HomePage__demo--subtitle">
                Containing Lorem Ipsum Passagesand More Recently With...
              </div>
            </div>
          </div>
          <div className="HomePage__demo">
            <img
              className="HomePage__demo--image"
              src={Ad_three}
              alt="Ad Three"
            />
            <div className="HomePage__demo--titlecontainer">
              <div className="HomePage__demo--title">CrossFit Training</div>
              <div className="HomePage__demo--subtitle">
                Containing Lorem Ipsum Passagesand More Recently With...
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
