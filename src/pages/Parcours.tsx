import Banniere from "../components/header/Banniere";

const Parcours = () => {
  return (
    <>
      <header>
        <Banniere
          title="Parcous scolaire"
          subtitle="Explorez mon parcours éducatif et mes réalisations académiques"
          backgroundImageUrl="https://images.unsplash.com/photo-1635821620693-b6863c79db72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonLabel="Explorer"
        />
      </header>
      <main id="main" className="h-screen"></main>
    </>
  );
};

export default Parcours;
