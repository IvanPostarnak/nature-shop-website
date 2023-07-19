import {describe, it, expect} from 'vitest';
import pagesReducer from './Pages.slice';
import {setActivePage} from 'store/actions/setActivePage/setActivePage';

describe('Pages.slice set of tests', () => {
  it("Should [succeed] on 'action.payload' = correct string", () => {
    const initialState = {active: 'Home'};
    const action = setActivePage('Blog');
    const expectedState = {active: 'Blog'};
    expect(pagesReducer(initialState, action)).toEqual(expectedState);
  });

  it("Should [capitalize] value of 'action.payload'", () => {
    const initialState = {active: 'Home'};
    const action = setActivePage('about Us');
    const expectedState = {active: 'About Us'};
    expect(pagesReducer(initialState, action)).toEqual(expectedState);
  });
});
