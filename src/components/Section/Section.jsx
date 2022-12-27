import PropTypes from "prop-types";
import styles  from '../Section/Section.module.css';

export const Section = ({ title, children }) => (
    <section>
      <h1 className= {styles.header}>{title}</h1>
      <div>{children}</div>
    </section>
  );
  
  Section.propTypes = {        
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
