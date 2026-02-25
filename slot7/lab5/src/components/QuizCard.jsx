import React from "react";

export default function QuestionCard({
  question,
  selectedIndex,
  onSelect,
}) {
  return (
    <div className="qcard">
      <h3 className="qcard-title">{question.text}</h3>

      <div className="qcard-options">
        {question.options.map((opt, idx) => (
          <label key={idx} className="qcard-option">
            <input
              type="radio"
              name={`q-${question.id}`}
              checked={selectedIndex === idx}
              onChange={() => onSelect(idx)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
