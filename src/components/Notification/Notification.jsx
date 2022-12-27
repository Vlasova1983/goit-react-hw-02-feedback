import PropTypes from "prop-types";


export const Notification = ({message}) => (
    <section>
      <p style={{
                  color: 'blue',
                  fontSize: '20px',
                  fontWeight: '600'

                }} 
       >{message}</p>      
    </section>
  );
  
  Notification.propTypes = {        
    message: PropTypes.string.isRequired
}