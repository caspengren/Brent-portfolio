import Header from "./Header";
import ImageGrid from "./ImageGrid";

function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header} className="header-inner">
        <Header />
      </header>
      <main style={styles.main} className="main-content">
        <ImageGrid />
      </main>
      <footer style={styles.footer} className="footer-inner">
        © {new Date().getFullYear()} — All rights reserved
      </footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#0f0f0f",
    color: "#f0ede8",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "2rem 4rem",
    borderBottom: "1px solid #2a2a2a",
    position: "sticky",
    top: 0,
    backgroundColor: "#0f0f0f",
    zIndex: 10,
  },
  main: {
    flex: 1,
    padding: "4rem",
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
  },
  footer: {
    padding: "2rem 4rem",
    borderTop: "1px solid #2a2a2a",
    textAlign: "center",
    fontSize: "0.8rem",
    color: "#555",
    letterSpacing: "0.05em",
    fontFamily: "'Cinzel Decorative', cursive",
  },
};

export default App;