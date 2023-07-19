import {memo, useEffect, useState} from 'react';
import Input from 'components/UI/Input/Input';
import PropTypes from 'prop-types';

import styles from './AccurateRating.module.scss';

const AccurateRating = ({value, ...rest}) => {
  const [renderWidth, setRenderWidth] = useState(0);

  const calculateRatingBar = (value) => {
    return (value / 5.0) * 100;
  };

  useEffect(() => {
    setRenderWidth(calculateRatingBar(value));
  }, [value]);

  return (
    <>
      <form
        action='#'
        data-testid='accurate-rating-form'
      >
        <div
          className={styles.accurate_rating}
          data-testid='accurate-rating'
          {...rest}
        >
          <div className={styles.accurate_rating__body}>
            <div
              className={styles.accurate_rating__active}
              style={{width: renderWidth + '%'}}
            />
            <div className={styles.accurate_rating__items}>
              <Input
                className={styles.accurate_rating__item}
                type='radio'
                value='5'
                name='accurate-rating-item'
                id='5'
                data-testid='accurate-rating-item'
              />
              <Input
                className={styles.accurate_rating__item}
                type='radio'
                value='4'
                name='accurate-rating-item'
                id='4'
                data-testid='accurate-rating-item'
              />
              <Input
                className={styles.accurate_rating__item}
                type='radio'
                value='3'
                name='accurate-rating-item'
                id='3'
                data-testid='accurate-rating-item'
              />
              <Input
                className={styles.accurate_rating__item}
                type='radio'
                value='2'
                name='accurate-rating-item'
                id='2'
                data-testid='accurate-rating-item'
              />
              <Input
                className={styles.accurate_rating__item}
                type='radio'
                value='1'
                name='accurate-rating-item'
                id='1'
                data-testid='accurate-rating-item'
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

AccurateRating.propTypes = {
  value: PropTypes.number,
};

export default memo(AccurateRating);
