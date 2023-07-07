import { cleanup, render } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import styles from './AccurateRating.module.scss';
import AccurateRating from "./AccurateRating";

describe('AccurateRating component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<AccurateRating/>);
    expect(container.getByTestId("accurate-rating-form")).toBeInTheDocument();
    expect(container.getByTestId("accurate-rating")).toBeInTheDocument();
    container.getAllByTestId("accurate-rating-item").every(item => {
      expect(item).toBeInTheDocument();
    });    
  });

  it('Should [be visible] on render', () => {
    const container = render(<AccurateRating/>);
    expect(container.getByTestId("accurate-rating-form")).toBeVisible();
    expect(container.getByTestId("accurate-rating")).toBeVisible();
    container.getAllByTestId("accurate-rating-item").every(item => {
      expect(item).toBeVisible();
    }); 
  });

  it('Should [have CSS class]  \'accurate_rating\' on render', () => {
    const container = render(<AccurateRating/>);
    expect(container.getByTestId("accurate-rating")).toHaveClass(styles.accurate_rating);
    container.getAllByTestId("accurate-rating-item").every(item => {
      expect(item).toHaveClass(styles.accurate_rating__item);
    }); 
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<AccurateRating/>);
    expect(container.getByTestId("accurate-rating")).toMatchSnapshot();
  });

});