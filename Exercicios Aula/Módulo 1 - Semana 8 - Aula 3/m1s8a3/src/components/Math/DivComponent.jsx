import PropTypes from 'prop-types';

export function Div({num1, num2}){
    let result = num1 / num2
     return(
         <div>
            A <strong>divisão</strong> dos numeros é {result}
         </div>
     )
 }

Div.propTypes = {
    num1: PropTypes.number.isRequired,
    num2: PropTypes.number.isRequired
};
