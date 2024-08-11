import Button from "@/components/Button";
import Header from "@/components/header";
import Image from "next/image";
import CardeM from "@/components/Cardes/CardeM";
import CardeF from "@/components/Cardes/CardeF";
// import CardesProduct from "@/components/Cardes/Product/CardesProduct";


import Carrosel from "@/components/Carrosel";

const numbers = Array.from({ length: 12 }, (_, i) => i + 33);

export default function Home() {
  return (
    <main className="">
      <Header />

      <section className="max-w-7xl m-auto pt-[107px] pb-[97px] border-b-[#383838] border-b border-solid">
        <div className="flex justify-between mb-[110px] ">
          <CardeF
            imgUrl="/calcados-femininos.png"
            title="CALÇADOS
              FEMININOS"
          />

          <div className="flex flex-col text-left items-end justify-center w-[628px]">
            <p className="font-montserrat text-[22px] font-normal leading-9 text-right mb-[54px]">
              Escolher o seu sapato favorito entre nossa{" "}
              <strong className=" font-semibold ">
                variedade de modelos e cores
              </strong>{" "}
              não será uma tarefa fácil, mas o que uma mulher não consegue
              fazer?{" "}
            </p>
            <Button>CONFERIR</Button>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between">
          <CardeM
            imgUrl="/calcados-masculinos.png"
            title="CALÇADOS MASCULINO"
          />

          <div className="flex flex-col items-start justify-center w-[517px] ">
            <p className="font-montserrat text-[22px] font-normal leading-9 text-left mb-[54px]">
              Escolher o seu sapato favorito entre nossa{" "}
              <strong className=" font-semibold ">
                variedade de modelos e cores
              </strong>{" "}
              não será uma tarefa fácil, mas o que uma mulher não consegue
              fazer?{" "}
            </p>
            <Button>CONFERIR</Button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl m-auto">
        <div className="flex justify-between items-center mb-[74px]">
          <Image src="/logos/paqueta.png" width={398} height={154} alt="" />

          <p className="text-[22px] font-normal leading-9 max-w-[588px] text-right ">
            Você também pode escolher o seu novo sapato favorito de acordo com a
            sua numeração.
          </p>
        </div>
        <div className="flex justify-between items-center mb-[168px]">
         {numbers.map((number) => (
          <div className="flex justify-center items-center border w-[65px] h-[65px] border-solid border-[#383838]" key={number}>
            <span>{number} </span>
          </div>
         ))}
        </div>
      </section>

      <section className="flex flex-col max-w-7xl m-auto">
        <div className="flex justify-between items-center pb-[43px]">
          <h2 className="text-[34px] font-semibold leading-[47.6px] text-left text-[#121212]">
            DESTAQUES
          </h2>

          <a
            href=""
            className="text-lg font-normal leading-[25.2px] text-center text-[#121212] border-b-[#CF5D00] border-b border-solid"
          >
            CONFERIR TUDO
          </a>
        </div>

        <div className="flex justify-between pb-[46px]">
        
        <Carrosel />
        </div>
      </section>
      
      <section className="flex flex-col gap-[80px] max-w-7xl m-auto pt-[168px] pb-[202px]">
        <h2 className="text-[34px] font-semibold leading-[47.6px] text-lef">AS MELHORES MARCAS ESTÃO AQUI!</h2>

        <div className="flex gap-12 justify-between items-end">
          <span>
          <Image src="/logos/adidas.png" width={127} height={86} alt="" />
          </span>
          <span>
          <Image src="/logos/via-marte.png" width={275} height={35} alt="" />
          </span>
          <span>
          <Image src="/logos/bebece.png" width={212} height={57} alt="" />
          </span>
          <span>
          <Image src="/logos/dumond.png" width={231} height={46} alt="" />
          </span>
        </div>
      </section>
    </main>
  );
}
