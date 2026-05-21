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

const falas = {
  tranquilo: {
    texto:
      "Que ótimo saber que você está se sentindo assim, isso deixa o nosso trabalho ainda mais leve!\n\n Está tudo sob controle. \n\n Podemos continuar o procedimento?",
    icon: tranquiloAnimation,
  },
  confiante: {
    texto:
      "Fico muito feliz com a sua confiança, ela é fundamental para o sucesso do nosso tratamento!\n Está tudo indo super bem.\n Posso prosseguir?",
    icon: confianteAnimation,
  },
  commedo: {
    texto:
      "É super normal sentir medo, mas você está em um ambiente seguro e eu estou aqui para cuidar de você no seu tempo. Quer respirar um pouquinho antes de a gente continuar?",
    icon: medoAnimation,
  },
  ansioso: {
    texto:
      "Eu entendo perfeitamente. A ansiedade pode ser muito desconfortável, mas lembre-se de que você está no controle. Vamos focar na respiração devagar. Quer que eu continue agora ou prefere um minutinho?",
    icon: ansiosoAnimation,
  },
  estressado: {
    texto:
      "Sei que o dia a dia ou até o momento da consulta podem ser estressantes. Vamos tentar relaxar os ombros um pouquinho. Está confortável para eu prosseguir ou quer uma pausa?",
    icon: estressadoAnimation,
  },
  comdor: {
    texto:
      "Obrigado por me avisar. A sua dor importa muito para mim e não quero que você sofra. Vou parar um segundo para avaliar. Assim que aliviar, me avise para sabermos se podemos continuar, combinado?",
    icon: comdorAnimation,
  },
  sensivel: {
    texto:
      "Entendi, essa sensibilidade incomoda mesmo. Vou mudar um pouquinho a minha forma de abordar essa região para ficar mais confortável. Quer tentar prosseguir assim?",
    icon: sensivelAnimation,
  },
  queroparar: {
    texto:
      "Parando imediatamente. Tudo bem, você está no comando. Respire fundo, relaxe um pouco. O que você está sentindo agora? Me avise quando e se estiver pronto para continuarmos.",
    icon: queropararAnimation,
  },
};

function Mascote(props) {
  console.log(props.handleMascote);

  return (
    <div
      onClick={props.handleMascote}
      className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center "
    >
      <div className="w-1/3">
        <Lottie
          animationData={falas[props.statusMascote].icon}
          loop={true}
          autoplay={true}
          className="w-45 h-45"
        />
      </div>
      <div className="w-1/3 h-1/2">
        <div className="bg-white rounded-3xl p-4 shadow-xl text-center align-top leading-16 text-4xl">
          {falas[props.statusMascote].texto}
        </div>
      </div>
    </div>
  );
}

export default Mascote;
