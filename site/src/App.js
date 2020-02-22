import React from 'react';
import Navbar from './Navbar';
import Section from './Section';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          logo="https://enactusup.files.wordpress.com/2015/04/facebook-logo.png"
        />
        <div className="container">
          <Section 
            title="Hello World"
            body="Hello world hello world hello world hello world hello world world hello world hello world hello world hello world"
            image="https://i.ytimg.com/vi/ZuOqCm-KGGY/maxresdefault.jpg"
            />

          <Section 
            title="Hello World"
            body="Hello world hello world hello world hello world hello world world hello world hello world hello world hello world"
            image="https://i.ytimg.com/vi/ZuOqCm-KGGY/maxresdefault.jpg"
            />

          <Section 
            title="Hello World"
            body="Hello world hello world hello world hello world hello world world hello world hello world hello world hello world"
            image="https://i.ytimg.com/vi/ZuOqCm-KGGY/maxresdefault.jpg"
            />
        </div>
      </div>
    );
  }
}

export default App;