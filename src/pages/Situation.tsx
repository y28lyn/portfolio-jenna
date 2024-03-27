import { useState } from "react";
import Card from "../components/article/Card";
import Banniere from "../components/header/Banniere";
import SortBar from "../components/article/SortBar";

const Situation = () => {
  const situations = [
    {
      title: "EHPAD MedHub",
      date: "Mars 2024 - Mai 2024",
      desc: "Application mobile de gestion de médicament",
      photoUrl:
        "https://images.unsplash.com/photo-1622227922682-56c92e523e58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bannerUrl:
        "https://i.pinimg.com/564x/75/bb/64/75bb64a7d68a72d35309b11ed8215286.jpg",
      category: ".NET",
      showBasicButton: true,
      showGithubButton: true,
      githubLink: "",
    },
    {
      title: "SGRC",
      date: "Septembre 2023 -  Janvier 2024",
      desc: "Application web de gestion de restaurant",
      photoUrl:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bannerUrl:
        "https://i.pinimg.com/564x/75/bb/64/75bb64a7d68a72d35309b11ed8215286.jpg",
      category: "PHP",
      showBasicButton: true,
      showGithubButton: true,
      showLinkButton: true,
      githubLink: "https://github.com/y28lyn/sgrc",
      externalLink: "https://brodet.fr/SGRC/",
    },
    {
      title: "Fatalys",
      date: "Septembre 2023 - Janvier 2024",
      desc: "Application web de gestion d'activités",
      photoUrl:
        "https://images.unsplash.com/photo-1591824353737-61237487acf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bannerUrl:
        "https://i.pinimg.com/564x/75/bb/64/75bb64a7d68a72d35309b11ed8215286.jpg",
      category: "PHP",
      showBasicButton: true,
      showGithubButton: true,
      githubLink: "",
    },
    {
      title: "Sharepoint",
      date: "Mai 2023 - Juin 2023",
      desc: "Site intranet",
      photoUrl:
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bannerUrl:
        "https://i.pinimg.com/564x/75/bb/64/75bb64a7d68a72d35309b11ed8215286.jpg",
      category: "Sharepoint",
      showBasicButton: true,
    },
    {
      title: "Sharepoint Designer",
      date: "Mai 2023 - Juin 2023",
      desc: "Site intranet",
      photoUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bannerUrl:
        "https://i.pinimg.com/564x/75/bb/64/75bb64a7d68a72d35309b11ed8215286.jpg",
      category: "Sharepoint",
      showBasicButton: true,
    },
    {
      title: "GLPI",
      date: "Septembre 2022 - Janvier 2023",
      desc: "Gestionnaire de parc informatique",
      photoUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bannerUrl:
        "https://i.pinimg.com/564x/75/bb/64/75bb64a7d68a72d35309b11ed8215286.jpg",
      category: "Réseau",
      showBasicButton: true,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories = ["PHP", ".NET", "Sharepoint", "Réseau"];

  const filteredSituations = selectedCategory
    ? situations.filter(
        (situations) => situations.category === selectedCategory
      )
    : situations;

  const handleSortChange = (category: string) => {
    setSelectedCategory(category);
  };
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
      <main id="main" className="flex flex-col items-center">
        <SortBar categories={categories} onSortChange={handleSortChange} />
        <section className="flex items-center flex-wrap gap-6 p-6">
          {filteredSituations.map((situations, index) => (
            <Card
              key={index}
              title={situations.title}
              date={situations.date}
              desc={situations.desc}
              photoUrl={situations.photoUrl}
              bannerUrl={situations.bannerUrl}
              showBasicButton={situations.showBasicButton}
              showGithubButton={situations.showGithubButton}
              showLinkButton={situations.showLinkButton}
              githubLink={situations.githubLink}
              externalLink={situations.externalLink}
            />
          ))}
        </section>
      </main>{" "}
    </>
  );
};

export default Situation;
