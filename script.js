/******w**************
 
Assignment 4 Javascript
Name: Sajanpreet singh
Date: 25 Sep 2023
Description: Using javascript to feth data from a source and display it in html.

    *********************/
function main() {
  /*-----------clear input fields on window reload-----------*/
  window.onload = function () {
    document.getElementById("name").value = "";
    document.getElementById("location").value = "";
  };

  /*----------------------Reveal Animation------------------*/

  // ScrollTrigger.matchMedia({
    //very large 
    // "(min-width: 1400px)": function () {
    //   let tl1 = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".container",
    //       start: "80% center",
    //       end: "bottom center",
    //       scrub: true,
    //       markers: true,
    //     },
    //   });
    //   tl1.to(".container", { y: "5em", duration: 0.1, opacity: 0.1, skew: 12 });
      // setup animations and ScrollTriggers for screens 960px wide or greater...
      // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    // },
    // large
    // "(min-width: 960px)": function () {
    //   let tl1 = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".container",
    //       start: "70% center",
    //       end: "bottom center",
    //       scrub: true,
    //       markers: true,
    //     },
    //   });
    //   tl1.to(".container", { y: "5em", duration: 0.1, opacity: 0.1, skew: 12 });
      // setup animations and ScrollTriggers for screens 960px wide or greater...
      // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    // },

    // medium
    // "(min-width: 600px) and (max-width: 959px)": function () {
    //   let tl1 = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".container",
    //       start: "70% center",
    //       end: "bottom center",
    //       scrub: true,
    //       markers: true,
    //     },
    //   });
    //   tl1.to(".container", { y: "5em", duration: 0.1, opacity: 0.1, skew: 12 });
      // The ScrollTriggers created inside these functions are segregated and get
      // reverted/killed when the media query doesn't match anymore.
    // },

    // small
    // "(max-width: 599px)": function () {
    //   let tl1 = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".container",
    //       start: "70% center",
    //       end: "bottom center",
    //       scrub: true,
    //       markers: true,
    //     },
    //   });
    //   tl1.to(".container", { y: "5em", duration: 0.1, opacity: 0.1, skew: 12 });
      // The ScrollTriggers created inside these functions are segregated and get
      // reverted/killed when the media query doesn't match anymore.
    // },

    // all
    // all: function () {
    //   let tl1 = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".container",
    //       start: "70% center",
    //       end: "bottom center",
    //       scrub: true,
    //       markers: true,
    //     },
    //   });
    //   tl1.to(".container", { y: "5em", duration: 0.1, opacity: 0.1, skew: 12 });
      // ScrollTriggers created here aren't associated with a particular media query,
      // so they persist.
  //   },
  // });

  // let tl2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#reveal",
  //     start: "-40% center",
  //     end: "center center",
  //     scrub: true,
  //     markers: true,
  //   },
  // });
  // tl2.from("#reveal", { y: "20em", duration: 1, opacity: 0 });

  let labelLine = document.querySelector(".labelline");
  let labelLine1 = document.querySelector(".labelline-1");

  /*------------------Floating labels-------------------*/
  document.addEventListener("input", inputChange);
  function inputChange() {
    // console.log("input or not hmmmmmmmm");
    let parkName = document.getElementById("name").value;
    let parkLocation = document.getElementById("location").value;

    if (parkName !== "") {
      gsap.to(".labelline", { duration: 0.1, x: "-10px", y: "-30px" });
      // console.log("input!!");
    }
    if (parkName === "") {
      gsap.to(".labelline", { duration: 0.1, x: "0px", y: "0px" });
      // console.log("input not hmmmmmmmm");
    }
    if (parkLocation !== "") {
      gsap.to(".labelline-1", { duration: 0.1, x: "-10px", y: "-30px" });
      console.log("input!!");
    }
    if (parkLocation === "") {
      gsap.to(".labelline-1", { duration: 0.1, x: "0px", y: "0px" });
      // console.log("input not hmmmmmmmm");
    }
  }

  /*------------------Submit-------------------*/
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    getIT();
  });

  /*------------------Scroll Animation-------------------*/
  function scrollit() {
    document.getElementById("scroll__view").scrollIntoView({
      behavior: "smooth",
    });
    // console.log("its is scrolling OMG");
  }

  /*--------------------getIT() Function-------------------*/
  function getIT() {
    let parkName = document.getElementById("name").value;
    let parkLocation = document.getElementById("location").value;
    console.log(parkName);
    console.log(parkLocation);

    /*------------------Getting the URL-------------------*/
    let apiUrl = "https://data.winnipeg.ca/resource/tx3d-pfxq.json?";

    if (parkName !== "" && parkLocation === "") {
      apiUrl +=
        `$where=lower(park_name) LIKE lower('%${parkName}%')` +
        "&$order=park_id" +
        "&$limit=100";
    } else if (parkLocation !== "" && parkName === "") {
      apiUrl +=
        `$where=lower(location_description) LIKE lower('%${parkLocation}%')` +
        "&$order=park_id" +
        "&$limit=100";
    } else if (parkName !== "" && parkLocation !== "") {
      apiUrl +=
        `$where=lower(park_name) LIKE lower('%${parkName}%') AND lower(location_description) LIKE lower('%${parkLocation}%')` +
        "&$order=park_id" +
        "&$limit=100";
    } else {
      /*------------------Shake animation for lables-------------------*/
      let timeline = gsap.timeline();
      timeline
        .to(".labelline", { duration: 0.2, color: "red", x: "10px" })
        .to(".labelline", { duration: 0.2, color: "red", x: "0px" })
        .to(".labelline", { duration: 0.2, color: "red", x: "10px" })
        .to(".labelline", { duration: 0.2, color: "red", x: "0px" })
        .to(".labelline", { duration: 0.2, color: "white" })

        .to(".labelline-1", { duration: 0.2, color: "red", x: "10px" }, 0)
        .to(".labelline-1", { duration: 0.2, color: "red", x: "0px" }, "<.2")
        .to(".labelline-1", { duration: 0.2, color: "red", x: "10px" }, "<.2")
        .to(".labelline-1", { duration: 0.2, color: "red", x: "0px" }, "<.2")
        .to(".labelline-1", { duration: 0.2, color: "white" }, "<.2");

      return;
    }

    /*------------------Final URL-------------------*/
    const encodedURL = encodeURI(apiUrl);

    /*------------------Fething data-------------------*/
    fetch(encodedURL)
      .then(function (response) {
        if (!response.ok) {
          console.log("POST failed. Status Code:  " + response.status);
          return;
        }
        return response.json();
      })
      .then(function (data) {
        /*------------------Check if there is no data-------------------*/
        if (Object.keys(data).length === 0) {
          let h1 = document.getElementById("table__h1");
          h1.innerHTML = "No Parks were found :(";
          let table1 = document.getElementById("table1");
          table1.style.display = "none";
          return;
        }

        /*------------------Inserting Data-------------------*/
        let h1 = document.getElementById("table__h1");
        h1.innerHTML = "Parks Found(" + Object.keys(data).length + ")";
        let parks = data;
        let tbody = document.getElementById("t__body");
        tbody.innerHTML = "";
        parks.forEach((park) => {
          let tr = document.createElement("tr");
          let td1 = document.createElement("td");
          let td2 = document.createElement("td");
          let td3 = document.createElement("td");
          let td4 = document.createElement("td");
          let td5 = document.createElement("td");
          let td6 = document.createElement("td");
          let a = document.createElement("a");

          td1.innerHTML = park.park_id;
          td2.innerHTML = park.park_name;
          td3.innerHTML = park.location_description;
          td4.innerHTML = park.park_category;
          td5.innerHTML = park.area_in_hectares;
          td6.innerHTML = `<a href="http://www.google.com/maps/place/${park.location.latitude},${park.location.longitude}" target="_blank">Google Maps Link</a>`;
          console.log(td6);

          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);
          tr.appendChild(td6);

          tbody.appendChild(tr);
          console.log(tbody);
        });
      })
      .catch((err) => console.log("Fetch error: " + err));
    scrollit();
  }

  /*-----------------Mouse---------------------*/
//   const cursor = document.querySelector(".cursor");
//   document.addEventListener("mousemove", (e) => {
//     cursor.style.left = e.pageX + "px";
//     cursor.style.top = e.pageY + "px";
//   });
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("fired");
  main();
});

