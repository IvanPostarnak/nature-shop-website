import { describe, it, expect } from "vitest";
import deviceReducer from './Device.slice';
import { setDevice } from "store/actions/setDevice/setDevice";

describe('Device.slice set of tests', () => {

  it('Should [set anyProperty: true] from false', () => {
    const initialState = {anyProperty: false};
    const action = setDevice({anyProperty: true});
    const expectedState = {anyProperty: true};
    expect(deviceReducer(initialState, action)).toEqual(expectedState);
  });

  it('Should [set anyProperty: false] from true', () => {
    const initialState = {anyProperty: true, two: false};
    const action = setDevice({anyProperty: false, two: true});
    const expectedState = {anyProperty: false, two: true};
    expect(deviceReducer(initialState, action)).toEqual(expectedState);
  });

});