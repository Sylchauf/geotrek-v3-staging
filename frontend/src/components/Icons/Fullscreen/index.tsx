import React from 'react';
import { GenericIconProps } from '../types';

export const Fullscreen: React.FC<GenericIconProps> = ({
  color = 'currentColor',
  size,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 488.4 488.4"
      className={className}
    >
      <g>
        <g>
          <g>
            <polygon
              points="441.1,407.8 338.8,305.5 305.5,338.8 407.8,441.1 328.3,441.1 328.3,488.4 488.4,488.4 488.4,328.3 441.1,328.3
  "
            />
            <polygon points="338.8,183 441.1,80.6 441.1,160.1 488.4,160.1 488.4,0 328.3,0 328.3,47.3 407.8,47.3 305.5,149.6 			" />
            <polygon points="149.6,305.5 47.3,407.8 47.3,328.3 0,328.3 0,488.4 160.1,488.4 160.1,441.1 80.6,441.1 183,338.8 			" />
            <polygon points="160.1,47.3 160.1,0 0,0 0,160.1 47.3,160.1 47.3,80.6 149.6,183 183,149.6 80.6,47.3 			" />
          </g>
        </g>
      </g>
    </svg>
  );
};
