export default function Home() {
  return (
    <main style={{padding:40,fontFamily:'sans-serif'}}>
      <h1>Makox</h1>
      <p>AI Agent for Manufacturing Global Expansion</p>
      <form action="/api/generate-plan" method="POST">
        <textarea name="input" placeholder="What are you trying to build or sell globally?" style={{width:'100%',height:120}} />
        <br/>
        <button type="submit">Generate My Plan</button>
      </form>
    </main>
  );
}