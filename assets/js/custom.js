$(document).ready(function () {
  $("main#spapp > section").height($(document).height() - 60);

  var app = $.spapp({ pageNotFound: "error_404" }); // initialize
  const navLinks = {
    home: [
      document.getElementById("hbtn"),
      document.getElementById("hbtn-footer"),
    ],
    questions: [
      document.getElementById("qbtn"),
      document.getElementById("qbtn-footer"),
    ],
    booking: [
      document.getElementById("bbtn"),
      document.getElementById("bbtn-footer"),
    ],
    comments: [
      document.getElementById("cbtn"),
      document.getElementById("cbtn-footer"),
    ],
    portfolio: [
      document.getElementById("pbtn"),
      document.getElementById("pbtn-footer"),
    ],
  };

  function updateActiveLink(sectionId) {
    Object.keys(navLinks).forEach((key) => {
      navLinks[key].forEach((link) => {
        if (key === sectionId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  }

  // define routes
  app.route({
    view: "home",
    onCreate: console.log("Created"),
    onReady: function () {
      window.scrollTo(0, 0);
      updateActiveLink("home");
    },
  });

  app.route({
    view: "questions",
    onCreate: console.log("Created"),
    onReady: function () {
      window.scrollTo(0, 0);
      updateActiveLink("questions");
    },
  });

  app.route({
    view: "booking",
    onCreate: console.log("Created"),
    onReady: function () {
      window.scrollTo(0, 0);
      updateActiveLink("booking");
    },
  });

  app.route({
    view: "portfolio",
    onCreate: console.log("Created"),
    onReady: function () {
      window.scrollTo(0, 0);
      updateActiveLink("portfolio");
    },
  });

  app.route({
    view: "comments",
    onCreate: console.log("Created"),
    onReady: function () {
      window.scrollTo(0, 0);
      updateActiveLink("comments");
    },
  });

  // run app
  app.run();
});
