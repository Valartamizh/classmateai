import Head from 'next/head';
import ReminderTimer from '../components/ReminderTimer';
import AskAI from '../components/AskAI';
import { useState } from 'react';
export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });
    const data = await res.json();
    setResponse(data.answer);
  };
  return (
    <>
      <Head>
        <title>ClassMate AI</title>
      </Head>

      <main >
        <section
          style={{
            backgroundColor: "#28a37c",
            padding: "1rem",
          }}
        >
          <h1 style={{ textAlign: "center", color: "white", textDecoration: "underline" }}>
            ClassMate AI
          </h1>
        </section>
        <ReminderTimer />
        <AskAI />
        <h1>Welcome to ClassMate AI</h1>
        <p>Your smart assistant to help you stay on track with classes, notes, and reminders.</p>
        <p>Explore our features and start using ClassMate AI today!</p>
        <p>If you have any questions or feedback, please don't hesitate to contact us.</p>
        <p>We are here to help you succeed in your studies.</p>
        <p>ClassMate AI is designed to make your academic life easier and more organized.</p>
        <p>Join our community of learners and educators who are already benefiting from ClassMate AI.</p>
        <p>Stay tuned for more updates and features coming soon!</p>
        <p>Thank you for choosing ClassMate AI as your academic companion.</p>
        <p>We look forward to supporting you in your educational journey.</p>
        <h2 style={{ marginTop: "2rem" }}>Key Features</h2>

        <h3> Smart Class Scheduler</h3>
        <ul>
          <ul>Create and manage your weekly timetable.</ul>
          <ul>Automatically detects class times and sends reminders.</ul>
        </ul>

        <h3> AI-Powered Reminders</h3>
        <ul>
          <ul>Notifies students 10–15 minutes before each class starts.</ul>
          <ul>Alerts if the user hasn't marked themselves as present.</ul>
        </ul>

        <h3> Missed Class Note Generator</h3>
        <ul>
          <ul>Uses AI (OpenAI GPT) to generate a summary of the day’s topic.</ul>
          <ul>Keeps students up to date with minimal effort.</ul>
        </ul>

        <h3> AI Q&A Assistant</h3>
        <ul>
          <ul>Ask academic questions and receive clear, summarized answers.</ul>
          <ul>Works like a personal tutor available 24/7.</ul>
        </ul>

        <h3> Weekly Revision Report</h3>
        <ul>
          <ul>A weekly email or dashboard summary of the topics covered.</ul>
          <ul>Encourages spaced repetition and smart studying.</ul>
        </ul>
        <h1>Ask ClassMate AI 🤖</h1>
      <input
        type="text"
        placeholder="Type your question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "10px", width: "60%" }}
      />
      <button onClick={handleAsk} style={{ marginLeft: "10px", padding: "10px 20px" }}>Ask</button>

      <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
        <strong>Answer:</strong>
        <p>{response}</p>
      </div>
        
        <nav style={{ marginTop: "30px" }}>
          <a href="/about" style={{ marginRight: "15px" }}>About</a>
          <a href="/contact">Contact</a>
        </nav>

      </main>

      <footer style={{ textAlign: "center", padding: "1rem", marginTop: "50px", borderTop: "1px solid #ddd" }}>
        <p>Thank You for using ClassMate AI | &copy; {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
