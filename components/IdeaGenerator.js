"use client";
import { useMemo, useState } from "react";

const niches = [
  "fitness coaches", "indie devs", "content creators", "teachers",
  "sales reps", "designers", "founders", "marketers",
];
const formats = ["Notion template","eBook","mini-course","code snippet library","canva pack","prompt pack","automation bot","workshop"];

const benefits = [
  "save 10+ hours per week",
  "ship 2x faster",
  "grow audience to first 1k",
  "close more deals",
  "launch a product in 7 days",
  "write better copy in 30 minutes",
  "organize projects with zero stress",
];

function sample(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

export default function IdeaGenerator(){
  const [seed, setSeed] = useState(1);
  const idea = useMemo(() => ({
    niche: sample(niches),
    format: sample(formats),
    benefit: sample(benefits),
  }), [seed]);

  return (
    <section id="generator" className="section card" style={{padding:24}}>
      <div className="small mono">Idea Generator</div>
      <h3 style={{margin:"8px 0 12px"}}>Instant digital sale concepts</h3>
      <p className="small" style={{marginTop:0,color:"var(--muted)"}}>
        Click shuffle to explore ideas. Swap your buy link later.
      </p>
      <div className="card" style={{padding:16,marginTop:12}}>
        <div className="mono small">Niche</div>
        <div style={{fontSize:18, fontWeight:700, marginBottom:8}}>{idea.niche}</div>
        <div className="mono small">Offer</div>
        <div style={{fontSize:18, fontWeight:700}}>{idea.format} to {idea.benefit}</div>
      </div>
      <div className="cta" style={{marginTop:16}}>
        <button className="button" onClick={() => setSeed(s => s+1)}>Shuffle ideas</button>
        <a className="button secondary" href="#pricing">Use this idea</a>
      </div>
    </section>
  );
}
