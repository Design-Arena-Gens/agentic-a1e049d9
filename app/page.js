"use client";
import Header from "../components/Header";
import Features from "../components/Features";
import IdeaGenerator from "../components/IdeaGenerator";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div>
      <div className="container">
        <Header />
        <section className="hero section">
          <div>
            <span className="badge mono">Build & sell digital products faster</span>
            <h1>
              Launch your <span className="highlight">digital sale</span> in hours, not weeks.
            </h1>
            <p>
              Generate product ideas, craft a conversion-focused page, and share a buy link.
              Designed for creators who want momentum, not complexity.
            </p>
            <div className="cta">
              <input className="input" type="email" placeholder="Enter your email to get early templates" id="email-input" />
              <button className="button" onClick={async () => {
                const email = document.getElementById('email-input').value;
                if (!email) return alert('Enter an email');
                const res = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
                if (res.ok) alert('Thanks! We\'ll be in touch.'); else alert('Something went wrong.');
              }}>Get Templates</button>
              <a className="button secondary" href="#generator">Try the generator</a>
            </div>
            <div className="small" style={{marginTop:8}}>No spam. Unsubscribe anytime.</div>
          </div>
          <div className="card tile">
            <div className="grid">
              <div className="tile">
                <div className="small mono">Step 1</div>
                <h3>Pick a niche</h3>
                <div className="small">AI tutors, Notion packs, code snippets?</div>
              </div>
              <div className="tile">
                <div className="small mono">Step 2</div>
                <h3>Generate an offer</h3>
                <div className="small">Value-first promise with clear outcomes.</div>
              </div>
              <div className="tile">
                <div className="small mono">Step 3</div>
                <h3>Publish & sell</h3>
                <div className="small">Share the page and collect payments.</div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <IdeaGenerator />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}
