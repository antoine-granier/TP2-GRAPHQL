import { Resolvers } from "./types.js";

export const resolvers: Resolvers = {
  Query: {
    getFilms: (parent, args, context, info) => {
      return context.dataSources.ghibliAPI.getFilms()
    },
    getPeople: (parent, agrs, context, info) => {
      return context.dataSources.ghibliAPI.getPeople()
    }
  },

  Film: {
    people: async ({people}, args, context, info) => {
      const res = await Promise.all(people.map(p => {
        const id = p.split("people/")[1]
        if(id) {
          return context.dataSources.ghibliAPI.getPeopleById(id)
        }
      }))

      return res.filter(n=>n)
    }
  },

  People: {
    films: async ({films}, args, context, info) => {
      const res = await Promise.all(films.map(film => {
        const id = film.split("films/")[1]
        if(id) {
          return context.dataSources.ghibliAPI.getFilmById(id)
        }
      }))

      return res.filter(n=>n)
    },
    eyeColor: ({eye_color}, args, context, info) => {
      return eye_color
    }
  }
};
