import { Form } from "./Components/Form";
import cardBack from "./Resources/images/bg-card-back.png";
import cardFront from "./Resources/images/bg-card-front.png";
import cardLogo from "./Resources/images/card-logo.svg";

function App() {
  return (
    <>
      <div className="styling-container"></div>
      <div className="card-back-container">
        <span className="card-back-text">000</span>
        <img src={cardBack} alt="card back" className="card-back" />
      </div>
      <div className="card-front-container">
        <img src={cardLogo} alt="card logo" className="card-logo" />
        <img src={cardFront} alt="card front" className="card-front" />
      </div>
      <div className="form-container">
        <Form />
      </div>
    </>
  );
}

export default App;
