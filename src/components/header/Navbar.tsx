import Switcher from "../Switcher";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="bg-transparent">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between h-16 md:h-[12vh]">
              <div className="hidden lg:flex lg:items-center lg:space-x-10 text-lg">
                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black"
                >
                  Accueil
                </a>

                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black"
                >
                  Parcours scolaire
                </a>

                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black"
                >
                  Expériences professionnelles
                </a>

                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black"
                >
                  Situations professionnelles
                </a>

                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black"
                >
                  Certification
                </a>

                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black"
                >
                  Veille technologique
                </a>

                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black"
                >
                  Contact
                </a>
              </div>

              <div className="md:hidden block">
                <a href="#" className="flex flex-row gap-2">
                  <img src="/portfolio-icon.png" alt="" className="w-8 h-8" />
                  <h2 className="text-amber-500 text-2xl font-bold">
                    Portfolio
                  </h2>
                </a>
              </div>

              <div className="block ml-auto lg:hidden">
                <Switcher />
              </div>

              <button
                type="button"
                className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>

              <div className="hidden lg:flex lg:items-center lg:space-x-6">
                <Switcher />
                <a href="#" className="flex flex-row gap-2">
                  <img src="/portfolio-icon.png" alt="" className="w-8 h-8" />
                  <h2 className="text-amber-500 text-2xl font-bold">
                    Portfolio
                  </h2>
                </a>
              </div>
            </nav>
          </div>
        </div>

        <nav className="py-4 bg-white lg:hidden">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Menu
              </p>

              <button
                type="button"
                className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6">
              <div className="flex flex-col space-y-2">
                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black"
                >
                  Accueil
                </a>

                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black"
                >
                  Parcours scolaire
                </a>

                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black"
                >
                  Expériences professionnelles
                </a>

                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black"
                >
                  Situations professionnelles
                </a>

                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black"
                >
                  Certification
                </a>

                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black"
                >
                  Veille technologique
                </a>

                <a
                  href="#"
                  title=""
                  className="text-sm font-semibold text-black"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
