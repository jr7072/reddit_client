import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { Post } from './Post';
import store from '../../store';

afterEach(cleanup);

configure({ adapter: new Adapter() })

test('the post renders', () => {

    

    render (
        <Provider store={store}>
            <Post />
        </Provider>
    ); 

    const post = screen.getByTestId(/post/i);

    expect(post).toBeInTheDocument();

});

test('the post upvote is not filled at start', () => {



    render (
        <Provider store={store}>
            <Post />
        </Provider>
    ); 

    const upArrowUnfilled = screen.getByTestId(/up-arrow-unfilled/i);

    expect(upArrowUnfilled).toBeInTheDocument();
})

test('the post downvote is not filled at start', () => {

   

    render (
        <Provider store={store}>
            <Post />
        </Provider>
    ); 

    const downArrowUnfilled = screen.getByTestId(/down-arrow-unfilled/i);

    expect(downArrowUnfilled).toBeInTheDocument();
})

//cannot test re-render of clicks due to enzyme lacking support for react 17;
