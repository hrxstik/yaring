import React from 'react';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { useScroll } from './Navigation/ScrollContext';

interface Props {
  className?: string;
}

export const Questions: React.FC<Props> = ({ className }) => {
  const { questions, answers } = useSelector((state: RootState) => state.questionsReducer);
  const { refs } = useScroll();
  return (
    <div className={className}>
      <div ref={refs.questions} className="py-6" id="questions">
        <h2 className="blue-block max-w-fit">Частые вопросы</h2>
      </div>
      {questions.map((question, index) => (
        <div>
          <details key={index} className="py-4 select-none">
            <summary className="transition-all">{question}</summary>
            <p>{answers[index]}</p>
          </details>
          <hr />
        </div>
      ))}
    </div>
  );
};
