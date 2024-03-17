const z = require('zod')

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'movie title is required'
  }),
  year: z.number().int().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int(),
  rate: z.number({
    required_error: 'Hola',
    invalid_type_error: 'Hola',
    description: 'hola'
  }).min(0).max(10).default(5),
  poster: z.string().url({
    message: 'Poster must be a valid URL'
  }),
  genre: z.array(z.enum(['Action', 'Adventure', 'Comedy', 'Fantasy', 'Horror', 'Thriller', 'Sci-fy', 'Drama', 'Crime']))
})

function validateMovie (object) {
  return movieSchema.safeParse(object)
}
function validatePartialMovie (object) {
  return movieSchema.partial().safeParse(object)
}

module.exports = {
  validateMovie,
  validatePartialMovie

}
