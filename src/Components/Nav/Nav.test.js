/* eslint-disable testing-library/no-debugging-utils */
import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { NavBar } from './Nav';

afterEach(cleanup);

test("the search box is hidden from user on start", () => {

    render(<NavBar />);
    const searchArea = screen.getByTestId(/search area/i);

    expect(searchArea.style.display).toBe('');
})

test("the search button renders search bar", () => {

   render(<NavBar />);

   const searchArea = screen.getByTestId(/search area/i);

   fireEvent.click(screen.getByRole('button', {name: /search icon/i}));

   expect(searchArea.style.display).toBe('flex');
})
