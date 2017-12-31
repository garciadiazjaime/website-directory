import fetch from 'isomorphic-unfetch'

export const apiUrl = process && process.env && process.env.API_URL ? process.env.API_URL : null

export async function getPlaces() {
  const res = await fetch(`${apiUrl}places`)
  return await res.json()
}
