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

      const formData = JSON.parse(localStorage.getItem("bookingFormData"));

      const profileDetails = document.getElementById("profileDetails");

      const userData = JSON.parse(localStorage.getItem("bookingFormData"));
      console.log(userData);
      const noImage =
        "https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-18055.jpg";
      if (!userData) {
        window.location.hash = "#booking";
        alert("You need to log in to see this view!");
      } else {
        console.log(formData);
        profileDetails.innerHTML = `
        <div style="text-align:center;">
        <img src="${
          userData.image == "" ? noImage : userData.image
        }"  width="200px" style="border-radius:200px" alt="Profile Image" class="profile-image">
        </div>

   <div class="profile-item">
  <strong>Name:</strong> <span>${userData.name}</span>
</div>
<div class="profile-item">
  <strong>Email:</strong> <span>${userData.email}</span>
</div>
<div class="profile-item">
  <strong>Preferred Date:</strong> <span>${userData.preferred_date}</span>
</div>
<div class="profile-item">
  <strong>Location:</strong> <span>${userData.location}</span>
</div>

    `;
      }
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
