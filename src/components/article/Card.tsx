interface CardProps {
  title: string;
  date: string;
  desc: string;
  photoUrl: string;
  bannerUrl: string;
  githubLink?: string; // Ajout de la propriété githubLink
  externalLink?: string; // Ajout de la propriété externalLink
  showGithubButton?: boolean;
  showLinkButton?: boolean;
  showBasicButton?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  date,
  desc,
  photoUrl,
  bannerUrl,
  githubLink,
  externalLink,
  showGithubButton = false,
  showLinkButton = false,
  showBasicButton = false,
}) => {
  return (
    <>
      <div className="h-auto flex-1 basis-[500px] w-[80vw] md:w-96 flex flex-col items-center text-center rounded-[10px] border-[1px] border-gray-200 mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-neutral-600 dark:!bg-neutral-800 dark:text-white dark:shadow-none">
        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
          <img
            src={bannerUrl}
            className="absolute flex h-32 w-full justify-center rounded-xl bg-cover object-cover"
          />
          <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-gray-200 dark:!border-neutral-600">
            <img
              className="h-full w-full rounded-full object-cover"
              src={photoUrl}
              alt=""
            />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-xl font-bold text-slate-700 dark:text-white">
            {title}
          </h4>
          <p className="text-base font-normal text-gray-600 dark:text-gray-200">
            {date}
          </p>
        </div>
        <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl text-center font-bold text-slate-700 dark:text-white">
              {desc}
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          {showGithubButton && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </a>
          )}
          {showLinkButton && (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </g>
              </svg>
            </a>
          )}
          {showBasicButton && (
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
              Voir plus
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
