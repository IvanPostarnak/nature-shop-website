import {memo} from 'react';
import PropTypes from 'prop-types';
import H4 from 'components/UI/H4/H4';
import Text from 'components/UI/Text/Text';

import styles from './Paragraph.module.scss';

const Paragraph = ({title, body, ...rest}) => {
  return (
    <div
      className={styles.paragraph}
      data-testid='paragraph'
    >
      {title && <H4>{title}</H4>}
      {body && <Text {...rest}>{body}</Text>}
    </div>
  );
};

Paragraph.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
};

export default memo(Paragraph);
