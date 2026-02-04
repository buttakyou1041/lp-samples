import { Link } from 'react-router';
import { ArrowLeft, MapPin, Clock, Phone } from 'lucide-react';
import { useEffect } from 'react';
import { Seo } from '../seo/Seo';
import { BreadcrumbJsonLd, WebPageJsonLd } from '../seo/JsonLd';
import { PAGE_SEO } from '@/config/seo';

export default function CoffeeLp() {
  const seo = PAGE_SEO.coffee;

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo {...seo} />
      <BreadcrumbJsonLd
        items={[
          { name: 'ホーム', url: '/' },
          { name: '制作サンプル', url: '/#works' },
          { name: 'カフェLP', url: '/samples/coffee' },
        ]}
      />
      <WebPageJsonLd title={seo.title} description={seo.description} path={seo.path} />

      <div className="min-h-screen bg-[#F5F0E8]">
        {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-[#3D2B1F]"
        >
          <ArrowLeft className="w-4 h-4" />
          戻る
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(61, 43, 31, 0.4), rgba(61, 43, 31, 0.4)), url('https://images.unsplash.com/photo-1733860398142-65700ede69d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBkcmlwJTIwYnJld2luZ3xlbnwxfHx8fDE3NzAxMjg3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080')` 
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="mb-4 text-white" style={{ fontFamily: 'serif' }}>
            一杯のコーヒーに、<br />ていねいな時間を
          </h1>
          <p className="text-xl text-white/90">中目黒の自家焙煎コーヒー専門店</p>
          <div className="mt-6">
            <div className="inline-block bg-[#D4AF37] text-white px-6 py-2 tracking-widest" style={{ fontFamily: 'serif' }}>
              SLOW DRIP COFFEE
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8 text-[#3D2B1F]" style={{ fontFamily: 'serif' }}>Concept</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-lg leading-relaxed text-[#3D2B1F]">
            豆の個性を最大限に引き出す焙煎技術と、<br />
            一杯ずつ丁寧にハンドドリップで淹れるコーヒー。<br />
            忙しい日常から少し離れて、<br />
            ゆっくりと流れる時間をお楽しみください。
          </p>
        </div>
      </section>

      {/* Coffee Image */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div 
            className="h-96 bg-cover bg-center rounded-2xl shadow-2xl"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1631869404868-2ae8de2e7264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwY296eSUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzcwMTI4Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080')` 
            }}
          />
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8 text-[#3D2B1F]" style={{ fontFamily: 'serif' }}>Menu</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Drip Coffee */}
            <div>
              <h3 className="mb-6 text-[#3D2B1F] border-b-2 border-[#D4AF37] pb-2">ドリップコーヒー</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-[#3D2B1F]">本日のブレンド</span>
                  <span className="text-[#D4AF37]">¥500</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#3D2B1F]">エチオピア イルガチェフェ</span>
                  <span className="text-[#D4AF37]">¥650</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#3D2B1F]">コロンビア スプレモ</span>
                  <span className="text-[#D4AF37]">¥650</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#3D2B1F]">グアテマラ アンティグア</span>
                  <span className="text-[#D4AF37]">¥700</span>
                </div>
              </div>
            </div>

            {/* Espresso */}
            <div>
              <h3 className="mb-6 text-[#3D2B1F] border-b-2 border-[#D4AF37] pb-2">エスプレッソ</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-[#3D2B1F]">エスプレッソ</span>
                  <span className="text-[#D4AF37]">¥500</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#3D2B1F]">カプチーノ</span>
                  <span className="text-[#D4AF37]">¥600</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#3D2B1F]">カフェラテ</span>
                  <span className="text-[#D4AF37]">¥600</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#3D2B1F]">フラットホワイト</span>
                  <span className="text-[#D4AF37]">¥650</span>
                </div>
              </div>
            </div>

            {/* Seasonal */}
            <div>
              <h3 className="mb-6 text-[#3D2B1F] border-b-2 border-[#D4AF37] pb-2">季節限定</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-[#3D2B1F]">アイスコーヒー</span>
                  <span className="text-[#D4AF37]">¥550</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#3D2B1F]">コールドブリュー</span>
                  <span className="text-[#D4AF37]">¥700</span>
                </div>
              </div>
            </div>

            {/* Food */}
            <div>
              <h3 className="mb-6 text-[#3D2B1F] border-b-2 border-[#D4AF37] pb-2">フード</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-[#3D2B1F]">チーズケーキ</span>
                  <span className="text-[#D4AF37]">¥600</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#3D2B1F]">ガトーショコラ</span>
                  <span className="text-[#D4AF37]">¥650</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#3D2B1F]">本日のスコーン</span>
                  <span className="text-[#D4AF37]">¥400</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8 text-[#3D2B1F]" style={{ fontFamily: 'serif' }}>Access</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-16"></div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#3D2B1F] mb-2">〒153-0051</p>
                    <p className="text-[#3D2B1F]">東京都目黒区上目黒2-XX-XX</p>
                    <p className="text-gray-600 text-sm mt-2">中目黒駅より徒歩5分</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 mb-6">
                  <Clock className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#3D2B1F]">9:00 - 19:00</p>
                    <p className="text-gray-600 text-sm mt-2">定休日：水曜日</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#3D2B1F]">03-XXXX-XXXX</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.071762434473!2d139.6984!3d35.6432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4b7a0f1c5b%3A0x1c7a8e7f8a2f8c9!2z5Lit55uu6buS6aeF!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="店舗地図"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-[#3D2B1F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8 text-white" style={{ fontFamily: 'serif' }}>ご予約・お問い合わせ</h2>
          <p className="text-white/80 mb-8">
            お気軽にお問い合わせください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:03XXXXXXXX"
              className="bg-[#D4AF37] text-white px-8 py-3 rounded-lg hover:bg-[#B8941F] transition-colors"
            >
              電話で予約
            </a>
            <a 
              href="#"
              className="bg-white text-[#3D2B1F] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              お問い合わせ
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D2B1F] text-white py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4" style={{ fontFamily: 'serif' }}>
            <span className="text-2xl tracking-widest text-[#D4AF37]">SLOW DRIP COFFEE</span>
          </div>
          <p className="text-white/60 text-sm">© 2026 SLOW DRIP COFFEE. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </>
  );
}