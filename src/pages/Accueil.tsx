import PresentationCard from "../components/article/PresentationCard";
import Skill from "../components/article/Skill";
import Banniere from "../components/header/Banniere";

const Accueil = () => {
  const skills = [
    {
      icon: "fas fa-sitemap",
      title: "Développement web",
      description:
        "Je maîtrise le développement web, des langages de base aux frameworks avancés.",
    },
    {
      icon: "fas fa-drafting-compass",
      title: "Conception d'applications",
      description:
        "Expert en conception d'interfaces et en élaboration d'architectures logicielles.",
    },
    {
      icon: "fas fa-newspaper",
      title: "Réseau",
      description:
        "Compétent dans la configuration et la gestion des équipements réseau.",
    },
    {
      icon: "fas fa-file-alt",
      title: "Gestion de projet",
      description:
        "Je mène des initiatives avec succès en utilisant des méthodologies adaptées.",
    },
  ];

  return (
    <>
      <header>
        <Banniere
          title="Jenna BEN HADJ AMOR"
          subtitle="Étudiante en BTS SIO option SLAM"
          backgroundImageUrl="https://images.unsplash.com/photo-1682695799561-033f55f75b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonLabel="Explorer"
        />
      </header>
      <main id="main" className="h-fit container flex justify-center mx-auto">
        <section className="flex flex-col md:flex-row items-center justify-center mx-auto p-6">
          <PresentationCard
            imageUrl="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Qui suis-je ?"
            description="Je suis Jenna BEN HADJ AMOR, une étudiante de 21 ans inscrite au lycée Jacques BREL à Vénissieux. Je poursuis mes études en deuxième année de BTS SIO option SLAM (Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers)."
            width="md:w-1/2"
          />
          <Skill skills={skills} />
        </section>
      </main>
    </>
  );
};

export default Accueil;
