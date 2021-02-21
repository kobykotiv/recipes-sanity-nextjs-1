const sm = require('sitemap')
const fs = require('fs')
const client = require('./client')

const query = `
{
  "routes": *[_type == "recipe"] {
    _id,
    slug,
  }
}
`

const reduceRoutes = (obj, route) => {
  const path = route.slug.current === '/' ? '/' : `/${route.slug.current}`
  obj[path] = {}
  return obj
}

client
  .fetch(query)
  .then((res) => {
    const { routes = [] } = res
    const nextRoutes = routes
      .filter(({ slug }) => slug.current)
      .reduce(reduceRoutes, {})

    return nextRoutes
  })
  .then((res) => {
    const sitemap = sm.createSitemap({
      hostname: `https://recipes.simeongriggs.dev`,
      cacheTime: 600000, // 600 sec (10 min) cache purge period
    })

    Object.keys(res).map((page) => sitemap.add({ url: page }))

    fs.writeFile(`./public/sitemap.xml`, sitemap.toString(), (err) => {
      if (err) throw err
      console.log(`sitemap.xml updated`)
    })
  })
