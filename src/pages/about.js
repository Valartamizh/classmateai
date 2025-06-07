export default function About() {
  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Copperplate, Papyrus, fantasy",
        textAlign: "center",
        color: "white",
        lineHeight: "1.6",
      }}
    >
      <h1>About ClassMate AI</h1>
      <p>
        ClassMate AI is a cutting-edge web application that revolutionizes the way
        you manage your academic life. With our user-friendly interface, you can
        effortlessly keep track of your classes, notes, and reminders, all in one
        place.
      </p>
      <p>
        Our platform is designed to simplify your academic experience, allowing you
        to focus on what matters most - your studies. Whether you're a student, a
        teacher, or a parent, ClassMate AI has got you covered.
      </p>
      <p>
        Whether you're a student, a teacher, or a parent, ClassMate AI has got you
        covered.
      </p>
      <nav style={{ marginTop: "20px" }}>
          <a href="/contact" style={{ marginRight: "15px" }}>Contact</a>
          <a href="/">Home</a>
        </nav>
        <footer style={{ textAlign: "center", padding: "1rem", marginTop: "50px", borderTop: "1px solid #ddd" }}>
        <p>Thank You for using ClassMate AI | &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
    
  );
}