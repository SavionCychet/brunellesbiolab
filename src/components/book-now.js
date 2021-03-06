import React from 'react';

class BookNow extends React.Component {
    render() {
      return (
            <div className="booknow-section">
                <h1>BOOK YOUR APPOINTMENT NOW!</h1>
                <h2>Don't wait! Lines fill up quickly!</h2>
                <a href="/booking"><button className="booknow-button">BOOK NOW!</button></a>
            </div>
      );
    }
  }

export default BookNow;