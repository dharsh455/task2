import { useEffect, useState } from "react";

// Header Component
function Header() {
  return (
    <header>
      <h1 style={{ color: "blue", textAlign: "center" }}>
        Student Management System
      </h1>
    </header>
  );
}

// Student Profile Component
function StudentProfile({
  name,
  department,
  year,
  count,
  onComplete,
  onReset,
}) {
  // useEffect for document title
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${count}`;

    // Cleanup function
    return () => {
      document.title = previousTitle;
    };
  }, [count]);

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "400px",
        borderRadius: "10px",
      }}
    >
      <h2>Student Practice Tracker</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>

      <p>
        <strong>Practice Count:</strong> {count}
      </p>

      <button onClick={onComplete}>
        Complete Practice
      </button>

      <button
        onClick={onReset}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer style={{ textAlign: "center", marginTop: "30px" }}>
      <p>© 2026 Student Management System</p>
    </footer>
  );
}

// App Component
function App() {
  // Practice count state
  const [practiceCount, setPracticeCount] = useState(0);

  // Show/Hide profile state
  const [showProfile, setShowProfile] = useState(true);

  // Student details
  const studentName = "Anu";
  const studentDepartment = "CSE";
  const studentYear = "3rd Year";

  return (
    <div>
      {/* Header always remains visible */}
      <Header />

      {/* Show / Hide button */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button
          onClick={() => setShowProfile(!showProfile)}
        >
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>
      </div>

      {/* Student Profile */}
      {showProfile && (
        <StudentProfile
          name={studentName}
          department={studentDepartment}
          year={studentYear}
          count={practiceCount}
          onComplete={() =>
            setPracticeCount(practiceCount + 1)
          }
          onReset={() =>
            setPracticeCount(0)
          }
        />
      )}

      {/* Footer always remains visible */}
      <Footer />
    </div>
  );
}

export default App;