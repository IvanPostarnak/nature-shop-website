import {memo} from 'react';
import PropTypes from 'prop-types';

const EyeIcon = ({size = 32, color = '#000000'}) => {
  return (
    <svg
      data-testid='eye-icon'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width={size}
      height={size}
      viewBox='0 0 100 100'
      style={{fill: color}}
    >
      <g
        transform='translate(0.000000,100.000000) scale(0.100000,-0.100000)'
        fill={color}
        stroke='none'
      >
        <path
          d='M293 711 c-85 -40 -168 -99 -228 -160 l-49 -51 49 -51 c147 -151 344
                -229 508 -201 122 21 262 99 362 201 l49 51 -49 51 c-73 75 -204 159 -285 184
                l-25 8 28 -29 c107 -107 79 -281 -55 -348 -220 -110 -426 173 -253 347 35 34
                25 34 -52 -2z'
        />
        <path d='M451 646 c-87 -48 -50 -186 49 -186 51 0 100 49 100 99 0 75 -83 124 -149 87z' />
      </g>
    </svg>
  );
};

EyeIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default memo(EyeIcon);
