import React from 'react';
import { render, fireEvent, screen, cleanup} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Post } from './Post';

afterEach(cleanup);

configure({ adapter: new Adapter() })

test('the post renders in an error state', () => {

    render(<Post />);

    const post = screen.getByTestId(/post/i);

    expect(post).toBeInTheDocument();

});

test('the post upvote is not filled at start', () => {

    render(<Post />);

    const upArrowUnfilled = screen.getByTestId(/up-arrow-unfilled/i);

    expect(upArrowUnfilled).toBeInTheDocument();
})

test('the post downvote is not filled at start', () => {

    render(<Post />);

    const downArrowUnfilled = screen.getByTestId(/down-arrow-unfilled/i);

    expect(downArrowUnfilled).toBeInTheDocument();
})

//cannot test re-render of clicks due to enzyme lacking support for react 17;
