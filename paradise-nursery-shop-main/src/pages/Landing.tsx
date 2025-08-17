import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Heart, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-plants.jpg';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Paradise Nursery
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in text-white/90 leading-relaxed">
            Transforma tu hogar en un oasis verde con nuestras plantas de interior seleccionadas cuidadosamente. 
            Descubre la belleza natural que necesitas para crear espacios únicos y llenos de vida.
          </p>
          <Link to="/products">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 animate-scale-in">
              Comenzar a Explorar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              ¿Por qué elegir Paradise Nursery?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Somos expertos en plantas de interior con más de 10 años de experiencia 
              ayudando a crear espacios verdes únicos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Plantas Seleccionadas
              </h3>
              <p className="text-muted-foreground">
                Cada planta es cuidadosamente seleccionada por nuestros expertos 
                para garantizar la máxima calidad y salud.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Cuidado Experto
              </h3>
              <p className="text-muted-foreground">
                Te proporcionamos guías detalladas y soporte continuo 
                para que tus plantas prosperen en su nuevo hogar.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Garantía de Calidad
              </h3>
              <p className="text-muted-foreground">
                Ofrecemos garantía completa en todas nuestras plantas. 
                Si no estás satisfecho, te devolvemos tu dinero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            ¿Listo para transformar tu espacio?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explora nuestra colección completa de plantas de interior y encuentra 
            las perfectas para tu hogar u oficina.
          </p>
          <Link to="/products">
            <Button variant="default" size="lg" className="text-lg px-8 py-4">
              Ver Catálogo Completo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;