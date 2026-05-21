import { ComputerDesktopIcon } from "@heroicons/react/24/solid";

function Footer() {
  return (
    <>
      <section className="mt-6 mx-auto">
        <p className="text-sky-600 italic font-semibold flex items-center justify-center gap-2 text-sm lg:text-2xl">
          Desenvolvido com muito café pela WCode Sistemas
          <ComputerDesktopIcon className="h-5 w-5" />
        </p>
      </section>
    </>
  );
}

export default Footer;
