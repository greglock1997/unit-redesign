import React, { useState, useEffect } from 'react';

export function MultipleChoiceQuestion(props) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const correctAnswer = props.correctAnswer;
    const unitRedesignStyles = props.unitRedesignStyles;
    const handleAnswerSelection = props.handleAnswerSelection;
    const handleCorrectAnswerSelection = props.handleCorrectAnswerSelection;

    useEffect(() => {
        setSelectedAnswer(props.selectedAnswers[props.pageId] || null);
    }, [props.pageId, props.selectedAnswers]);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        handleAnswerSelection(props.pageId, answer);

        if (answer === correctAnswer) {
            handleCorrectAnswerSelection(props.pageId, true);
        } else {
            handleCorrectAnswerSelection(props.pageId, false);
        }
    }

    return (
        <div className={`${unitRedesignStyles['page']} ${unitRedesignStyles['page-multiple-answer']}`}>
            <h1>{props.title}</h1>
            <p>{props.question}</p>
            <button
                className={`${
                    selectedAnswer === props.answers[0]
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick(props.answers[0])}
                disabled={selectedAnswer ? true : false}
            >
                {props.answers[0]}
            </button>
            <button
                className={`${
                    selectedAnswer === props.answers[1]
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick(props.answers[1])}
                disabled={selectedAnswer ? true : false}
            >
                {props.answers[1]}
            </button>
            <button
                className={`${
                    selectedAnswer === props.answers[2]
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick(props.answers[2])}
                disabled={selectedAnswer ? true : false}
            >
                {props.answers[2]}
            </button>
            <button
                className={`${
                    selectedAnswer === props.answers[3]
                        ? (selectedAnswer === correctAnswer ? unitRedesignStyles['button-correct'] : unitRedesignStyles['button-incorrect'])
                        : ''
                }`}
                onClick={() => handleAnswerClick(props.answers[3])}
                disabled={selectedAnswer ? true : false}
            >
                {props.answers[3]}
            </button>
        </div>
    )
}

export function InputQuestion(props) {
    const initialAnswer = props.selectedAnswers[props.pageId] || '';
    const [answerInput, setAnswerInput] = useState(initialAnswer);
    const [answerCorrect, setAnswerCorrect] = useState('');

    const handleAnswerSelection = props.handleAnswerSelection;
    const handleCorrectAnswerSelection = props.handleCorrectAnswerSelection;
    const unitRedesignStyles = props.unitRedesignStyles;

    useEffect(() => {
        if (initialAnswer === props.correctAnswer) {
            setAnswerCorrect(true);
        } else if (initialAnswer !== ''){
            setAnswerCorrect(false);
        }
    }, [initialAnswer, props.pageId]);

    const handleInputChange = (event) => {
        setAnswerInput(event.target.value);
    };

    const checkAnswer = () => {
        if (answerInput === props.correctAnswer) {
            setAnswerCorrect(true);
            handleAnswerSelection(props.pageId, answerInput);
            handleCorrectAnswerSelection(props.pageId, true);
        } else if (answerInput === '') {
            setAnswerCorrect('');
        } else {
            setAnswerCorrect(false);
            handleAnswerSelection(props.pageId, answerInput);
            handleCorrectAnswerSelection(props.pageId, false);
        };
    };

    return (
        <div className={`${unitRedesignStyles['page']} ${unitRedesignStyles['page-input']}`}>
            <h1>{props.title}</h1>
            <div className={unitRedesignStyles['page-row']}>
                <img src={props.img} alt="" />
                <ul>
                    {props.scenario.map((line, index) => (
                        <li key={index}>{line}</li>
                    ))}
                </ul>
            </div>
            <p>Calculate this user's <span>total cost</span> and enter it into the box below</p>
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