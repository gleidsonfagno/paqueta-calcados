'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Importar o arquivo de estilos
import './styles.css';
import CardesProduct from './Cardes/Product/CardesProduct';

import { useEffect, useState } from 'react';

export default function Carrosel() {
    const [products, setProducts] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchProducts  = async () => {
            try {
                const response = await fetch("https://api.brchallenges.com/api/paqueta/shoes")
                const data = await response.json()
                setProducts(data)
            } catch  (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        }

        fetchProducts()
    }, []);

    return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
            <CardesProduct
            image={product.image}
            name={product.name}
            price={product.price}
          />
        </SwiperSlide>
      ))}

    </Swiper>
  );
}
