import * as React from 'react';

import ToggleButton from './ToggleButton';
import { FProps as Props, DefaultProps, State } from './types';

const pointerCoordinates = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event) {
        const changedTouches = event.changedTouches

        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0]
            return { x: touch.clientX, y: touch.clientY }
        }
    }
    return { x: 0, y: 0 }
};

const ToggleButtonContainer: React.ComponentClass<Props> = class extends React.PureComponent<Props & DefaultProps, State> {
  previouslyChecked: boolean;
  moved: boolean;
  input: HTMLInputElement | null;
  startX: number | null;
  activated: boolean;

  static defaultProps: DefaultProps = {
    defaultChecked: true,
  };

  constructor (props: Props & DefaultProps) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleRef = this.handleRef.bind(this);
    this.previouslyChecked = Boolean(props.defaultChecked);

    this.state = {
      checked: Boolean(props.defaultChecked),
      hasFocus: false,
    };
  }

  handleClick (event: React.MouseEvent<HTMLDivElement>) {
    const checkbox = this.input;

    if (event.target !== checkbox && !this.moved) {
      this.previouslyChecked = checkbox!.checked
      event.preventDefault()
      checkbox!.focus()
      checkbox!.click()
      return
    }

    const checked = checkbox!.checked;

    this.setState({checked});
  }

  handleTouchStart (event: React.TouchEvent<HTMLDivElement>) {
    this.startX = pointerCoordinates(event).x
    this.activated = true
  }

  handleTouchMove (event: React.TouchEvent<HTMLDivElement>) {
    if (!this.activated) return
    this.moved = true

    if (this.startX) {
      let currentX = pointerCoordinates(event).x
      if (this.state.checked && currentX + 15 < this.startX) {
        this.setState({ checked: false })
        this.startX = currentX
        this.activated = true
      } else if (currentX - 15 > this.startX) {
        this.setState({ checked: true })
        this.startX = currentX
        this.activated = (currentX < Number(this.startX) + 5)
      }
    }
  }

  handleTouchEnd (event: React.TouchEvent<HTMLDivElement>) {
    if (!this.moved) return
    const checkbox = this.input
    event.preventDefault()

    if (this.startX) {
      let endX = pointerCoordinates(event).x
      if (this.previouslyChecked === true && this.startX + 4 > endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({ checked: false })
          this.previouslyChecked = this.state.checked
          checkbox!.click()
        }
      } else if (this.startX - 4 < endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({ checked: true })
          this.previouslyChecked = this.state.checked
          checkbox!.click()
        }
      }

      this.activated = false
      this.startX = null
      this.moved = false
    }
  }

  onChange(event: React.FocusEvent<HTMLInputElement>) {

  }

  handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    this.setState({ hasFocus: true })
  }

  handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    this.setState({ hasFocus: false })
  }

  handleRef(node: HTMLInputElement) {
    this.input = node;
  }

  render () {
    const { classnames } = this.props

    return (
      <ToggleButton
        classnames={classnames}
        hasFocus={this.state.hasFocus}
        checked={this.state.checked}
        handleClick={this.handleClick}
        handleBlur={this.handleBlur}
        handleFocus={this.handleFocus}
        handleTouchEnd={this.handleTouchEnd}
        handleTouchMove={this.handleTouchMove}
        handleTouchStart={this.handleTouchStart}
        handleRef={this.handleRef}
      />
    )
  }
}

export default ToggleButtonContainer;