import * as enzyme from 'enzyme';
import * as React from 'react';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
   const hello = enzyme.shallow(<Hello name='Spencer' />);
   expect(hello.find('.greeting').text()).toEqual('Hello Spencer!');
});