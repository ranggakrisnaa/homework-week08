const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.actor.createMany({
      data: [
        { first_name: "Tom", last_name: "Holland" },
        { first_name: "Chris", last_name: "Hemsworth" },
        { first_name: "Robert ", last_name: "Pattinson" },
        { first_name: "Zoe", last_name: "Kravitz" },
        { first_name: "Cillian", last_name: "Murphy" },
      ],
    });

    await prisma.category.createMany({
      data: [
        { name: "action" },
        { name: "superhero" },
        { name: "fantasy" },
        { name: "crime" },
        { name: "drama" },
        { name: "comedy" },
        { name: "biography" },
        { name: "history" },
      ],
    });

    await prisma.film.createMany({
      data: [
        {
          title: "The Batman",
          description:
            "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
          release_year: 2022,
        },
        {
          title: "Oppenheimer",
          description:
            "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
          release_year: 2023,
        },
        {
          title: "Spider-Man: No Way Home",
          description:
            "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
          release_year: 2021,
        },
        {
          title: "Thor: Love and Thunder",
          description:
            "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
          release_year: 2022,
        },
      ],
    });

    await prisma.film_actor.createMany({
      data: [
        { actor_id: 1, film_id: 3 },
        { actor_id: 2, film_id: 4 },
        { actor_id: 3, film_id: 1 },
        { actor_id: 4, film_id: 1 },
        { actor_id: 5, film_id: 2 },
      ],
    });

    await prisma.film_category.createMany({
      data: [
        { film_id: 1, category_id: 1 },
        { film_id: 1, category_id: 4 },
        { film_id: 1, category_id: 5 },
        { film_id: 2, category_id: 5 },
        { film_id: 2, category_id: 7 },
        { film_id: 2, category_id: 8 },
        { film_id: 3, category_id: 1 },
        { film_id: 3, category_id: 2 },
        { film_id: 3, category_id: 3 },
        { film_id: 4, category_id: 1 },
        { film_id: 4, category_id: 2 },
        { film_id: 4, category_id: 6 },
      ],
    });

    console.log("Seed data succesfully added.");
  } catch (error) {
    console.error("an error occurred while seed data:", error);
  }
  await prisma.$disconnect();
}

seed();
