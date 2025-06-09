import { useState, useEffect } from 'react';

export default function ReminderTimer() {
  const [secondsLeft, setSecondsLeft] = useState(60); 
  const [reminder, setReminder] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (secondsLeft === 0) {
      <div style={{ color: "red", fontWeight: "bold" }}>
       { setReminder("Time's up! Class is starting now!")}
      </div>;
      setReminder("It's time for your class!");
    }
  }, [secondsLeft]);

  const formatTime = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "10px", marginBottom: "1rem" }}>
      <h3>Class Reminder Timer</h3>
      <p>Time Left: {formatTime(secondsLeft)}</p>
      <p>{reminder}</p>
    </div>
  );
}
