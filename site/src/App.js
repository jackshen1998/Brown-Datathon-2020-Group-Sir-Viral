import React from 'react';
import Navbar from './Navbar';
import Section from './Section';

class App extends React.Component {
  render() {
    return (
      <div className=".app" style={{height: "100%"}}>
        <Navbar
          logo="https://www.freeiconspng.com/uploads/facebook-outline-transparent--24.png"
        />
        <div className="container" style={{marginTop: "4rem"}}>
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