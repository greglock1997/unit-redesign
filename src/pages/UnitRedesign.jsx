import React, { useState, useEffect } from 'react';
import unitRedesignStyles from '../assets/styles/unit-redesign.module.css';

function Question1({ pageId, selectedAnswers, handleAnswerSelection, handleCorrectAnswerSelection }) {
    const initialAnswer = selectedAnswers[pageId] || '';
    const [answerInput, setAnswerInput] = useState(initialAnswer);
    const [answerCorrect, setAnswerCorrect] = useState('');

    const handleInputChange = (event) => {
        setAnswerInput(event.target.value);
    };

    const checkAnswer = () => {
        if (answerInput === '165.51') {
            setAnswerCorrect(true);
            handleAnswerSelection(pageId, answerInput);
            handleCorrectAnswerSelection(pageId, true);
        } else if (answerInput === '') {
            setAnswerCorrect('');
        } else {
            setAnswerCorrect(false);
            handleAnswerSelection(pageId, answerInput);
            handleCorrectAnswerSelection(pageId, false);
        };
    };

    return (
        <div className={`${unitRedesignStyles['page']} ${unitRedesignStyles['page-input']}`}>
            <h1>Question 1</h1>
            <p>
                Imagine a customer has been with us for 91 days and our current standing charge is
                27p/day. The customer has also used 783kwH of energy during this time, our unit rate
                is 18p/kWh. Calculate the customer's total cost (in £) during this time and enter it into the
                box below.
            </p>
            <input 
                type="text" 
                placeholder='Answer'
                value={answerInput}
                onChange={handleInputChange}
            />
            {answerCorrect === true ? (
                <button className={unitRedesignStyles['button-correct']}>Correct!</button>
            ) : answerCorrect === false ? (
                <button className={unitRedesignStyles['button-incorrect']} onClick={checkAnswer}>Incorrect, try again</button>
            ) : (
                <button className={unitRedesignStyles['button-neutral']} onClick={checkAnswer}>
                    Check Answer
                </button>
            )}
        </div>
    )
}

