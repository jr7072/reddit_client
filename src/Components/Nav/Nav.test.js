import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { NavBar } from './Nav';
import { Provider } from 'react-redux';
import store from '../../store';

afterEach(cleanup);

test("the search box is hidden from user on start", () => {

    render(
        <Provider store={store}>
            <NavBar />
        </Provider>
    );
    const searchArea = screen.getByTestId(/search area/i);

    expect(searchArea.style.display).toBe('');
})

test("the search button renders search bar", () => {

    render(
        <Provider store={store}>
            <NavBar />
        </Provider>
    );

   const searchArea = screen.getByTestId(/search area/i);

   fireEvent.click(screen.getByRole('button', {name: /search icon/i}));

   expect(searchArea.style.display).toBe('flex');
})
