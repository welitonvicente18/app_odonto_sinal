import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserIcon, ArrowPathIcon, Bars3Icon } from "@heroicons/react/24/solid";
import logoImg from "../assets/logo.png";
import Swal from "sweetalert2";

function NavBar() {
  const [name, setName] = useState("Paciente");
  const [open, setOpen] = useState(false);

  /*
  useEffect(() => {
    alterName();
  }, []);
*/

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

  return (
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
          <div className="basis-3/4 md:basis-1/4 border border-slate-200 rounded-3xl shadow-sm flex items-center justify-center h-10 sm:h-16">
            <Bars3Icon
              className="h-10 text-sky-600"
              onClick={() => setOpen(!open)}
            />
            {open && (
              <ul className="absolute mt-32 w-68 bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden text-end">
                <li className="p-3 hover:bg-slate-100 cursor-pointer">
                  <Link to="/profilaxia" onClick={() => setOpen(false)}>
                    Profilaxia Odontológica
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="basis-1/3 border border-red-200 rounded-3xl shadow-sm flex items-center justify-center h-10 sm:h-16">
            <ArrowPathIcon
              className="h-10 text-red-600"
              onClick={() => alterName()}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
