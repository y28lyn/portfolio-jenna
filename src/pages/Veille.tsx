import Card from "../components/article/Card";
import PresentationCard from "../components/article/PresentationCard";
import Banniere from "../components/header/Banniere";

const Veille = () => {
  const situations = [
    {
      title: "Les 7 techniques de phishing les plus fréquentes",
      date: "28 septembre 2023",
      desc: "Étienne Caillebotte | BDM",
      photoUrl:
        "https://f.hellowork.com/blogdumoderateur/2023/09/phishing-exemples-recurrents.jpg",
      bannerUrl:
        "https://i.pinimg.com/564x/60/9b/01/609b0181f805463898bcffd4eb2fac3c.jpg",
      showLinkButton: true,
      externalLink:
        "https://www.blogdumoderateur.com/arnaque-email-techniques-phishing-frequentes/",
    },
    {
      title: "Comment les hameçonneurs exploitent-ils l'OSINT ?",
      date: "9 Novembre 2023",
      desc: "Zachary Amos | IN Cyber News",
      photoUrl:
        "https://incyber.org//wp-content/uploads/import/post/2023/11/comment-les-hameconneurs-exploitent-ils-losint-768x512.jpg",
      bannerUrl:
        "https://i.pinimg.com/564x/60/9b/01/609b0181f805463898bcffd4eb2fac3c.jpg",
      showLinkButton: true,
      externalLink:
        "https://incyber.org/article/comment-les-hameconneurs-exploitent-ils-losint/",
    },
    {
      title: "Phishing, vol de données… dans le cloud",
      date: "27 janvier 2024",
      desc: "Yoann Bourgin | L'usine digitale",
      photoUrl:
        "https://www.usine-digitale.fr/mediatheque/9/9/4/000910499_896x598_c.jpg",
      bannerUrl:
        "https://i.pinimg.com/564x/60/9b/01/609b0181f805463898bcffd4eb2fac3c.jpg",
      showLinkButton: true,
      externalLink:
        "https://www.usine-digitale.fr/article/phishing-vol-de-donnees-dans-le-cloud-les-cyberattaques-visent-en-premier-lieu-l-industrie-manufacturiere.N2207118",
    },
    {
      title: "Les entreprises préférées des pirates à arnaquer",
      date: "20 Février 2024",
      desc: "Paolo Garoscio | Radins",
      photoUrl:
        "https://image.radins.com/media/leadgen_article_news/690/479/1f6be2f33af9e0d26fd2d26af5cabb09.jpeg",
      bannerUrl:
        "https://i.pinimg.com/564x/60/9b/01/609b0181f805463898bcffd4eb2fac3c.jpg",
      showLinkButton: true,
      externalLink:
        "https://www.radins.com/service/telephone-internet/actualites/usurpation-identite-entreprise-piratage-phishing/53285",
    },
    {
      title: "Ces arnaques à éviter avant la déclaration d'impôts",
      date: "18 mars 2024",
      desc: "La rédaction | Pleine Vie",
      photoUrl:
        "https://www.pleinevie.fr/wp-content/uploads/pleinevie/2024/03/impots-2024-faites-attention-a-ces-arnaques-a-eviter-avant-la-date-limite-de-declaration-750x410.jpg",
      bannerUrl:
        "https://i.pinimg.com/564x/60/9b/01/609b0181f805463898bcffd4eb2fac3c.jpg",
      showLinkButton: true,
      externalLink:
        "https://www.pleinevie.fr/conso-argent/impots-2024-faites-attention-a-ces-arnaques-a-eviter-avant-la-date-limite-de-declaration-111793.html",
    },
  ];

  return (
    <>
      <header>
        <Banniere
          title="Veille technologique"
          subtitle="Quel est l'impact du phishing sur le monde moderne ?"
          backgroundImageUrl="https://images.unsplash.com/photo-1712460842725-f1c9b3ad5a1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonLabel="Explorer"
          showButton2={false}
        />
      </header>
      <main id="main" className="flex flex-col items-center">
        <section className="flex items-center flex-wrap gap-6 p-6">
          {situations.map((situations, index) => (
            <Card
              key={index}
              title={situations.title}
              date={situations.date}
              desc={situations.desc}
              photoUrl={situations.photoUrl}
              bannerUrl={situations.bannerUrl}
              showLinkButton={situations.showLinkButton}
              externalLink={situations.externalLink}
            />
          ))}
        </section>
        <section className="flex items-center justify-center mx-auto px-6">
          <PresentationCard
            imageUrl="https://images.unsplash.com/photo-1711344209056-37639a63f70a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Réponse à la problématique"
            description="Les techniques de phishing émergentes deviennent souvent plus sophistiquées, rendant leur détection plus difficile et potentiellement plus dangereuses. Les attaquants exploitent des méthodes personnalisées et des techniques d'ingénierie sociale avancées pour tromper les utilisateurs et accéder à leurs informations sensibles. Bien que les avancées dans les technologies de sécurité aident à contrer ces menaces, la vigilance des utilisateurs reste essentielle pour prévenir les attaques de phishing."
            width={"md:w-[80vw]"}
          />
        </section>
      </main>
    </>
  );
};

export default Veille;
