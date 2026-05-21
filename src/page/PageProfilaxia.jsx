import { useState } from "react";
import Mascote from "../components/Mascote";
import CardSentimento from "../components/CardSentimento";
import LottieModule from "lottie-react";
import tranquiloAnimation from "../assets/lootlefiles/tranquilo.json";
import comdorAnimation from "../assets/lootlefiles/comdor.json";
import sensivelAnimation from "../assets/lootlefiles/sensivel.json";
import queropararAnimation from "../assets/lootlefiles/queroparar.json";

const Lottie = LottieModule?.default ?? LottieModule;

function PageProfilaxia() {
  const [showMascote, setShowMascote] = useState(false);
  const [statusMascote, setStatusMascote] = useState(false);

  function handleMascote(statusMascote) {
    setStatusMascote(statusMascote);
    setShowMascote((prev) => !prev);
  }

  return (
    <>
      {showMascote && (
        <Mascote statusMascote={statusMascote} handleMascote={handleMascote} />
      )}
      <section className="text-center my-8 font-bold gap-4 drop-shadow-lg">
        <h1 className="text-2xl sm:text-4xl mt-6 italic">
          <span className="text-sky-600 text-1xl md:text-6xl">
            Profilaxia Odontológica
          </span>
        </h1>
        <h3 className="text-2xl md:text-5xl mt-3">
          Como você esta se sentindo ?
        </h3>
      </section>
      <section className="rounded-3xl mx-5 mt-5 grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
        <CardSentimento
          sentimento="Tranquilo"
          bgColor="bg-green-100"
          textColor="text-green-600"
          handleMascote={() => {
            handleMascote("tranquilo");
          }}
        >
          <Lottie
            animationData={tranquiloAnimation}
            loop={true}
            autoplay={true}
            className="w-20 h-20 md:w-32 md:h-32 xl:w-35 xl:h-35"
          />
        </CardSentimento>
        <CardSentimento
          sentimento="Com dor"
          bgColor="bg-pink-100"
          textColor="text-pink-600"
          handleMascote={() => {
            handleMascote("comdor");
          }}
        >
          <Lottie
            animationData={comdorAnimation}
            loop={true}
            autoplay={true}
            className="w-20 h-20 md:w-32 md:h-32 xl:w-35 xl:h-35"
          />
        </CardSentimento>
        <CardSentimento
          sentimento="Sensível"
          bgColor="bg-sky-100"
          textColor="text-sky-600"
          handleMascote={() => {
            handleMascote("sensivel");
          }}
        >
          <Lottie
            animationData={sensivelAnimation}
            loop={true}
            autoplay={true}
            className="w-20 h-20 md:w-32 md:h-32 xl:w-35 xl:h-35"
          />
        </CardSentimento>
        <CardSentimento
          sentimento="Quero Parar"
          bgColor="bg-red-100"
          textColor="text-red-600"
          handleMascote={() => {
            handleMascote("queroparar");
          }}
        >
          <Lottie
            animationData={queropararAnimation}
            loop={true}
            autoplay={true}
            className="w-20 h-20 md:w-32 md:h-32 xl:w-35 xl:h-35"
          />
        </CardSentimento>
      </section>
      <section className="rounded-3xl bg-white mx-5 mt-5 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg">
        <div className="flex items-center justify-center">
          <div className="bg-gray-200 rounded-2xl w-full h-80 flex items-center justify-center">
            <img
              src=""
              alt="Imagem Profilaxia"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-sky-600 mb-4">
            Exame Inicial
          </h2>
          <p className="text-3xl text-gray-700 leading-relaxed">
            Olá! Vou usar este espelho para olhar os seus dentes bem de perto.
            Por favor, pode abrir a boca?
          </p>
          <button>Avançar</button>
        </div>

      </section>
    </>
  );
}

export default PageProfilaxia;
