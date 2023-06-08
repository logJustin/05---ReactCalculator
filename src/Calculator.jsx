import { useState } from "react";
import './Calculator.css'

export default function Calculator() {
    const board = [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '+']
    const [calc, setCalc] = useState([0])

    const render = (e) => {
        setCalc(prevState => {
            let updatedCalc;
            prevState[0] === 0 ? updatedCalc = [e] : updatedCalc = [...prevState, e]
            // if (prevState[0] === 0) {
            //     updatedCalc = [e];
            // } else {
            //     updatedCalc = [...prevState, e];
            // }
            return updatedCalc;
        })
    }
    const clear = () => {
        return setCalc([0])
    }
    const evaluate = () => {
        const formula = calc.join('')
        const result = eval(formula)
        setCalc([result])
    }
    return (
        <>
            <div className="container col-10 col-md-4">
                <div className="calcBoard d-flex flex-row flex-wrap justify-content-evenly">
                    <span className="screen w-100 mb-2 px-3 fs-3 fw-b text-end rounded">{calc}</span>
                    {board.map(e =>
                        <div
                            className="element m-1 text-center rounded fs-4"
                            onClick={() => render(e)}>{e}
                        </div>
                    )}
                    <span
                        className="element m-1 text-center rounded fs-4"
                        onClick={clear}>Clear
                    </span>

                    <span
                        className="element m-1 text-center rounded fs-4"
                        onClick={evaluate}>Enter
                    </span>
                </div>
            </div>
        </>
    )
}