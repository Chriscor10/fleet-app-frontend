import {LoadProvider} from "./components/LoadContext.js"
import Load from "./components/Loads";


function App() {
  return (
    <div className="App">
      <LoadProvider>
        <Load/>
      </LoadProvider>
    </div>
  );
}

export default App;
