import React from "react";
import ToDoPage from "./Pages/ToDoPage";
import { StoreProvider } from "./Store/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <ToDoPage />
    </StoreProvider>
  );
}

export default App;
