import Button from "@/components/Button";
import Header from "@/components/header";
import Image from "next/image";
import CardeM from "@/components/Cardes/CardeM";
import CardeF from "@/components/Cardes/CardeF";
// import CardesProduct from "@/components/Cardes/Product/CardesProduct";

import Carrosel from "@/components/Carrosel";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import FooterImages from "@/components/Images";

const numbers = Array.from({ length: 12 }, (_, i) => i + 33);

export default function Home() {
  return (
    <main className="">
      <Header />

      <section className="max-w-7xl m-auto pt-[107px] pb-[97px] border-b-[#383838] border-b border-solid pl-4 pr-4">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-[110px] ">
          <CardeF
            imgUrl="/calcados-femininos.png"
            title="CALÇADOS
              FEMININOS"
          />

          <div className="flex flex-col text-left items-end justify-center md:w-[628px] ">
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
        <div className="flex flex-col  xl:flex-row-reverse justify-between">
          <CardeM
            imgUrl="/calcados-masculinos.png"
            title="CALÇADOS MASCULINO"
          />

          <div className="flex flex-col items-start justify-center md:w-[517px] ">
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

      <section className="max-w-7xl m-auto pl-4 pr-4">
        <div className="flex justify-between items-center mb-[74px]">
          <Image src="/logos/paqueta.png" width={398} height={154} alt="" />

          <p className="text-[22px] font-normal leading-9 max-w-[588px] text-right ">
            Você também pode escolher o seu novo sapato favorito de acordo com a
            sua numeração.
          </p>
        </div>
        <div className="flex justify-between items-center mb-[168px]">
          {numbers.map((number) => (
            <div
              className="flex justify-center items-center border w-[65px] h-[65px] border-solid border-[#383838]"
              key={number}
            >
              <span>{number} </span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col max-w-7xl m-auto pl-4 pr-4">
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

        <div className="flex justify-between items-center pb-[46px]">
          <Carrosel />
        </div>
      </section>

      <section className="flex flex-col gap-[80px] max-w-7xl m-auto pt-[168px] pb-[202px]">
        <h2 className="text-[34px] font-semibold leading-[47.6px] text-lef">
          AS MELHORES MARCAS ESTÃO AQUI!
        </h2>

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

      <section className="bg-gradient-to-r from-orange-500 to-yellow-300  ">
        <div className="max-w-7xl m-auto flex flex-row justify-between items-center gap-8">
          <div className="flex  ">
            <h2 className="text-[34px] font-bold leading-[47.6px] text-white">
              SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS E NOVIDADES EXCLUSIVAS!
            </h2>
            <div className="flex justify-end items-end">
              <Image src="/footer.svg" width={398} height={154} alt="" />
            </div>
          </div>

          <div className=" max-w-[650px] pt-[57px] pb-[74px] flex flex-col ">
            <p className="text-xl font-medium leading-7 text-white mb-[40px]">
              Nos informe o seu e-mail e nome para o melhor atendimento!
            </p>
            <form
              action=""
              className="w-[650px] max-w-[650px] flex flex-row justify-between gap-7 "
            >
              <div className="flex items-center mb-4 border-white  max-w-[300px] order-b-[white] border-b border-solid border-0">
                <FaEnvelope className="mr-2 text-white" />
                {/* <label htmlFor="email" className="sr-only">
                  E-mail
                </label> */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="maria@seuemail.com"
                  className="placeholder-white bg-transparent text-white w-[300px]  max-w-[300px]"
                />
              </div>
              <div className="flex items-center mb-4 border-white  max-w-[300px] order-b-[white] border-b border-solid border-0">
                <FaUser className="mr-2 text-white" />
                {/* <label htmlFor="name" className="sr-only">
                  Nome
                </label> */}
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Maria da Silva"
                  className="placeholder-white bg-transparent text-white w-[300px] max-w-[300px]"
                />
              </div>
            </form>
            <div className="flex flex-row text-white items-center justify-between  mb-[40px]">
              <p className="text-lg font-medium leading-[25.2px] text-left">
                Tenho interesse na categoria:
              </p>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="Masculino"
                  id="masculino"
                  className="w-[21px] h-[21px]"
                />
                <label
                  htmlFor="masculino"
                  className="text-lg font-normal leading-[25.2px]"
                >
                  Masculino
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="Feminina"
                  id="feminina"
                  className="w-[21px] h-[21px] bg-white focus:outline-none"
                />
                <label
                  htmlFor="feminina"
                  className="text-lg font-normal leading-[25.2px]"
                >
                  Feminina
                </label>
              </div>
            </div>

            <Button>Quero Receber</Button>
          </div>
        </div>
      </section>

      <section className=" bg-[#EBEBEB]">
        <footer className="flex justify-between max-w-7xl m-auto pt-[52px] pb-[52px]  gap-5">

          <div className="flex text-sm font-normal leading-[22.4px]  text-[#383838] justify-between gap-5">

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold leading-7  text-[#383838]">
                Institucional
              </h3>
              <ul className="flex flex-col gap-3">
              <li>Quem Somos</li>
              <li>Nossas Lojas</li>
              <li>Soluções Corporativas</li>
              <li>Política de Privacidade</li>
              <li>Contrato de Compra e Venda</li>
              <li>Crédito Pessoal</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold leading-7  text-[#383838]">
                Ajuda e Suporte
              </h3>
              <ul className="flex flex-col gap-3">
              <li>Troca e Devolução</li>
              <li>2ª Via do Boleto</li>
              <li>Detalhamento de Fatura</li>
              <li>Entregas</li>
              <li>Meus Pedidos</li>
              <li>Dúvidas Frequentes</li>
              <li>Status do Pedido</li>
              </ul>
            </div>

            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold leading-7  text-[#383838]">
                  Atendimento
                </h3>
                <ul>
                <li>Fale Conosco</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold leading-7  text-[#383838]">
                  Endereço
                </h3>
                <ul>
                  <li>Rua Antonio Frederico Ozanan, 2601 <br /> Canoas - RS | CNPJ:
                  01.098.983/0175-02</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold leading-7  text-[#383838]">
                  Trabalhe Conosco
                </h3>
                <ul>
                <li>Venha crescer com a Paquetá!</li>
                </ul>
              </div>
            </div>
          </div>

          <article className="flex flex-col gap-8">
            <div className="flex gap-3 flex-col">
              <h3 className="text-lg font-bold leading-7  text-[#383838]">
                Formas de pagamento
              </h3>
              <ul className="flex flex-wrap gap-6 max-w-[300px]">
                <li>
                <FooterImages ImgUrl="/logos/mastercard.png" />
                </li>
                <li>
                <FooterImages ImgUrl="/logos/american-express.png" />
                </li>
                <li>
                <FooterImages ImgUrl="/logos/elo.png" />
                </li>
                <li>
                <FooterImages ImgUrl="/logo.png" />
                </li>
                <li>
                <FooterImages ImgUrl="/logos/hipercard.png" />
                </li>
                <li>
                <FooterImages ImgUrl="/logos/visa.png" />
                </li>
                <li>
                <FooterImages ImgUrl="/logos/itau.png" />
                </li>
                <li>
                <FooterImages ImgUrl="/logos/gaston.png" />
                </li>
                <li>
                <FooterImages ImgUrl="/formas-de-pagamento/boleto.png" />
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-between gap-3">
              <p className="text-lg font-normal leading-[25.2px] text-[#383838]">
                Redes Sociais
              </p>
              <ul className="flex flex-row justify-between gap-4 max-w-[181px]">
                <li>
                  <Instagram />
                </li>
                <li>
                  <Facebook />
                </li>
                <li>
                  <Twitter />
                </li>
                <li>
                  <Youtube />
                </li>
              </ul>
            </div>
          </article>

          <article className="flex flex-col justify-between">
            <div className="flex gap-3 flex-col">
              <h3 className="text-lg font-bold leading-7  text-[#383838]">
                Formas de pagamento
              </h3>
                <Image
                  src="/logos/celo-verificado.png"
                  width={100}
                  height={50}
                  alt=""
                />
            </div>

            <div className="flex flex-col justify-between gap-3">
              <p className="text-lg font-bold leading-7 text-[#383838]">
              Segurança
              </p>
              <Image
                  src="/logos/celo-seguranca.png"
                  width={100}
                  height={50}
                  alt=""
                />
            </div>

          </article>
        </footer>

        <div className="flex justify-center items-center gap-7 p-5  bg-[#383838]">
          <p className="text-xl font-medium leading-7 text-white">UMA EMPRESA DO GRUPO </p>
          <Image
            src="/logos/paqueta-footer.png"
            width={265}
            height={59}
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
