$(document).ready(function () {
  $("main#spapp > section").height($(document).height() - 60);

  var app = $.spapp({ pageNotFound: "error_404" }); // initialize

  // define routes
  app.route({
    view: "home",
    onCreate: console.log("Created"),
    onReady: console.log("Ready"),
  });

  app.route({
    view: "questions",
    onCreate: console.log("Created"),
    onReady: console.log("Ready"),
  });

  // run app
  app.run();
});
