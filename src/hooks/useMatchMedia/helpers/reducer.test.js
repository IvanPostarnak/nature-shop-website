import {describe, expect, it} from 'vitest';
import {reducer} from './reducer';

describe('reducer of useMatchMedia() hook set of tests', () => {
  it('Should [return newObject] on proper input', () => {
    const state = {a: 'any', b: 'any'};
    const action = {type: 'device_changed', payload: [1, 2]};
    expect(reducer(state, action)).toEqual({a: 1, b: 2});
  });

  it('Should [throw error] on unknown action.type', () => {
    const state = {a: 'any', b: 'any'};
    const action = {type: 'made up action', payload: [1, 2]};
    expect(() => reducer(state, action)).toThrowError(/action.type/i);
  });

  it('Should [throw error] once action.type is not a string', () => {
    const state = {a: 'any', b: 'any'};
    const action = {type: 123, payload: [1, 2]};
    expect(() => reducer(state, action)).toThrowError(/action.type/i);
  });

  it("Should [throw error] without 'payload' property", () => {
    const state = {a: 'any', b: 'any'};
    const action = {type: 'device_changed'};
    expect(() => reducer(state, action)).toThrowError(/action.payload/i);
  });

  it("Should [throw error] once 'payload' property is not an array", () => {
    const state = {a: 'any', b: 'any'};
    const action = {type: 'device_changed'};
    expect(() => reducer(state, action)).toThrowError(/action.payload/i);
  });

  it('Should [throw error] on different lengths', () => {
    const state = {a: 'any', b: 'any'};
    const action = {type: 'device_changed', payload: [1, 2, 3]};
    expect(() => reducer(state, action)).toThrowError(/state.length/i);
  });
});
