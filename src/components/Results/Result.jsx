import React from "react";
import { useEffect } from "react";

import "./Result.css";

const Result = ({ result }) => {
  const [emotions, setEmotions] = React.useState({});

  useEffect(() => {
    if (result) {
      setEmotions(result?.emotion.document.emotion);
    }
  }, [result]);

  return (
    <div className="result">
      <h2> Resultados </h2>
      <table>
        <thead>
          <tr>
            <th> Emoción </th>
            <th> Porcentaje </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(emotions).map((emotion) => (
            <tr key={emotion}>
              <td> {emotion} </td>
              <td> {emotions[emotion] * 100}% </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
