const newsRouter = require("./news");
const SiteRouter = require("./site");

function route(app) {
  //news
  app.use("/news", newsRouter);

  //home
  app.get("/", SiteRouter);

  //search
  app.get("/search", SiteRouter);
}
module.exports = route;
