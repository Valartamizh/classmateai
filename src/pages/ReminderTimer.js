import { useState, useEffect } from 'react';

export default function ReminderTimer() {
  const [secondsLeft, setSecondsLeft] = useState(10); 
  const [reminder, setReminder] = useState("");
  const [hasAlerted, setHasAlerted] = useState(false); 

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
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
      backgroundColor: "#f5f5f5",
    }}>
      <h3>⏰ Class Reminder Timer</h3>
      <p>Time Left: {formatTime(secondsLeft)}</p>
      <p style={{ fontWeight: "bold", color: "green" }}>{reminder}</p>
    </div>
  );
}
