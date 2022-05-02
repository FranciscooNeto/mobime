import { BrowserRouter } from "react-router-dom";

import history from "./services/history.js";
import RoutesM from "./routes/index.jsx";

function App() {
  return (
    <div className="App">
    <BrowserRouter history={history}>
    <RoutesM />
    </BrowserRouter>
    </div>
  );
}

export default App;
