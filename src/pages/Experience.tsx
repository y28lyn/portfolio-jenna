import Card from "../components/article/Card";
import Banniere from "../components/header/Banniere";

const Experience = () => {
  const experiences = [
    {
      title: "Développeuse fullstack",
      date: "Janvier 2024 - Février 2024",
      desc: "Lycée Jacques Brel",
      photoUrl:
        "https://i0.wp.com/venissieuxinfos.fr/wp-content/uploads/Lycee-jacques-brel.png?fit=647%2C350&ssl=1",
      bannerUrl:
        "https://i.pinimg.com/564x/ff/00/14/ff0014ba7df1030502185749d56b0845.jpg",
    },
    {
      title: "Développeuse DevOps",
      date: "Mai 2023 - Juin 2023",
      desc: "ELCIA",
      photoUrl:
        "https://www.elcia.com/wp-content/uploads/batiment-elcia-brignais-650x414.png",
      bannerUrl:
        "https://i.pinimg.com/564x/ff/00/14/ff0014ba7df1030502185749d56b0845.jpg",
    },
    {
      title: "Technicienne en maintenance informatique",
      date: "Février 2022 - Avril 2022",
      desc: "Lycée Aragon Picasso",
      photoUrl:
        "https://aragon-picasso.ent.auvergnerhonealpes.fr/lectureFichiergw.do?ID_FICHIER=1456",
      bannerUrl:
        "https://i.pinimg.com/564x/ff/00/14/ff0014ba7df1030502185749d56b0845.jpg",
    },
    {
      title: "Auxiliaire de puériculture",
      date: "Janvier 2021 - Avril 2021",
      desc: "Crèche Pôle Enfance Marie Antoinette Goubelly",
      photoUrl:
        "https://cdn-s-www.leprogres.fr/images/334A9A95-C9CC-405F-BC36-6775C67505CA/NW_raw/la-creche-marie-antoinette-goubelly-de-givors-est-fermee-provisoirement-jusqu-au-20-septembre-inclus-photo-progres-redouja-merabti-1599490134.jpg",
      bannerUrl:
        "https://i.pinimg.com/564x/ff/00/14/ff0014ba7df1030502185749d56b0845.jpg",
    },
    {
      title: "Agente de service hospitalier",
      date: "Novembre 2020 - Décembre 2020",
      desc: "EHPAD Sainte Anne",
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTI9YISd2SihNXBptXGM9UcWUY9mGzHtxoPFTVflQR2g&s",
      bannerUrl:
        "https://i.pinimg.com/564x/ff/00/14/ff0014ba7df1030502185749d56b0845.jpg",
    },
    {
      title: "Agente de service hospitalier",
      date: "Janvier 2019 - Avril 2019",
      desc: "Centre Hospitalier Montgelas",
      photoUrl:
        "https://cdn-s-www.leprogres.fr/images/8A290905-7F9D-4886-B7C4-C1346FE0B64F/NW_raw/l-hopital-de-montgelas-photo-archives-progres-andre-montet-1645099655.jpg",
      bannerUrl:
        "https://i.pinimg.com/564x/ff/00/14/ff0014ba7df1030502185749d56b0845.jpg",
    },
    {
      title: "Assistante maternelle",
      date: "Avril 2018 - Mai 2018",
      desc: "École Maternelle Paul Gauguin",
      photoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNrvC50UwLtqzip5N9Qz_Ujdk2q8YHFIp1NfbycXBiA&s",
      bannerUrl:
        "https://i.pinimg.com/564x/ff/00/14/ff0014ba7df1030502185749d56b0845.jpg",
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
      <main id="main" className="flex items-center flex-wrap gap-6 p-6">
        {experiences.map((experience, index) => (
          <Card
            key={index}
            title={experience.title}
            date={experience.date}
            desc={experience.desc}
            photoUrl={experience.photoUrl}
            bannerUrl={experience.bannerUrl}
          />
        ))}
      </main>
    </>
  );
};

export default Experience;
