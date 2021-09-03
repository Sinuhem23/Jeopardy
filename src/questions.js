import React, { Component } from 'react';

/*



Make some html elements like a div where you will display the question, category and points. NOTE: You will need to look at the data that is returned to you and think back about how to access data from different datatypes (is it an array within an object? How do you access the info?).

Make another div in your HTML where you display the answer

Add an on click, that has a function that will toggle whether or not you can see the answer.

Add other elements to your page to make it make sense and look good (see attached image)

Make a div that has an h2 and two buttons

Inside the h2 keep score, start at 0

Make one button add the points to the score and the other to subtract points from the score (just add or subtract 1 point - using the points value from jService is Hungry for More)

Add a little style and color to your app

 */

class Questions extends Component {
  state = {
    id: '',
    answer: '',
    question: '',
    category: '',
    value: '',
  };

  getRandomQuestion = () => {
    fetch('http://jservice.io/api/random')
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        let q = data[0].id;
        // get answer
        if (q) {
          this.setState({
            id: data[0].id,
            question: data[0].question,
          });
        }
        // get question, category and points.
        if (q) {
          this.setState({
            id: data[0].id,

            value: data[0].value,
          });
        }
        if (q) {
          this.setState({
            id: data[0].id,

            category: data[0].category,
          });
        }
      });
  };
  answer = () => {
    fetch('http://jservice.io/api/random')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.answer);
        if (data[0].id) {
          this.setState({
            id: data[0].id,

            answer: data[0].answer,
          });
        }
      });
  };
  componentDidMount() {
    console.log('Component Mounted');
  }

  render() {
    return (
      <div>
        {/* Make a button labeled "Random Trivia Question" or "Get Question" or something descriptive. */}
        {/* On click, have this button that will make a GET request (using fetch) to get random trivia data. Let's start you off with a win by giving you the URL: http://jservice.io/api/random */}
        <button onClick={this.getRandomQuestion}> Get Question</button>
        <h3>Question: {this.state.question} </h3>
        <h3>Category: {this.state.category.title} </h3>
        <h3>Points: {this.state.value} </h3>
        <button onClick={this.answer}>Get Answer</button>
        <h3>Answer: {this.state.answer} </h3>
      </div>
    );
  }
}

export default Questions;
