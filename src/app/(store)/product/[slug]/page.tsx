"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Facebook, Heart, Instagram, Twitter, Youtube } from "lucide-react";
import { FaSpinner } from "react-icons/fa";

interface ProductDetailsProps {
  params: {
    slug: string; // Recebe o slug do produto
  };
  image: string;
  name: string;
  price: {
    value: number;
    discount: number;
  };
}

export default function ProductDetails({ params }: ProductDetailsProps) {
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
    <div className="flex items-center justify-center mt-[90px]">
      <FaSpinner className="animate-spin h-5 w-5 mr-3 text-blue-500" />
      Carregando...
    </div>
  }

  const discountedPrice =
    product.price.discount > 0
      ? product.price.value * (1 - product.price.discount)
      : product.price.value;

  return (
    <section className="max-w-7xl m-auto">
      <span>Paqueta</span>

      <div className="flex justify-between gap-[76px] ">
        <div>
          <Image
            src={product.image}
            width={703.41}
            height={521}
            alt={product.name}
          />
        </div>

        <div className="flex flex-col gap-12">
          <div>
            <Heart className="h-6 w-16 " />
            <h1 className="uppercase text-[40px] font-semibold leading-[50px] pb-4 text-[#121212]">
              {product.name}
            </h1>
            <p className="text-lg font-normal leading-[25.2px] text-[#383838]">
              Código do produto: 365087-2001152093
            </p>
          </div>

          <div className="flex flex-col ">
            <div className="flex gap-6 items-center">
              <p className="text-[22px] font-normal leading-[30.8px] text-left">
                R$ {product.price.value.toFixed(2)}
              </p>
              <span className="bg-[#65C239] text-white pl-4 pr-4  rounded text-sm font-semibold leading-[22.4px] text-center uppercase">
                21% de Desconto
              </span>
            </div>
            <p className="text-[22px] font-normal leading-[30.8px] text-left">
                R$ {product.price.value.toFixed(2)}
              </p>
           <span> OU 9X R$ {Math.round(discountedPrice / 9).toFixed(2)}</span>
          </div>

          <div className="flex flex-col">
            <p>Escolha a numeração:</p>
            <div className="flex justify-between items-center">
              {numbers.map((number) => (
                <div
                  className="flex justify-center items-center border w-[65px] h-[65px] border-solid border-[#383838]"
                  key={number}
                >
                  <span>{number} </span>
                </div>
              ))}
            </div>
            <p>Guia de tamanhos</p>
          </div>
        </div>
      </div>

      <div>
        <p>Compartilhe</p>
        <span>
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

      <article>
        <h2>DESCRIÇÃO DO PRODUTO</h2>
        <p>{product.description}</p>
      </article>
    </section>
  );
}

function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
