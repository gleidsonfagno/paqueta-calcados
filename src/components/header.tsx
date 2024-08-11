import {
  Headset,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Sacola from "./sacola";
import ListaDesejo from "./Lista-de-desejos";
import Login from "./Login";
import Button from "./Button";

export default function Header() {
  return (
    <header className="text-gray-800">
      <div className="bg-gradient-yellow items-center m-auto">
        <div className="flex max-w-7xl items-center justify-between  h-14 text-white m-auto">
          <p className="text-sm font-normal leading-5 ">
            Loja de Calçados e Moda Online
          </p>

          <div className="flex max-w-7xl ">
            <a href='#' className="flex pr-16">
              <MapPin className="pr-2" />
              <span className="text-sm font-medium leading-5 ">
                Fale conosco
              </span>
            </a>

            <a href='#' className="flex items-center">
              <Headset className="pr-2" />
              <span className="text-sm font-medium leading-5 ">
                Encontrar uma loja física
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex m-auto items-center justify-between max-w-7xl pt-4 pb-10">
        <div>
          <Image src="/logo.png" alt="Fale conosco" width={297} height={86} />
        </div>

        <div className="flex items-center ">
          <Sacola />
          <ListaDesejo />
          <Login />
        </div>
      </div>

      <nav className="max-w-7xl m-auto pb-5">
        <ul className="flex items-center justify-between text-gray-800 text-lg font-medium leading-6 ">
          <li>
            <a href="#">Novidades</a>
          </li>
          <li>
            <a href="#">Feminino</a>
          </li>
          <li>
            <a href="#">Masculino</a>
          </li>
          <li>
            <a href="#">Paquetá Esportes</a>
          </li>
          <li>
            <a href="#">Outlet</a>
          </li>
          <li>
            <a href="#">Cashback</a>
          </li>
        </ul>
      </nav>

      <div
        className="flex w-full h-[622px] bg-cover bg-no-repeat  relative "
        style={{ backgroundImage: 'url("/banner-hero.png")' }}
      >
        <div className="flex pt-32 pb-32 pl-5 max-w-full w-[1780px] m-auto justify-end">
          <div className="flex flex-col  ">
            <h1 className="text-[80px] font-semibold leading-[120px] ">
              Tênis Casual
            </h1>
            <p className="text-6xl font-normal leading-[90px]  text-orange-700">
              Masculino
            </p>
            <p className="text-2xl font-medium leading-9 ]">A partir de </p>
            <p className="text-[50px] font-bold leading-[75px">R$ 79,99</p>
            <Button>
             APROVEITE
            </Button>
          </div>
        </div>
      </div>

      <div className=" bg-gradient-yellow">
        <div className=" max-w-7xl flex py-14 items-center justify-between m-auto text-white text-sm font-normal leading-[19.6px] gap-6">
          <div className=" flex items-center ">
            <Image
              src="/CreditCard.svg"
              // className="h-10 w-10"
              width={53.63}
              height={39}
              alt="PRIMEIRA TROCA GRÁTIS"
            />

            <p className="pl-5">
              PAGUE EM ATÉ 10X <strong>SEM JUROS</strong>*
            </p>
          </div>

          <div className=" flex items-center ">
            <Image
              src="/MapPin.svg"
              // className="h-6 w-7"
              width={34}
              height={41.86}
              alt="PRIMEIRA TROCA GRÁTIS"
            />
            <p className="pl-5">
              <strong>RETIRE GRÁTIS </strong>
              EM NOSSAS LOJAS
            </p>
          </div>

          <div className=" flex items-center ">
            <Image
              src="/BadgePercent.svg"
              // className="h-6 w-7"
              width={39}
              height={41.23}
              alt="PRIMEIRA TROCA GRÁTIS"
            />

            <p className="pl-5">GANHE 20% DE DESCONTO*</p>
          </div>

          <div className=" flex items-center ">
            <Image
              src="/box.svg"
              // className="h-6 w-7"
              width={39}
              height={41.23}
              alt="PRIMEIRA TROCA GRÁTIS"
            />
            <p className="pl-5">
              <strong>FRETE GRÁTIS</strong> PARA REGIÕES SUL E SUDESTE*
            </p>
          </div>

          <div className=" flex items-center ">
            <Image
              src="/setas.svg"
              // className="h-6 w-7"
              width={54}
              height={37.47}
              alt="PRIMEIRA TROCA GRÁTIS"
            />
            <p className="pl-5">PRIMEIRA TROCA GRÁTIS</p>
          </div>
        </div>
      </div>
    </header>
  );
}
