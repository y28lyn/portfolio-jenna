import React from "react";
import Card from "../components/article/Card";
import Banniere from "../components/header/Banniere";

const Experience = () => {
  // Définissez vos données d'expérience professionnelle sous forme de tableau d'objets
  const experiences = [
    {
      title: "Titre de l'expérience 1",
      date: "Date de l'expérience 1",
      desc: "Description de l'expérience 1",
      photoUrl: "URL de la photo de l'expérience 1",
    },
    {
      title: "Titre de l'expérience 2",
      date: "Date de l'expérience 2",
      desc: "Description de l'expérience 2",
      photoUrl: "URL de la photo de l'expérience 2",
    },
    {
      title: "Titre de l'expérience 2",
      date: "Date de l'expérience 2",
      desc: "Description de l'expérience 2",
      photoUrl: "URL de la photo de l'expérience 2",
    },
    {
      title: "Titre de l'expérience 2",
      date: "Date de l'expérience 2",
      desc: "Description de l'expérience 2",
      photoUrl: "URL de la photo de l'expérience 2",
    },
    {
      title: "Titre de l'expérience 2",
      date: "Date de l'expérience 2",
      desc: "Description de l'expérience 2",
      photoUrl: "URL de la photo de l'expérience 2",
    },
    {
      title: "Titre de l'expérience 2",
      date: "Date de l'expérience 2",
      desc: "Description de l'expérience 2",
      photoUrl: "URL de la photo de l'expérience 2",
    },
    {
      title: "Titre de l'expérience 2",
      date: "Date de l'expérience 2",
      desc: "Description de l'expérience 2",
      photoUrl: "URL de la photo de l'expérience 2",
    },
    {
      title: "Titre de l'expérience 2",
      date: "Date de l'expérience 2",
      desc: "Description de l'expérience 2",
      photoUrl: "URL de la photo de l'expérience 2",
    },
  ];

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
      <main id="main" className="grid grid-cols-1 md:grid-cols-3 gap-y-6 p-6">
        {experiences.map((experience, index) => (
          <Card
            key={index}
            title={experience.title}
            date={experience.date}
            desc={experience.desc}
            photoUrl={experience.photoUrl}
          />
        ))}
      </main>
    </>
  );
};

export default Experience;
