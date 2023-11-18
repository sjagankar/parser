import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
const apiJson = require('./swagger.json');

const App = () => {
  return (
    <div>
      <SwaggerUI spec={apiJson} />
    </div>
  );
};

export default App;