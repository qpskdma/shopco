"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Filters.module.scss";

const RangeSlider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const minValueRef = useRef(null);
  const maxValueRef = useRef(null);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value));
    setMinValue(value);
    e.target.value = value.toString();
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value));
    setMaxValue(value);
    e.target.value = value.toString();
  };

  useEffect(() => {
    const updateMinValuePosition = () => {
      if (minValueRef.current) {
        const minPercent = (minValue / 100) * 100;
        minValueRef.current.style.left = `calc(${minPercent}% + (${
          8 - minPercent * 0.15
        }px))`;
      }
    };

    const updateMaxValuePosition = () => {
      if (maxValueRef.current) {
        const maxPercent = (maxValue / 100) * 100;
        maxValueRef.current.style.left = `calc(${maxPercent}% + (${
          8 - maxPercent * 0.15
        }px))`;
      }
    };

    updateMinValuePosition();
    updateMaxValuePosition();
  }, [minValue, maxValue]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderTrack}></div>
      <input
        type="range"
        min="0"
        max="100"
        value={minValue}
        onChange={handleMinChange}
        className={styles.slider}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={maxValue}
        onChange={handleMaxChange}
        className={styles.slider}
      />
      <div ref={minValueRef} className={styles.sliderValue}>
        {minValue}
      </div>
      <div ref={maxValueRef} className={styles.sliderValue}>
        {maxValue}
      </div>
    </div>
  );
};

export default RangeSlider;
