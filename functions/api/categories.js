// GET /api/categories: categorieën met het aantal openbare boeken.
import { json } from '../../lib/http.js'
import { categories } from '../../lib/library.js'

export const onRequestGet = async ({ data: { conn } }) => json(await categories(conn))
