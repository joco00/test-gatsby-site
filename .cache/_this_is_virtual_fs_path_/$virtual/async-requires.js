// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-index-js": () => import("./../../../src/pages/blog/index.js" /* webpackChunkName: "component---src-pages-blog-index-js" */),
  "component---src-pages-blog-mdx-slug-js": () => import("./../../../src/pages/blog/{mdx.slug}.js" /* webpackChunkName: "component---src-pages-blog-mdx-slug-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("./../../../src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */)
}

