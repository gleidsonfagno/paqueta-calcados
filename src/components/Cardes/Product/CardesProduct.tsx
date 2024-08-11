import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Substitui espaços e caracteres especiais por '-'
    .replace(/^-+|-+$/g, ''); // Remove hifens do início ou do fim
}


interface CardesProductProps {
  image: string;
  name: string;
  price: {
    value: number;
    discount: number;
  };
}
export default function CardesProduct({
  image,
  name,
  price,
}: CardesProductProps) {
  const slug = createSlug(name);
  // Calcule o preço com desconto, se houver
  const discountedPrice =
    price.discount > 0 ? price.value * (1 - price.discount) : price.value;

  return (
    <Link
      href={`/product/${slug}`}
      className="flex flex-col justify-center w-[307px] h-[412px] shadow-[0px_4px_21px_0px_#0000001A]"
    >
      <div className="flex pr-2">
        <Heart className="h-6 w-16" />
        <span>Lista de desejo</span>
      </div>

      <div className="flex flex-col justify-between p-[25px]">
        <Image
          src={image}
          width={210}
          height={149}
          alt=""
          className="flex pb-[24px] object-cover w-[100%] max-h-[149px] "
        />
        <span className="pb-3 ext-sm font-medium leading-[19.6px] text-left text-[#121212]">
          {name}
        </span>
        <p className="pb-2 text-xl font-bold leading-7 text-left text-[#121212]">
          R$ {discountedPrice.toFixed(2)}
        </p>
        <p className="pb-3 text-xs font-normal leading-[16.8px] text-left text-[#121212]">
          {/* Você pode formatar o parcelamento aqui se necessário */}
          OU 9X R$ {Math.round(discountedPrice / 9).toFixed(2)}
        </p>
        <button className="w-[257px] h-[46px] gap-0 left-[1269px] top-[684px] bg-gradient-to-r from-orange-500 to-yellow-300 text-lg font-normal leading-[19.8px] text-center text-white">
          COMPRAR
        </button>
      </div>
    </Link>
  );
}

// https://api.brchallenges.com/api/paqueta/shoes
