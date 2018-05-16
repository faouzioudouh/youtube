import * as React from 'react';
import classNames from 'classnames';

import { LProps as Props } from './types';
import './ToggleButton.css';

const ToggleButton = ({
    handleClick,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleFocus,
    handleBlur,
    handleRef,
    classnames,
    checked,
    hasFocus
}: Props) => {

    const classes = classNames('toggle-button', {
        'toggle-button--checked': checked,
        'toggle-button--focus': hasFocus
      });

    return (
        <div
          className={classes}
          onClick={handleClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
  
          <div className="toggle-button-track">
            <div className="toggle-button-track-check"/>
          </div>
  
          <div className="toggle-button-thumb"/>
  
          <input
            ref={handleRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            checked={checked}
            className="visuallyHidden"
            type="checkbox"
          />
  
        </div>
    );
};

export default ToggleButton;