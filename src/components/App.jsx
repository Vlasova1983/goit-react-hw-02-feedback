import {Component} from "react";
import{ Container }  from '../components/App.styled'
import {Section} from './Section/Section';
import {FeedbackOptions} from './Feedback/Feedback';
import {Statistics} from './Statistics/Statistics';
import {Notification} from './Notification/Notification';

export class App  extends Component { 
  state = {    
    good:  0,
    neutral: 0,
    bad:  0   
  };  
 
  handleClick = event => { 
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    })); 
              
  }

  countTotalFeedback=()=> {
    return this.state.good+this.state.bad+this.state.neutral    
  }

  countPositiveFeedbackPercentage=()=>{

   return Number((this.state.good/this.countTotalFeedback()*100).toFixed(1))    
  }
  
  render(){ 
    const total=this.countTotalFeedback();
    const positiveFeedbak = this.countPositiveFeedbackPercentage();        
   return (
      <Container>        
        <Section title="Please leave feedback">
           <FeedbackOptions 
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick} 
          /> 
        </Section>  
        {total===0 ? <Notification message = "There is no feedback"/>:
        <Section title="Statistics">
          <Statistics 
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={total} 
            positiveFeedbak={positiveFeedbak}
          />                   
        </Section>}                  
      </Container>        
    );
  }   
};
