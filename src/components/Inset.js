import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './Inset.css';


export default class Inset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headingType: this.props.tag,
      heading: this.props.heading,
      content: this.props.content,
      classType: this.props.class,
    }
  }

  render() {
    const HeadingType = `${this.state.headingType}`;

    return(
      <div className={'inset-wrapper ' + (this.state.classType ? this.state.ClassType : '')}>
        <div className='inset-inner'>
          <HeadingType>
            {this.state.heading}
          </HeadingType>
          <p>
            {this.state.content}
          </p>
        </div>
      </div>
    )
  }
}
