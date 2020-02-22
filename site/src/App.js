import React from 'react';
import Section from './Section';

class App extends React.Component {
  render() {
    return (
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
    );
  }
}

export default App;