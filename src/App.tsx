import React from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          1 Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Box>Box</Box>
      </header>
    </div>
  );
}

export default App;
const Box = styled.div``;
