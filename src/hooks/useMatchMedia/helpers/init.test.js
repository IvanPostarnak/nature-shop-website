import { describe, expect, it } from "vitest";
import { init } from "./init";

describe('init function of useMatchMedia() hook set of tests', () => {

  it('Should [has prefix \'is\'] for each \'device\' property', () => {
    const goodArray = [{device: 'ivan'}, {device: 'post'}];
    expect(init(goodArray)).toEqual({isIvan: false, isPost: false});
  });

  it('Should [be falsy] on each key of returning object', () => {
    const goodArray = [{device: 'ivan'}, {device: 'post'}];
    expect(...Object.values(init(goodArray))).toBeFalsy();
  });

  it('Should [throw error] on items without \'device\' property', () => {
    const withoutDevice = [{name: 'Ivan'}, {age: 24}];
    expect(() => init(withoutDevice)).toThrowError(/.device property/i);
  });

  it('Should [throw error] when \'device\' property is not a string', () => {
    const notAString = [{device: 'Ivan'}, {device: 24}];
    expect(() => init(notAString)).toThrowError(/item.device/i);
  });

});