import React from "react";
import styles from './Slide.module.css';

export class Slide extends React.Component {
  render() {
    const { isActive, title, img, description, onButtonClick } = this.props;
    console.log(this.props);
    return (
      <div
        className={`${styles.slide} ${isActive ? styles.active : ''}`}
      >
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={() => onButtonClick('Hello')}>Click me</button>
      </div>
    )
  }
}