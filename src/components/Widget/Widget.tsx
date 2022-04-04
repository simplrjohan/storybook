import React, { FC, Component } from 'react';

import { WidgetProps } from './Widget.types';
import {
  StatsPane,
  PreviousDayBlock,
  CurrentDayBlock,
  CurrentDayNumber,
  CurrentDayTitle,
  FaceIcon,
  Trends,
} from './Widget.styles';
import { ReactComponent as SmileyFace } from '../media/smiley_face.svg';
import { ReactComponent as SadFace } from '../media/sad_face.svg';
import { ReactComponent as ArrowDown } from '../media/arrow_down.svg';
import { ReactComponent as ArrowUp } from '../media/arrow_up.svg';

const Widget: FC<WidgetProps> = ({
  size,
  primary,
  disabled,
  text,
  theme,
  label,
  previousNumber,
  previousLabel,
  currentDirection,
  currentNumber,
  title,
  $isWidgetMoodPositive,
  ...props
}) => {
  return (
    <StatsPane {...props} $isWidgetMoodPositive={currentDirection}>
      <CurrentDayBlock>
        <CurrentDayTitle>
          <div className='current-day-title'>{title} </div>
          <div className='current-day-label'> {label}</div>
        </CurrentDayTitle>
        <Trends>
          <FaceIcon className='current-day-arrow'>
            {currentDirection ? <SmileyFace /> : <SadFace />}
          </FaceIcon>
          <CurrentDayNumber $isWidgetMoodPositive={currentDirection}>
            {currentDirection ? <ArrowUp /> : <ArrowDown />}
            <div className='current-day-number'> {currentNumber}</div>
          </CurrentDayNumber>
        </Trends>
      </CurrentDayBlock>
      <PreviousDayBlock>
        <div className='previous-label'>{previousLabel} </div>
        <div className='previous-number'> {previousNumber}</div>
      </PreviousDayBlock>
    </StatsPane>
  );
};

export default Widget;
