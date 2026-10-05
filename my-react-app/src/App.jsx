import React from "react";
import "./App.css";

// Functional Component
function Welcome() {
  return (
    <div>
      <h2>Welcome to ReactJS</h2>
      <p>This is a Functional Component.</p>
    </div>
  );
}

// Functional Component
function Student() {
  return (
    <div>
      <h3>Student Information</h3>
      <p>Name: Srinidhi</p>
      <p>Class: AIML-A</p>
    </div>
  );
}

// Class Component
class Message extends React.Component {
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>Hello! This message is rendered using a Class Component.</p>
      </div>
    );
  }
}

// Nested Components
function App() {
  return (
    <div className="container">
      <h1>ReactJS Fundamentals</h1>

      <p>
        This is a Single Page Application created using ReactJS.
      </p>

      {/* Functional Components */}
      <Welcome />
      <Student />

      {/* Class Component */}
      <Message />

      {/* Nested Component */}
      <div className="box">
        <h2>Nested Components</h2>
        <Welcome />
        <Student />
      </div>
    </div>
  );
}

export default App;