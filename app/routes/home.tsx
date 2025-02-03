import { motion } from "motion/react";
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import SplashScreen from "~/components/splash-screen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {loading ? (
        <motion.div
          className="w-16 h-16 border-4 border-red-200 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            borderRadius: ["50%", "25%", "50%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      ) : (
        <SplashScreen />
      )}
    </div>
  );
}
