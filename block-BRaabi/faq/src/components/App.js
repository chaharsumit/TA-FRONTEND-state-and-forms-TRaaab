import React from 'react';
import data from '../data';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      status: false,
      ques: ""
    }
  }
  toggleState = (question) => {
    if(!this.state.ques){
      this.setState({
        status: !this.state.status,
        ques: question,
      })
    }else{
      this.setState({
        status: !this.state.status,
        ques: "",
      })
    }
  }
  render(){
    return (
      <div className='container'>
        {
          data.map((question, index) => (
            <div key={index} className='question-container'>
              <div key={question.Q} className={this.state.ques === question.Q ? "question active" : "question"} onClick={() => this.toggleState(question.Q)}>
                {question.Q}
              </div>
              <div key={question.A} className={this.state.ques === question.Q ? "answer-alt" : "answer"}>
                {question.A}
              </div>
            </div>
          ))
        }
      </div>
    )
  }
};

export default App;