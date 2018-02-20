import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style/index.css';

const Root = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);