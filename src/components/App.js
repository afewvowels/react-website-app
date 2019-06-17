import React from 'react';
import logo from '../logo.svg';
import './Global.css';
// Import elements
import Nav from './Nav';
import Hero from './Hero';
import Cta from './Cta';
import Inset from './Inset';
import TextBlock from './TextBlock';


function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Cta
        styling='left'
        cta='Get fresh coffee now!'
        label='Order now'
      />
      <TextBlock
        tag='h3'
        title='Lorem ipsum dolor est'
        body='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
        class='text-block-1'
      />
    </React.Fragment>
  );
}

export default App;
