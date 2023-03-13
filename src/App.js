import { Form } from "./Components/Form";
import cardBack from "./Resources/images/bg-card-back.png";
import cardFront from "./Resources/images/bg-card-front.png";

function App() {
  return (
    <>
      <div className="styling-container"></div>
      <img src={cardBack} alt="card back" className="card-back" />
      <img src={cardFront} alt="card front" className="card-front" />
      <Form />
    </>
  );
}

export default App;
