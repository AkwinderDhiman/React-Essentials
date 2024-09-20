
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import { Fragment } from "react";
import Example from "./components/Example.jsx";

function App() {

  return (
    <Fragment>
      <Header />
      <main>
       <CoreConcepts/>
        <Example/>
      </main>
    </Fragment>
  );
}

export default App;
