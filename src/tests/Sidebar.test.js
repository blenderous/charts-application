import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '../Sidebar';
// import ListItem from '../ListItem';
// import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sidebar />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('makes sure the list items are populated', () => {
    var view = ReactTestUtils.renderIntoDocument(<Sidebar />)
    var result = view.populateLi();
    expect(result.length).toBeGreaterThan(0);
    // var result = ReactTestUtils.scryRenderedComponentsWithType(view, ListItem);     
    // var populateResult = view.populateLi();
    // expect(result).toStrictEqual(populateResult);
});

