import Button from "@/components/Button";

import Header from "@/components/header";
import Image from "next/image";
import CardeM from "@/components/Cardes/CardeM";
import CardeF from "@/components/Cardes/CardeF";

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
        <div className="flex justify-between items-center">
        <Image
            src="/logos/paqueta.png"
            width={398}
            height={154}
            alt=""
          />

          <p className="text-[22px] font-normal leading-9 max-w-[588px] text-right">Você também pode escolher o seu novo sapato favorito de acordo com a sua numeração.</p>
        </div>

      </section>


    </main>
  );
}
