interface ModalProps {
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  context: string;
  needs: string;
  environment: string;
  realization: string;
  link?: string;
  conclusion: string;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  title,
  description,
  image,
  context,
  needs,
  environment,
  realization,
  link,
  conclusion,
}) => {
  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 p-6 md:p-0">
      <div className="bg-white dark:bg-[#101314] p-6 rounded-lg h-[80vh] w-full md:w-[70%] overflow-auto text-left">
        <h2 className="text-3xl font-bold mb-4 underline text-black dark:text-white">
          {title}
        </h2>
        <p className="text-gray-800 dark:text-gray-200">{description}</p>
        <img src={image} alt={title} className="mt-4 rounded-lg" />
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2 underline text-black dark:text-white">
            Contexte
          </h3>
          <p className="text-gray-800 dark:text-gray-200">{context}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2 underline text-black dark:text-white">
            Besoins
          </h3>
          <p className="text-gray-800 dark:text-gray-200">{needs}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2 underline text-black dark:text-white">
            Environnement
          </h3>
          <p className="text-gray-800 dark:text-gray-200">{environment}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2 underline text-black dark:text-white">
            Réalisation
          </h3>
          <p className="text-gray-800 dark:text-gray-200">{realization}</p>
        </div>
        {link && (
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2 underline text-black dark:text-white">
              Production associée
            </h3>
            <a
              href={link}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lien vers plus d'informations
            </a>
          </div>
        )}
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2 underline text-black dark:text-white">
            Bilan
          </h3>
          <p className="text-gray-800 dark:text-gray-200">{conclusion}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Modal;
