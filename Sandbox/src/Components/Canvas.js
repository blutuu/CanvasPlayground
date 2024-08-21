import React, { useRef, useEffect } from "react";
import useCanvas from "./useCanvas";

const Canvas = ({ draw, ...rest }) => {
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} {...rest}></canvas>;
};

export default Canvas;
