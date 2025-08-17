import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { plants, categories } from '@/data/plants';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const filteredPlants = useMemo(() => {
    if (selectedCategory === 'Todas') {
      return plants;
    }
    return plants.filter(plant => plant.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Nuestras Plantas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Descubre nuestra colección cuidadosamente seleccionada de plantas de interior, 
            perfectas para cualquier espacio y nivel de experiencia.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredPlants.map((plant) => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPlants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No se encontraron plantas en esta categoría.
            </p>
          </div>
        )}

        {/* Results Counter */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Mostrando {filteredPlants.length} de {plants.length} plantas
            {selectedCategory !== 'Todas' && ` en "${selectedCategory}"`}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Products;