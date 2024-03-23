import { Link, useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  const error = location.state?.error || { message: "Unknown error" };

  return (
    <div className="bg-[#101314] min-h-screen flex flex-col items-center justify-center text-white">
      <h2 className="text-4xl mb-2 px-6 text-center">Page introuvable</h2>
      <p className="text-lg mb-4 px-6 text-center">
        Désolé, la page que vous recherchez n'existe pas.
      </p>
      <p className="italic text-gray-300 px-6 text-center">{error.message}</p>
      <Link
        to="/"
        className="mt-4 text-red-500 hover:underline transition duration-300"
      >
        Retour à la page d'accueil
      </Link>
    </div>
  );
}
