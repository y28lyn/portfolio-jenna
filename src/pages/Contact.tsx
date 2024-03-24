import Banniere from "../components/header/Banniere";

const Contact = () => {
  return (
    <>
      <header>
        <Banniere
          title="Contact"
          subtitle="Contactez-moi pour toute question, proposition ou opportunité de collaboration"
          backgroundImageUrl="https://images.unsplash.com/photo-1609177336889-4e69aa3b1ff6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonLabel="Explorer"
        />
      </header>
      <main id="main" className="h-screen"></main>
    </>
  );
};

export default Contact;
