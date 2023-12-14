import PropTypes from 'prop-types';

export function Sub({num1, num2}){
    let result = num1 - num2
     return(
         <div>
            A <strong>subtração</strong> dos numeros é {result}
         </div>
     )
 }

Sub.propTypes = {
    num1: PropTypes.number.isRequired,
    num2: PropTypes.number.isRequired
};
