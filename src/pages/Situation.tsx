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
        "https://images.unsplash.com/photo-1562243061-204550d8a2c9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bannerUrl:
        "https://i.pinimg.com/564x/75/bb/64/75bb64a7d68a72d35309b11ed8215286.jpg",
      category: ".NET",
      showBasicButton: true,
      showGithubButton: true,
      githubLink: "",
      modalContent: {
        title: "EHPAD MedHub",
        description:
          "EHPAD MedHub est une application MAUI pour la gestion des stocks de médicaments dans les EHPAD, facilitant les commandes rapides pour les résidents âgés et/ou handicapés. Elle permet également la comparaison de médicaments spécifiques pour des maladies telles que le cancer, l'Alzheimer et Parkinson.",
        image: "https://jinoh.co/wp-content/uploads/2022/01/netMauiLogo.webp",
        context:
          "Dans le cadre du projet réalisé en deuxième année de mon BTS SIO SLAM, j'ai développé l'application EHPAD MedHub pour répondre aux besoins de gestion des stocks de médicaments dans les EHPAD affiliés à la société fictive GSB, spécialisée dans les solutions biomédicales. Cette application permet une gestion efficace des stocks, des commandes rapides et offre la possibilité de comparer différents médicaments pour des maladies telles que le cancer, l'Alzheimer et Parkinson, facilitant ainsi la prise en charge médicale des résidents âgés et/ou handicapés.",
        needs:
          "Il était impératif de répondre aux besoins spécifiques des EHPAD en matière de gestion des stocks de médicaments, de facilitation des commandes rapides et de possibilité de comparer différents médicaments pour des maladies telles que le cancer, l'Alzheimer et Parkinson.",
        environment:
          "Pour développer l'application EHPAD MedHub, j'ai utilisé un environnement technologique moderne comprenant Visual Studio 2022 comme environnement de développement intégré (IDE), .NET MAUI pour la création d'interfaces multiplateformes, une base de données gérée via phpMyAdmin pour stocker les données essentielles, et une API pour gérer les interactions entre l'application et la base de données, assurant ainsi une gestion efficace des informations médicales des résidents.",
        realization:
          "Dans la réalisation de l'application EHPAD MedHub, j'ai débuté par l'installation de .NET MAUI ainsi que des packages NuGet nécessaires pour le développement. Ensuite, j'ai créé la base de données via phpMyAdmin et développé une API pour établir la liaison avec la base de données, permettant ainsi la manipulation des données de manière sécurisée. Par la suite, j'ai implémenté les différentes fonctionnalités de l'application, telles que la gestion des stocks de médicaments, les commandes rapides et la comparaison de médicaments. Enfin, j'ai mis en place le routage entre les différentes pages de l'application pour assurer une navigation fluide et intuitive pour les utilisateurs.",
        conclusion:
          "Ce projet m'a appris à utiliser des technologies modernes telles que .NET MAUI pour développer une application fonctionnelle répondant aux besoins spécifiques de gestion des stocks pharmaceutiques dans les EHPAD. J'ai renforcé mes compétences en programmation, en conception d'interfaces utilisateur et en gestion de projet, tout en acquérant une sensibilisation accrue aux enjeux de santé liés aux personnes âgées.",
      },
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
      modalContent: {
        title: "SGRC",
        description: "Description",
        image: "",
        context: "",
        needs: "",
        environment: "",
        realization: "",
        link: "",
        conclusion: "",
      },
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
      modalContent: {
        title: "Fatalys",
        description: "",
        image: "",
        context: "",
        needs: "",
        environment: "",
        realization: "",
        conclusion: "",
      },
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
      modalContent: {
        title: "Sharepoint",
        description: "",
        image: "",
        context: "",
        needs: "",
        environment: "",
        realization: "",
        conclusion: "",
      },
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
      modalContent: {
        title: "Sharepoint Designer",
        description: "",
        image: "",
        context: "",
        needs: "",
        environment: "",
        realization: "",
        conclusion: "",
      },
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
      modalContent: {
        title: "GLPI",
        description: "",
        image: "",
        context: "",
        needs: "",
        environment: "",
        realization: "",
        conclusion: "",
      },
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
              modalContent={situations.modalContent}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Situation;
