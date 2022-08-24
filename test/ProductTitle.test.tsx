import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductTitle } from '../src/components';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductTitle />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
