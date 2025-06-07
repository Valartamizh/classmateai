export default function Contact() {
  return (
    <div>
      <h1>Contact Us at ClassMate AI</h1>
      <p>Feel free to reach out to us for any assistance or inquiries.</p>
      <p>
        You can also visit our website at <a href="https://valartamizh.github.io/Classmate-AI/">classmateai.com</a>.
      </p>
        <p>
            We are here to help you with any questions or feedback you may have about our services.
        </p>
        <p>
            For more information, visit our <a href="/about">About</a> page or contact us directly.
        </p>
        <nav style={{ marginTop: "20px" }}>
          <a href="/about" style={{ marginRight: "15px" }}>About</a>
          <a href="/">Home</a>
        </nav>
        <footer style={{ textAlign: "center", padding: "1rem", marginTop: "50px", borderTop: "1px solid #ddd" }}>
        <p>Thank You for using ClassMate AI | &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
