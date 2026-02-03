import { Link } from 'react-router';
import { ArrowLeft, Youtube, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import eldoImage from 'figma:asset/7d31c4a62fda21eb261478c4122dfbab240870a2.png';
import lieselotteImage from 'figma:asset/66df6cb7246f232f86137f479122d3cd7d908d76.png';
import kainaImage from 'figma:asset/8d14c8d68e19f3e3b10d681327c403b0e3003fab.png';
import viktorImage from 'figma:asset/6f13fe49a3da98b24fbaf71be478f71e7dba0e4e.png';
import keyVisualWide from 'figma:asset/33cbff5decd9b54b7b0eecac97661b496dbedb79.png';
import keyVisualSquare from 'figma:asset/f89bb7359fe7202cbd7231ba8af6ea6e59e0600b.png';

export default function AnimeLp() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Target date: July 1, 2026
    const targetDate = new Date('2026-07-01T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const characters = [
    {
      name: 'エルド・ヴァイスハイト',
      role: '\"千年の賢者\" / 元宮廷魔術師',
      cv: '神谷 拓也',
      quote: '知っているさ。この先に何があるか——全て'
    },
    {
      name: 'リーゼロッテ・フォン・アストライア',
      role: 'アストライア王国第二王女',
      cv: '水瀬 美咲',
      quote: '貴方は何者なの？'
    },
    {
      name: 'カイナ',
      role: '古代兵器\"人形機関\"の生き残り',
      cv: '花澤 凛',
      quote: '……マスター、私はあなたの剣'
    },
    {
      name: 'ヴィクトール・レイ・グラムハルト',
      role: '七賢人筆頭 \"雷帝\"',
      cv: '小野 涼介',
      quote: '貴様、何故そこまで知っている'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Particle Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomEndY = Math.random() * 100;
          const randomDuration = Math.random() * 10 + 5;
          const randomOpacity = Math.random() * 0.5;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#C9A962] rounded-full"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
              }}
              initial={{ 
                opacity: randomOpacity
              }}
              animate={{ 
                y: [`0vh`, `${(randomEndY - randomY)}vh`],
                opacity: [randomOpacity, randomOpacity * 0.5, 0]
              }}
              transition={{ 
                duration: randomDuration, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        })}
      </div>

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 bg-black/80 backdrop-blur-sm px-5 py-2.5 border border-[#C9A962]/50 hover:border-[#C9A962] transition-all text-white hover:bg-[#C9A962]/10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider">BACK</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Key Visual Background */}
        <div className="absolute inset-0 z-0">
          {/* Desktop: Wide version */}
          <img 
            src={keyVisualWide} 
            alt="Key Visual"
            className="hidden md:block w-full h-full object-cover opacity-60"
          />
          {/* Mobile: Square version */}
          <img 
            src={keyVisualSquare} 
            alt="Key Visual"
            className="md:hidden w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
        </div>

        <motion.div 
          className="relative z-10 text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Main Title */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="text-[#C9A962] text-xs md:text-sm tracking-[0.3em] mb-4 md:mb-6">TV ANIMATION</div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl mb-6 md:mb-8 leading-tight tracking-tight" style={{ fontFamily: 'serif' }}>
              死に戻りの賢者、<br />
              今度こそ世界を救う
            </h1>
            <div className="text-sm md:text-base tracking-[0.5em] text-[#C9A962] mb-3">SHINIKEN</div>
            <div className="w-32 md:w-48 h-px bg-gradient-to-r from-transparent via-[#C9A962] to-transparent mx-auto"></div>
          </motion.div>

          {/* Tagline */}
          <motion.p 
            className="text-lg md:text-3xl mb-12 md:mb-16 text-[#C9A962]/90 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            すべてを識る者は、すべてを救えるか——
          </motion.p>

          {/* Air Date */}
          <motion.div 
            className="text-2xl md:text-4xl mb-12 md:mb-16 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            2026年7月 放送開始
          </motion.div>

          {/* Countdown */}
          <motion.div 
            className="flex justify-center gap-3 md:gap-6 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            {[
              { label: 'DAYS', value: countdown.days },
              { label: 'HOURS', value: countdown.hours },
              { label: 'MINUTES', value: countdown.minutes },
              { label: 'SECONDS', value: countdown.seconds }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-black border border-[#C9A962]/30 px-4 md:px-8 py-4 md:py-6 min-w-[70px] md:min-w-[100px]">
                  <div className="text-3xl md:text-5xl text-[#C9A962] mb-2 font-light tracking-wider" style={{ fontFamily: 'serif' }}>
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-500 tracking-widest">{item.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32 px-4 relative border-t border-[#C9A962]/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl text-center mb-6 tracking-wider" style={{ fontFamily: 'serif' }}>
              INTRODUCTION
            </h2>
            <div className="w-24 h-px bg-[#C9A962] mx-auto mb-4"></div>
            <div className="text-center text-xs md:text-sm text-[#C9A962]/60 tracking-[0.3em]">イントロダクション</div>
          </motion.div>

          <motion.div 
            className="border border-[#C9A962]/20 p-8 md:p-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="space-y-8 leading-loose text-gray-300 text-base md:text-lg">
              <p className="text-[#C9A962]">「すまない、君には才能がない」</p>
              <p>
                勇者パーティを追放された宮廷魔術師エルドは、それでも世界を救うため、たった一人で魔王討伐を目指した。<br />
                ——そして、失敗した。
              </p>
              <p>
                魔王の放った"終焉の炎"が世界を焼き尽くす瞬間、エルドは全てを悟る。<br />
                「勇者も、王国も、神々でさえも——最初から詰んでいた」
              </p>
              <p>
                目覚めると、そこは1000年前の世界。<br />
                1000年分の知識と、"世界の終わり"を見届けた記憶を持つ賢者の、運命を塗り替える戦いが始まる——。
              </p>
              <p className="text-[#C9A962] text-xl md:text-2xl text-center mt-12 pt-8 border-t border-[#C9A962]/20">
                「今度こそ、誰も死なせない」
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="inline-block border border-[#C9A962]/50 px-8 py-3">
              <p className="text-[#C9A962] tracking-wider text-sm md:text-base">シリーズ累計500万部突破</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="py-20 md:py-32 px-4 relative border-t border-[#C9A962]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl text-center mb-6 tracking-wider" style={{ fontFamily: 'serif' }}>
              CHARACTER
            </h2>
            <div className="w-24 h-px bg-[#C9A962] mx-auto mb-4"></div>
            <div className="text-center text-xs md:text-sm text-[#C9A962]/60 tracking-[0.3em]">登場人物</div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {characters.map((character, index) => (
              <motion.div
                key={index}
                className="border border-[#C9A962]/20 hover:border-[#C9A962]/60 transition-all duration-500 overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Character Image */}
                <div className="h-96 md:h-[500px] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
                  {index === 0 && (
                    <img 
                      src={eldoImage} 
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {index === 1 && (
                    <img 
                      src={lieselotteImage} 
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {index === 2 && (
                    <img 
                      src={kainaImage} 
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {index === 3 && (
                    <img 
                      src={viktorImage} 
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="text-xs text-[#C9A962]/60 mb-2 tracking-wider">CHARACTER {String(index + 1).padStart(2, '0')}</div>
                  </div>
                </div>
                
                {/* Character Info */}
                <div className="p-6 md:p-8 bg-black">
                  <h3 className="text-xl md:text-2xl mb-3 text-[#C9A962] tracking-wide" style={{ fontFamily: 'serif' }}>
                    {character.name}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">{character.role}</p>
                  <p className="text-white/60 text-sm mb-6">
                    <span className="text-[#C9A962]/60">CV</span> {character.cv}
                  </p>
                  <div className="border-l-2 border-[#C9A962]/50 pl-4 py-2">
                    <p className="text-gray-300 italic text-sm md:text-base leading-relaxed">
                      「{character.quote}」
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Movie Section */}
      <section className="py-20 md:py-32 px-4 border-t border-[#C9A962]/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl text-center mb-6 tracking-wider" style={{ fontFamily: 'serif' }}>
              MOVIE
            </h2>
            <div className="w-24 h-px bg-[#C9A962] mx-auto mb-4"></div>
            <div className="text-center text-xs md:text-sm text-[#C9A962]/60 tracking-[0.3em]">映像</div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="aspect-video bg-black border border-[#C9A962]/30 flex items-center justify-center relative overflow-hidden group cursor-pointer hover:border-[#C9A962]/60 transition-all">
              <Youtube className="w-16 h-16 md:w-24 md:h-24 text-[#C9A962]/60 group-hover:text-[#C9A962] transition-colors z-10" />
              <div className="absolute top-4 right-4 bg-[#DC2626] text-white px-4 py-1.5 text-xs md:text-sm z-10 tracking-wider">
                ティザーPV公開中
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 md:py-32 px-4 border-t border-[#C9A962]/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl text-center mb-6 tracking-wider" style={{ fontFamily: 'serif' }}>
              STAFF
            </h2>
            <div className="w-24 h-px bg-[#C9A962] mx-auto mb-4"></div>
            <div className="text-center text-xs md:text-sm text-[#C9A962]/60 tracking-[0.3em]">スタッフ</div>
          </motion.div>

          <motion.div 
            className="border border-[#C9A962]/20 p-8 md:p-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 text-gray-300">
              <div className="flex justify-between items-baseline pb-4 border-b border-[#C9A962]/10">
                <span className="text-[#C9A962]/60 text-sm tracking-wider">原作</span>
                <span className="text-right text-sm md:text-base">氷室 蒼一郎<br /><span className="text-xs text-gray-500">フェニックス文庫刊</span></span>
              </div>
              <div className="flex justify-between items-baseline pb-4 border-b border-[#C9A962]/10">
                <span className="text-[#C9A962]/60 text-sm tracking-wider">監督</span>
                <span className="text-sm md:text-base">橘 健吾</span>
              </div>
              <div className="flex justify-between items-baseline pb-4 border-b border-[#C9A962]/10">
                <span className="text-[#C9A962]/60 text-sm tracking-wider">シリーズ構成</span>
                <span className="text-sm md:text-base">三浦 麻衣</span>
              </div>
              <div className="flex justify-between items-baseline pb-4 border-b border-[#C9A962]/10">
                <span className="text-[#C9A962]/60 text-sm tracking-wider">キャラクターデザイン</span>
                <span className="text-sm md:text-base">高橋 晃</span>
              </div>
              <div className="flex justify-between items-baseline pb-4 border-b border-[#C9A962]/10">
                <span className="text-[#C9A962]/60 text-sm tracking-wider">音楽</span>
                <span className="text-sm md:text-base">澤野 宏之介</span>
              </div>
              <div className="flex justify-between items-baseline pb-4 border-b border-[#C9A962]/10">
                <span className="text-[#C9A962]/60 text-sm tracking-wider">アニメーション制作</span>
                <span className="text-sm md:text-base">Studio PARADOX</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SNS Section */}
      <section className="py-20 md:py-32 px-4 border-t border-[#C9A962]/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl mb-6 tracking-wider" style={{ fontFamily: 'serif' }}>
              FOLLOW US
            </h2>
            <div className="w-24 h-px bg-[#C9A962] mx-auto mb-4"></div>
            <div className="text-xs md:text-sm text-[#C9A962]/60 tracking-[0.3em]">最新情報</div>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-6 mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a 
              href="#" 
              className="w-14 h-14 md:w-16 md:h-16 border border-[#C9A962]/30 flex items-center justify-center hover:border-[#C9A962] hover:bg-[#C9A962]/10 transition-all group"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-[#C9A962]/60 group-hover:text-[#C9A962] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-14 h-14 md:w-16 md:h-16 border border-[#C9A962]/30 flex items-center justify-center hover:border-[#C9A962] hover:bg-[#C9A962]/10 transition-all group"
            >
              <Youtube className="w-6 h-6 md:w-7 md:h-7 text-[#C9A962]/60 group-hover:text-[#C9A962] transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 md:w-16 md:h-16 border border-[#C9A962]/30 flex items-center justify-center hover:border-[#C9A962] hover:bg-[#C9A962]/10 transition-all group"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-[#C9A962]/60 group-hover:text-[#C9A962] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="border border-[#C9A962]/20 p-8 md:p-12 max-w-lg mx-auto">
              <h3 className="mb-6 text-[#C9A962] text-lg md:text-xl tracking-wider">メールマガジン登録</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="メールアドレスを入力"
                  className="flex-1 bg-black border border-[#C9A962]/30 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A962] transition-colors text-sm"
                />
                <button className="bg-[#C9A962] text-black px-8 py-3 hover:bg-[#B8941F] transition-colors flex items-center justify-center gap-2 tracking-wider text-sm">
                  <Mail className="w-4 h-4" />
                  登録
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#C9A962]/10 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 text-xs md:text-sm tracking-wider">
            ©2026 氷室蒼一郎/フェニックス出版/「死に賢」製作委員会
          </p>
        </div>
      </footer>
    </div>
  );
}