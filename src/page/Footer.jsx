import { ComputerDesktopIcon } from "@heroicons/react/24/outline";

function Footer() {
  return (
    <section className="mt-2 mx-auto">
      <p className="text-sky-600 italic mt-4 font-semibold flex items-center justify-center gap-2 text-sm lg:text-2xl">
        Desenvolvido com muito café pela <a href="https://www.wcodesistemas.com.br" target="_blank">WCode Sistemas</a>
        <ComputerDesktopIcon className="h-5 w-5" />
      </p>
    </section>
  );
}

export default Footer;
