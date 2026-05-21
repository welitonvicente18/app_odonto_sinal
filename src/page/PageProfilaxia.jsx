import { useState } from "react";
import Mascote from "../components/Mascote";
import CardSentimento from "../components/CardSentimento";
import LottieModule from "lottie-react";
import tranquiloAnimation from "../assets/lootlefiles/tranquilo.json";
import comdorAnimation from "../assets/lootlefiles/comdor.json";
import sensivelAnimation from "../assets/lootlefiles/sensivel.json";
import queropararAnimation from "../assets/lootlefiles/queroparar.json";

import card1Img from "../assets/profilaxia/card_1.jpeg";
import card2Img from "../assets/profilaxia/card_2.jpeg";
import card3Img from "../assets/profilaxia/card_3.png";
import card4Img from "../assets/profilaxia/card_4.jpeg";
import card5Img from "../assets/profilaxia/card_5.jpeg";
import card6Img from "../assets/profilaxia/card_6.jpeg";
import card7Img from "../assets/profilaxia/card_7.jpeg";
import card8Img from "../assets/profilaxia/card_8.jpeg";

const Lottie = LottieModule?.default ?? LottieModule;

function PageProfilaxia(props) {
  const [showMascote, setShowMascote] = useState(false);
  const [statusMascote, setStatusMascote] = useState(false);
  const [itemCard, setitemCard] = useState(1);

  function mudaCard(item) {
    if (item > 8) item = 8;
    if (item < 1) item = 1;
    setitemCard(item);
  }

  const cards = {
    1: {
      img: card1Img,
      title: "Exame Inicial",
      texto:
        "Olá! Vou usar este espelho para olhar os seus dentes bem de perto.Por favor, pode abrir a boca?",
    },
    2: {
      img: card2Img,
      title: "Isolamento com Algodão ",
      texto:
        "Vou colocar estes rolinhos de algodão na sua bochecha. Eles servem para deixar a sua boca bem seca durante a limpeza. Tudo bem?",
    },
    3: {
      img: card3Img,
      title: "Raspagem (Remoção do Tártaro) ",
      texto:
        "Este aparelho vai vibrar um pouco e soltar água para remover o tártaro. Não vai doer. Se a vibração incomodar, pode me sinalizar que eu paro na hora.",
    },
    4: {
      img: card4Img,
      title: "Sugador de Saliva",
      texto:
        "Vou colocar este sugador para recolher a água e a saliva.  Pode fechar os lábios de leve ao redor dele.",
    },
    5: {
      img: card5Img,
      title: "Polimento",
      texto:
        "Agora vou escovar os seus dentes com esta pasta e esta escovinha. Ela gira rápido e faz um barulho de motorzinho, mas é super suave e tem um gosto bom.  Abra bem a boca.",
    },
    6: {
      img: card6Img,
      title: "Enxágue",
      texto:
        "Vou jogar um jato de água para lavar toda a pasta. Pode cuspir aqui, por favor.",
    },
    7: {
      img: card7Img,
      title: "Fio Dental",
      texto:
        "Para finalizar, vou passar o fio dental entre cada um dos seus dentes para garantir que ficou tudo bem limpo.",
    },
    8: {
      img: card8Img,
      title: "Conclusão",
      texto:
        "Terminamos! Os seus dentes estão limpos, saudáveis e brilhando. Você colaborou muito e foi um excelente paciente.",
    },
  };

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
          <span className="text-1xl md:text-5xl">Profilaxia Odontológica</span>
        </h1>
        <h3 className="text-2xl md:text-4xl mt-3">
          <span className="text-sky-600 text-1xl md:text-5xl">
            {props.name},
          </span>{" "}
          como você esta se sentindo ?
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
          <div className="bg-white rounded-2xl w-full h-96 flex items-center justify-center">
            <img
              src={cards[itemCard].img}
              alt="Imagem Profilaxia"
              className=" h-full object-cover rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-sky-600 mb-4">
            {cards[itemCard].title}
          </h2>
          <p className="text-3xl text-gray-700 leading-relaxed">
            {cards[itemCard].texto}
            {itemCard == 8 && (
              <p className="text-center text-4xl text-green-600">
                Parabéns! 👏
              </p>
            )}
          </p>
          <div className="flex flex-row justify-around mt-10 align-middle text-center justify-items-center">
            <button
              className="px-36 py-3 bg-sky-300 hover:bg-sky-200 border border-sky-200 text-skey-800 rounded-3xl shadow-sm"
              onClick={() => mudaCard(itemCard - 1)}
            >
              Voltar
            </button>
            <button
              className="px-36 py-3 bg-sky-300 hover:bg-sky-200 border border-sky-200 text-skey-800 rounded-3xl shadow-sm"
              onClick={() => mudaCard(itemCard + 1)}
            >
              Próximo
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageProfilaxia;
