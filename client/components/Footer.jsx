import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube, Crown, Sparkles, Award, Shield, Truck, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const footerSections = [
    {
      title: 'Collections',
      links: [
        { name: 'Diamond Collection', href: '/diamonds' },
        { name: 'Gold Jewelry', href: '/gold' },
        { name: 'Wedding Rings', href: '/wedding' },
        { name: 'Custom Pieces', href: '/custom' },
        { name: 'Limited Edition', href: '/limited' },
      ],
    },
    {
      title: 'Customer Care',
      links: [
        { name: 'Size Guide', href: '/size-guide' },
        { name: 'Care Instructions', href: '/care' },
        { name: 'Lifetime Warranty', href: '/warranty' },
        { name: 'Free Repairs', href: '/repairs' },
        { name: 'Easy Returns', href: '/returns' },
      ],
    },
    {
      title: 'About Us',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Master Craftsmen', href: '/craftsmen' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Press & Awards', href: '/press' },
        { name: 'Careers', href: '/careers' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'from-purple-500 to-pink-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'from-blue-600 to-blue-700' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'from-sky-400 to-sky-500' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'from-red-500 to-red-600' },
  ];

  const features = [
    { icon: Shield, title: 'Lifetime Warranty', desc: 'Complete protection' },
    { icon: Truck, title: 'Free Shipping', desc: 'On orders over $500' },
    { icon: RefreshCw, title: 'Easy Returns', desc: '30-day guarantee' },
    { icon: Award, title: 'Certified Quality', desc: 'Authenticated pieces' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Features Section */}
      <div className="bg-gradient-to-r from-gold-50 via-white to-diamond-50 border-t border-gold-200">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">
              Why Choose Our Jewelry
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience unmatched quality, exceptional service, and timeless elegance with every piece.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group text-center p-6 rounded-3xl bg-white/80 backdrop-blur-sm border border-gold-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-primary via-accent to-primary text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Crown className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6">
              Join Our Elite Circle
            </h2>
            <p className="text-white/90 text-lg lg:text-xl mb-8 leading-relaxed">
              Get exclusive access to limited collections, early previews, and personalized styling tips from our master jewelers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm text-lg"
                />
                <Sparkles className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
              </div>
              <Button className="bg-white text-primary hover:bg-gold-50 font-bold px-8 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105">
                Subscribe
              </Button>
            </div>
            
            <p className="text-white/70 text-sm mt-4">
              Join 50,000+ jewelry enthusiasts. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-8 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-2xl group-hover:shadow-gold-400/25 transition-all duration-300">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-white">
                    Jewellery
                  </h2>
                  <p className="text-gold-300 text-sm font-medium">EXQUISITE COLLECTION</p>
                </div>
              </Link>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Crafting exceptional jewelry since 1990. Each piece tells a story of luxury, 
                elegance, and uncompromising quality that lasts generations.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-gold-600 transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-semibold">+1 (555) 123-4567</div>
                    <div className="text-sm text-slate-400">Available 24/7</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-gold-600 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-semibold">hello@jewellery.com</div>
                    <div className="text-sm text-slate-400">We reply within 2 hours</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-gold-600 transition-colors">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-semibold">123 Luxury Avenue</div>
                    <div className="text-sm text-slate-400">New York, NY 10001</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-serif text-xl font-bold text-white mb-6 relative">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-gold-400 mr-0 group-hover:mr-2 transition-all duration-200 rounded-full"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Copyright */}
              <div className="text-slate-400 text-center lg:text-left">
                <p className="text-lg font-medium">© 2024 Jewellery Collection. All rights reserved.</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-2">
                  <Link to="/privacy" className="hover:text-white transition-colors text-sm">Privacy Policy</Link>
                  <Link to="/terms" className="hover:text-white transition-colors text-sm">Terms of Service</Link>
                  <Link to="/cookies" className="hover:text-white transition-colors text-sm">Cookie Policy</Link>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-slate-400 font-medium hidden sm:block">Follow our journey:</span>
                <div className="flex space-x-3">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg`}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
