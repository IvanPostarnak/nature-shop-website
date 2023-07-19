import {describe, it, expect, afterEach} from 'vitest';
import {renderHook, cleanup, act} from '@testing-library/react';
import {useInput} from './useInput.hook';

describe('useInput() hook set of tests', () => {
  afterEach(cleanup);

  it('Should [return passed value] on passing not a function', () => {
    expect(renderHook(() => useInput(1)).result.current.value).toEqual(1);
    expect(renderHook(() => useInput('1')).result.current.value).toEqual('1');
    expect(renderHook(() => useInput(true)).result.current.value).toEqual(true);
    expect(renderHook(() => useInput(false)).result.current.value).toEqual(false);
    expect(renderHook(() => useInput({a: 1})).result.current.value).toEqual({a: 1});
    expect(renderHook(() => useInput([1])).result.current.value).toEqual([1]);
    expect(renderHook(() => useInput(null)).result.current.value).toEqual(null);
  });

  it('Should [call initializer] on passing function', () => {
    expect(renderHook(() => useInput(() => 12)).result.current.value).toBe(12);
  });

  it.todo('Add test case of action to change value');
});
