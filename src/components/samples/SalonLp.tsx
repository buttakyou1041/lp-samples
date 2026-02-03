import { Link } from 'react-router';
import { ArrowLeft, MapPin, Clock, Phone, Heart, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useEffect } from 'react';
import salonImg1 from "figma:asset/0f0f9e678230d37ef826d45b6ae4369611bb89bb.png";
import salonImg2 from "figma:asset/695fdd55755c763c188dcd53e4001606e7a0f903.png";
import salonImg3 from "figma:asset/093f1a26d0e31509149e9389c260387993eb2fa2.png";
import salonImg4 from "figma:asset/897c0133c56b3435148eab90e784ac2b2a8b6e3d.png";
import salonImg5 from "figma:asset/71da4d9dd8c545090cae2ab82ce55609405fdf27.png";
import salonImg6 from "figma:asset/0996eee4b24f372931547cba028e8efe46c10b0c.png";
import salonImg7 from "figma:asset/e69d836994d5ebb9b0a1e9898ad8c94d24c12356.png";
import salonImg8 from "figma:asset/1f3836ef93d7b784f9fd59f4b675c3003311c4a3.png";
import salonImg9 from "figma:asset/a2aae70ee0551d7e99e9af544b78028753d84a91.png";

export default function SalonLp() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const instagramPosts = [
    {
      image: salonImg1,
      likes: 342
    },
    {
      image: salonImg2,
      likes: 289
    },
    {
      image: salonImg3,
      likes: 412
    },
    {
      image: salonImg4,
      likes: 234
    },
    {
      image: salonImg5,
      likes: 189
    },
    {
      image: salonImg6,
      likes: 312
    },
    {
      image: salonImg7,
      likes: 276
    },
    {
      image: salonImg8,
      likes: 398
    },
    {
      image: salonImg9,
      likes: 445
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-[#2C3E2E]"
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1637777277337-f114350fb088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBtb2Rlcm4lMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc3MDEzNjUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')` 
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="mb-6 text-white text-3xl md:text-5xl" style={{ fontFamily: 'serif' }}>
            あなたの"なりたい"を叶える
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">自由が丘の隠れ家サロン</p>
          <a 
            href="https://beauty.hotpepper.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#9CAF88] text-white w-full sm:w-auto px-10 py-3 rounded-full hover:bg-[#8A9D78] transition-colors"
          >
            予約する
          </a>
          <div className="mt-12" style={{ fontFamily: 'serif' }}>
            <span className="text-2xl md:text-3xl tracking-widest text-white">hair salon KOMOREBI</span>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg leading-relaxed text-[#2C3E2E]">
            5人のスタイリストが、お客様一人ひとりの"なりたい"に寄り添います。
            オーガニック製品を使用し、髪と頭皮に優しい施術を心がけています。
            自由が丘の静かな路地裏で、ゆったりとした時間をお過ごしください。
          </p>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#2C3E2E]" style={{ fontFamily: 'serif' }}>Instagram</h2>
            <div className="w-20 h-1 bg-[#9CAF88] mx-auto mb-6"></div>
            <a 
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#9CAF88] hover:text-[#8A9D78] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-sm">@salon_komorebi をフォロー</span>
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-0.5 md:gap-2">
            {instagramPosts.map((post, index) => (
              <div key={index} className="relative aspect-square group cursor-pointer overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={`投稿 ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 md:gap-6">
                  <div className="flex items-center gap-1 md:gap-2 text-white">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 fill-white" />
                    <span className="text-sm md:text-base font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2 text-white">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 fill-white" />
                    <span className="text-sm md:text-base font-semibold">{Math.floor(post.likes / 10)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-4 text-[#2C3E2E]" style={{ fontFamily: 'serif' }}>Menu</h2>
          <div className="w-20 h-1 bg-[#9CAF88] mx-auto mb-12 md:mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#FAFAF8] rounded-2xl p-6 md:p-8">
              <h3 className="mb-6 text-[#2C3E2E]">カット</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-2">
                  <span className="text-[#2C3E2E] text-sm md:text-base">カット</span>
                  <span className="text-[#9CAF88] text-sm md:text-base">¥6,600〜</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-2">
                  <span className="text-[#2C3E2E] text-sm md:text-base">カット + シャンプー</span>
                  <span className="text-[#9CAF88] text-sm md:text-base">¥7,700〜</span>
                </div>
              </div>
            </div>

            <div className="bg-[#FAFAF8] rounded-2xl p-6 md:p-8">
              <h3 className="mb-6 text-[#2C3E2E]">カラー</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-2">
                  <span className="text-[#2C3E2E] text-sm md:text-base">カラー</span>
                  <span className="text-[#9CAF88] text-sm md:text-base">¥8,800〜</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-2">
                  <span className="text-[#2C3E2E] text-sm md:text-base">ハイライト</span>
                  <span className="text-[#9CAF88] text-sm md:text-base">¥11,000〜</span>
                </div>
              </div>
            </div>

            <div className="bg-[#FAFAF8] rounded-2xl p-6 md:p-8">
              <h3 className="mb-6 text-[#2C3E2E]">パーマ</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-2">
                  <span className="text-[#2C3E2E] text-sm md:text-base">パーマ</span>
                  <span className="text-[#9CAF88] text-sm md:text-base">¥9,900〜</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-2">
                  <span className="text-[#2C3E2E] text-sm md:text-base">デジタルパーマ</span>
                  <span className="text-[#9CAF88] text-sm md:text-base">¥13,200〜</span>
                </div>
              </div>
            </div>

            <div className="bg-[#FAFAF8] rounded-2xl p-6 md:p-8">
              <h3 className="mb-6 text-[#2C3E2E]">トリートメント</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-2">
                  <span className="text-[#2C3E2E] text-sm md:text-base">トリートメント</span>
                  <span className="text-[#9CAF88] text-sm md:text-base">¥5,500〜</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-2">
                  <span className="text-[#2C3E2E] text-sm md:text-base">ヘッドスパ</span>
                  <span className="text-[#9CAF88] text-sm md:text-base">¥4,400〜</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-4 text-[#2C3E2E]" style={{ fontFamily: 'serif' }}>Access</h2>
          <div className="w-20 h-1 bg-[#9CAF88] mx-auto mb-12 md:mb-16"></div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#9CAF88] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#2C3E2E] mb-2 text-sm md:text-base">〒152-0035</p>
                    <p className="text-[#2C3E2E] text-sm md:text-base">東京都目黒区自由が丘1-XX-XX</p>
                    <p className="text-gray-600 text-xs md:text-sm mt-2">自由が丘駅より徒歩3分</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 mb-6">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#9CAF88] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#2C3E2E] text-sm md:text-base">10:00 - 20:00</p>
                    <p className="text-gray-600 text-xs md:text-sm mt-2">定休日：火曜日</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#9CAF88] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#2C3E2E] text-sm md:text-base">03-XXXX-XXXX</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="rounded-lg h-80 md:h-64 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.078!2d139.6687!3d35.6081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b4b7c0c7c5d%3A0x2e7a8e7f8a2f8c9!2z6Ieq55Sx44GM5LiY6aeF!5e0!3m2!1sja!2sjp!4v1234567890124!5m2!1sja!2sjp"
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

      {/* Reservation Section */}
      <section id="reservation" className="py-16 md:py-24 px-4 bg-[#9CAF88]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 md:mb-8 text-white" style={{ fontFamily: 'serif' }}>Reservation</h2>
          <p className="text-white/90 mb-6 md:mb-8 text-sm md:text-base">
            ご予約はお電話またはWebからお願いいたします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <a 
              href="tel:03XXXXXXXX"
              className="w-full sm:w-auto bg-white text-[#2C3E2E] px-10 py-3 rounded-full hover:bg-gray-100 transition-colors text-center"
            >
              電話で予約
            </a>
            <a 
              href="https://beauty.hotpepper.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#2C3E2E] text-white px-10 py-3 rounded-full hover:bg-[#1F2B20] transition-colors text-center"
            >
              Web予約
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E2E] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6" style={{ fontFamily: 'serif' }}>
            <span className="text-2xl tracking-widest text-[#9CAF88]">hair salon KOMOREBI</span>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-white hover:text-[#9CAF88] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          <p className="text-white/60 text-sm">© 2026 hair salon KOMOREBI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}