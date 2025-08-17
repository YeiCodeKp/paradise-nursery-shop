import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Header: React.FC = () => {
  const { state } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Paradise Nursery</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/products') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Productos
            </Link>
          </nav>

          {/* Cart Button */}
          <Link to="/cart">
            <Button variant="outline" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline ml-2">Carrito</span>
              {state.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce-gentle">
                  {state.itemCount}
                </span>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Inicio
          </Link>
          <Link
            to="/products"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/products') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Productos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;