import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { categories } from '@/data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CategorySlider() {
  return (
    <section className="py-16 lg:py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-50/50 via-white to-diamond-50/50" />
      
      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-gold-500 animate-pulse" />
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-gradient-primary">
              Shop by Category
            </h2>
            <Sparkles className="w-6 h-6 text-gold-500 animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of jewelry categories, each crafted with exceptional attention to detail.
          </p>
        </div>
        
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 28,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 32,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 36,
            },
          }}
          className="category-swiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={category.id}>
              <div className="group cursor-pointer hover-lift">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3] bg-gradient-to-br from-gold-100 to-diamond-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="text-white font-serif text-lg lg:text-xl font-bold mb-2 drop-shadow-lg">
                      {category.name}
                    </h3>
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <div className="inline-flex items-center text-white text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                        <span className="mr-1">Explore</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 group-hover:ring-gold-400/50 transition-all duration-300" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <style jsx global>{`
        .category-swiper .swiper-button-next,
        .category-swiper .swiper-button-prev {
          color: oklch(var(--gold-600));
          background: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          margin-top: -24px;
          border: 2px solid oklch(var(--gold-200));
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .category-swiper .swiper-button-next:after,
        .category-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: 900;
        }
        
        .category-swiper .swiper-button-next:hover,
        .category-swiper .swiper-button-prev:hover {
          background: oklch(var(--gold-600));
          color: white;
          transform: scale(1.1);
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 768px) {
          .category-swiper .swiper-button-next,
          .category-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
