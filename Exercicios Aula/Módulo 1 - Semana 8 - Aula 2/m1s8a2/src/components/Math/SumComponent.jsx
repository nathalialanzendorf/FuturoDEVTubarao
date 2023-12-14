import PropTypes from 'prop-types';

export function Sum(props){
     let result = props.num1 + props.num2;
        return(
                <div>
                     A <strong>soma</strong> dos numeros é {result}
                </div>
        )
}

Sum.propTypes = {
    num1: PropTypes.number.isRequired,
    num2: PropTypes.number.isRequired,
};
