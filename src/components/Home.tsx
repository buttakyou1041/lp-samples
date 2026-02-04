import { Link } from 'react-router';
import { Code2, MessageCircle, Brain, Database, Smartphone, Settings, ArrowRight, ExternalLink, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect } from 'react';
import { Seo } from './seo/Seo';
import { OrganizationJsonLd, WebsiteJsonLd, WebPageJsonLd, FAQJsonLd, ServiceJsonLd } from './seo/JsonLd';
import { PAGE_SEO } from '@/config/seo';

export default function Home() {
  const seo = PAGE_SEO.home;

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Code2,
      title: 'LP制作',
      description: 'コンバージョンを最大化するプロフェッショナルなランディングページを制作',
      price: '初期費用0円〜、月額1万円',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'IT顧問',
      description: 'ベンダー選定、見積もり査定、技術的な意思決定をサポート',
      price: '月額5万円〜',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      icon: Brain,
      title: 'AI活用支援',
      description: 'ChatGPT/Claude導入から業務フローへの組み込みまで',
      price: '月額3万円〜',
      gradient: 'from-teal-400 to-teal-600'
    },
    {
      icon: Database,
      title: '業務システム',
      description: '管理画面、社内ツール、在庫管理システムなどを開発',
      price: '要相談',
      gradient: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: Smartphone,
      title: 'アプリ開発',
      description: 'iOS/Androidアプリをネイティブまたはクロスプラットフォームで開発',
      price: '要相談',
      gradient: 'from-pink-400 to-pink-600'
    },
    {
      icon: Settings,
      title: '運用支援',
      description: '保守、監視、障害対応フローの整備と運用サポート',
      price: '月額3万円〜',
      gradient: 'from-orange-400 to-orange-600'
    }
  ];

  // FAQ data for AI summaries
  const faqItems = [
    {
      question: 'LP制作の費用はいくらですか？',
      answer: 'LP制作は初期費用0円から、月額1万円でご提供しています。コンバージョンを最大化するプロフェッショナルなランディングページを制作します。',
    },
    {
      question: 'IT顧問サービスとは何ですか？',
      answer: 'IT顧問サービスでは、ベンダー選定、見積もり査定、技術的な意思決定をサポートします。月額5万円からご利用いただけます。',
    },
    {
      question: 'AI活用支援ではどのようなサポートを受けられますか？',
      answer: 'ChatGPTやClaudeの導入から、業務フローへの組み込みまでトータルでサポートします。月額3万円からご利用いただけます。',
    },
    {
      question: '支援実績はどのくらいありますか？',
      answer: '15社以上の支援実績があり、最大353人月規模のプロジェクト経験、PM歴5年以上の実績があります。',
    },
  ];

  // Service data for structured data
  const serviceItems = services.map((s) => ({
    name: s.title,
    description: s.description,
    price: s.price,
  }));

  return (
    <>
      <Seo {...seo} />
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <WebPageJsonLd title={seo.title} description={seo.description} path={seo.path} />
      <FAQJsonLd items={faqItems} />
      <ServiceJsonLd services={serviceItems} />

      <div className="min-h-screen bg-white">
        {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-lg flex items-center justify-center">
                <span className="text-white text-sm" style={{ fontWeight: 600 }}>NI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-[#1e293b] hover:text-[#3b82f6] transition-colors">サービス</a>
              <a href="#works" className="text-[#1e293b] hover:text-[#3b82f6] transition-colors">実績</a>
              <a href="#contact" className="bg-[#3b82f6] text-white px-6 py-2 rounded-lg hover:bg-[#2563eb] transition-colors shadow-lg shadow-[#3b82f6]/30">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            {/* Catch Copy */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -top-8 -right-8 w-96 h-96 bg-gradient-to-br from-[#3b82f6]/10 to-[#8b5cf6]/10 rounded-full blur-3xl -z-10"></div>
                
                <h1 className="text-[#1e293b] mb-6 leading-tight text-5xl md:text-[5rem]" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
                  成果につながる<br />
                  LP制作
                </h1>
                <p className="text-[#64748b] text-lg md:text-2xl mb-10 leading-relaxed max-w-3xl">
                  初期費用0円〜。コンバージョンを最大化する<br className="hidden sm:block" />
                  プロフェッショナルなランディングページを制作します
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a 
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-3 bg-[#3b82f6] text-white px-8 py-4 md:px-12 md:py-6 rounded-xl hover:bg-[#2563eb] transition-all text-lg md:text-xl shadow-xl shadow-[#3b82f6]/30 hover:shadow-2xl hover:shadow-[#3b82f6]/40"
                    style={{ fontWeight: 600 }}
                  >
                    無料相談する
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#works"
                    className="inline-flex items-center justify-center gap-3 bg-white text-[#3b82f6] px-8 py-4 md:px-12 md:py-6 rounded-xl border-2 border-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition-all text-lg md:text-xl"
                    style={{ fontWeight: 600 }}
                  >
                    実績を見る
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm text-[#64748b]">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-8 bg-[#3b82f6] rounded-full"></div>
                    <span>15社以上の支援実績</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-8 bg-[#8b5cf6] rounded-full"></div>
                    <span>PM歴5年超</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1e293b] text-4xl md:text-[3rem]" style={{ fontWeight: 700 }}>
              実績
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { number: '353', label: '最大プロジェクト規模', unit: '人月' },
              { number: '15', label: '支援実績', unit: '社' },
              { number: '5', label: 'PM経験', unit: '年' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div
                  initial={{ scale: 1.3, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2, type: "spring", stiffness: 100 }}
                  className="flex items-end justify-center mb-4"
                >
                  <span className="text-[#3b82f6] text-[5rem] md:text-[7.5rem]" style={{ fontWeight: 200, lineHeight: 0.9, letterSpacing: '-0.03em' }}>
                    {stat.number}
                  </span>
                  <span className="text-[#64748b] ml-2 mb-2 md:mb-3 text-lg md:text-xl" style={{ fontWeight: 400 }}>
                    {stat.unit}
                  </span>
                </motion.div>
                <div className="text-[#64748b] text-sm md:text-base" style={{ fontWeight: 500 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1e293b] text-4xl md:text-[3rem]" style={{ fontWeight: 700 }}>
              提供サービス
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#3b82f6] hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white stroke-[1.5]" />
                  </div>
                  <h3 className="text-[#1e293b] text-xl mb-2" style={{ fontWeight: 700 }}>
                    {service.title}
                  </h3>
                  <p className="text-[#64748b] text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-[#3b82f6] text-sm" style={{ fontWeight: 600 }}>
                      {service.price}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-16 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1e293b] text-4xl md:text-[3rem]" style={{ fontWeight: 700 }}>
              制作実績サンプル
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                to: '/samples/coffee', 
                title: 'カフェLP', 
                desc: '飲食店向けサンプル',
                image: 'https://images.unsplash.com/photo-1571867424485-ca624c51c157?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBjYWZlJTIwbGF0dGUlMjBhcnR8ZW58MXx8fHwxNzcwMTMyMjE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                gradient: 'from-amber-400 to-orange-500'
              },
              { 
                to: '/samples/salon', 
                title: '美容室LP', 
                desc: 'サロン向けサンプル',
                image: 'https://images.unsplash.com/photo-1759134248487-e8baaf31e33e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVhdXR5JTIwc2Fsb24lMjBoYWlyY3V0fGVufDF8fHx8MTc3MDEzMjI2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                gradient: 'from-green-400 to-emerald-500'
              },
              { 
                to: '/samples/anime', 
                title: 'アニメティザーLP', 
                desc: '制作委員会向けサンプル',
                image: 'https://images.unsplash.com/photo-1667419675004-28144c7198b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGZhbnRhc3klMjB3YXJyaW9yfGVufDF8fHx8MTc3MDEzMjEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                gradient: 'from-purple-400 to-indigo-500'
              }
            ].map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link 
                  to={work.to}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`aspect-[4/3] bg-gradient-to-br ${work.gradient} relative overflow-hidden`}>
                    <ImageWithFallback
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[#1e293b] text-xl mb-1" style={{ fontWeight: 700 }}>
                      {work.title}
                    </h3>
                    <p className="text-[#64748b] text-sm">{work.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#3b82f6]/5 to-[#8b5cf6]/5 rounded-3xl p-8 md:p-10 border border-[#3b82f6]/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr] gap-8 md:gap-10 items-center">

              {/* Right: Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <h4 className="text-[#3b82f6] text-sm mb-2" style={{ fontWeight: 600 }}>経歴</h4>
                  <p className="text-[#1e293b] text-sm leading-relaxed">PM歴5年超<br />WEBエンジニア3年</p>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <h4 className="text-[#8b5cf6] text-sm mb-2" style={{ fontWeight: 600 }}>保有資格</h4>
                  <p className="text-[#1e293b] text-sm leading-relaxed">応用情報技術者<br />データベーススペシャリスト</p>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <h4 className="text-[#3b82f6] text-sm mb-2" style={{ fontWeight: 600 }}>プロジェクト規模</h4>
                  <p className="text-[#1e293b] text-sm">最大353人月</p>
                </div>

                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <h4 className="text-[#8b5cf6] text-sm mb-2" style={{ fontWeight: 600 }}>支援実績</h4>
                  <p className="text-[#1e293b] text-sm">15社以上</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white mb-6 text-3xl md:text-[3.5rem]" style={{ fontWeight: 700 }}>
              まずはお気軽に<br />ご相談ください
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              ご相談は無料です
            </p>
            
            <a 
              href="https://coconala.com/services/4058073"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-[#3b82f6] px-8 py-4 md:px-12 md:py-6 rounded-xl hover:bg-gray-50 transition-all text-lg md:text-xl shadow-2xl"
              style={{ fontWeight: 700 }}
            >
              ココナラで相談する
              <ExternalLink className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm" style={{ fontWeight: 600 }}>NI</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                ITコンサルタント / プロジェクトマネージャー<br />
                IT・Web・AI領域のコンサルティング、開発支援
              </p>
            </div>
            {/* <div>
              <h3 className="mb-4" style={{ fontWeight: 600 }}>SNS</h3>
              <div className="flex gap-4">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#3b82f6] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#3b82f6] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2026 Naoki Imuta. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}