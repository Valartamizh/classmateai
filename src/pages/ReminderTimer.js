import { useState, useEffect } from 'react';

export default function ReminderTimer() {
  const [inputMinutes, setInputMinutes] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(null);
  const [reminder, setReminder] = useState("");
  const [hasAlerted, setHasAlerted] = useState(false);

  const handleStart = () => {
    const timeInSeconds = parseInt(inputMinutes) * 60;
    if (!isNaN(timeInSeconds) && timeInSeconds > 0) {
      setSecondsLeft(timeInSeconds);
      setHasAlerted(false);
      setReminder("");
    } else {
      alert("Please enter a valid number of minutes.");
    }
  };

  useEffect(() => {
    if (secondsLeft === null || secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  useEffect(() => {
    if (secondsLeft === 0 && !hasAlerted) {
      setReminder("⏰ It's time for your class!");
      alert("⏰ Class Reminder: It's time for your class!");
      setHasAlerted(true);
    }
  }, [secondsLeft, hasAlerted]);

  const formatTime = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style={{
      padding: "1rem",
      border: "1px solid #ccc",
      borderRadius: "10px",
      marginBottom: "1rem",
      color: "white",
      backgroundColor: "black",
    }}>
      <h3>⏰ Set Your Class Reminder</h3>
      
      <input
        type="number"
        placeholder="Enter minutes"
        value={inputMinutes}
        onChange={(e) => setInputMinutes(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "10px" }}
      />
      <button onClick={handleStart}>Start Timer</button>

      {secondsLeft !== null && secondsLeft > 0 && (
        <p style={{ marginTop: "1rem" }}>Time Left: <strong>{formatTime(secondsLeft)}</strong></p>
      )}

      <p style={{ fontWeight: "bold", color: "green" }}>{reminder}</p>
    </div>
  );
}