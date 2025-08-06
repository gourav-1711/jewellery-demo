import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAppDispatch } from '@/hooks/redux';
import { addToCart } from '@/store/cartSlice';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ProductCard({ product, className }) {
  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToBag = async () => {
    setIsAdding(true);
    dispatch(addToCart(product));
    
    // Simulate API call delay for better UX
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Card className={cn(
      'group overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out',
      'bg-gradient-to-br from-white to-gold-50/30 backdrop-blur-sm',
      'hover:-translate-y-2 hover:scale-[1.02]',
      className
    )}>
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gold-50 to-diamond-50">
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gold-100 to-diamond-100 animate-pulse" />
          )}
          
          <img
            src={product.image}
            alt={product.name}
            className={cn(
              'w-full h-full object-cover transition-all duration-700 ease-out',
              'group-hover:scale-110 group-hover:rotate-1',
              imageLoaded ? 'opacity-100' : 'opacity-0'
            )}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick actions overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
            <div className="flex space-x-2">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
              >
                <Eye size={16} />
              </Button>
              <Button
                onClick={() => setIsLiked(!isLiked)}
                variant="secondary"
                size="sm"
                className={cn(
                  'backdrop-blur-sm shadow-lg transition-all duration-200',
                  isLiked 
                    ? 'bg-red-50 hover:bg-red-100 text-red-600' 
                    : 'bg-white/90 hover:bg-white'
                )}
              >
                <Heart 
                  size={16} 
                  className={cn(
                    'transition-all duration-200',
                    isLiked && 'fill-current'
                  )} 
                />
              </Button>
            </div>
          </div>

          {/* Quick Add Button */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button
              onClick={handleAddToBag}
              disabled={isAdding}
              className={cn(
                'w-full font-medium py-2.5 rounded-xl',
                'bg-primary/90 hover:bg-primary backdrop-blur-sm',
                'shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40',
                'transition-all duration-300'
              )}
            >
              {isAdding ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Adding...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <ShoppingBag size={16} />
                  <span>Add to Bag</span>
                </div>
              )}
            </Button>
          </div>

          {/* Category badge */}
          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <span className="px-2 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-primary rounded-full">
              {product.type}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5 space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-lg font-semibold text-primary truncate group-hover:text-accent transition-colors duration-200">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {product.type}
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              <span className="text-xs text-muted-foreground">
                Free shipping
              </span>
            </div>
            
            {/* Mobile Add to Bag */}
            <Button
              onClick={handleAddToBag}
              disabled={isAdding}
              size="sm"
              className="md:hidden bg-primary hover:bg-primary/90 text-primary-foreground px-4 rounded-xl"
            >
              {isAdding ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <ShoppingBag size={16} />
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
