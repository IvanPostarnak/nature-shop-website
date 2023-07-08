import { describe, it, expect, afterEach } from "vitest";
import { renderHook, cleanup, act } from "@testing-library/react";
import { useToggle } from "./useToggle.hook";

describe('useToggle() hook set of tests', () => {

  afterEach(cleanup)

  it('Should [return boolean] on passing non-empty values', () => {
    expect(renderHook(() => useToggle(12)).result.current.value).toBe(true);
    expect(renderHook(() => useToggle('string')).result.current.value).toBe(true);
    expect(renderHook(() => useToggle(true)).result.current.value).toBe(true);
    expect(renderHook(() => useToggle([1])).result.current.value).toBe(true);
    expect(renderHook(() => useToggle({a:1})).result.current.value).toBe(true);
    expect(renderHook(() => useToggle(false)).result.current.value).toBe(false);
    expect(renderHook(() => useToggle(null)).result.current.value).toBe(false);
    expect(renderHook(() => useToggle(undefined)).result.current.value).toBe(false);
    expect(renderHook(() => useToggle(NaN)).result.current.value).toBe(false);
    expect(renderHook(() => useToggle('')).result.current.value).toBe(false);
    expect(renderHook(() => useToggle(0)).result.current.value).toBe(false);
    expect(renderHook(() => useToggle()).result.current.value).toBe(false);
  });

  it('Should [toggle value] on toggleValue()', () => {
    const {result} = renderHook(() => useToggle(true));
    act(() => result.current.toggleValue());
    expect(result.current.value).toBe(false);
    act(() => result.current.toggleValue());
    expect(result.current.value).toBe(true);
  });

  it('Should [set value] on toggleValue(value)', () => {
    const {result} = renderHook(() => useToggle());
    act(() => result.current.toggleValue(true));
    expect(result.current.value).toBe(true);
    act(() => result.current.toggleValue(false));
    expect(result.current.value).toBe(false);
  });

});





  