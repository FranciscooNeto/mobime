import { BrowserRouter } from "react-router-dom";

import history from "./services/history.js";
import RoutesM from "./routes/index.js";


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
