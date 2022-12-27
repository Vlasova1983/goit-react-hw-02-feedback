
import styles  from '../Statistics/Statistics.module.css';
import PropTypes from "prop-types";

export const  Statistics = ({good,neutral,bad,total,positiveFeedbak}) =>{
return (
    <div>
      <h2 className = {styles.name}>Statistics</h2>        
        <div className= {styles.list}>
          <p >Good: {good}</p>
          <p >Neutral: {neutral}</p>  
          <p >Bad: {bad}</p>             
        </div>                  
      <div className= {styles.data}>
        <p>Total: {total}</p>
        <p>Positive feedback: {positiveFeedbak} %</p>
      </div>       
    </div>     
  );
}

Statistics.propTypes = {        
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbak: PropTypes.number.isRequired
}
      
 



 