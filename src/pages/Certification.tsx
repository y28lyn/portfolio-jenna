import Banniere from "../components/header/Banniere";

const Certification = () => {
  return (
    <>
      <header>
        <Banniere
          title="Certification"
          subtitle="Découvrez mes certifications et accréditations attestant de mon expertise"
          backgroundImageUrl="https://images.unsplash.com/photo-1648337564744-f919c7c2fc02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonLabel="Explorer"
        />
      </header>
      <main id="main" className="h-screen"></main>
    </>
  );
};

export default Certification;
