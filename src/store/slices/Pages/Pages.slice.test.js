import { describe, it, expect } from "vitest";
import pagesReducer from './Pages.slice';
import { setActivePage } from 'store/actions';

describe('Pages.slice set of tests', () => {

  it('Should [succeed] on \'action.payload\' = correct string', () => {
    expect(pagesReducer({active: 'Home'}, setActivePage('Blog'))).toEqual({active: 'Blog'});
  });

  it('Should [capitalize] value of \'action.payload\'', () => {
    expect(pagesReducer({active: 'Home'}, setActivePage('about Us'))).toEqual({active: 'About Us'});
  });

  it('Should [throw error] on empty \'action.payload\'', () => {
    expect(() => pagesReducer({active: 'Home'}, setActivePage(undefined))).toThrowError(/action.payload/i);
  });

  it('Should [throw error] on \'action.payload\' not a string', () => {
    expect(() => pagesReducer({active: 'Home'}, setActivePage(123))).toThrowError(/string/i);
  });

  it('Should [throw error] on \'action.payload\' = empty \'\' string', () => {
    expect(() => pagesReducer({active: 'Home'}, setActivePage(''))).toThrowError(/action.payload/i);
  });

});