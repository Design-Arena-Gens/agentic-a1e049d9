export default function Pricing(){
  return (
    <section id="pricing" className="section card" style={{padding:24}}>
      <div className="small mono">Pricing</div>
      <h3 style={{margin:"8px 0 12px"}}>Launch with confidence</h3>
      <div className="grid">
        <div className="card tile">
          <h3>Starter</h3>
          <div className="small">Free</div>
          <ul className="small">
            <li>Idea generator</li>
            <li>Landing sections</li>
            <li>Manual buy link</li>
          </ul>
          <a className="button secondary" href="#generator">Get started</a>
        </div>
        <div className="card tile" style={{borderColor:"var(--accent)"}}>
          <h3>Creator</h3>
          <div className="small">$29 one-time</div>
          <ul className="small">
            <li>Pro templates</li>
            <li>Email capture</li>
            <li>Copywriting prompts</li>
          </ul>
          <a className="button" href="#" onClick={(e) => {e.preventDefault(); alert('Connect your Stripe or Gumroad link.')}}>Buy now</a>
        </div>
        <div className="card tile">
          <h3>Studio</h3>
          <div className="small">$99 one-time</div>
          <ul className="small">
            <li>License-free assets</li>
            <li>Notion + Webflow pack</li>
            <li>Priority support</li>
          </ul>
          <a className="button secondary" href="#" onClick={(e)=>{e.preventDefault(); alert('Contact us for custom setup.')}}>Contact</a>
        </div>
      </div>
    </section>
  );
}
