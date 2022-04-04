import styled from 'styled-components/macro';
import * as colors from '../constants/colorConstants';
import * as breakpoints from '../constants/mediaQueries';

export const CustomSpinnerWrapper = styled.div`
  position: relative;
  height: 100%;
  flex: 1 0 288px;

  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    flex: 1 0 75px;
  }
`;
export const StyledWidget= styled.div``



export const StatsPane = styled.div<{ $isWidgetMoodPositive: boolean }>`
  border-radius: 4px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  align-self: center;
  width: 140px;
  padding: 15px;
  display: flex;
  grid-area: stats-pane;
  flex-shrink: 0;
  font-family: Roboto Condensed, sans-serif;
  color: ${colors.black1};
  background-color: ${({ $isWidgetMoodPositive }) =>
    $isWidgetMoodPositive ? colors.positiveTrendBackground : colors.negativeTrendBackground};

  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    height: 85px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }
`;
export const CurrentDayBlock = styled.div`
  color: white;
  height: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    display: flex;
    height: 70px;
    justify-content: space-around;
  }
`;
export const Trends = styled.div`
  margin: 0px auto;
  display: block;
  height: 57%;

  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    display: flex;
    margin: 0px;
  }
`;
export const FaceIcon = styled.div`
  color: white;
  display: flex;
  height: 28px;
  width: 28px;
  align-self: center;
  margin: auto;
  background: white;
  border-radius: 50%;

  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    padding-top: 0px;
    align-self: center;
    margin: 0px;
  }
`;

export const CurrentDayNumber = styled.div<{ $isWidgetMoodPositive: boolean }>`
display: flex;
font-weight: lighter;
padding: 10px 8px 6px 5px;
margin: 20px auto auto auto;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 26px;
line-height: 20px;
display: flex;
align-items: flex-start;
color: ${({ $isWidgetMoodPositive }) =>
  $isWidgetMoodPositive ? colors.positiveTrendColor : colors.downwardTrendColor};

svg {
  height: auto;
  display: flex;
  height: 20px;
  align-self: center;
  margin: 0px 5px 0px 0px;
  stroke: ${({ $isWidgetMoodPositive }) =>
    $isWidgetMoodPositive ? colors.positiveTrendColor : colors.downwardTrendColor};
}

@media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
  screen and (max-width: ${breakpoints.maxMobile}) {
  margin: auto 0px;
  padding: 0px 10px;
  .current-day-arrow {
    height: 16px;
  }
}
`;

export const CurrentDayTitle = styled.div`
  text-align: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;

  .current-day-title {
    margin: 10px 0;
    color: ${colors.bodyColor};
  }

  .current-day-label {
    color: ${colors.darkGray14};
  }
  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    font-size: 12px;
    text-align: unset;
    .current-day-title {
      margin: 0px;
    }
    .current-day-label {
      display: none;
    }
  }
`;
export const PreviousDayBlock = styled.div`
  font-weight: normal;
  display: block;
  align-items: flex-end;
  height: auto;
  width: 70%;
  text-align: center;
  padding: 10px 20px;
  background: ${colors.white50};
  border-radius: 4px;

  .previous-label {
    color: ${colors.darkGray1};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 140%;
  }
  .previous-number {
    font-size: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    margin-top: 4px;
  }
  @media screen and (max-width: ${breakpoints.maxTablet}) and (orientation: portrait),
    screen and (max-width: ${breakpoints.maxMobile}) {
    width: 27%;
  }
`;

