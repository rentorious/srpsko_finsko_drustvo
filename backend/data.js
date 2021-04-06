import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Mah Umps",
      username: "mah_umps",
      password: bcrypt.hashSync("wilijamcrni", 8),
      isAdmin: true,
    },
    {
      name: "Admin",
      username: "admir",
      password: bcrypt.hashSync("wilijamcrni", 8),
      isAdmin: false,
    },
  ],
  articles: [
    {
      title: "Poziv na redovnu godisnju skupstinu drustva",
      date: "04.05.2020",
      description:
        "Pozivamo vas na redovnu godisnju skupstinu drustva koja ce se odrzati u sredu 13. maja sa pocetkom u 18:00 casova",
      image: "/img/1.jpg",
      slug: "article2",
      category: "test",
    },
    {
      title: "Poziv na redovnu godisnju skupstinu drustva",
      date: "04.05.2020",
      description:
        "Pozivamo vas na redovnu godisnju skupstinu drustva koja ce se odrzati u sredu 13. maja sa pocetkom u 18:00 casova",
      image: "/img/2.jpg",
      category: "test",
      slug: "article3",
    },
    {
      title: "Poziv na redovnu godisnju skupstinu drustva",
      date: "04.05.2020",
      description:
        "Pozivamo vas na redovnu godisnju skupstinu drustva koja ce se odrzati u sredu 13. maja sa pocetkom u 18:00 casova",
      image: "/img/3.jpg",
      slug: "article7",
      category: "test",
    },
    {
      title: "Poziv na redovnu godisnju skupstinu drustva",
      date: "04.05.2020",
      description:
        "Pozivamo vas na redovnu godisnju skupstinu drustva koja ce se odrzati u sredu 13. maja sa pocetkom u 18:00 casova",
      image: "/img/4.jpg",
      slug: "article4",
      category: "test",
    },
    {
      title: "Poziv na redovnu godisnju skupstinu drustva",
      date: "04.05.2020",
      description:
        "Pozivamo vas na redovnu godisnju skupstinu drustva koja ce se odrzati u sredu 13. maja sa pocetkom u 18:00 casova",
      image: "/img/5.jpg",
      slug: "article5",
      category: "test",
    },
    {
      title: "Poziv na redovnu godisnju skupstinu drustva",
      date: "04.05.2020",
      description:
        "Pozivamo vas na redovnu godisnju skupstinu drustva koja ce se odrzati u sredu 13. maja sa pocetkom u 18:00 casova",
      image: "/img/6.jpg",
      slug: "article6",
      category: "test",
    },
  ],
};

export default data;
