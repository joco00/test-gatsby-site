
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ocon/main/projects/gatsby_site/gatsby-site/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/ocon/main/projects/gatsby_site/gatsby-site/src/pages/404.js")),
  "component---src-pages-blog-index-js": preferDefault(require("/Users/ocon/main/projects/gatsby_site/gatsby-site/src/pages/blog/index.js")),
  "component---src-pages-blog-mdx-slug-js": preferDefault(require("/Users/ocon/main/projects/gatsby_site/gatsby-site/src/pages/blog/{mdx.slug}.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ocon/main/projects/gatsby_site/gatsby-site/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/ocon/main/projects/gatsby_site/gatsby-site/src/pages/projects.js"))
}

