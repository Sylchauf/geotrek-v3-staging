interface Props {
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
  displayAt?: 'left' | 'right';
  marginSize?: 'small' | 'medium';
}

const MARGIN = {
  small: '2',
  medium: '8',
};

const BUTTON_SIZE = {
  small: '6',
  medium: '10',
};

export const MapButton = ({
  icon,
  onClick,
  className,
  style,
  displayAt = 'left',
  marginSize = 'medium',
}: Props) => {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`h-${BUTTON_SIZE[marginSize]} w-${
        BUTTON_SIZE[marginSize]
      } rounded-full absolute top-${MARGIN[marginSize]} ${
        displayAt === 'left' ? `left-${MARGIN[marginSize]}` : `right-${MARGIN[marginSize]}`
      } shadow-md bg-white z-mapButton flex justify-center items-center text-greyDarkColored ${
        className ?? ''
      }`}
    >
      {icon}
    </div>
  );
};
