import { useState } from "react";
import Card from "../components/article/Card";
import Banniere from "../components/header/Banniere";
import SortBar from "../components/article/SortBar";

const Certification = () => {
  const certifications = [
    {
      title: "AWS ACADEMY CLOUD FOUNDATIONS",
      date: "Septembre 2023 -  Aujourd'hui",
      desc: "Amazon Web Service",
      photoUrl:
        "https://tse4.mm.bing.net/th?id=OIP.2zUhyllIiKBamSNJ3_xiwwHaHa&pid=Api&P=0&h=180",
      bannerUrl:
        "https://i.pinimg.com/564x/c8/bb/b6/c8bbb6f599ede52d034e2c7aa0da5e1c.jpg",
      category: "Cloud",
    },
    {
      title: "CYBERSECURITY ESSENTIALS",
      date: "Septembre 2022 - Janvier 2023",
      desc: "Cisco Networking Academy",
      photoUrl: "https://www.svgrepo.com/show/331335/cisco.svg",
      bannerUrl:
        "https://i.pinimg.com/564x/c8/bb/b6/c8bbb6f599ede52d034e2c7aa0da5e1c.jpg",
      category: "Cybersécurité",
    },
    {
      title: "NETWORKING ESSENTIALS",
      date: "Septembre 2022 - Janvier 2023",
      desc: "Cisco Networking Academy",
      photoUrl: "https://www.svgrepo.com/show/331335/cisco.svg",
      bannerUrl:
        "https://i.pinimg.com/564x/c8/bb/b6/c8bbb6f599ede52d034e2c7aa0da5e1c.jpg",
      category: "Cybersécurité",
    },
    {
      title: "MOOC",
      date: "Septembre 2022 - Janvier 2023",
      desc: "SecNum Academy",
      photoUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi00-r8FkjduDa3rjittcmxmGebTw9jkrlv0VpWPeWY3klRcooGrXONuzRy5Rx3SQJiUCTzsgAAVAH9E7LSzRc1BrBX_hXWPlobm7y4CH7m6qHyim8oRUigcEX82LBHpcUNULaFVfRAvaw/s1600/anssi.png",
      bannerUrl:
        "https://i.pinimg.com/564x/c8/bb/b6/c8bbb6f599ede52d034e2c7aa0da5e1c.jpg",
      category: "Cybersécurité",
    },
    {
      title: "HTML/CSS  ",
      date: "Novembre 2020 - Décembre 2020",
      desc: "Openclassroom",
      photoUrl:
        "https://static.vecteezy.com/system/resources/previews/007/482/254/non_2x/icon-custom-coding-suitable-for-programming-symbol-color-mate-style-simple-design-editable-design-template-simple-symbol-illustration-vector.jpg",
      bannerUrl:
        "https://i.pinimg.com/564x/c8/bb/b6/c8bbb6f599ede52d034e2c7aa0da5e1c.jpg",
      category: "Développement",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories = ["Cloud", "Cybersécurité", "Développement"];

  const filteredCertifications = selectedCategory
    ? certifications.filter(
        (certifications) => certifications.category === selectedCategory
      )
    : certifications;

  const handleSortChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <header>
        <Banniere
          title="Certification"
          subtitle="Découvrez mes certifications et accréditations attestant de mon expertise"
          backgroundImageUrl="https://images.unsplash.com/photo-1648337564744-f919c7c2fc02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonLabel="Explorer"
          showButton2={false}
        />
      </header>
      <main id="main" className="flex flex-col items-center">
        <SortBar categories={categories} onSortChange={handleSortChange} />
        <section className="flex items-center flex-wrap gap-6 p-6">
          {filteredCertifications.map((certifications, index) => (
            <Card
              key={index}
              title={certifications.title}
              date={certifications.date}
              desc={certifications.desc}
              photoUrl={certifications.photoUrl}
              bannerUrl={certifications.bannerUrl}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Certification;
