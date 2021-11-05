import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import AnswerModal from './AnswerModal.jsx';
import EachAnswer from './EachAnswer.jsx';
import { QuestionContext } from './Questions.jsx';

export default function EachQuestion(props) {
  const [question, setQuestion] = useState('');
  const [question_id, setQuestionID] = useState(0);
  const [showMoreQuestions, setShowMoreQuestions] = useState(false);
  let [helpfulQuestionYes, setHelpfulQuestionYes] = useState(props.question.question_helpfulness);
  const [clickedOnce, setClickedOnce] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);

  useEffect(() => {
    if (props.question) {
      setQuestion(props.question.question_body);
      setQuestionID(props.question.question_id);
    } else {
      setQuestion('no questions');
    }
  }, []);

  function handleQuestionOnClick() {
    setHelpfulQuestionYes(helpfulQuestionYes += 1);
    axios.put(`/qa/questions/${question_id}/helpful`, { question_id })
      .then((response) => {
        setHelpfulQuestionYes('Thanks');
        setClickedOnce(true);
      });
  }
  function showModalWindow() {
    setShowAnswerModal(!showAnswerModal);
  }

  return (
    <div className="mainquestion">
      <AnswerModal showModal={showAnswerModal} setModal={setShowAnswerModal} />
      <div className="questionline">
        <div className="indivquestionheader">Q:</div>
        <div className="indivquestion">
          {question}
          {}
          <EachAnswer answer={props.question.answers} id={props.question.question_id} />
        </div>
      </div>
      <div className="Helpfulq">
        <div> Helpful? </div>
        <div onClick={clickedOnce ? null : handleQuestionOnClick}>
          Yes
          (
          {helpfulQuestionYes}
          )
        </div>
        <div> | </div>
        <div onClick={showModalWindow}> Add answer </div>
      </div>
    </div>
  );
}
