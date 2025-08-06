import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Star, ArrowRight, Sparkles, Diamond, Crown } from 'lucide-react';

export default function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent to-primary">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 border border-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border-2 border-white rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Premium badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
              <Crown className="w-5 h-5 text-gold-300" />
              <span className="text-white font-medium">Premium Luxury Collection</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-300 text-gold-300" />
                ))}
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-6 leading-tight">
              <span className="block">Exquisite</span>
              <span className="block bg-gradient-to-r from-gold-300 via-gold-200 to-diamond-200 bg-clip-text text-transparent">
                Jewelry
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-light opacity-90">
                That Tells Your Story
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl lg:max-w-none">
              Discover handcrafted masterpieces that blend timeless elegance with contemporary design. 
              Each piece is a testament to exceptional artistry and uncompromising quality.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-gold-300 mb-1">30+</div>
                <div className="text-white/70 text-sm font-medium">Years Crafting</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-gold-300 mb-1">50K+</div>
                <div className="text-white/70 text-sm font-medium">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-gold-300 mb-1">1K+</div>
                <div className="text-white/70 text-sm font-medium">Unique Designs</div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="group bg-white text-primary hover:bg-gold-50 font-semibold px-8 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105"
              >
                <span className="mr-2">Shop Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="group border-2 border-white/50 text-black hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                <span>Watch Story</span>
              </Button>
            </div>
          </div>

          {/* Right content - Showcase */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Main showcase card */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Product showcase */}
              <div className="aspect-square bg-white rounded-2xl p-8 mb-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop&crop=center"
                  alt="Featured jewelry piece"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Product info */}
              <div className="text-center text-white">
                <h3 className="text-2xl font-serif font-semibold mb-2">Diamond Solitaire</h3>
                <p className="text-white/70 mb-4">Our most cherished design</p>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <span className="text-3xl font-bold text-gold-300">$2,999</span>
                  <span className="text-lg text-white/60 line-through">$3,499</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold py-3 rounded-xl">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Add to Collection
                </Button>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-gold-400 to-gold-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Featured
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                <Diamond className="w-4 h-4 inline mr-1" />
                Certified
              </div>
            </div>

            {/* Floating testimonial */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src="https://ui-avatars.com/api/?name=Customer&background=random&size=400"
                  alt="Customer"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-primary">Sarah Johnson</div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                "Absolutely stunning quality! The craftsmanship is exceptional."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
}
