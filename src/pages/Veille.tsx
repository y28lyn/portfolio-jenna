import Banniere from "../components/header/Banniere";

const Veille = () => {
  return (
    <>
      <header>
        <Banniere
          title="Veille technologique"
          subtitle="Quel est l'impact du phishing sur le monde moderne ?"
          backgroundImageUrl="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonLabel="Explorer"
        />
      </header>
      <main id="main" className="h-screen"></main>
    </>
  );
};

export default Veille;
