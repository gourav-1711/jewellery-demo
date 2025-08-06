import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { products } from '@/data/products';
import { ArrowRight, Sparkles, Crown } from 'lucide-react';

export default function ProductCollection() {
  const [activeTab, setActiveTab] = useState('women');
  
  const menProducts = products.filter(p => p.category === 'men');
  const womenProducts = products.filter(p => p.category === 'women');

  const ProductSlider = ({ products: productList, title, description }) => (
    <div className="space-y-8">
      {/* Section header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="w-6 h-6 text-gold-500" />
          <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
            {title}
          </h3>
          <Sparkles className="w-6 h-6 text-gold-500" />
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Products slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation, FreeMode, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          freeMode={true}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 28,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 36,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="product-swiper !overflow-visible"
        >
          {productList.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* View all button */}
      <div className="text-center">
        <Button className="btn-premium group">
          <span className="mr-2">View All {title}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </div>
    </div>
  );

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gold-50/30 to-diamond-50/30" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-l from-gold-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-r from-diamond-100/50 to-transparent rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4">
        {/* Main heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="w-8 h-8 text-primary" />
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-gradient-primary">
              Discover Our Collections
            </h2>
            <Crown className="w-8 h-8 text-primary" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated collections, where each piece represents the pinnacle of 
            craftsmanship and timeless elegance.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Enhanced tab navigation */}
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-2 mb-16 bg-white/80 backdrop-blur-sm p-2 rounded-2xl border border-gold-200/50 shadow-xl h-full">
            <TabsTrigger 
              value="women" 
              className="rounded-xl font-bold text-lg py-4 transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105"
            >
              <Crown className="w-5 h-5 mr-2" />
              Women's
            </TabsTrigger>
            <TabsTrigger 
              value="men"
              className="rounded-xl font-bold text-lg py-4 transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105"
            >
              <Crown className="w-5 h-5 mr-2" />
              Men's
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="women" className="space-y-8">
            <ProductSlider 
              products={womenProducts} 
              title="Women's Collection"
              description="Elegant pieces that celebrate femininity, grace, and timeless beauty. Each design captures the essence of modern sophistication."
            />
          </TabsContent>
          
          <TabsContent value="men" className="space-y-8">
            <ProductSlider 
              products={menProducts}
              title="Men's Collection" 
              description="Sophisticated designs for the modern gentleman. Bold statements that reflect strength, character, and refined taste."
            />
          </TabsContent>
        </Tabs>
      </div>
      
      <style jsx global>{`
        .product-swiper .swiper-button-next,
        .product-swiper .swiper-button-prev {
          color: oklch(var(--primary));
          background: white;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          margin-top: -26px;
          border: 2px solid oklch(var(--gold-200));
          transition: all 0.3s ease;
        }
        
        .product-swiper .swiper-button-next:after,
        .product-swiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
        
        .product-swiper .swiper-button-next:hover,
        .product-swiper .swiper-button-prev:hover {
          background: oklch(var(--primary));
          color: white;
          transform: scale(1.1);
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
        }
        
        @media (max-width: 768px) {
          .product-swiper .swiper-button-next,
          .product-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
