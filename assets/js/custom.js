$(document).ready(function () {
  $("main#spapp > section").height($(document).height() - 60);

  var app = $.spapp({ pageNotFound: "error_404" }); // initialize

  // define routes
  app.route({
    view: "home",
    onCreate: console.log("Created"),
    onReady: function () {
      window.scrollTo(0, 0);
    },
  });

  app.route({
    view: "questions",
    onCreate: console.log("Created"),
    onReady: function () {
      window.scrollTo(0, 0);
    },
  });

  app.route({
    view: "booking",
    onCreate: console.log("Created"),
    onReady: function () {
      window.scrollTo(0, 0);
    },
  });

  app.route({
    view: "portfolio",
    onCreate: console.log("Created"),
    onReady: function () {
      window.scrollTo(0, 0);
    },
  });

  app.route({
    view: "comments",
    onCreate: console.log("Created"),
    onReady: function () {
      window.scrollTo(0, 0);
    },
  });

  // run app
  app.run();
});
