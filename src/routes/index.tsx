import { useEffect, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChrismonOverlay } from "@/components/chrismon-overlay";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <main className="chrismon-shell">
      {ready ? <CanvasLazy /> : <div className="chrismon-canvas" />}
      <ChrismonOverlay />
    </main>
  );
}

function CanvasLazy() {
  const [Scene, setScene] = useState<null | (() => ReactNode)>(null);

  useEffect(() => {
    let mounted = true;
    void import("@/components/chrismon-scene").then((mod) => {
      if (!mounted) return;
      setScene(() => () => <mod.ChrismonCanvas />);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!Scene) return <div className="chrismon-canvas" />;
  return <Scene />;
}
