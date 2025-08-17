import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import CartItem from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Cart: React.FC = () => {
  const { state, clearCart } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: '¡Pedido procesado!',
      description: 'Gracias por tu compra. Recibirás un email de confirmación pronto.',
    });
    clearCart();
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center py-12">
            <ShoppingBag className="h-24 w-24 text-muted-foreground/50 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Tu carrito está vacío
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explora nuestra colección de plantas y encuentra las perfectas para tu hogar.
            </p>
            <Link to="/products">
              <Button variant="default" size="lg">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Seguir Comprando
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Tu Carrito de Compras
            </h1>
            <p className="text-muted-foreground">
              Revisa tus productos seleccionados antes de proceder al pago.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {state.items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Resumen del Pedido
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Artículos ({state.itemCount})</span>
                    <span className="font-medium">${state.total.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Envío</span>
                    <span className="font-medium text-primary">Gratis</span>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${state.total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <Button 
                      onClick={handleCheckout}
                      className="w-full" 
                      size="lg"
                      variant="cart"
                    >
                      <CreditCard className="mr-2 h-5 w-5" />
                      Proceder al Pago
                    </Button>
                    
                    <Link to="/products" className="block">
                      <Button variant="outline" className="w-full">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Seguir Comprando
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;