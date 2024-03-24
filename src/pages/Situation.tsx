import Banniere from "../components/header/Banniere";

const Situation = () => {
  return (
    <>
      <header>
        <Banniere
          title="Situation professionnelle"
          subtitle="Explorez les défis que j'ai relevés et les solutions que j'ai apportées dans divers contextes professionnels"
          backgroundImageUrl="https://images.unsplash.com/photo-1610650394144-a778795cf585?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonLabel="Explorer"
        />
      </header>
      <main id="main" className="h-screen"></main>
    </>
  );
};

export default Situation;
