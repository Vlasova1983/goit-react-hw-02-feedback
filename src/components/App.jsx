import {Component} from "react";
import{ Container }  from '../components/App.styled'
import {Section} from './Section/Section';
import {FeedbackOptions} from './Feedback/Feedback';
import {Statistics} from './Statistics/Statistics';
import {Notification} from './Notification/Notification';
import feedbackMap from '../components/path/feedbackMap.json'

export class App  extends Component { 
  state = {    
    good:  0,
    neutral: 0,
    bad:  0,
    total:  0,
    positiveFeedbak: 0
  };  

  handleClick = event => { 
    const { name } = event.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage()      
  }

  countTotalFeedback=()=> {
    this.setState(prevState => ({    
      total:prevState.good + prevState.bad + prevState.neutral
    }));
  }

  countPositiveFeedbackPercentage=()=>{
    this.setState(prevState => ({        
      positiveFeedbak: Number((prevState.good/prevState.total*100).toFixed(1))
    }));    
  }
  
  render(){
   return (
      <Container>        
        <Section title="Please leave feedback">
           <FeedbackOptions 
            options={feedbackMap}
            onLeaveFeedback={this.handleClick} 
          /> 
        {this.state.total===0 ? <Notification message = "There is no feedback"/>:
          <Statistics 
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.state.total} 
            positiveFeedbak={this.state.positiveFeedbak}
          /> }                  
        </Section>                  
      </Container>        
    );
  }   
};
