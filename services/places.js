import fetch from 'isomorphic-unfetch'

// export const proxyUrl = process && process.env && process.env.PROXY_URL ? process.env.PROXY_URL : window.proxyUrl
const proxyUrl = 'http://0.0.0.0:3030/'

export async function getPlaces() {
  const res = await fetch(`${proxyUrl}places`)
  return await res.json()
}
