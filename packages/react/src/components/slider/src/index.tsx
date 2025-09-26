import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import type { FC } from 'react';
import { withStyles } from '@microui-kit/with-styles';

import { styles } from 'packages/common/components/slider/styles';
import { Slider, useSlider } from '@ark-ui/react';
import { SliderProps } from 'packages/common/components/slider/types';

const SigmaSlider = ({
  size = 'default',
  classes,
  showValueText = false,
  label,
  defaultValue = [1],
  value,
  marks,
  onValueChange,
  ...rest
}: SliderProps) => {
  const slider = useSlider({
    defaultValue,
    value,
    onValueChange,
    ...rest,
  });

  return (
    <Slider.RootProvider
      value={slider}
      className={classNames(classes?.wrapper)}
    >
      <div className={classes?.labelContainer}>
        {label && <Slider.Label className={classes?.label}>{label}</Slider.Label>}
        {showValueText && <Slider.ValueText className={classes?.valueText} />}
      </div>
      <Slider.Control className={classNames(classes?.[`control-${size}`], classes?.control)}>
        <Slider.Track className={classNames(classes?.[`track-${size}`], classes?.track)}>
          <Slider.Range className={classNames(classes?.[`range-${size}`], classes?.range)} />
        </Slider.Track>
        {Array.from({ length: defaultValue.length }).map((_, index) => (
          <Slider.Thumb
            key={index}
            index={index}
            className={classNames(classes?.[`thumb-${size}`], classes?.thumb)}
          >
            <Slider.HiddenInput />
          </Slider.Thumb>
        ))}
      </Slider.Control>
      {marks && (
        <Slider.MarkerGroup>
          {marks.items.map((item, index) => (
            <Slider.Marker
              key={index}
              className={classNames(classes?.[`marker-${size}`], classes?.marker)}
              value={item.value}
            >
              {marks.renderItem ? marks.renderItem(item) : item.label}
            </Slider.Marker>
          ))}
        </Slider.MarkerGroup>
      )}
    </Slider.RootProvider>
  );
};

SigmaSlider.displayName = 'Slider';

export default withStyles<SliderProps>(styles)(SigmaSlider);
