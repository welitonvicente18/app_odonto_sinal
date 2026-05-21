import { useEffect, useState } from "react";
import CardSentimento from "./components/CardSentimento";
import {
  UserIcon,
  ArrowPathIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import "@fontsource/inter";
import "./css/App.css";

import planoDeFundo from "./assets/plano_fundo.png";
import logoImg from "./assets/logo.png";
import confianteImg from "./assets/confiante.png";
import tranquiloImg from "./assets/tranquilo.png";
import ansiosoImg from "./assets/ansioso.png";
import estressadoImg from "./assets/estressado.png";
import commedoImg from "./assets/commedo.png";
import comdorImg from "./assets/comdor.png";
import senvivelImg from "./assets/senvivel.png";
import pararImg from "./assets/parar.png";
import Mascote from "./components/Mascote";

function App() {
  const [name, setName] = useState("Paciente");
  const [showMascote, setShowMascote] = useState(false);
  const [statusMascote, setStatusMascote] = useState(false);

  function alterName() {
    Swal.fire({
      title: "Qual o nome do Paciente ?",
      input: "text",
      inputAttributes: { autocapitalize: "off" },
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      preConfirm: (nameInput) => {
        setName(nameInput);
      },
    });
  }

  /*
  useEffect(() => {
    alterName();
  }, []);
*/

  function handleMascote(statusMascote) {
    setStatusMascote(statusMascote)
    setShowMascote((prev) => !prev);
  }

  return (
    <>
      {showMascote && <Mascote statusMascote={statusMascote} handleMascote={handleMascote} />}
      <div className="min-w-screen min-h-screen bg-sky-50" >
        {/* menu */}
        <div
          className="pb-20 pt-2 bg-cover bg-center bg-no-repeat rounded-lg rounded-b-[100px] "
          style={{
            backgroundImage: `url(${planoDeFundo})`,
          }}
        >
          <nav className="flex flex-row rounded-3xl mx-5 p-2 bg-white shadow-md ">
            <div className="basis-/4 lg:basis-3/4 text-left">
              <img src={logoImg} className="h-10  sm:h-16" />
            </div>
            <div className="basis-3/4 md:basis-1/4">
              <div className="flex flex-row gap-1">
                <div className="basis-2/3 border border-slate-200 rounded-3xl shadow-sm flex flex-col">
                  <div className="flex items-center w-full p-2 h-10 sm:h-16">
                    <div className="basis-1/3">
                      <UserIcon className="text-sky-600 h-8 sm:h-10" />
                    </div>
                    <div className="basis-3/3">
                      <p className="text-md">Dentista</p>
                      <p className="text-sky-600 font-bold text-sm lg:text-2xl">
                        Dra. Yngrid
                      </p>
                    </div>
                  </div>
                </div>
                <div className="basis-1/3 border border-slate-200 rounded-3xl shadow-sm flex items-center justify-center h-10 sm:h-16">
                  <ArrowPathIcon
                    className="h-10 text-sky-600"
                    onClick={() => alterName()}
                  />
                </div>
              </div>
            </div>
          </nav>
          {/* Apresentation */}
          <section className="text-center my-8 font-bold gap-4 drop-shadow-lg">
            <h1 className="text-2xl sm:text-4xl mt-6 italic">
              Olá,{" "}
              <span className="text-sky-600 text-1xl md:text-6xl">{name}</span>
            </h1>
            <h3 className="text-2xl md:text-5xl mt-3">
              Como você esta se sentindo ?
            </h3>
          </section>
        </div>
        {/* Body */}
        <section className="rounded-3xl bg-white mx-5 -mt-20 p-3 grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          {/* primeira parte */}
          <CardSentimento
            sentimento="Tranquilo"
            bgColor="bg-green-100"
            textColor="text-green-600"
            handleMascote={() => {handleMascote('tranquilo')}}
          >
            <img src={tranquiloImg} className="h-20 md:h-38 xl:h-48" />
          </CardSentimento>
          <CardSentimento
            sentimento="Confiante"
            bgColor="bg-lime-100"
            textColor="text-lime-600"
            handleMascote={() => {handleMascote('confiante')}}
          >
            <img src={confianteImg} className="h-20 md:h-38 xl:h-48" />
          </CardSentimento>
          <CardSentimento
            sentimento="Com medo"
            bgColor="bg-blue-100"
            textColor="text-blue-600"
            handleMascote={() => {handleMascote('commedo')}}
          >
            <img src={commedoImg} className="h-20 md:h-38 xl:h-48" />
          </CardSentimento>
          <CardSentimento
            sentimento="Ansioso"
            bgColor="bg-violet-100"
            textColor="text-violet-600"
            handleMascote={() => {handleMascote('ansioso')}}
          >
            <img src={ansiosoImg} className="h-20 md:h-38 xl:h-48" />
          </CardSentimento>
          {/* segunda parte */}
          <CardSentimento
            sentimento="Estressado"
            bgColor="bg-amber-100"
            textColor="text-amber-600"
            handleMascote={() => {handleMascote('estressado')}}
          >
            <img src={estressadoImg} className="h-20 md:h-38 xl:h-48" />
          </CardSentimento>
          <CardSentimento
            sentimento="Com dor"
            bgColor="bg-pink-100"
            textColor="text-pink-600"
            handleMascote={() => {handleMascote('comdor')}}
          >
            <img src={comdorImg} className="h-20 md:h-38 xl:h-48" />
          </CardSentimento>
          <CardSentimento
            sentimento="Sensível"
            bgColor="bg-sky-100"
            textColor="text-sky-600"
            handleMascote={() => {handleMascote('sensivel')}}
          >
            <img src={senvivelImg} className="h-20 md:h-38 xl:h-48" />
          </CardSentimento>
          <CardSentimento
            sentimento="Quero Parar"
            bgColor="bg-red-100"
            textColor="text-red-600"
            handleMascote={() => {handleMascote('queroparar')}}
          >
            <img src={pararImg} className="h-20 md:h-38 xl:h-48" />
          </CardSentimento>
        </section>
        {/* footer */}
        <section className="mt-2 mx-auto">
          <p className="text-sky-600 italic font-semibold flex items-center justify-center gap-2 text-sm lg:text-md">
            Desenvolvido com muito café pela WCode Sistemas
            <ComputerDesktopIcon className="h-5 w-5" />
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
