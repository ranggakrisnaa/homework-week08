const prisma = require("../src/config/database");

async function seed() {
  try {
    await prisma.actor.createMany({
      data: [
        { actor_id: 201, first_name: "Tom", last_name: "Holland" },
        { actor_id: 202, first_name: "Chris", last_name: "Hemsworth" },
        { actor_id: 203, first_name: "Robert ", last_name: "Pattinson" },
        { actor_id: 204, first_name: "Zoe", last_name: "Kravitz" },
        { actor_id: 205, first_name: "Cillian", last_name: "Murphy" },
      ],
    });

    console.log("Seed data succesfully added.");
  } catch (error) {
    console.error("an error occurred while seed data:", error);
  }
  await prisma.$disconnect();
}

seed();
