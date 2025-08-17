import { Plant } from '@/contexts/CartContext';

// Import images
import monsteraImg from '@/assets/plants/monstera.jpg';
import snakePlantImg from '@/assets/plants/snake-plant.jpg';
import fiddleLeafFigImg from '@/assets/plants/fiddle-leaf-fig.jpg';
import peaceLilyImg from '@/assets/plants/peace-lily.jpg';
import rubberPlantImg from '@/assets/plants/rubber-plant.jpg';
import zzPlantImg from '@/assets/plants/zz-plant.jpg';

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 45.99,
    image: monsteraImg,
    category: 'Plantas Tropicales',
    description: 'Una hermosa planta tropical con hojas únicas y perforadas. Perfecta para interiores.'
  },
  {
    id: '2',
    name: 'Sansevieria (Lengua de Suegra)',
    price: 29.99,
    image: snakePlantImg,
    category: 'Plantas de Bajo Mantenimiento',
    description: 'Planta resistente que purifica el aire. Ideal para principiantes.'
  },
  {
    id: '3',
    name: 'Ficus Lyrata (Higo Lira)',
    price: 89.99,
    image: fiddleLeafFigImg,
    category: 'Árboles de Interior',
    description: 'Elegante árbol de interior con hojas grandes y brillantes.'
  },
  {
    id: '4',
    name: 'Spathiphyllum (Lirio de Paz)',
    price: 35.99,
    image: peaceLilyImg,
    category: 'Plantas con Flores',
    description: 'Planta purificadora con hermosas flores blancas.'
  },
  {
    id: '5',
    name: 'Ficus Elastica (Árbol del Caucho)',
    price: 55.99,
    image: rubberPlantImg,
    category: 'Árboles de Interior',
    description: 'Planta robusta con hojas brillantes de color verde oscuro.'
  },
  {
    id: '6',
    name: 'Zamioculcas Zamiifolia (ZZ)',
    price: 39.99,
    image: zzPlantImg,
    category: 'Plantas de Bajo Mantenimiento',
    description: 'Planta extremadamente resistente, perfecta para oficinas y espacios con poca luz.'
  }
];

export const categories = [
  'Todas',
  'Plantas Tropicales',
  'Plantas de Bajo Mantenimiento',
  'Árboles de Interior',
  'Plantas con Flores'
];