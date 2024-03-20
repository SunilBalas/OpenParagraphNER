// App.js
import React, { useState } from "react";
import ParagraphForm from "./components/ParagraphForm";
import EntityList from "./components/EntityList";

const App = () => {
  const [responseData, setResponseData] = useState({});
  debugger;
  return (
    <div>
      <h1 className="text-center mt-5">Open Paragraph NER</h1>
      <ParagraphForm setResponseData={setResponseData} />

      {responseData && Object.keys(responseData).length > 0 && (
        <EntityList responseData={responseData} />
      )}
    </div>
  );
};

export default App;
