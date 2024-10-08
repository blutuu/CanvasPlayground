import Canvas from "./Components/Canvas";

function App() {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(150, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, Math.PI * 2);
    ctx.fill();
  };

  return (
    <div className="App">
      <Canvas draw={draw} />
    </div>
  );
}

export default App;
