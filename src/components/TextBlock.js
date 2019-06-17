import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './TextBlock.css';

import Inset from './Inset'

export default class TextBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headingType: this.props.tag,
      heading: this.props.title,
      content: this.props.body,
      classType: this.props.class,
    }
  }

  render() {
    const TagType = `${this.state.headingType}`;

    return (
      <div className={'text-block-wrapper ' + (this.state.classType ? this.state.classType : '')}>
        <div className='main-content'>
          <TagType className='text-block-heading'>{this.state.heading}</TagType>
          <p className='text-block-body'>{this.state.content}</p>
        </div>
        <Inset
          tag='h3'
          heading='Lorem ipsum dolor est'
          content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
          class='inset-1'
        />
      </div>
    )
  }
}
