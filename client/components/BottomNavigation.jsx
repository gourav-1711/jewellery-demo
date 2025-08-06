import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Grid3X3, ShoppingBag, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/hooks/redux';

const navItems = [
  { icon: Home, label: 'Home', path: '/', id: 'home' },
  { icon: Search, label: 'Search', path: '/search', id: 'search' },
  { icon: Grid3X3, label: 'Categories', path: '/categories', id: 'categories' },
  { icon: Heart, label: 'Wishlist', path: '/wishlist', id: 'wishlist' },
  { icon: ShoppingBag, label: 'Bag', path: '/cart', id: 'bag' },
];

export default function BottomNavigation() {
  const location = useLocation();
  const cartCount = useAppSelector((state) => state.cart.count);

  return (
    <>
      {/* Safe area padding for iOS */}
      <div className="h-20 md:hidden" />
      
      {/* Fixed bottom navigation - FULL WIDTH */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        {/* Background with blur effect */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl border-t border-gold-200/80"></div>
        
        {/* Navigation items */}
        <div className="relative z-10 flex items-center justify-around px-2 py-2 safe-bottom">
          {navItems.map(({ icon: Icon, label, path, id }) => {
            const isActive = location.pathname === path;
            const isBag = id === 'bag';
            
            return (
              <Link
                key={path}
                to={path}
                className={cn(
                  'flex flex-col items-center justify-center transition-all duration-300 ease-out relative',
                  'flex-1 py-2 px-1 rounded-2xl group min-h-[64px]',
                  isActive 
                    ? 'bg-gradient-to-br from-primary to-accent shadow-lg transform -translate-y-1' 
                    : 'hover:bg-gold-50/80'
                )}
              >
                {/* Active background effect */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl shadow-2xl shadow-primary/30" />
                )}
                
                {/* Icon container */}
                <div className="relative z-10 mb-1">
                  <div className={cn(
                    'relative p-2 rounded-xl transition-all duration-300',
                    isActive 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'group-hover:bg-white/50'
                  )}>
                    <Icon 
                      size={24} 
                      strokeWidth={2.5}
                      className={cn(
                        'transition-all duration-300',
                        isActive 
                          ? 'text-white drop-shadow-sm' 
                          : 'text-muted-foreground group-hover:text-primary group-hover:scale-110'
                      )}
                    />
                    
                    {/* Cart badge */}
                    {isBag && cartCount > 0 && (
                      <div className={cn(
                        'absolute -top-1 -right-1 text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg transition-all duration-300 border-2',
                        isActive 
                          ? 'bg-white text-primary border-white' 
                          : 'bg-red-500 text-white border-white'
                      )}>
                        {cartCount > 99 ? '99+' : cartCount}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Label */}
                <span className={cn(
                  'text-xs font-semibold transition-all duration-300 relative z-10 text-center',
                  isActive 
                    ? 'text-white drop-shadow-sm' 
                    : 'text-muted-foreground group-hover:text-primary'
                )}>
                  {label}
                </span>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full opacity-80 shadow-lg" />
                )}
                
                {/* Ripple effect on tap */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 scale-0 group-active:scale-100 transition-transform duration-200 rounded-2xl" />
                </div>
              </Link>
            );
          })}
        </div>
        
        {/* iOS safe area bottom padding */}
        <div className="h-safe-bottom bg-white/95 backdrop-blur-xl" />
      </div>
    </>
  );
}
