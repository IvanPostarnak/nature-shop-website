import { describe, expect, it } from "vitest";
import authReducer, { toggleAuth, setAuth } from './Auth.slice';

describe('Auth.slice set of tests', () => {

  it('setAuth() should [set true] from false', () => {
    expect(authReducer({ value: false }, setAuth(true))).toEqual({ value: true });
  });

  it('setAuth() should [set true] from true', () => {
    expect(authReducer({ value: true }, setAuth(true))).toEqual({ value: true });
  });

  it('setAuth() should [set false] from true', () => {
    expect(authReducer({ value: true }, setAuth(false))).toEqual({ value: false });
  });

  it('setAuth() should [set false] from false', () => {
    expect(authReducer({ value: false }, setAuth(false))).toEqual({ value: false });
  });

  it('setAuth() should [set false] for null', () => {
    expect(authReducer({ value: true }, setAuth(null))).toEqual({ value: false });
  });

  it('setAuth() should [set false] for undefined', () => {
    expect(authReducer({ value: true }, setAuth(undefined))).toEqual({ value: false });
  });

  it('setAuth() should [set false] for NaN', () => {
    expect(authReducer({ value: true }, setAuth(NaN))).toEqual({ value: false });
  });

  it('setAuth() should [set false] for empty state', () => {
    expect(authReducer({}, setAuth(false))).toEqual({ value: false });
  });

  it('setAuth() should [set true] for empty state', () => {
    expect(authReducer({}, setAuth(true))).toEqual({ value: true });
  });

  it('toggleAuth() should [set true] from false', () => {
    expect(authReducer({ value: false }, toggleAuth())).toEqual({ value: true });
  });

  it('toggleAuth() should [set false] from true', () => {
    expect(authReducer({ value: false }, toggleAuth())).toEqual({ value: true });
  });

  it('toggleAuth() should [set true] for empty state', () => {
    expect(authReducer({}, toggleAuth())).toEqual({ value: true });
  });

});