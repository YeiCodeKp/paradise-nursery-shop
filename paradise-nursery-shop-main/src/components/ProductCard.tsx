import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Plant } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  plant: Plant;
}

const ProductCard: React.FC<ProductCardProps> = ({ plant }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(plant);
    toast({
      title: '¡Añadido al carrito!',
      description: `${plant.name} ha sido añadido a tu carrito.`,
    });
  };

  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-2">{plant.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{plant.category}</p>
        {plant.description && (
          <p className="text-sm text-muted-foreground/80 line-clamp-2">
            {plant.description}
          </p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="text-2xl font-bold text-primary">
          ${plant.price.toFixed(2)}
        </span>
        <Button onClick={handleAddToCart} variant="cart" size="sm">
          Añadir al carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;