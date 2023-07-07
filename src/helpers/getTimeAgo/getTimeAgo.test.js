import { expect, it, describe } from "vitest";
import { getTimeAgo } from "./getTimeAgo";

describe('getTimeAgo() helper function set of tests', () => {

  it('Should [return \'year\' ago] in priority', () => {
    const goodString =  "2021-05-29T00:17:44.877Z";
    const now =         "2023-05-29T00:17:44.877Z";
    expect(getTimeAgo(goodString, now)).toMatch(/years ago/i);
  });

  it('Should [return \'months\' ago] in priority', () => {
    const goodString =  "2023-05-29T00:17:44.877Z";
    const now =         "2023-07-29T00:17:44.877Z";
    expect(getTimeAgo(goodString, now)).toMatch(/months ago/i);
  });

  it('Should [return \'days\' ago] in priority', () => {
    const goodString =  "2023-05-20T00:17:44.877Z";
    const now =         "2023-05-29T00:17:44.877Z";
    expect(getTimeAgo(goodString, now)).toMatch(/days ago/i);
  });

  it('Should [return \'hours\' ago] in priority', () => {
    const goodString =  "2023-05-29T08:17:44.877Z";
    const now =         "2023-05-29T12:17:44.877Z";
    expect(getTimeAgo(goodString, now)).toMatch(/hours ago/i);
  });

  it('Should [return \'minutes\' ago] in priority', () => {
    const goodString =  "2023-05-29T12:10:44.877Z";
    const now =         "2023-05-29T12:17:44.877Z";
    expect(getTimeAgo(goodString, now)).toMatch(/minutes ago/i);
  });

  it('Should [return \'seconds\' ago] at last', () => {
    const goodString =  "2023-05-29T12:17:24.877Z";
    const now =         "2023-05-29T12:17:44.877Z";
    expect(getTimeAgo(goodString, now)).toMatch(/seconds ago/i);
  });

});