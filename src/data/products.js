export const PRODUCTS = [
  { id: '1', title: 'Remera Naruto Ichiraku',  price: 12000, category: 'remeras', stock: 12, img: '/img/remera-byte.jpg' },
  { id: '2', title: 'Remera One Piece Going Merry',  price: 13500, category: 'remeras', stock: 10, img: '/img/remera-react.jpg' },
  { id: '3', title: 'Hoodie Attack on Titan Survey Corps',  price: 32000, category: 'hoodies', stock: 5,  img: '/img/hoodie-fullstack.jpg' },
  { id: '4', title: 'Hoodie Demon Slayer Nezuko',  price: 34000, category: 'hoodies', stock: 7,  img: '/img/hoodie-byte.jpg' },
  { id: '5', title: 'Gorra Pokémon Pokéball',  price:  9000, category: 'accesorios', stock: 20, img: '/img/gorra-dev.jpg' },
  { id: '6', title: 'Medias Dragon Ball Kame',  price:  6000, category: 'accesorios', stock: 25, img: '/img/medias-debug.jpg' },
];

export const getProducts = (categoryId) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(categoryId ? PRODUCTS.filter(p => p.category === categoryId) : PRODUCTS);
    }, 600);
  });

export const getProductById = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = PRODUCTS.find(p => p.id === id);
      found ? resolve(found) : reject(new Error('Producto no encontrado'));
    }, 600);
  });