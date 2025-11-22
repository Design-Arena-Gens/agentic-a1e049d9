export default function Footer(){
  return (
    <footer className="footer">
      <div>? {new Date().getFullYear()} Launch Wizard</div>
      <div className="small">Built for speed. Deployed on Vercel.</div>
    </footer>
  );
}
