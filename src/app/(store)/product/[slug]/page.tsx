"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Facebook, Heart, Instagram, Twitter, Youtube } from "lucide-react";
import Button from "@/components/Button";
import Carrosel from "@/components/Carrosel";

interface ProductDetailsProps {
  params: {
    slug: string; // Recebe o slug do produto
  };
  id: string;
  image: string;
  name: string;
  price: {
    value: number;
    discount: number;
  };
}

export default function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const numbers = Array.from({ length: 10 }, (_, i) => i + 33);

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          "https://api.brchallenges.com/api/paqueta/shoes"
        );
        const data = await response.json();

        const productData = data.find(
          (item: any) => createSlug(item.name) === params.slug
        );

        if (productData) {
          setProduct(productData);
        } else {
          console.error("Produto não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    };

    fetchProduct();
  }, [params.slug]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  const discountedPrice =
    product.price.discount > 0
      ? product.price.value * (1 - product.price.discount)
      : product.price.value;

  const discountPercentage = product.price.discount * 100;

  return (
    <>
    <section className="max-w-7xl m-auto pb-[100px] border-b-[#383838] border-b border-solid">
      <span>Paqueta</span>

      <div className="flex justify-between  mb-[81px]">
        <div className="max-w-[703.41px] w-[100%] max-h-[521.18px] h-[100%]">
          <Image
            src={product.image}
            width={703.41}
            height={521}
            alt={product.name}
            className="max-w-[703.41px] w-[100%] max-h-[521.18px] h-[100%] object-cover"
          />
        </div>

        <div className="flex flex-col gap-12 max-w-[547px]">
          <div>
            <Heart className="h-6 w-16 " />
            <h1 className="uppercase text-[40px] font-semibold leading-[50px] pb-4 text-[#121212]">
              {product.name}
            </h1>
            <p className="text-lg font-normal leading-[25.2px] text-[#383838]">
              Código do produto: {product.id}
            </p>
          </div>

          <div className="flex flex-col ">
            <div className="flex gap-6 items-center">
              {product.price.discount > 0 && (
                <p className="text-[22px] font-normal leading-[30.8px] text-left line-through text-gray-950">
                  R$ {product.price.value.toFixed(2)}
                </p>
              )}
              <span className="bg-[#65C239] text-white pl-4 pr-4  rounded text-sm font-semibold leading-[22.4px] text-center uppercase">
                {discountPercentage}% de Desconto
              </span>
            </div>
            <p className="text-[22px] font-normal leading-[30.8px] text-left">
              R$ {discountedPrice.toFixed(2)}
            </p>
            <span> OU 9X R$ {Math.round(discountedPrice / 9).toFixed(2)}</span>
          </div>

          <div className="flex flex-col">
            <p className="text-lg font-normal leading-[25.2px] pb-5 text-[#383838]">Escolha a numeração:</p>
            <div className="flex justify-between items-center mb-7 gap-[33px] flex-wrap">
              {numbers.map((number) => (
                <div
                  className="flex justify-center items-center border  w-[65px] h-[65px] border-solid border-[#383838]"
                  key={number}
                >
                  <span>{number} </span>
                </div>
              ))}
            </div>
            <p className="text-base font-bold leading-[22.4px] text-[#383838] ">Guia de tamanhos</p>
          </div>

          
        </div>
      </div>

      <div className="flex justify-between mb-[67px]">
        <div className="flex flex-col justify-between gap-3">
          <p className="text-lg font-normal leading-[25.2px] text-[#383838]">Compartilhe</p>
          <div className="flex flex-row justify-between gap-4">
          <span >
            <Instagram />
          </span>
          <span>
            <Facebook />
          </span>
          <span>
            <Twitter />
          </span>
          <span>
            <Youtube />
          </span>
          </div>
        </div>

        <button className="w-[100%] max-w-[547px] h-[46px] gap-0 left-[1269px] top-[684px] bg-gradient-to-r from-orange-500 to-yellow-300 text-lg font-normal leading-[19.8px] text-center text-white hover:bg-orange-600 hover:bg-none">Comprar</button>
      </div>

      <article>
        <h2 className="text-[40px] font-semibold leading-[56px] text-[#121212] pb-4">DESCRIÇÃO DO PRODUTO</h2>
        <p className="text-[22px] font-light leading-10 text-[#383838]">{product.description}</p>
      </article>
      
    </section>
    
    
    <section className="max-w-7xl m-auto pt-[100px] pb-[110px]">
      <h2 className="text-[34px] font-bold leading-[47.6px]">TALVEZ POSSA LHE INTERESSAR</h2>
    <Carrosel />
    </section>
    
    </>

    
  );
}

function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
