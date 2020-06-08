import Slider from '@material-ui/core/Slider';
import React, { ChangeEvent } from 'react';
import SliderLabel from './SliderLabel';
import styled from '../../../../utils/styled-components';

export interface FilterByDateProps {
  firstDate: number;
  lastDate: number;
  setPeriodTime: React.Dispatch<React.SetStateAction<number[]>>;
  periodTime: number[];
}

const FilterByDate: React.FC<FilterByDateProps> = ({ firstDate, lastDate, setPeriodTime, periodTime }) => {
  const handleChange = (event: ChangeEvent<{}> | {}, newValue: number | number[]) => {
    setPeriodTime(newValue as number[]);
  };
  return (
    <Container>
      <SliderStyled
        ValueLabelComponent={SliderLabel}
        value={periodTime}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider-steps"
        min={firstDate}
        max={lastDate}
        marks={[
          {
            value: firstDate,
            label: 'Date of first income',
          },
          {
            value: lastDate,
            label: 'Date of last income',
          },
        ]}
      />
    </Container>
  );
};

export default FilterByDate;

const Container = styled.div`
  margin: 5px 15px;
`;
const SliderStyled = styled(Slider)`
  && .MuiSlider-thumb {
    height: 20px;
    width: 20px;
    background-color: ${({ theme }) => theme.slider.thumb};
    margin-top: -10px;
    margin-left: -10px;
  }
  && .MuiSlider-vertical {
    left: calc(-50% + 11px);
    top: -22px;
    & * {
      background: transparent;
      color: ${({ theme }) => theme.slider.vertical};
    }
  }
  && .MuiSlider-track {
    height: 2px;
    background-color: ${({ theme }) => theme.slider.track};
  }
  && .MuiSlider-rail {
    height: 2px;
    opacity: 0.5;
    background-color: ${({ theme }) => theme.slider.rail};
  }
  && .MuiSlider-mark {
    background-color: ${({ theme }) => theme.slider.mark};
    height: 8px;
    width: 1px;
    margin-top: -3px;
    &:nth-of-type(even) {
      font-size: 20px;
    }
  }
  && .MuiSlider-markActive {
    opacity: 1;
    background-color: ${({ theme }) => theme.slider.markActive};
  }
  && .MuiSlider-markLabel {
    color: ${({ theme }) => theme.slider.markLabel};
    font-size: 10px;
    @media (min-width: 960px) {
      font-size: 12px;
    }
  }
  span[data-index='1'] + .MuiSlider-markLabel {
    transform: translate(-95%, 0);
  }
  span[data-index='0'] + .MuiSlider-markLabel {
    transform: translate(-5%, 0);
  }
`;
