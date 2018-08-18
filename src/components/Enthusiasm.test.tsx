import * as enzyme from 'enzyme';
import * as React from 'react';
import Enthusiasm from './Enthusiasm';

it('should render the correct text when no enthusiasm level is given', () => {
   const enthusiasm = enzyme.shallow(<Enthusiasm name='Spencer' />);
   expect(enthusiasm.find('.greeting').text()).toEqual('Hello Spencer!');
});

it('should render the correct text with an explicit enthusiasm of 1', () => {
    const enthusiasm = enzyme.shallow(<Enthusiasm name='Spencer' enthusiasmLevel={1}/>);
    expect(enthusiasm.find(".greeting").text()).toEqual('Hello Spencer!')
});

it('should render the correct text with an explicit enthusiasm level of 5', () => {
    const enthusiasm = enzyme.shallow(<Enthusiasm name='Spencer' enthusiasmLevel={5} />);
    expect(enthusiasm.find(".greeting").text()).toEqual('Hello Spencer!!!!!');
});

it('throws when the enthusiasm level is negative', () => {
    expect(() => {
        enzyme.shallow(<Enthusiasm name='Spencer' enthusiasmLevel={-1} />);
    }).toThrow();
});
