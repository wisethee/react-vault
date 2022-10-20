import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type Product = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
};

const AppProducts = () => {
  const { pathname } = useLocation();
  const pageTitle = pathname.substring(10).split('-').join(' ');

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const data = async () => {
      await fetch('https://fakestoreapi.com/products?limit=5')
        .then((res) => res.json())
        .then((json) => setProducts(json));
    };
    data();
  }, []);

  return (
    <div className="p-12 bg-white flex flex-col grow rounded drop-shadow-md">
      <h3 className="flex text-2xl font-bold mb-10 capitalize">{pageTitle}</h3>
      <div className="flex flex-wrap">
        {products.map((product) => {
          const { title, image, price, description, category } = product;
          return (
            <div key={product.id} className="flex flex-col w-1/2 p-4">
              <div className="flex flex-col justify-between h-full p-4 bg-gray-50">
                <div>
                  <img src={image} alt="" width="50%" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{title}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppProducts;
