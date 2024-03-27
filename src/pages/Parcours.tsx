import Timeline from "../components/article/Timeline";
import Banniere from "../components/header/Banniere";
import {
  faGraduationCap,
  faAward,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

const Parcours = () => {
  const timeline = [
    {
      icon: faAward,
      title: "Bac ASSP",
      date: "Septembre 2019 - Juillet 2021",
      desc: "Lycée Danielle Casanova",
      photoUrl:
        "https://danielle-casanova.ent.auvergnerhonealpes.fr/lectureFichiergw.do?ID_FICHIER=3209",
      bannerUrl:
        "https://i.pinimg.com/564x/11/b7/33/11b7338949adcd14a90841db9d6b8cf1.jpg",
    },
    {
      icon: faGraduationCap,
      title: "FCIL",
      date: "Septembre 2021 - Juillet 2022",
      desc: "Lycée Aragon Picasso",
      photoUrl:
        "https://www.gcc-groupe.com/wp-content/uploads/2021/08/shoootin-photo-1-1110x430.jpg",
      bannerUrl:
        "https://i.pinimg.com/564x/11/b7/33/11b7338949adcd14a90841db9d6b8cf1.jpg",
    },
    {
      icon: faUserGraduate,
      title: "BTS SIO",
      date: "Septembre 2022 - Juillet 2024",
      desc: "Lycée Jacques Brel",
      photoUrl:
        "https://www.expressions-venissieux.fr/wp-content/uploads/2014/08/Brel-1200x801.jpg",
      bannerUrl:
        "https://i.pinimg.com/564x/11/b7/33/11b7338949adcd14a90841db9d6b8cf1.jpg",
    },
  ];

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
      <main id="main">
        <section className="flex items-center justify-center py-6 pl-6">
          <Timeline timeline={timeline} />
        </section>
      </main>
    </>
  );
};

export default Parcours;
