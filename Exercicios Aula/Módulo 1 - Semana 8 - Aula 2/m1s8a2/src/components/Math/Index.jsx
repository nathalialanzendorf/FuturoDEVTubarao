import { Sum } from './SumComponent'
import { Div } from './DivComponent'
import { Sub } from './SubComponent'
import { Mult } from './MultComponent'

export function Calc({num1, num2}){
    return(
        <div>
            <Sum num1={num1} num2={num2} />
            <Sub num1={num1} num2={num2} />
            <Div num1={num1} num2={num2} />
            <Mult num1={num1} num2={num2} />
        </div>
    )
 }