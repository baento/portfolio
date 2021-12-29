import About from "./components/About";
import Content from "./components/Content";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="justify-content-center">
        <div>
          <About />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
