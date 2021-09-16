import React, { Component } from 'react';
import './question.css';

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
    toggle: false,
    question: '',
    category: '',
    value: '',
    score: 0,
  };
  // Let's start you off with a win by giving you the URL: http://jservice.io/api/random
  getRandomQuestion = () => {
    fetch('https://jservice.io/api/random')
      .then((res) => res.json())
      .then((data) => {
        let q = data[0];
        console.log(q);
        // get question, category, answer and points.
        if (q) {
          this.setState({
            question: q.question,
            value: q.value,
            category: q.category,
            answer: q.answer,
          });
        }
      });
  };
  add() {
    this.setState({
      score: this.state.score + this.state.value,
    });
  }
  subtract() {
    this.setState({
      score: this.state.score - this.state.value,
    });
  }
  reset() {
    this.setState({
      score: 0,
    });
    window.location.reload();
  }
  // answer = () => {
  //   fetch('http://jservice.io/api/random')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.answer);
  //       if (data[0].id) {
  //         this.setState({
  //           id: data[0].id,

  //           answer: data[0].answer,
  //         });
  //       }
  //     });
  // };
  componentDidMount() {
    console.log('Component Mounted');
  }
  // handleClose() {
  //   if (this.componentDidMount) {

  //   }
  // }
  componentWillUnmount() {
    console.log('un-mounting');
  }

  toggleFunction(answer) {
    if (this.state.toggle) {
    }
    console.log('Toggled Answer');
  }

  render() {
    return (
      <div className='main_container'>
        {/* Make a button labeled "Random Trivia Question" or "Get Question" or something descriptive. */}
        {/* On click, have this button that will make a GET request (using fetch) to get random trivia data.  */}
        <div className='inner_container'>
          <h1 className='jeopardy_text'>Lets Play Jeopardy!</h1>

          <button className='q_btn' onClick={this.getRandomQuestion}>
            {' '}
            Get Question
          </button>
          {/* Question */}
          <h3 className='title_text'>Question: </h3>
          <h3>{this.state.question}</h3>
          {/* Category */}
          <h3 className='title_text'>Category: </h3>
          <h3> {this.state.category.title}</h3>
          {/* Value */}
          <h3 className='title_text'>Value: </h3>
          <h3> {this.state.value}</h3>
          <div>
            {/* Your Points */}
            <h2 className='title_text'>Your Points: {this.state.score}</h2>
          </div>
          <div className='math_btn'>
            <button className='add_btn' onClick={() => this.add()}>
              Add To Score
            </button>
            <button className='subtract_btn' onClick={() => this.subtract()}>
              Subtract From Score
            </button>
            <button className='reset_btn' onClick={() => this.reset()}>
              Reset Points
            </button>
          </div>
          {/* <button onClick={this.answer}>Get Answer</button>
        <h3>Answer: {this.state.answer} </h3> */}
          <div className='answer_container'>
            <details open={() => this.state.toggle}>
              <summary className='answer_text'>Answer:</summary>
              <h3>{this.state.answer} </h3>
            </details>
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;
