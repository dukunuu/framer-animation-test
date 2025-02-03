import { motion } from "motion/react";
import { useState } from "react";

export default function SplashScreen() {
  const [flip, setFlip] = useState(true);
  const [animationEnd, setAnimationEnd] = useState(false);

  const messages = [
    "Happy Birthday, Tsendee-san! 🎉",
    "Your smile always lights",
    "up the room 🌟. So glad",
    "to work with someone",
    "who makes every day",
    "brighter (even Mondays 😅).",
    "Keep being the inspiring",
    "force you are—cheers",
    "to your best year yet! 🥂",
  ];

  const renderFront = () => (
    <div className="bg-white relative flex-col w-full h-full flex justify-center items-center">
      <img src="/giftcard.jpg" alt="Giftcard image" className="w-full" />
      <button
        role="button"
        className="text-3xl hover:scale-105 transition-transform font-bold text-red-300 cursor-pointer animate-pulse w-full px-10 italic font-sans leading-tight"
        onClick={() => setFlip(false)}
      >
        Click me -&gt;
      </button>
      <div className="absolute top-4 left-1 rotate-12">
        <motion.img
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
          src="/soju.png"
          alt="soju pin"
          className="w-24 hover:scale-105 cursor-pointer"
        />
      </div>
    </div>
  );

  const renderBack = () => (
    <div className="bg-amber-50 text-center gap-5 w-full h-full flex flex-col justify-center items-center p-6">
      {!flip && (
        <>
          <motion.h1
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="md:text-3xl text-xl font-bold text-amber-600 mb-4 overflow-hidden whitespace-nowrap"
          >
            Happy birthday!
          </motion.h1>
          {messages.map((message, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 1 + index * 0.5,
              }}
              className="md:text-lg text-sm text-gray-800 whitespace-nowrap overflow-hidden"
            >
              {message}
            </motion.p>
          ))}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: messages.length * 0.5 + 2, duration: 1 }}
            className="text-amber-600 underline cursor-pointer animate-pulse mt-4 text-sm hover:text-amber-700"
            onClick={() => (window.location.href = "/compliments")} // Replace with your actual route
          >
            "Why Tsendee deserves a birthday crown 👑🦙"
          </motion.a>
        </>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ scale: 0, borderRadius: "50%" }}
      animate={{ scale: 1, borderRadius: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={() => setAnimationEnd(true)}
      className="flex items-center bg-[url(/background.jpg)] w-full justify-center min-h-screen"
    >
      {animationEnd && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.7 }}
          animate={{ rotateY: flip ? 0 : 180, scale: 1, opacity: 1 }}
          className="md:w-lg w-96 aspect-[3/4]"
        >
          <motion.div
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip ? 0 : 180 }}
            className="w-full h-full rounded-lg shadow-lg relative overflow-hidden"
          >
            <motion.div
              transition={{ duration: 0.7 }}
              animate={{ rotateY: flip ? 0 : 180 }}
              className="backface-hidden absolute inset-0"
            >
              {renderFront()}
            </motion.div>
            <motion.div
              initial={{ rotateY: 180 }}
              animate={{ rotateY: flip ? 180 : 0 }}
              transition={{ duration: 0.7 }}
              className="backface-hidden absolute inset-0"
            >
              {renderBack()}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
