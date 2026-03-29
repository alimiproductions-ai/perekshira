import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Info, Loader2 } from 'lucide-react';
import { perekShiraData, PerekShiraItem } from './data/perekShira';

function PerekShiraImage({ item }: { item: PerekShiraItem }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const imageUrl = item.customImage && !hasError ? `/image/${item.customImage}` : null;

  return (
    <div className="relative w-full h-full bg-[#5A5A40]/10 flex items-center justify-center overflow-hidden">
      {imageUrl ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FDFCF0]/50 backdrop-blur-sm z-10">
              <Loader2 className="animate-spin text-[#5A5A40] mb-2" size={32} />
            </div>
          )}
          <motion.img
            key={imageUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              setHasError(true);
              setIsLoaded(true);
            }}
            src={imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-[#5A5A40]/30 p-8 text-center">
          <Info size={48} strokeWidth={1} className="mb-4" />
          <p className="text-sm font-serif italic">Image à venir</p>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  );
}

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % perekShiraData.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + perekShiraData.length) % perekShiraData.length);
  };

  const currentItem = perekShiraData[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="h-[100dvh] bg-[#FDFCF0] text-[#4A4A40] font-serif overflow-hidden flex flex-col">
      {/* Header */}
      <header className="shrink-0 p-4 md:p-6 flex justify-between items-center border-b border-[#5A5A40]/10 bg-white/50 backdrop-blur-sm z-10">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-3xl font-bold text-[#5A5A40] tracking-tight">
            Perek Shira <span className="text-sm font-normal italic opacity-60">online</span>
          </h1>
          <p className="text-[10px] md:text-xs uppercase tracking-widest font-sans font-semibold opacity-50">
            Le chant de la création
          </p>
        </div>

        <div className="flex gap-4">
          <button
            className="p-2 rounded-full hover:bg-[#5A5A40]/5 transition-colors"
            title="Informations"
            type="button"
          >
            <Info size={20} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 min-h-0 relative flex items-center justify-center p-3 md:p-8">
        <div className="w-full max-w-2xl h-full md:h-auto md:aspect-[4/5] relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, { offset }) => {
                const swipe = Math.abs(offset.x) > 50;
                if (swipe) {
                  if (offset.x > 0) prevCard();
                  else nextCard();
                }
              }}
              onClick={nextCard}
              className="absolute inset-0 bg-white rounded-[24px] md:rounded-[32px] shadow-2xl shadow-[#5A5A40]/10 overflow-hidden cursor-pointer border border-[#5A5A40]/5 flex flex-col min-h-0"
            >
              {/* Image Section */}
              <div className="relative h-[38%] md:h-1/2 overflow-hidden shrink-0">
                <PerekShiraImage item={currentItem} />
                <div className="absolute bottom-4 md:bottom-6 left-5 md:left-8 right-5 md:right-8 text-white">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-1 leading-tight">
                    {currentItem.name}
                  </h2>
                  <p className="text-lg md:text-xl opacity-80 font-sans">{currentItem.hebrewName}</p>
                </div>
              </div>

              {/* Text Section */}
              <div className="relative flex-1 min-h-0 bg-[#F8F6F1]">
                {/* Fade top */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#F8F6F1] to-transparent z-10" />

                {/* Fade bottom */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#F8F6F1] to-transparent z-10" />

                {/* Scrollable content */}
                <div className="h-full overflow-y-auto overscroll-contain scroll-smooth px-5 md:px-10 pt-6 md:pt-8 pb-20">
                  <div className="min-h-full flex flex-col justify-start text-center">
                    <div className="space-y-6 max-w-2xl mx-auto w-full">
                      <div className="space-y-4">
                        <p
                          className="text-lg sm:text-xl md:text-2xl text-[#5A5A40] font-bold opacity-80"
                          dir="rtl"
                        >
                          {currentItem.introHebrew}
                        </p>

                        <p
                          className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-[#2A2A1A] font-medium"
                          dir="rtl"
                        >
                          {currentItem.verseHebrew}
                        </p>
                      </div>

                      <div className="h-px bg-[#5A5A40]/10 w-24 mx-auto" />

                      <p className="text-base sm:text-lg md:text-xl italic text-[#5A5A40] leading-relaxed max-w-md mx-auto">
                        "{currentItem.verseFrench}"
                      </p>

                      <div className="pt-2">
                        <span className="px-3 py-1 rounded-full bg-[#5A5A40]/5 text-[10px] uppercase tracking-widest font-sans font-bold opacity-50">
                          Chapitre {currentItem.chapter}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scroll hint */}
                <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 z-20 md:hidden">
                  <div className="flex flex-col items-center gap-1 opacity-35">
                    <div className="w-5 h-8 rounded-full border border-[#5A5A40]/30 flex justify-center pt-1">
                      <div className="w-1 h-2 rounded-full bg-[#5A5A40]/40 animate-bounce" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-[#5A5A40]/5 shrink-0">
                <motion.div
                  className="h-full bg-[#5A5A40]"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex + 1) / perekShiraData.length) * 100}%` }}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevCard();
              }}
              type="button"
              className="absolute -left-20 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white shadow-lg hover:bg-[#5A5A40] hover:text-white transition-all group"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextCard();
              }}
              type="button"
              className="absolute -right-20 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white shadow-lg hover:bg-[#5A5A40] hover:text-white transition-all group"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </main>

      {/* Footer / Controls */}
      <footer className="shrink-0 px-6 pb-5 md:p-8 flex flex-col items-center space-y-3 md:space-y-4">
        <div className="flex items-center gap-6">
          <span className="text-sm font-sans font-bold tracking-widest uppercase opacity-40">
            {currentIndex + 1} / {perekShiraData.length}
          </span>
        </div>
        <p className="text-[11px] md:text-xs font-sans opacity-40 text-center max-w-xs">
          Tape sur la carte ou glisse vers la gauche pour voir la suite.
        </p>
      </footer>

      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#5A5A40]/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#5A5A40]/10 blur-[100px]" />
      </div>
    </div>
  );
}
