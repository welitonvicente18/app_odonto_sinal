function CardSentimento(props) {
  return (
    <div
      className={`rounded-3xl p-1 text-center flex flex-col justify-center shadow-lg ${props.bgColor} hover:-translate-y-1 hover:scale-105`}
      onClick={props.handleMascote}
    >
      <div className="justify-center flex">{props.children}</div>
      <p
        className={`my-4 text-2xl md:text-3xl text-center font-semibold  ${props.textColor}`}
      >
        {props.sentimento}
      </p>
    </div>
  );
}

export default CardSentimento;
