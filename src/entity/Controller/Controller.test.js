import { describe, expect, it } from "vitest";
import Controller from "./Controller";

describe.todo('Add set of tests for Controller.fetch()');

// describe('Controller.__test__.configureURL() set of tests', () => {

//   it('Should [return] valid url on valid input', () => {
//     const result = Controller.__test__.configureURL("/pages/about_us", "http://localhost:5300/");
//     expect(result).toBe("http://localhost:5300/pages/about_us");
//   });

// });

// describe('Controller.__test__.validateURL() set of tests', () => {

//   it('Should [return true] on passing valid string URL', () => {
//     expect(Controller.__test__.validateURL("http/...")).toBe(true);
//   });

//   it('Should [throw error] on passing non-string URL', () => {
//     expect(() => Controller.__test__.validateURL()).toThrowError(/string/i);
//     expect(() => Controller.__test__.validateURL(123)).toThrowError(/string/i);
//     expect(() => Controller.__test__.validateURL(function(){})).toThrowError(/string/i);
//     expect(() => Controller.__test__.validateURL([1, 2])).toThrowError(/string/i);
//     expect(() => Controller.__test__.validateURL({a:1})).toThrowError(/string/i);
//     expect(() => Controller.__test__.validateURL(false)).toThrowError(/string/i);
//     expect(() => Controller.__test__.validateURL(NaN)).toThrowError(/string/i);
//     expect(() => Controller.__test__.validateURL(null)).toThrowError(/string/i);
//     expect(() => Controller.__test__.validateURL(undefined)).toThrowError(/string/i);
//   });

//   it('Should [throw error] on passing empty "" string URL', () => {
//     expect(() => Controller.__test__.validateURL("")).toThrowError(/URL/i);
//   });

// });

// describe('Controller.__test__.validateOptions() set of tests', () => {

//   it('Should [return true] on passing valid Object', () => {
//     expect(Controller.__test__.validateOptions({a: 1})).toBe(true);
//   });

//   it('Should [return true] on passing empty {} object URL', () => {
//     expect(Controller.__test__.validateOptions({})).toBe(true);
//   });

//   it('Should [throw error] on passing non-object options', () => {
//     expect(() => Controller.__test__.validateOptions()).toThrowError(/object/i);
//     expect(() => Controller.__test__.validateOptions(123)).toThrowError(/object/i);
//     expect(() => Controller.__test__.validateOptions(function(){})).toThrowError(/object/i);
//     expect(() => Controller.__test__.validateOptions([1, 2])).toThrowError(/object/i);
//     expect(() => Controller.__test__.validateOptions("string")).toThrowError(/object/i);
//     expect(() => Controller.__test__.validateOptions(false)).toThrowError(/object/i);
//     expect(() => Controller.__test__.validateOptions(NaN)).toThrowError(/object/i);
//     expect(() => Controller.__test__.validateOptions(null)).toThrowError(/object/i);
//     expect(() => Controller.__test__.validateOptions(undefined)).toThrowError(/object/i);
//   });

// });