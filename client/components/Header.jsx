import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, Heart, User, Phone, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/hooks/redux';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const cartCount = useAppSelector((state) => state.cart.count);

  const navigation = [
    { name: 'Collections', href: '/collections' },
    { name: 'Women', href: '/women' },
    { name: 'Men', href: '/men' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-gold-200/50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info (hidden on mobile) */}
        <div className="hidden lg:flex items-center justify-between py-2 text-sm border-b border-gold-100">
          <div className="flex items-center space-x-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+1 (555) 123-4567</span>
            </div>
            <span>Free shipping on orders over $500</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground">Follow us:</span>
            <div className="flex space-x-2">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a key={social} href="#" className="w-6 h-6 rounded-full bg-gold-100 hover:bg-gold-200 transition-colors" />
              ))}
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="size-14 w-full lg:size-16 rounded-2xl flex items-center justify-center bg-white/80 backdrop-blur-sm group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* <Crown className="w-6 h-6 lg:w-7 lg:h-7 text-white" /> */}
                <img src="/logo.png" alt="" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl lg:text-3xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Jewellery
              </h1>
              <p className="text-xs lg:text-sm text-muted-foreground -mt-1 font-medium">
                EXQUISITE COLLECTION
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'relative text-sm font-semibold transition-all duration-300 hover:text-primary group py-2',
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                )}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-11 h-11 rounded-xl hover:bg-gold-50 transition-all duration-300 hover:scale-105"
            >
              <Search size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-11 h-11 rounded-xl hover:bg-gold-50 transition-all duration-300 hover:scale-105"
            >
              <Heart size={20} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-11 h-11 rounded-xl hover:bg-gold-50 transition-all duration-300 hover:scale-105"
            >
              <User size={20} />
            </Button>
            <Link to="/cart">
              <Button 
                variant="ghost" 
                size="sm" 
                className="relative w-11 h-11 rounded-xl hover:bg-gold-50 transition-all duration-300 hover:scale-105"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">
                    {cartCount > 99 ? '99+' : cartCount}
                  </div>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center space-x-3">
            <Link to="/search">
              <Button variant="ghost" size="sm" className="w-10 h-10 rounded-xl">
                <Search size={20} />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white/98 backdrop-blur-xl border-b border-gold-200 shadow-xl bg-white">
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'block text-lg font-semibold py-3 px-4 rounded-2xl transition-all duration-300',
                      location.pathname === item.href
                        ? 'text-white bg-gradient-to-r from-primary to-accent shadow-lg'
                        : 'text-muted-foreground hover:text-primary hover:bg-gold-50'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              {/* Mobile actions */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gold-100">
                <Link to="/wishlist" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-start rounded-xl">
                    <Heart size={18} className="mr-2" />
                    Wishlist
                  </Button>
                </Link>
                <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-start rounded-xl relative">
                    <ShoppingBag size={18} className="mr-2" />
                    Cart
                    {cartCount > 0 && (
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start rounded-xl">
                  <User size={18} className="mr-2" />
                  Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
