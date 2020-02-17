import React from "react";
import { GlobalStyle } from "./globalStyles";
import UserPage from "./components/user";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <UserPage/>
    </div>
  );
}

export default App;
