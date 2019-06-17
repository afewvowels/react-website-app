import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './Cta.css';

export default class Cta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleClass: this.props.styling,
      callToAction: this.props.cta,
      buttonText: this.props.label,
    }
  }
  render() {
    return (
      <div id='cta1-wrapper' className={(this.state.styleClass ? this.state.styleClass : "")}>
        <h2>{this.state.callToAction}</h2>
        <button className={`button`} type='button'>{this.state.buttonText}</button>
      </div>
    )
  }
}
