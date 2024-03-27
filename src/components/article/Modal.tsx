interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 p-6 md:p-0">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contenu de la modal</h2>
        <p>Ce contenu est affiché dans une fenêtre modale.</p>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Fermer
        </button>
      </div>
    </div>
  );
};

export default Modal;
