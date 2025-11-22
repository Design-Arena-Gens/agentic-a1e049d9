export default function Features(){
  const items = [
    { title: "Idea Generator", text: "Get niche ideas and value props tailored to your audience." },
    { title: "One-click Page", text: "Prebuilt sections designed to convert with clean, modern UI." },
    { title: "Payment Ready", text: "Drop in a Stripe or Gumroad link to start selling fast." },
  ];
  return (
    <section id="features" className="section">
      <div className="grid">
        {items.map(({title,text}) => (
          <div key={title} className="card tile">
            <h3>{title}</h3>
            <div className="small">{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
