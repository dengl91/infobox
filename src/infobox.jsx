import React from 'react';
import styles from './infobox.module.css';
import { Slide } from './Slide';

export class InfoBox extends React.Component {
  state = {
    activeIndex: 0,
    slides: []
  }

  async componentDidMount() {
    const response = await fetch('https://boring-fe.herokuapp.com/react-hw-1')
    const slides = await response.json()
    this.setState({ slides })
  }

  renderSlide() {
    return this.state.slides.map((slide, i) => {
      const key = Math.floor(Math.random() * 1000).toString();
      const isActive = this.state.activeIndex === i;
      const onButtonClick = data => {
        console.log(data)
      }
      return <Slide key={key} {...{isActive, ...slide, onButtonClick}} />
    })
  }

  decreaseIndex() {
    this.setState({
      activeIndex:
        this.state.activeIndex === 0
          ? this.state.slides.length - 1
          : this.state.activeIndex - 1
    });
  }

  increaseIndex() {
    this.setState({
      activeIndex:
        this.state.activeIndex + 1 < this.state.slides.length
          ? this.state.activeIndex + 1
          : 0
    });
  }

  render() {
    return (
      <div className={styles.infobox}>
        <div className={styles.slides}>
          {this.renderSlide()}
        </div>
        <div className={styles.controls}>
          <button className={styles.control}>{'<<<'}</button>
          <button
            className={styles.control}
            onClick={() => this.decreaseIndex()}
          >
            {'<'}
          </button>
          <button
            className={styles.control}
            onClick={() => this.increaseIndex()}
          >
            {'>'}
          </button>
          <button
            className={styles.control}
          >
            {'>>>'}
          </button>
        </div>
      </div>
    )
  }
}