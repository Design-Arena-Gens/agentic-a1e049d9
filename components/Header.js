export default function Header(){
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-badge" />
        <div className="logo-text">Launch Wizard</div>
      </div>
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#generator">Generator</a>
        <a href="#pricing">Pricing</a>
      </nav>
    </header>
  );
}
