import Banniere from "../components/header/Banniere";

const Experience = () => {
  return (
    <>
      <header>
        <Banniere
          title="Expériences professionnelles"
          subtitle="Plongez dans mes expériences professionnelles variées et enrichissantes"
          backgroundImageUrl="https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonLabel="Explorer"
        />
      </header>
      <main id="main" className="h-screen"></main>
    </>
  );
};

export default Experience;
