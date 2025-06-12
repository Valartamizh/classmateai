import { useState, useEffect } from 'react';

export default function AskAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState([]);
  const handleAsk = () => {
    if (question.trim()) {
      setAnswer("AI says: This is a summary of your topic.");
      setHistory([...history, question]);
    }
  };

  useEffect(() => {
    if (answer) {
      console.log("New answer generated.");
    }
  }, [answer]);

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h3>Ask ClassMate AI</h3>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your question here"
        style={{ padding: "0.5rem", width: "100%", marginBottom: "0.5rem" }}
      />
      <button onClick={handleAsk}>Ask AI</button>
      <p style={{ marginTop: "0.5rem" }}>{answer}</p>
      <h4>Previous Questions:</h4>
      <ul>
        {history.map((q, idx) => (
          <ul key={idx}>{q}</ul>
        ))}
      </ul>
    </div>
  );
}
