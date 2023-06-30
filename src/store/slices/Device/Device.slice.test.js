import { describe, it, expect } from "vitest";
import deviceReducer, { setDevice } from './Device.slice';

describe('Device.slice set of tests', () => {

  it('Should [set anyProperty: true] from false', () => {
    expect(deviceReducer({anyProperty: false}, setDevice({anyProperty: true}))).toEqual({anyProperty: true});
  });

  it('Should [set anyProperty: false] from true', () => {
    expect(deviceReducer({anyProperty: true}, setDevice({anyProperty: false}))).toEqual({anyProperty: false});
  });

  it('Should [throw Error] on passing non-Object', () => {
    expect(() => deviceReducer({anyProperty: false}, setDevice("not an object"))).toThrowError(/be an object/i);
  });
  
  it('Should [throw Error] on passing Object with 2 truths', () => {
    expect(() => deviceReducer({one: false, two: false}, setDevice({one: true, two: true}))).toThrowError(/only one equal to 'true'/i);
  });

  it('Should [throw Error] on passing Object with different length', () => {
    expect(() => deviceReducer({one: false}, setDevice({one: true, two: true}))).toThrowError(/the same length/i);
  });

});