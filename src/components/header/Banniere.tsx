interface BanniereProps {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  buttonLabel: string;
  showButton2: boolean;
  button2Label?: string;
  buttonLink?: string;
}

const Banniere: React.FC<BanniereProps> = ({
  title,
  subtitle,
  backgroundImageUrl,
  buttonLabel,
  showButton2,
  button2Label,
  buttonLink,
}) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("main");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex items-center overflow-hidden relative">
      <div className="absolute inset-0">
        <img
          loading="lazy"
          className="w-full h-full object-cover object-center"
          src={backgroundImageUrl}
          alt=""
          role="presentation"
          aria-hidden="true"
        />
      </div>

      <div className="absolute inset-0 block bg-black/70 md:block"></div>

      <div className="container text-left relative md:ml-10 px-10 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          {title}
        </h1>
        <p className="text-xl text-gray-200 mb-4">{subtitle}</p>
        <div className="flex flex-col md:flex-row gap-2 space-x-0 md:space-x-4">
          <button
            onClick={scrollToNextSection}
            className="w-fit group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 dark:border-neutral-100 border-[#101314] hover:border-neutral-100 dark:hover:border-[#101314] duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 relative bg-white dark:bg-[#101314] px-10 py-2 border text-left p-3 text-black dark:text-white text-base font-bold rounded shadow-lg"
          >
            <span>{buttonLabel}</span>
          </button>
          {showButton2 ? (
            <a
              href={buttonLink}
              className="w-fit group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 dark:border-neutral-100 border-[#101314] hover:border-neutral-100 dark:hover:border-[#101314] duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 relative bg-white dark:bg-[#101314] px-10 py-2 border text-left p-3 text-black dark:text-white text-base font-bold rounded shadow-lg"
            >
              <span>{button2Label}</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Banniere;
