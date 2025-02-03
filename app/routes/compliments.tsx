import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const qualities = [
  {
    id: 1,
    title: "彼女のスマイル",
    emoji: "😊",
    description: "どんな部屋も明るくする温かな笑顔",
    detail:
      "彼女の笑顔は、日常の一瞬を穏やかに照らし、安心感を与えてくれます。",
    gif: "/gifs/smile.gif", // Replace with your actual GIF path
  },
  {
    id: 2,
    title: "彼女の自信",
    emoji: "💪",
    description: "周囲を勇気づけるしっかりとした自己信頼",
    detail: "彼女の自信は、挑戦に立ち向かう勇気や落ち着きをもたらします。",
    gif: "/gifs/confidence.gif",
  },
  {
    id: 3,
    title: "彼女のスタイル",
    emoji: "👗",
    description: "シンプルで洗練されたファッションセンス",
    detail:
      "彼女のスタイルは、控えめでありながらも個性が光る美学を表現しています。",
    gif: "/gifs/style.gif",
  },
  {
    id: 4,
    title: "彼女の人柄",
    emoji: "🌟",
    description: "周囲に安心感を与える穏やかな雰囲気",
    detail:
      "彼女の人柄は、自然な温かみと落ち着きをもたらし、信頼関係を築きます。",
    gif: "/gifs/personality.gif",
  },
  {
    id: 5,
    title: "彼女の優しさ",
    emoji: "🤲",
    description: "他者を思いやる心遣い",
    detail:
      "ひとつひとつの行動に込められた優しさは、周りの人々に安心を届けます。",
    gif: "/gifs/kindness.gif",
  },
  {
    id: 6,
    title: "彼女の知性",
    emoji: "🧠",
    description: "落ち着いた知性と柔軟な考え方",
    detail:
      "学びや気づきを大切にする彼女の知性は、冷静な判断力を育んでいます。",
    gif: "/gifs/intelligence.gif",
  },
  {
    id: 7,
    title: "彼女のユーモア",
    emoji: "😂",
    description: "柔らかい笑いをもたらす和やかなセンス",
    detail:
      "彼女のユーモアは、和やかな空気を作り出し、場の雰囲気を明るくします。",
    gif: "/gifs/humor.gif",
  },
];

export default function Compliments() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedQuality = qualities.find((q) => q.id === selectedId);

  return (
    <motion.div
      initial={{ scale: 0, borderRadius: "50%" }}
      animate={{ scale: 1, borderRadius: "0%" }}
      className="min-h-screen bg-[url(/background.jpg)] p-8 flex items-center justify-center"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
        {qualities.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id.toString()}
            onClick={() => setSelectedId(item.id)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-red-200/80 p-8 backdrop-blur-sm transition-all hover:bg-red-200"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="text-4xl">{item.emoji}</span>
              <h2 className="mt-4 text-2xl font-bold text-red-900 drop-shadow-md">
                {item.title}
              </h2>
              <p className="mt-2 text-red-800/90">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedQuality && (
          <motion.div
            layoutId={selectedQuality.id.toString()}
            className="fixed inset-0 z-50 flex items-center justify-center bg-red-50/95 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                <img
                  src={selectedQuality.gif}
                  alt={selectedQuality.title}
                  className="mb-6 aspect-square w-full rounded-xl object-cover shadow-xl"
                />
                <motion.h2 className="text-center text-4xl font-bold text-red-900">
                  {selectedQuality.title}
                </motion.h2>
                <motion.p className="mt-4 text-center text-xl text-red-800">
                  {selectedQuality.detail}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
