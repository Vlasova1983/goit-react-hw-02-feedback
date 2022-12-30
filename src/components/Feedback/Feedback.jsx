
import styles  from '../Feedback/Feedback.module.css';
import PropTypes from "prop-types";

export const FeedbackOptions = ({options,onLeaveFeedback}) => { 
        return (       
       <div className={styles.link}>              
            {options.map(key=>( 
                <div key={key}>            
                    <button
                        className={styles.button}
                        name = {key}
                        onClick={onLeaveFeedback}                       
                    >
                    {key}                  
                    </button>
                </div>
            ))}   
       </div>         
    );    
};

FeedbackOptions.propTypes = {       
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback:PropTypes.func
}

