import Button from "@/components/Button";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <section className="max-w-7xl m-auto pt-[107px] ">
        <div className="flex justify-between mb-[110px] ">

          <div className="relative ">
            <div
              className="flex flex-col justify-end w-[622.12px]  h-[667.67px] gap-0 opacity-[0px] rounded-[3px_0px_0px_0px] left-[279.86px] top-[1755.12px] bg-no-repeat bg-cover"
              style={{
                backgroundImage:
                  'linear-gradient(to right , #F57002 3.3%, rgba(245, 112, 2, 0) 56.06%), url("/calcados-femininos.png")',
              }}
            >
              <p className="relative top-0 text-5xl font-normal leading-[67.2px] text-left text-white ml-[50.14px] mr-[40px] mb-[77px]">
              CALÇADOS
              FEMININOS
              </p>
            </div>
          </div>

          <div className="flex flex-col text-left items-end justify-center w-[628px]">
          <p className="font-montserrat text-[22px] font-normal leading-9 text-right mb-[54px]">
            Escolher o seu sapato favorito entre nossa{" "}
            <strong className=" font-semibold ">
              variedade de modelos e cores
            </strong>{" "}
            não será uma tarefa fácil, mas o que uma mulher não consegue fazer?{" "}
          </p>
          <Button>CONFERIR</Button>
          </div>

        </div>

        <div className="flex flex-row-reverse justify-between">

          <div className="relative ">
            <div
              className="flex flex-col justify-end w-[622.12px] h-[667.67px] gap-0 opacity-[0px] rounded-[3px_0px_0px_0px] left-[279.86px] top-[1755.12px] bg-no-repeat bg-cover"
              style={{
                backgroundImage:
                  'linear-gradient(to left , #F57002 3.3%, rgba(245, 112, 2, 0) 56.06%), url("/calcados-masculinos.png")',
              }}
            >
              <p className="relative top-0 text-5xl font-normal leading-[67.2px] text-right text-white ml-[50.14px] mr-[40px] mb-[77px]">
              CALÇADOS
              MASCULINO
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center w-[517px] ">
          <p className="font-montserrat text-[22px] font-normal leading-9 text-left mb-[54px]">
            Escolher o seu sapato favorito entre nossa{" "}
            <strong className=" font-semibold ">
              variedade de modelos e cores
            </strong>{" "}
            não será uma tarefa fácil, mas o que uma mulher não consegue fazer?{" "}
          </p>
          <Button>CONFERIR</Button>
          </div>

        </div>
      </section>
    </main>
  );
}
