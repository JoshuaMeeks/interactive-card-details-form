import { Form } from "./Components/Form";
import cardBack from "./Resources/images/bg-card-back.png";

function App() {
  return (
    <>
      <div className="styling-container"></div>
      <img src={cardBack} alt="card back" />
      <Form />
    </>
  );
}

export default App;
