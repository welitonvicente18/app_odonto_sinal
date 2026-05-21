import { useState } from "react";
import Mascote from "../components/Mascote";
import CardSentimento from "../components/CardSentimento";
import LottieModule from "lottie-react";
import medoAnimation from "../assets/lootlefiles/medo.json";
import ansiosoAnimation from "../assets/lootlefiles/ansioso.json";
import confianteAnimation from "../assets/lootlefiles/confiante.json";
import tranquiloAnimation from "../assets/lootlefiles/tranquilo.json";
import estressadoAnimation from "../assets/lootlefiles/estressado.json";
import comdorAnimation from "../assets/lootlefiles/comdor.json";
import sensivelAnimation from "../assets/lootlefiles/sensivel.json";
import queropararAnimation from "../assets/lootlefiles/queroparar.json";

const Lottie = LottieModule?.default ?? LottieModule;

function Sentimento() {
  const name = "Paciente";
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
      {/* Apresentation */}
      <section className="text-center my-8 font-bold gap-4 drop-shadow-lg">
        <h1 className="text-2xl sm:text-4xl mt-6 italic">
          Olá, <span className="text-sky-600 text-1xl md:text-6xl">{name}</span>
        </h1>
        <h3 className="text-2xl md:text-5xl mt-3">
          Como você esta se sentindo ?
        </h3>
      </section>
      <section className="rounded-3xl bg-white mx-5 mt-16 p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-lg">
        <CardSentimento
          sentimento="Com medo"
          bgColor="bg-blue-100"
          textColor="text-blue-600"
          handleMascote={() => {
            handleMascote("commedo");
          }}
        >
          <Lottie
            animationData={medoAnimation}
            loop={true}
            autoplay={true}
            className="w-20 h-20 md:w-32 md:h-32 xl:w-48 xl:h-48"
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
            className="w-20 h-20 md:w-32 md:h-32 xl:w-48 xl:h-48"
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
            className="w-20 h-20 md:w-32 md:h-32 xl:w-48 xl:h-48"
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
            className="w-20 h-20 md:w-32 md:h-32 xl:w-48 xl:h-48"
          />
        </CardSentimento>
      </section>
    </>
  );
}

export default Sentimento;
