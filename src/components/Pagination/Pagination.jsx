import { memo, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Nav from "components/UI/Nav/Nav";
import Button from "components/UI/Button/Button";

import styles from './Pagination.module.scss';

const Pagination = ({device, totalAmount, step, active, onChangePage, ...rest}) => {
  const [pages, setPages] = useState([]);
  const [activePage, setActivePage] = useState(active);

  const resolvePages = () => {
    const pagesAmount = Math.ceil(totalAmount / step);
    const array = [];
    for (let i = 1; i <= pagesAmount; i++) {
      array.push(i);
    }
    setPages(array);
  };

  const handleClick = (activeId) => {
    setActivePage(activeId);
    onChangePage(activeId, step * (activeId - 1));
  }

  useEffect(() => {
    resolvePages();
  }, [totalAmount, step]);

  return (
    <Nav
      className={styles.pagination}
      aria-label="pages navigation"
      data-testid="pagination"
      {...rest}
    >
      {
        pages.map((page) => {
          return(
            <Button
              key={page}
              data-testid="pagination-button"
              onClick={() => handleClick(page)}
              className={page === activePage && styles.active}
            >
              {page}
            </Button>
          )
        })
      }
    </Nav>
  )
};

Pagination.propTypes = {
  device: PropTypes.exact({
    isMobile: PropTypes.bool.isRequired,
    isTablet: PropTypes.bool.isRequired,
    isDesktop: PropTypes.bool.isRequired
  }).isRequired,
  totalAmount: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired
};

export default memo(Pagination);