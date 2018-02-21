import fetch from 'isomorphic-unfetch'

const categories = [{
  title: 'Tacos',
  slug: '/tacos',
  image: 'https://assets3.thrillist.com/v1/image/2706777/size/tmg-article_default_mobile.jpg',
}, {
  title: 'Pizza',
  slug: '/pizza',
  image: 'http://www.usmag.club/wp-content/uploads/2016/05/How-To-Make-Pizza-At-Home-1-789x445.jpg'
}, {
  title: 'Burger',
  slug: '/burger',
  image: 'http://aprovacao.digicriativa.com.br/rioexperience/blog/wp-content/uploads/2013/09/tt.jpg'
}, {
  title: 'Sushi',
  slug: '/sushi',
  image: 'https://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/sushi_main_0.jpg'
}, {
  title: 'Máriscos',
  slug: '/mariscos',
  image: 'https://toriavey.com/images/2012/07/Crispy-Fish-Tacos.jpg'
}, {
  title: 'Café',
  slug: '/cafe',
  image: 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1107769/2800/2800/m1/fpnw/wm1/coffee-logo-.jpg?1458663615&s=9e7528914f57f153e06559942e56ca19'
}, {
  title: 'Restaurante',
  slug: '/restaurante',
  image: 'https://www.shareicon.net/data/2015/12/01/680795_fork_512x512.png'
}, {
  title: 'Bar',
  slug: '/bar',
  image: 'https://www.shareicon.net/data/2015/12/01/680795_fork_512x512.png'
}]

export const apiUrl = process && process.env && process.env.API_URL ? process.env.API_URL : null

export async function getPlaces(category) {
  const res = await fetch(`${apiUrl}places/${category}`)
  return await res.json()
}

export function getCategories() {
  return categories;
}

export function getCategoryLabel(slug) {
  return categories.filter(category => category.slug === `/${slug}`).pop().title
}
