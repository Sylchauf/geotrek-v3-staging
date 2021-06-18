import React, { useCallback, useEffect, useState } from 'react';
import ReactFullscreen from 'react-easyfullscreen';

import { ArrowLeft } from 'components/Icons/ArrowLeft';
import { Fullscreen } from 'components/Icons/Fullscreen';
import { MapButton } from 'components/Map/components/MapButton';

type Props = {
  marginSize?: 'small' | 'medium';
};

export const Modal: React.FC<Props> = ({ marginSize = 'medium', children }) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handler = useCallback(() => setIsFullscreen(!isFullscreen), [isFullscreen]);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handler);

    return () => document.removeEventListener('fullscreenchange', handler);
  }, [handler]);

  const iconSize = marginSize === 'small' ? 12 : 24;

  return (
    <ReactFullscreen>
      {({ ref, onToggle }) => {
        return (
          <div
            // @ts-ignore Wrong type in the lib
            ref={ref}
            style={{
              backgroundColor: 'white',
              position: 'relative',
            }}
          >
            <MapButton
              icon={isFullscreen ? <ArrowLeft size={iconSize} /> : <Fullscreen size={iconSize} />}
              onClick={onToggle}
              displayAt={marginSize === 'small' ? 'right' : 'left'}
              marginSize={marginSize}
              style={{ cursor: 'pointer', zIndex: 100 }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <div style={{ width: '100%' }}>{children}</div>
            </div>
          </div>
        );
      }}
    </ReactFullscreen>
  );
};
