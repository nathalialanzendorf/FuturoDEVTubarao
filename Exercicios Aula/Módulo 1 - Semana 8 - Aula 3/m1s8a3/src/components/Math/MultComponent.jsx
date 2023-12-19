import PropTypes from 'prop-types';

export function Mult({num1, num2}){
    let result = num1 * num2
     return(
         <div>
            A <strong>multiplicaçãp</strong> dos numeros é {result}
         </div>
     )
 }

Mult.propTypes = {
    num1: PropTypes.number.isRequired,
    num2: PropTypes.number.isRequired
};
