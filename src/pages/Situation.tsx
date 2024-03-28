import { useState } from "react";
import Card from "../components/article/Card";
import Banniere from "../components/header/Banniere";
import SortBar from "../components/article/SortBar";

const Situation = () => {
  const situations = [
    {
      title: "MedHub",
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
        title: "MedHub",
        description:
          "Medhub est une application MAUI pour la gestion des stocks de médicaments dans les EHPAD, facilitant les commandes rapides pour les résidents âgés et/ou handicapés. Elle permet également la comparaison de médicaments spécifiques pour des maladies telles que le cancer, l'Alzheimer et Parkinson.",
        image: "https://jinoh.co/wp-content/uploads/2022/01/netMauiLogo.webp",
        context:
          "Dans le cadre du projet réalisé en deuxième année de mon BTS SIO SLAM, j'ai développé l'application Medhub pour répondre aux besoins de gestion des stocks de médicaments dans les EHPAD affiliés à la société fictive GSB, spécialisée dans les solutions biomédicales. Cette application permet une gestion efficace des stocks, des commandes rapides et offre la possibilité de comparer différents médicaments pour des maladies telles que le cancer, l'Alzheimer et Parkinson, facilitant ainsi la prise en charge médicale des résidents âgés et/ou handicapés.",
        needs:
          "Il était impératif de répondre aux besoins spécifiques des EHPAD en matière de gestion des stocks de médicaments, de facilitation des commandes rapides et de possibilité de comparer différents médicaments pour des maladies telles que le cancer, l'Alzheimer et Parkinson.",
        environment:
          "Pour développer l'application Medhub, j'ai utilisé un environnement technologique moderne comprenant Visual Studio 2022 comme environnement de développement intégré (IDE), .NET MAUI pour la création d'interfaces multiplateformes, une base de données gérée via phpMyAdmin pour stocker les données essentielles, et une API pour gérer les interactions entre l'application et la base de données, assurant ainsi une gestion efficace des informations médicales des résidents.",
        realization:
          "Dans la réalisation de l'application Medhub, j'ai débuté par l'installation de .NET MAUI ainsi que des packages NuGet nécessaires pour le développement. Ensuite, j'ai créé la base de données via phpMyAdmin et développé une API pour établir la liaison avec la base de données, permettant ainsi la manipulation des données de manière sécurisée. Par la suite, j'ai implémenté les différentes fonctionnalités de l'application, telles que la gestion des stocks de médicaments, les commandes rapides et la comparaison de médicaments. Enfin, j'ai mis en place le routage entre les différentes pages de l'application pour assurer une navigation fluide et intuitive pour les utilisateurs.",
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
        description:
          "La Table d'Hélène est une application PHP simplifiant la prise de commandes et la gestion des tables, plats, boissons, et menus pour le lycée Hélène Boucher.",
        image: "/sgrc.webp",
        context:
          "Au cours de ma deuxième année de BTS SIO, l'ensemble de ma classe a collaboré sur le projet La Table d'Hélène, une application PHP destinée à optimiser la gestion des commandes et des tables au lycée Hélène Boucher. Dans le cadre du projet SGRC, nous avons travaillé en équipe pour répondre aux besoins spécifiques de l'établissement, améliorant ainsi les processus de restauration.",
        needs:
          "Le projet collectif visait à développer une application complète répondant aux exigences complexes du lycée Hélène Boucher en matière de gestion de commandes. L'objectif était de créer une solution unifiée pour coordonner les équipes de la cuisine à la caisse, tout en offrant une expérience utilisateur optimale.",
        environment:
          "Le développement s'est déroulé dans un environnement collaboratif, avec l'utilisation de PHP pour la logique côté serveur et MySQL pour la base de données. Les tâches et responsabilités ont été réparties grâce à l'utilisation de Trello, un outil de gestion de projet en ligne. Les interfaces utilisateur ont été conçues pour refléter les différents rôles des utilisateurs, des administrateurs aux équipes de service, de cuisine, de bar et de caisse.",
        realization:
          "L'équipe a adopté une approche méthodique en répartissant les tâches via Trello. Des réunions régulières ont été organisées pour discuter des avancées, résoudre les problèmes et assurer la cohérence globale du projet. Les interfaces dédiées à chaque équipe ont été développées en fonction de leurs besoins spécifiques, intégrant des fonctionnalités telles que la prise de commande, la gestion des tables et la transmission des commandes. Des interactions régulières avec le lycée ont eu lieu pour valider les choix de conception et s'assurer que l'application répondait aux besoins réels de l'établissement. Ces réunions ont permis de recueillir des retours précieux, assurant ainsi une adéquation optimale entre le projet et les attentes du lycée.",
        link: "https://brodet.fr/SGRC/",
        conclusion:
          "Le projet SGRC a été une expérience immersive et formatrice où j'ai pu contribuer au développement d'une application PHP pour optimiser la gestion des commandes au lycée Hélène Boucher. En travaillant en équipe, j'ai consolidé mes compétences en développement logiciel, coordination de projet et communication, tout en offrant une solution pratique et efficace pour répondre aux besoins spécifiques de l'établissement. Cette expérience m'a permis de mettre en pratique de manière intégrée les compétences acquises dans le cadre du BTS SIO, renforçant ainsi ma compréhension globale du processus de développement logiciel en équipe.",
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
      githubLink: "https://github.com/JennaBHA/manif",
      modalContent: {
        title: "Fatalys",
        description:
          "Fatalys est un projet PHP simulant des inscriptions aux activités d'une manifestation proposée par une association, comportant des profils de participants, de responsables et d'administrateurs.",
        image: "/fatalys.webp",
        context:
          "À la recherche d'une gestion efficace des événements, j'ai développé une application conçue pour simplifier la tâche complexe de gestion des activités événementielles lors de mon premier semestre de la deuxième année de BTS SIO. Ce projet visait à fournir une solution robuste aux défis administratifs auxquels les associations sont confrontées lors d'événements.",
        needs:
          "L'objectif du projet était d'aborder le processus complexe et chronophage de la gestion des activités événementielles. Il visait à fournir une plateforme web facilement navigable et riche en fonctionnalités pour l'enregistrement et la coordination de diverses activités lors d'événements.",
        environment:
          "L'application a été développée en utilisant PHP pour la logique de base et MySQL (XAMPP) pour les interactions avec la base de données. Des méthodologies agiles ont été adoptées pour un processus de développement structuré, avec une attention particulière portée aux expériences administratives et aux utilisateurs finaux dans les considérations de conception.",
        realization:
          "Le développement de cette application a été centré sur la création d'une interface utilisateur intuitive qui répond aux différents rôles au sein d'un événement - administrateurs, participants et responsables d'activités. La plateforme qui en résulte offre un éventail de fonctionnalités pour gérer les activités, superviser les inscriptions, contrôler les créneaux horaires et rationaliser l'ensemble du processus d'un point de vue administratif. Les participants bénéficient d'une interface conviviale pour l'inscription aux activités, garantissant ainsi une expérience fluide et sans tracas.",
        conclusion:
          "Fatalys a été une expérience formatrice qui m'a permis d'acquérir et de perfectionner diverses compétences en développement web, gestion de projet et conception d'interfaces utilisateur. Cette expérience m'a également donné une compréhension approfondie des besoins administratifs lors de la gestion d'événements. En résumé, Fatalys représente une étape cruciale dans mon parcours d'apprentissage et de développement professionnel dans le domaine de la technologie de l'information.",
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
        description:
          "SharePoint est une plateforme de collaboration et de gestion de contenu développée par Microsoft. Elle offre un environnement centralisé pour le stockage, la gestion et le partage de documents, ainsi que pour la collaboration au sein des équipes. SharePoint permet également la création de sites web internes pour les intranets d'entreprise, facilitant la communication et la collaboration entre les membres de l'organisation.",
        image:
          "https://uploads-ssl.webflow.com/612e51f97cd5712b11eaca4d/624f3bc1aaae726c510cb8d3_SharePoint-office.jpg",
        context:
          "J'ai travaillé dans le service infra, au sein d'une équipe composée de cinq membres, incluant un chargé de maintenance, deux administrateurs réseaux/systèmes (dont un en période d'essai), un administrateur poste de travail, et un administrateur Sys/réseaux en cybersécurité (en alternance). Nous étions tous basés dans le même bureau. J'étais responsable de la réalisation d'un intranet pour cette entreprise.",
        needs:
          "J'ai créé cet intranet pour répondre aux besoins de l'entreprise. L'objectif était de proposer un site regroupant tous les liens rapides vers les outils de l'entreprise, ainsi qu'un site représentatif incluant les actualités, l'agenda, les nouveaux arrivants, la météo, etc.",
        environment:
          "L'intranet a été conçu sur la plateforme SharePoint, qui a servi de cadre pour sa réalisation. Ce choix a été motivé par la souplesse et les fonctionnalités étendues offertes par SharePoint, permettant une personnalisation approfondie de l'intranet selon les besoins spécifiques de l'entreprise. En exploitant les capacités de SharePoint, nous avons pu garantir la sécurité, la facilité d'utilisation et la scalabilité de l'intranet, assurant ainsi sa pertinence à long terme pour l'entreprise.",
        realization:
          "J'ai d'abord dû me familiariser avec l'outil, puis j'ai collecté des informations auprès des services concernés. Ensuite, j'ai créé la première maquette et pris rendez-vous avec la directrice des ressources humaines pour discuter du projet. Après avoir amélioré la maquette suite à nos échanges, j'ai organisé une nouvelle rencontre avec la directrice des ressources humaines. Enfin, j'ai rédigé la documentation SharePoint nécessaire.",
        conclusion:
          "Ce projet m'a apporté de l'expérience dans le travail en équipe, avec une satisfaction des collègues envers l'intranet réalisé. Mon stage m'a permis d'acquérir les compétences nécessaires sur SharePoint. J'en ai retenu le développement de l'intranet, la vie en entreprise, les missions, les réunions, ainsi que la possibilité de participer à des présentations et de présenter le fruit de nos efforts.",
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
        description:
          "SharePoint Designer est un outil de développement Web permettant de personnaliser les sites SharePoint. Il offre des fonctionnalités avancées pour la conception, la personnalisation et la gestion des sites SharePoint, sans nécessiter de compétences de codage approfondies. Avec SharePoint Designer, les utilisateurs peuvent créer des workflows personnalisés, des formulaires et des pages web pour répondre aux besoins spécifiques de leur organisation, offrant ainsi une flexibilité accrue dans la création et la gestion des sites SharePoint.",
        image:
          "https://tutorial.wmlcloud.com/image/1409/SharePoint%20Designer%202013_1.jpg",
        context:
          "Durant mon stage de six semaines chez ELCIA, une entreprise spécialisée dans les logiciels pour les professionnels de la menuiserie, j'ai eu l'opportunité de rejoindre le service infra, une équipe composée de cinq membres et rattachée au service DOSI. Cette expérience m'a plongé dans un environnement dynamique où j'ai pu observer de près le fonctionnement des systèmes informatiques au sein d'une entreprise spécialisée.",
        needs:
          "Notre principal objectif au sein de l'équipe était de personnaliser l'outil SharePoint Designer afin d'offrir une plus grande flexibilité dans la conception du site intranet de l'entreprise. Cette tâche nous a conduit à explorer en profondeur les fonctionnalités et les possibilités de personnalisation offertes par SharePoint Designer, tout en répondant aux besoins spécifiques de l'entreprise.",
        environment:
          "Pour mener à bien notre mission, j'ai eu l'occasion d'utiliser un ensemble d'outils et de technologies variés, notamment Visual Studio Code, Visual Studio, SQL MyAdmin et Azure DevOps. Ces outils se sont révélés indispensables pour manipuler le code source en C# et PHP, et pour faciliter la collaboration au sein de l'équipe.",
        realization:
          "Pour atteindre notre objectif de personnaliser l'outil SharePoint Designer, j'ai entamé le projet en procédant à une analyse détaillée des besoins spécifiques de l'entreprise. Ensuite, j'ai utilisé les fonctionnalités avancées de SharePoint Designer pour manipuler le code source existant en C# et PHP. Cette étape a impliqué des sessions de travail intensives où j'ai exploré en profondeur les fonctionnalités de l'outil, en testant différentes approches pour parvenir à la personnalisation souhaitée. En collaboration avec mes collègues, nous avons échangé des idées, partagé nos découvertes et résolu des problèmes rencontrés en cours de route. Chaque modification apportée au code a été minutieusement testée et validée pour garantir son bon fonctionnement. En fin de compte, le résultat final a été le fruit d'un travail d'équipe cohésif et d'un engagement soutenu pour répondre aux besoins de l'entreprise en matière de personnalisation de son intranet.",
        conclusion:
          "En résumé, ce projet de personnalisation avec SharePoint Designer m'a permis de renforcer mes compétences en programmation et en gestion de projets informatiques, tout en mettant en lumière l'importance de la collaboration et de la résolution de problèmes en équipe. Cette expérience m'a également offert une meilleure compréhension des technologies impliquées et m'a donné confiance dans ma capacité à relever des défis techniques.",
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
        description:
          "GLPI est une plateforme de gestion informatique qui simplifie le suivi des actifs, la gestion des tickets et les inventaires simples. Il s'agit d'un logiciel open-source convivial qui permet d'optimiser la productivité dès son installation.",
        image:
          "https://user.oc-static.com/upload/2019/01/29/15487708638493_image36.png",
        context:
          "En tant qu'étudiant en première année de BTS SIO, j'ai entrepris l'installation de GLPI sur un système Linux Debian 11. Mon objectif principal était d'acquérir une compréhension approfondie du processus d'installation de ce logiciel de gestion de parc informatique au sein d'un environnement Debian.",
        needs:
          "Ce projet individuel a été initié dans le but d'acquérir des compétences pratiques en matière d'installation et de configuration de solutions logicielles sur des systèmes d'exploitation Linux. Le choix de GLPI s'est justifié par son importance dans le domaine de la gestion de parc informatique, offrant une opportunité idéale pour renforcer mes connaissances en administration système.",
        environment:
          "L'ensemble du processus a été réalisé sur un système Linux Debian 11. J'ai utilisé les outils propres à Debian pour la gestion des paquets et des dépendances. Cette démarche m'a permis de développer une compréhension approfondie de l'écosystème Debian, notamment en matière d'installation et de configuration de logiciels.",
        realization:
          "Après avoir installé un serveur Apache2, PHP et MySQL, ainsi que le système de gestion des tickets GLPI, j'ai procédé à la configuration initiale. L'installation de GLPI a débuté par la recherche et le téléchargement des paquets nécessaires. J'ai ensuite procédé à l'installation des dépendances, en m'assurant que le système était correctement configuré pour accueillir GLPI. La configuration du serveur web, l'ajustement des paramètres de base de données, et la création des permissions appropriées ont été des étapes cruciales du processus. Une fois que l'infrastructure de base était en place, j'ai créé deux utilisateurs : un administrateur avec des privilèges étendus et un utilisateur de base. Enfin, j'ai effectué des tests de tickets pour vérifier le bon fonctionnement du système de gestion des tickets.",
        conclusion:
          "Le projet d'installation et de configuration de GLPI sur Debian 11 a été une opportunité essentielle pour acquérir des compétences techniques précieuses en administration système Linux. En maîtrisant l'écosystème Debian, j'ai appris à installer et configurer des solutions logicielles tout en développant une connaissance pratique de GLPI, un outil essentiel dans la gestion de parc informatique. En parallèle, la configuration du système de gestion des tickets m'a permis de développer des compétences utiles en gestion des incidents et en support informatique. Ce projet m'a également offert une expérience précieuse en travail autonome, renforçant ma capacité à planifier et exécuter des tâches de manière efficace.",
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
