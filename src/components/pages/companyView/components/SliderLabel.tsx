import Tooltip from '@material-ui/core/Tooltip';
import React, { ReactElement } from 'react';
import getDate from '../utils/getDate';

export interface SliderLabelProps {
  open: boolean;
  value: number;
  children: ReactElement;
}

const SliderLabel: React.FC<SliderLabelProps> = ({ children, open, value }) => {
  const [minutes, hours, day, dayName, month, year] = getDate(value);
  return (
    <Tooltip
      open={open}
      enterTouchDelay={0}
      leaveTouchDelay={0}
      placement="top"
      title={`${hours}:${minutes} ${day}.${month}.${year} ${dayName}`}
    >
      {children}
    </Tooltip>
  );
};

export default SliderLabel;
