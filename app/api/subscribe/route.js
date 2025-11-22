export async function POST(request){
  try{
    const { email } = await request.json();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      return new Response(JSON.stringify({ ok:false, error:"invalid_email" }), { status:400 });
    }
    // In a real app, store to DB or ESP here
    console.log("Subscribed:", email);
    return new Response(JSON.stringify({ ok:true }), { status:200 });
  }catch(err){
    return new Response(JSON.stringify({ ok:false }), { status:500 });
  }
}