function Question2({ pageId, selectedAnswers, handleAnswerSelection, handleCorrectAnswerSelection }) {
    const [selectedAnswer, setSelectedAnswer] = useState(selectedAnswers[pageId]);

    const correctAnswer = 'kWh';

    useEffect(() => {
        setSelectedAnswer(selectedAnswers[pageId] || null);
    }, [pageId, selectedAnswers]);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        handleAnswerSelection(pageId, answer);

        if (answer === correctAnswer) {
            handleCorrectAnswerSelection(pageId, true);
            console.log("true");
        } else {
            handleCorrectAnswerSelection(pageId, false);
            console.log("false");
        }
    }

    return (
        <div className={`${unitRedesignStyles['page']} ${unitRedesignStyles['page-multiple-answer']}`}>
            <h1>Question 2</h1>
            <p>Which of these is a common unit for energy usage?</p>
            <button
                className={`${
                    selectedAnswer === 'mWh'
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick('mWh')}
                disabled={selectedAnswer ? true : false}
            >
                mWh
            </button>
            <button
                className={`${
                    selectedAnswer === 'kWh'
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick('kWh')}
                disabled={selectedAnswer ? true : false}
            >
                kWh
            </button>
            <button
                className={`${
                    selectedAnswer === 'gWh'
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick('gWh')}
                disabled={selectedAnswer ? true : false}
            >
                gWh
            </button>
            <button
                className={`${
                    selectedAnswer === 'Wh'
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick('Wh')}
                disabled={selectedAnswer ? true : false}
            >
                Wh
            </button>
            
            {selectedAnswer && (
                <button 
                    className="try-again-button"
                    onClick={() => setSelectedAnswer('')}
                >
                    <i class="fa-solid fa-arrow-rotate-left"></i>
                </button>
            )}
        </div>
    )
}

function Question3({ pageId, selectedAnswers, handleAnswerSelection, handleCorrectAnswerSelection }) {
    const initialAnswer = selectedAnswers[pageId] || '';
    const [answerInput, setAnswerInput] = useState(initialAnswer);
    const [answerCorrect, setAnswerCorrect] = useState('');

    const handleInputChange = (event) => {
        setAnswerInput(event.target.value);
    };

    const checkAnswer = () => {
        if (answerInput === '823') {
            setAnswerCorrect(true);
            handleAnswerSelection(pageId, answerInput);
            handleCorrectAnswerSelection(pageId, true);
        } else if (answerInput === '') {
            setAnswerCorrect('');
        } else {
            setAnswerCorrect(false);
            handleAnswerSelection(pageId, answerInput);
            handleCorrectAnswerSelection(pageId, false);
        };
    };

    return (
        <div className={`${unitRedesignStyles['page']} ${unitRedesignStyles['page-input']}`}>
            <h1>Question 3</h1>
            <p>
                In this scenario the customer has been receiving their energy from this supplier
                for one year. The customer has consumed 5000kWh of electricity during this time.
                The standing charge of the supplier is 20p/day and the unit rate is 15p/kWh. The 5%
                VAT rate is already included in these rates. Calulate the customer's total cost for
                the year in £ and enter it into the box below.
            </p>
            <input 
                type="text" 
                placeholder='Answer'
                value={answerInput}
                onChange={handleInputChange}
            />
            {answerCorrect === true ? (
                <button className={unitRedesignStyles['button-correct']}>Correct!</button>
            ) : answerCorrect === false ? (
                <button className={unitRedesignStyles['button-incorrect']} onClick={checkAnswer}>Incorrect, try again</button>
            ) : (
                <button className={unitRedesignStyles['button-neutral']} onClick={checkAnswer}>
                    Check Answer
                </button>
            )}
        </div>
    )    
}

function Question4({ pageId, selectedAnswers, handleAnswerSelection, handleCorrectAnswerSelection }) {
    const initialAnswer = selectedAnswers[pageId] || '';
    const [answerInput, setAnswerInput] = useState(initialAnswer);
    const [answerCorrect, setAnswerCorrect] = useState('');

    const handleInputChange = (event) => {
        setAnswerInput(event.target.value);
    };

    const checkAnswer = () => {
        if (answerInput === '1584.33') {
            setAnswerCorrect(true);
            handleAnswerSelection(pageId, answerInput)
            handleCorrectAnswerSelection(true);
        } else if (answerInput === '') {
            setAnswerCorrect('');
        } else {
            setAnswerCorrect(false);
            handleCorrectAnswerSelection(false);
        };
    };

    return (
        <div className={`${unitRedesignStyles['page']} ${unitRedesignStyles['page-input']}`}>
            <h1>Question 4</h1>
            <div className={unitRedesignStyles['page-row']}>
                <img src="https://images.unsplash.com/photo-1625980344922-a4df108b2bd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80" alt="" />
                <ul>
                    <li>A customer has been receiving energy for <span>1 year</span></li>
                    <li>They have consumed <span>6500kWh</span> of electricty</li>
                    <li>The standing charge is  <span>22.1p/day</span></li>
                    <li>The unit rate for electricity is <span>16.8p/kWh</span></li>
                    <li>All rates include the <span>5%</span> VAT tax rate</li>
                </ul>
            </div>
            <input 
                type="text" 
                placeholder='Answer'
                value={answerInput}
                onChange={handleInputChange}
            />
            {answerCorrect === true ? (
                <button className={unitRedesignStyles['button-correct']}>Correct!</button>
            ) : answerCorrect === false ? (
                <button className={unitRedesignStyles['button-incorrect']} onClick={checkAnswer}>Incorrect, try again</button>
            ) : (
                <button className={unitRedesignStyles['button-neutral']} onClick={checkAnswer}>
                    Check Answer
                </button>
            )}
        </div>
    )    
}

function Question5({ pageId, selectedAnswers, handleAnswerSelection, handleCorrectAnswerSelection }) {
    const initialAnswer = selectedAnswers[pageId] || '';
    const [answerInput, setAnswerInput] = useState(initialAnswer);
    const [answerCorrect, setAnswerCorrect] = useState('');

    const handleInputChange = (event) => {
        setAnswerInput(event.target.value);
    };

    const checkAnswer = () => {
        if (answerInput === '1272.75') {
            setAnswerCorrect(true);
            handleAnswerSelection(pageId, answerInput);
            handleCorrectAnswerSelection(true);
        } else if (answerInput === '') {
            setAnswerCorrect('');
        } else {
            setAnswerCorrect(false);
            handleAnswerSelection(pageId, answerInput);
            handleCorrectAnswerSelection(false);
        };
    };

    return (
        <div className={`${unitRedesignStyles['page']} ${unitRedesignStyles['page-input']}`}>
            <h1>Question 5</h1>
            <p>
                This time, a customer has been receiving energy from their supplier for 239 days.
                They've consumed 5793kWh of electricity and 9847kWh of gas. The supplier's electricty
                standing charge is 17.17706p/day with a unit rate of 14.51791p/kWh. For gas the standing
                charge is 19.48624p/day and the unit rate is 2.879p/kWh. The rates above do not include
                the 5% VAT. How much does this customer spend in 239 days?
            </p>
            <input 
                type="text" 
                placeholder='Answer'
                value={answerInput}
                onChange={handleInputChange}
            />
            {answerCorrect === true ? (
                <button className={unitRedesignStyles['button-correct']}>Correct!</button>
            ) : answerCorrect === false ? (
                <button className={unitRedesignStyles['button-incorrect']} onClick={checkAnswer}>Incorrect, try again</button>
            ) : (
                <button className={unitRedesignStyles['button-neutral']} onClick={checkAnswer}>
                    Check Answer
                </button>
            )}
        </div>
    )    
}

function Question6({ pageId, selectedAnswers, handleAnswerSelection, handleCorrectAnswerSelection }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const correctAnswer = 'Estimated Annual Consumption';

    useEffect(() => {
        setSelectedAnswer(selectedAnswers[pageId] || null);
    }, [pageId, selectedAnswers]);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        handleAnswerSelection(pageId, answer);

        if (answer === correctAnswer) {
            handleCorrectAnswerSelection(pageId, true);
        } else {
            handleCorrectAnswerSelection(pageId, false);
        }
    }

    return (
        <div className={`${unitRedesignStyles['page']} ${unitRedesignStyles['page-multiple-answer']}`}>
            <h1>Question 6</h1>
            <p>Which of these does the acronym <i>EAC</i> stand for?</p>
            <button
                className={`${
                    selectedAnswer === 'Energy Assessment Certification'
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick('Energy Assessment Certification')}
            >
                Energy Assessment Certification
            </button>
            <button
                className={`${
                    selectedAnswer === 'Economic Annual Calculation'
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick('Economic Annual Calculation')}
            >
                Economic Annual Calculation
            </button>
            <button
                className={`${
                    selectedAnswer === 'Estimated Annual Consumption'
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick('Estimated Annual Consumption')}
            >
                Estimated Annual Consumption
            </button>
            <button
                className={`${
                    selectedAnswer === 'Expected Annual Consumption'
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick('Expected Annual Consumption')}
            >
                Expected Annual Consumption
            </button>
        </div>
    )
}

function Question7({ pageId, selectedAnswers, handleAnswerSelection, handleCorrectAnswerSelection }) {
    const initialAnswer = selectedAnswers[pageId] || '';
    const [answerInput, setAnswerInput] = useState(initialAnswer);
    const [answerCorrect, setAnswerCorrect] = useState('');

    const handleInputChange = (event) => {
        setAnswerInput(event.target.value);
    };

    const checkAnswer = () => {
        if (answerInput === '357.4') {
            setAnswerCorrect(true);
            handleAnswerSelection(pageId, answerInput);
            handleCorrectAnswerSelection(pageId, true);
        } else if (answerInput === '') {
            setAnswerCorrect('');
        } else {
            setAnswerCorrect(false);
            handleAnswerSelection(pageId, answerInput);
            handleCorrectAnswerSelection(pageId, false);
        };
    };

    return (
        <div className={`${unitRedesignStyles['page']} ${unitRedesignStyles['page-input']}`}>
            <h1>Question 7</h1>
            <p>
                Below is a table showing a customer's electricity usage from
                January to April. Calculate this customer's total energy consumption
                in kWh for February. 
            </p>
            <table>
                    <tr>
                        <th>Date</th>
                        <th>Meter Readings</th>
                    </tr>
                    <tr>
                        <td>2023-01-01</td>
                        <td>3568.4 kWh</td>
                    </tr>
                    <tr>
                        <td>2023-02-01</td>
                        <td>3801.2 kWh</td>
                    </tr>
                    <tr>
                        <td>2023-03-01</td>
                        <td>4158.6 kWh</td>
                    </tr>
                    <tr>
                        <td>2023-04-01</td>
                        <td>4390.1 kWh</td>
                    </tr>
                </table>
            <input 
                type="text" 
                placeholder='Answer'
                value={answerInput}
                onChange={handleInputChange}
            />
            {answerCorrect === true ? (
                <button className={unitRedesignStyles['button-correct']}>Correct!</button>
            ) : answerCorrect === false ? (
                <button className={unitRedesignStyles['button-incorrect']} onClick={checkAnswer}>Incorrect, try again</button>
            ) : (
                <button className={unitRedesignStyles['button-neutral']} onClick={checkAnswer}>
                    Check Answer
                </button>
            )}
        </div>
    )    
}

function Question8({ pageId, selectedAnswers, handleAnswerSelection, handleCorrectAnswerSelection }) {
    const [selectedAnswer, setSelectedAnswer] = useState(selectedAnswers[pageId]);

    const correctAnswer = '3100kWh';

    useEffect(() => {
        setSelectedAnswer(selectedAnswers[pageId] || null);
    }, [pageId, selectedAnswers]);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        handleAnswerSelection(pageId, answer);

        if (answer === correctAnswer) {
            handleCorrectAnswerSelection(pageId, true);
        } else {
            handleCorrectAnswerSelection(pageId, false);
        }
    }

    return (
        <div className={`${unitRedesignStyles['page']} ${unitRedesignStyles['page-multiple-answer']}`}>
            <h1>Question 8</h1>
            <p>
                According to OFGEM, what is the annual energy consumption
                of the average household in the United Kingdom?
            </p>
            <button
                className={`${
                    selectedAnswer === '4000kWh'
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick('4000kWh')}
            >
                4000kWh
            </button>
            <button
                className={`${
                    selectedAnswer === '2700kWh'
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick('2700kWh')}
            >
                2700kWh
            </button>
            <button
                className={`${
                    selectedAnswer === '3100kWh'
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick('3100kWh')}
            >
                3100kWh
            </button>
            <button
                className={`${
                    selectedAnswer === '3600kWh'
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick('3600kWh')}
            >
                3600kWh
            </button>
        </div>
    )
}

function ProgressBar({pageNumber, pages}) {
    const completionPercentage = (pageNumber / (pages.length - 1)) * 100;

    const progressBarStyle = {
        width: `${completionPercentage}%`
    }

    return (
        <div className={unitRedesignStyles['unit-progress-bar-container']}>
            <div 
                className={unitRedesignStyles['unit-progress-bar']}
                style={progressBarStyle}    
            >
            </div>
        </div>
    )
}

// Page Component

export default function UnitRedesign() {
    const [pageNumber, setPageNumber] = useState(0);
    const [dashboardPageNumber, setDashboardPageNumber] = useState(0);
    const [completedPages, setCompletedPages] = useState([]);

    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);

    const [dashboardStatus, setDashboardStatus] = useState('open');
    const [sidebarStatus, setSidebarStatus] = useState('open');

    const handleAnswerSelection = (pageId, answer) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [pageId]: answer,
        }));
    };

    const handleCorrectAnswerSelection = (pageId, correct) => {
        setCorrectAnswers((prevCorrectAnswers) => ({
            ...prevCorrectAnswers,
            [pageId]: correct
        }));

        if (correct) {
            setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1);
        }
    }


    const handlePageCompletion = (pageId) => {
        if (!completedPages.includes(pageId)) {
            setCompletedPages([...completedPages, pageId]);
        }
        console.log(completedPages);
    }

    const resetPage = () => {
        setPageNumber(0);
        setCompletedPages([]);
        setSelectedAnswers([]);
        setCorrectAnswers([]);
        setNumberOfCorrectAnswers(0);
    }

    const pages = [
        (
            <div className={unitRedesignStyles['page']}>
                <h1>Key Points</h1>
                <ul>
                    <li>Introduction to energy bills</li>
                    <li>Calculating bills</li>
                    <li>Unit rates and standing charges </li>
                    <li>Measure of gas and electricity units</li>
                    <li>Scenarios</li>
                    <li>How is usage calculated</li>
                    <li>Estimated meter reads</li>
                </ul>
            </div>
        ),
        (   
            <div className={unitRedesignStyles['page']}>
                <div>
                    <h1>Calculating an energy bill</h1>
                    <p className={unitRedesignStyles['blue']}>Customers may not always understand their bill, remember that as experts it is our responsibility to explain it to them.</p>
                    <ul>
                        <li>Bills reflect P x Q</li>
                        <li>P = Price of energy, set by the energy provider</li>
                        <li>Q = Quantity of energy used, set by the customer</li>
                        <li>VAT for energy is charged at 5%, not 20%</li>
                    </ul>
                    <b><h3>Let's explore this customer's bill...</h3></b>
                </div>
                <img src="src\assets\images\Picture1.png" alt="" />
            </div>
        ),
        (
            <div className={unitRedesignStyles['page']}>
                <h1>Unit rate</h1>
                <p>The <b>unit rate</b> is the price-per-unit of the gas and electricity you consume in your household. For exmaple, electricity is measured in
                kilowatt hours (kWh), so a unit rate would be the cost per kWh used. Unit rates can vary depending on several reasons : </p>
                <ul>
                    <li>Your location</li>
                    <li>Your preferred payment method</li>
                    <li>Your energy tariff</li>
                </ul>
                <p>For example, a customer has used 300kWh of electricity and our unit rate is 16.5p/kWh. Using the Price x Quantity forumula
                    we can calculate their bill. <br /><br /> <b>16.5p x 300kWh = 4950p = £49.50</b>
                </p>
            </div>
        ),
        (
            <div className={unitRedesignStyles['page']}>
                <h1>Standing charge</h1>
                <p>A <b>standing charge</b> is a fixed daily amount that you must pay no matter how much energy you use.
                It even applies to properties that are empty for part of the year, like a holiday home. The charge coverd the cost
                of supplying the property with gas and electricity. It can thought of as a line rental for a mobile phone, but with energy instead.
                These costs include : 
                </p>
                <ul>
                    <li>Using and maintaining the networks, wires and pipes that carry gas and electricity
                        to customers' homes
                    </li>
                    <li>Keeping homes connected to the energy network</li>
                    <li>Carrying out meter readings</li>
                    <li>Payment towards government initiatives that help vulnerable households and reduce CO2 emissions</li>
                </ul>
                <p>
                    For example, a customer has been with a supplier for 30 days and the supplier's standing charge
                    is 21p/day. Using the Price x Quantity formula, <br /> <br /> <b>21p x 30days = 630p = £63</b>
                </p>
                <p>Now let's try a quick test</p>
            </div>
        ),
        (
            <Question1 
                pageId={1} 
                selectedAnswers={selectedAnswers} 
                handleAnswerSelection={handleAnswerSelection}
                handleCorrectAnswerSelection={handleCorrectAnswerSelection} 
            /> 
        ),
        (
            <Question2
                pageId={2}
                selectedAnswers={selectedAnswers}
                handleAnswerSelection={handleAnswerSelection}
                handleCorrectAnswerSelection={handleCorrectAnswerSelection}
            />
        ),
        (
            <div className={unitRedesignStyles['page']}>
                <div>
                    <h1>Measure of gas and electricity units</h1>
                    <p>
                        Electrictity meters record the amount of energy used in homes
                    </p>
                    <p>
                        The calculations used to generate gas bills are prescribed in <b><i>The Gas (Calculation of Thermal Energy)
                        Regulations (SI 1996/439).</i></b> The Office of Gas and Electricity Markets it the energy regulator and has
                        responsibility for these refulations. Under this governence suppliers bill customers in kilowatt hours for both
                        gas and electricity.
                    </p>
                    <p>To convert the gas units from cubic meters to kilowatt hours we use this formula : </p>
                    <b>
                        <ul>
                            <li>Units Consumed (cubic meters)</li>
                            <li>x Volume Conversion Factor (1.0 for cubic meters)</li>
                            <li>x Volume Correction (1.02264 to account for temperature and pressure)</li>
                            <li>x Calorific Value (39.5 Joules per m³)</li>
                            <li>÷ 3600 (3600 seconds in each hour)</li>
                            <li>x 1000 (Number of Joules in a kilowatt hour)</li>
                            <li>= Number of kilowatt hours</li>
                        </ul>
                    </b>
                </div>
                <img src="src\assets\images\Picture2.png" alt="" />
            </div>
        ),
        (
            <Question3
                pageId={3}
                selectedAnswers={selectedAnswers}
                handleAnswerSelection={handleAnswerSelection}
                handleCorrectAnswerSelection={handleCorrectAnswerSelection}
            />
        ),
        (
            <Question4
                pageId={4}
                selectedAnswers={selectedAnswers}
                handleAnswerSelection={handleAnswerSelection}
                handleCorrectAnswerSelection={handleCorrectAnswerSelection}
            />
        ),
        (
            <Question5
                pageId={5}
                selectedAnswers={selectedAnswers}
                handleAnswerSelection={handleAnswerSelection}
                handleCorrectAnswerSelection={handleCorrectAnswerSelection}
            />
        ),
        (
            <div className={unitRedesignStyles['page']}>
                <h1>How electricity usage is calculated</h1>
                <p>
                    Electricity usage is calculated from either <b>actual</b> meter readings
                    or <b>estimated</b> meter readings. Here is an example of some readings below : 
                </p>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Meter Readings</th>
                    </tr>
                    <tr>
                        <td>2023-09-01</td>
                        <td>1250.4 kWh</td>
                    </tr>
                    <tr>
                        <td>2023-10-01</td>
                        <td>1571.2 kWh</td>
                    </tr>
                    <tr>
                        <td>2023-11-01</td>
                        <td>1698.7 kWh</td>
                    </tr>
                    <tr>
                        <td>2023-12-01</td>
                        <td>2044.3 kWh</td>
                    </tr>
                </table>
                <p>
                    To find the customer's monthly consumption, simply subtract the previous month's
                    reading from this month's. So in this case for the month of November : <br /><br /><b>2044.3 - 1698.7 = 345.6kWh</b>
                </p>
            </div>            
        ),
        (
            <div className={unitRedesignStyles['page']}>
                <h1>How gas usage is calculated</h1>
                <p>
                    Gas usage is calculated from either <b>actual</b> meter readings
                    or <b>estimated</b> meter readings and requires a conversion from m³ or ft³ into kWh. 
                    Here is an example of some readings below : 
                </p>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Meter Readings</th>
                    </tr>
                    <tr>
                        <td>2022-01-01</td>
                        <td>5637.4m³</td>
                    </tr>
                    <tr>
                        <td>2022-02-01</td>
                        <td>5984.6m³</td>
                    </tr>
                    <tr>
                        <td>2023-03-01</td>
                        <td>6389.1m³</td>
                    </tr>
                </table>
                <p>
                    Again, to find the customer's monthly consumption, simply subtract the previous month's
                    reading from this month's. So in this case for the month of February : <br /><br /><b>6389.1 - 5984.6 = 404.5m³</b>
                </p>
                <p>
                    Then, we need to convert this from cubic meters into kilowatt hours : <br /><br />
                    <b>
                        Units Consumed (404.5m³) <br /> 
                        x Volume Conversion Factor (1.0) <br />
                        x Volume Correction (1.02264) <br />
                        x Calorific Value (39.5m³) <br />
                        ÷ Joules Conversion (3.6) <br />
                        = Total Usage In kWh (4538.75) <br />
                    </b>
                </p>
            </div>            
        ),
        (
            <div className={unitRedesignStyles['page']}>
                <h1>Estimated Meter Reads</h1>
                <p>
                    <b>How is an estimated meter reading calculated?</b>
                    <br />
                    The estimated meter reading is derived from a customer's
                    estimated annual consumption <b>(EAC)</b> and gas estimated
                    annual quantity <b>(AQ)</b>.
                </p>
                <p>
                    <b>The estimated annual consumption</b> is calculated by taking all
                    meter readings that will have been provided by the property over a
                    period of one year or more and the average usage per month is calculated
                    using this figure. The estimate for each meter is managed within a centralised
                    industry database.  
                </p>
                <p>
                    <i><b>Remember that the estimated readings can vary slightly from actual usage.</b></i>
                </p>
                <p>
                    Estimated annual consumption (EAC) helps an energy provider to predict how much a customer
                    should be paying each month by direct debit, accounting for advance payment and building
                    credit during the summer to compensate for higher bills during winter.
                </p>
                <p>
                    Accoring to The Office of Gas and Electricity Markets, the 'Average' home in the UK
                    uses <b>3100kWh of electricity</b> and <b>12,000kWh of gas</b> per year. 
                </p>
            </div>
        ),
        (
            <Question6
                pageId={6}
                selectedAnswers={selectedAnswers}
                handleAnswerSelection={handleAnswerSelection}
                handleCorrectAnswerSelection={handleCorrectAnswerSelection}
            />
        ),
        (
            <Question7
                pageId={7}
                selectedAnswers={selectedAnswers}
                handleAnswerSelection={handleAnswerSelection}
                handleCorrectAnswerSelection={handleCorrectAnswerSelection}
            />
        ),
        (
            <Question8 
                pageId={8}
                selectedAnswers={selectedAnswers}
                handleAnswerSelection={handleAnswerSelection}
                handleCorrectAnswerSelection={handleCorrectAnswerSelection}
            />
        ),
        (
            <div className={unitRedesignStyles['final-page']}>
                <h1>You've completed this unit! 🎉</h1>
                <h2>You scored {numberOfCorrectAnswers}/8</h2>
                <button><b>Click here to go onto the next unit</b></button>
                <button
                    className={unitRedesignStyles['reset-button']}
                    onClick={resetPage}
                >
                    <b>Try again?</b>
                </button>
            </div>
        )
    ];

    const dashboardPages = [
        (
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus nibh magna, eu semper erat hendrerit at. Vivamus eget dignissim diam, at suscipit nisl. Praesent egestas ullamcorper lobortis. Praesent eu porttitor mauris, ut semper nulla. Duis vel malesuada augue. Phasellus leo justo, tristique quis massa congue, congue semper nisl. Aenean posuere eros a nulla malesuada, a laoreet leo porta. Integer sed est orci. Morbi aliquam accumsan tempor. Nam facilisis tortor nibh, non ullamcorper leo sollicitudin et. Sed ut cursus velit. Aenean tempor felis tellus, ac porttitor sem molestie vitae. Duis sit amet rhoncus augue, sed condimentum justo. Donec eget venenatis lectus, id maximus nisl. Vivamus rutrum nulla eget ex commodo ullamcorper. Quisque maximus nulla nec neque tincidunt, accumsan sagittis dui ultricies.</p>
        ),
        (
            <textarea name="" id="" cols="150" rows="5"></textarea>
        )
    ]

    const prevPage = () => {
        if (pageNumber > 0) {
            setPageNumber(pageNumber - 1);
        }
    };

    const nextPage = () => {
        setPageNumber(pageNumber + 1);
    };

    return (
        <div className={unitRedesignStyles['unit-container']}>
            <div className={unitRedesignStyles['unit-header']}>ZOG Solutions Training Portal</div>
            <div className={unitRedesignStyles['unit-main']}>
                <div className={unitRedesignStyles['unit-main-column-1']}>
                    <ProgressBar pageNumber={pageNumber} pages={pages}/>
                    <div className={`${
                        dashboardStatus === 'open'
                        ? unitRedesignStyles['unit-main-page-container']
                        : unitRedesignStyles['unit-main-page-container-full-height'] 
                    }`}>
                        {pages[pageNumber]}
                        {pageNumber > 0 && (
                            <button 
                                className={unitRedesignStyles['unit-main-page-left-button']}
                                onClick={prevPage}    
                            ><i class="fa-solid fa-arrow-left"></i></button>
                        )}
                        {pageNumber < (pages.length - 1) && (
                            <button 
                                className={unitRedesignStyles['unit-main-page-right-button']}
                                onClick={() => {
                                    handlePageCompletion(pageNumber);
                                    nextPage();
                                }}
                            ><i class="fa-solid fa-arrow-right"></i></button>
                        )}
                        {sidebarStatus === "closed" &&(
                            <button
                                className={unitRedesignStyles['expand-sidebar-button']}
                                onClick={() => setSidebarStatus('open')}
                            >
                                <i class="fa-solid fa-angle-left"></i>
                            </button>
                        )}
                        {dashboardStatus === "closed" &&(
                            <button
                                className={unitRedesignStyles['expand-dashboard-button']}
                                onClick={() => setDashboardStatus('open')}
                            >
                                <i class="fa-solid fa-angle-right"></i>
                            </button>
                        )}
                    </div>
                    {dashboardStatus === 'open' && (
                        <div className={unitRedesignStyles['unit-main-column-1-dashboard']}>
                            <div className={unitRedesignStyles['unit-main-column-1-dashboard-header']}>
                                <h3
                                    className={dashboardPageNumber === 0 && unitRedesignStyles['selected']}
                                    onClick={() => setDashboardPageNumber(0)}
                                >
                                    Overview
                                </h3>
                                <h3
                                    className={dashboardPageNumber === 1 && unitRedesignStyles['selected']}
                                    onClick={() => setDashboardPageNumber(1)}
                                >
                                    Notes
                                </h3>
                                <h3
                                    className={dashboardPageNumber === 2 && unitRedesignStyles['selected']}
                                    onClick={() => setDashboardPageNumber(2)}
                                >
                                    Learning Tools
                                </h3>
                                <h3
                                    className={dashboardPageNumber === 3 && unitRedesignStyles['selected']}
                                    onClick={() => setDashboardStatus('closed')}
                                >
                                    Close
                                </h3>
                            </div>
                            <div className={unitRedesignStyles['unit-main-column-1-dashboard-content']}>
                                {dashboardPages[dashboardPageNumber]}
                            </div>
                        </div>
                    )}
                    </div>
                    {sidebarStatus === 'open' && (
                        <div className={unitRedesignStyles['unit-main-column-2']}>
                            <div className={unitRedesignStyles['unit-main-column-2-header']}>
                                <h2>Course Content</h2>
                                <h3 onClick={() => setSidebarStatus('closed')}><i class="fa-solid fa-delete-left"></i></h3>
                            </div>
                            <div className={unitRedesignStyles['unit-main-column-2-content']}>
                                <div className={unitRedesignStyles['unit-main-section']}>
                                    <h3>Section 1 : Intro</h3>
                                    <h5>21 min</h5>
                                </div>
                                <div className={unitRedesignStyles['unit-main-section']}>
                                    <h3>Section 2 : The Energy Industry</h3>
                                    <h5>24 min</h5>
                                </div>
                                <div className={unitRedesignStyles['unit-main-section-selected']}>
                                    <h3>Section 3 : Energy Bills</h3>
                                    <h5>17 min</h5>
                                </div>
                                <div className={unitRedesignStyles['unit-main-section']}>
                                    <h3>Section 4 : Energy Price Gaurantee</h3>
                                    <h5>11 min</h5>
                                </div>
                                <div className={unitRedesignStyles['unit-main-section']}>
                                    <h3>Section 5 : Metering</h3>
                                    <h5>38 min</h5>
                                </div>
                                <div className={unitRedesignStyles['unit-main-section']}>
                                    <h3>Section 6 : Customer Vulnerabilities</h3>
                                    <h5>15 min</h5>
                                </div>
                                <div className={unitRedesignStyles['unit-main-section']}>
                                    <h3>Section 7 : Debt And Payment Plans</h3>
                                    <h5>11 min</h5>
                                </div>
                                <div className={unitRedesignStyles['unit-main-section']}>
                                    <h3>Section 8 : Fuel Direct</h3>
                                    <h5>27 min</h5>
                                </div>
                                <div className={unitRedesignStyles['unit-main-section']}>
                                    <h3>Section 9 : Complaints</h3>
                                    <h5>25 min</h5>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}