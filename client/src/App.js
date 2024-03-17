// App.js
import React, { useState } from 'react';
import ParagraphForm from './components/ParagraphForm';
import EntityList from './components/EntityList';

const App = () => {
  const [entities, setEntities] = useState("");
  return (
    <div>
      <h1 className="text-center mt-5">Paragraph Information Extraction</h1>
      <ParagraphForm setEntities={setEntities} />
      <EntityList entities={entities} />
    </div>
  );
};

export default App;
