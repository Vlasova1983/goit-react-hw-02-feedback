
import styles  from '../Feedback/Feedback.module.css';
import PropTypes from "prop-types";

export const FeedbackOptions = ({options,onLeaveFeedback}) => { 
    return (       
       <div className={styles.link}>              
            {options.map(key=>( 
                <div key={key.id}>            
                    <button
                        className={styles.button}
                        name = {key.id}
                        onClick={onLeaveFeedback}                       
                    >
                    {key.title}                  
                    </button>
                </div>
            ))}   
       </div>         
    );    
};

FeedbackOptions.propTypes = {       
    options: PropTypes.arrayOf( PropTypes.shape()),
    onLeaveFeedback:PropTypes.func
}

