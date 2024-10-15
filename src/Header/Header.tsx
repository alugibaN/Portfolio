import "./Header.css";

function Header() {
  return (
    <section className="section">
      <div className="welcome-container text_big-one">
        <span className="hello hello-one">Helloo</span>
      </div>
      <div className="welcome-container text_big-two">
        <span className="hello hello-two">Helloo</span>
      </div>
      <header className="about_container">
        <div className="ab">
        <h1 className="about name">HALIKOV NABIGULA</h1>
        <h2 className="about jobe">FULSTACK DEVELOPER</h2>
        </div>
        <div className='line'/>
      </header>
    </section>
  );
}

export default Header;
