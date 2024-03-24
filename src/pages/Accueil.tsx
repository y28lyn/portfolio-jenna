import Banniere from "../components/header/Banniere";

const Accueil = () => {
  return (
    <>
      <header>
        <Banniere
          title="Jenna BEN HADJ AMOR"
          subtitle="Étudiante en BTS SIO option SLAM"
          backgroundImageUrl="https://images.unsplash.com/photo-1710942499889-71f233dae342?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonLabel="Explorer"
        />
      </header>
      <main id="main" className="h-screen"></main>
    </>
  );
};

export default Accueil;
