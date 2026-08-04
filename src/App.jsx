import Scene from "./scene/Scene";
import useScrollProgress from "./hooks/useScrollProgress";

export default function App() {
  const progress = useScrollProgress();

  return (
    <>
      {/* Fake scroll area */}
      <div
        style={{
          height: "2000vh",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Progress Display */}
      <div
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          color: "white",
          background: "rgba(0,0,0,0.6)",
          padding: "10px 16px",
          borderRadius: "8px",
          fontFamily: "monospace",
          zIndex: 1000,
        }}
      >
        Scroll Progress: {progress.toFixed(2)}
      </div>

      {/* 3D Scene */}
      <div
        style={{
          position: "fixed",
          inset: 0,
        }}
      >
        <Scene />
      </div>
    </>
  );
}