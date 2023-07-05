import { memo } from "react";
import PropTypes from 'prop-types'
import { getDevice } from "store/selectors";
import { useSelector } from "react-redux";
import SingleStructure from "components/layout/SingleStructure/SingleStructure";
import SplitStructure from "components/layout/SplitStructure/SplitStructure";

import styles from './AdaptiveRender.module.scss';

const AdaptiveRender = ({children, ...rest}) => {
  const device = useSelector(getDevice);

  return (
    <div
      className={styles.adaptive_render}
      data-testid="adaptive-render"
      {...rest}
    >
      {
        device.isMobile
        ? <SingleStructure>
            {children}
          </SingleStructure>
        : <SplitStructure>
            {children}
          </SplitStructure>
      }
    </div>
  )
};

AdaptiveRender.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default memo(AdaptiveRender);