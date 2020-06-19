import React, {useState, useEffect} from 'react';

export default function Fox() {
    const [box, setBox] = useState({});
    const [solution, setSolution] = useState(generateSolution());
    const [mask, setMask] = useState(getMask());
    const [letter, setLetter] = useState("a");

    useEffect(() => {
        // Update the document title using the browser API
            console.log({box, letter, solution});
            if(isVictory()){
                alert("wins")
            }
        });

    function generateSolution() {
        return "a quick brown fox"
    }
    function getMask() {
        return "10001111111111111"
    }

    function isVictory() {
        for (var i = 0; i < solution.length; i++) {
            if (mask[i] == 1) {
                continue;
            }
            if (mask[i] == 0 && box[i] == solution[i]) {
                // Good
            } else {
                return false;
            }
        }
        return true;
    }

    function boxOnClick(index) {
        if (mask[index] == 0) {
            // 0 means mutable
            box[index] = letter;
        }
        setBox(Object.assign({}, box));
    }

    function getLetter(index) {
        return mask[index] == 1 ? solution[index] : box[index];
    }

    function getClass(index) {
        
        var c = "smallbox ";
        
        if (mask[index] == 1) {
            c += " solutionbox ";
        } else {
            if (!box[index] || (box[index].length == 0)) {

            }
            else if (solution[index] == box[index]) {
                c += " correct ";
            } else {
                c += " incorrect ";
            }
        }
        
        return c;
    }
    var letters = 'abcdefghijklmnopqrstuvwxyz';

    return (
        <div>
            <div>a quick brown fox</div>
            <div className="sudoku">
                {
                    solution.split('').map((item, index) => {
                        return <div className={getClass(index)} onClick={(e) => { boxOnClick(index); }}>{getLetter(index)}</div>
                    })
                }

            </div>
            <div className="sudoku">
                {
                    letters.split('').map((item, index) => {
                        return <div className="numberbox" onClick={(e) => { setLetter(letters[index]); }}>{letters[index]}</div>
                    })
                }

            </div>
        </div>
    )
}