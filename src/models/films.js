const prisma = require("../config/database");

const getAllFilms = async () => {
  return await prisma.film.findMany({
    select: {
      film_id: true,
      title: true,
      description: true,
      release_year: true,
      film_actor: {
        select: {
          actor: {
            select: {
              actor_id: true,
              first_name: true,
              last_name: true,
              age: true,
            },
          },
        },
      },
    },
  });
};

const getAllFilmsbyId = async (id) => {
  const data = await prisma.film.findMany({
    where: { film_id: Number(id) },
    select: {
      film_id: true,
      title: true,
      description: true,
      release_year: true,
      film_actor: {
        select: {
          actor: {
            select: {
              actor_id: true,
              first_name: true,
              last_name: true,
              age: true,
            },
          },
        },
      },
    },
  });
  if (data.length === 0) throw new Error("Data film not found");
  return data;
};

const getAllCategories = async () => {
  return await prisma.category.findMany();
};

const getAllFilmsbyCategories = async (catName) => {
  const data = await prisma.film.findMany({
    where: {
      film_category: {
        some: {
          category: {
            name: catName,
          },
        },
      },
    },
    select: {
      title: true,
      description: true,
      release_year: true,
      film_category: {
        select: {
          category: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
  if (data.length === 0) throw new Error("Data film not found");
  return data;
};

module.exports = {
  getAllFilms,
  getAllFilmsbyId,
  getAllCategories,
  getAllFilmsbyCategories,
};
