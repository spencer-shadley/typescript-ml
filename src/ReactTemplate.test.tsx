import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTemplate from './ReactTemplate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactTemplate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
