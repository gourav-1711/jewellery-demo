import { useEffect } from 'react';
import AOS from 'aos';
import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import CategorySlider from '@/components/CategorySlider';
import ProductCollection from '@/components/ProductCollection';
import { Diamond, Truck, Star } from 'lucide-react';

export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div data-aos="fade-in">
        <HeroBanner />
      </div>

      {/* Category Section */}
      <div data-aos="fade-up" data-aos-delay="200">
        <CategorySlider />
      </div>

      {/* Product Collection */}
      <div data-aos="fade-up" data-aos-delay="400">
        <ProductCollection />
      </div>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground" data-aos="fade-up" data-aos-delay="600">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-8">
            Why Choose Our Jewelry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-3" data-aos="fade-up" data-aos-delay="700">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold-400 flex items-center justify-center">
                <span className="text-2xl"><Diamond /></span>
              </div>
              <h3 className="font-serif text-lg">Premium Quality</h3>
              <p className="text-primary-foreground/80 text-sm">
                Hand-selected materials and expert craftsmanship in every piece.
              </p>
            </div>
            <div className="space-y-3" data-aos="fade-up" data-aos-delay="800">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold-400 flex items-center justify-center">
                <span className="text-2xl"><Truck /></span>
              </div>
              <h3 className="font-serif text-lg">Free Shipping</h3>
              <p className="text-primary-foreground/80 text-sm">
                Complimentary shipping on all orders with secure packaging.
              </p>
            </div>
            <div className="space-y-3" data-aos="fade-up" data-aos-delay="900">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold-400 flex items-center justify-center">
                <span className="text-2xl"><Star /></span>
              </div>
              <h3 className="font-serif text-lg">Lifetime Warranty</h3>
              <p className="text-primary-foreground/80 text-sm">
                Our commitment to quality backed by lifetime warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gold-50 to-diamond-50" data-aos="fade-up" data-aos-delay="1000">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">
            Stay Connected
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for exclusive offers and latest jewelry trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-gold-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
