window.addEventListener("DOMContentLoaded", getData);

const endpoint =
  "https://tripoli.dk/Vivian-backend-101/wp-json/wp/v2/course?_embed&per_page=3";

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(handleData);
}

function handleData(posts) {
  posts.forEach(showcourses); //looping through all courses
}

function showcourses(course) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h2.title").textContent = course.dish;
  copy.querySelector("p.description").textContent = course.description;

  copy.querySelector("img").src =
    course._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

  document.querySelector("#fetching-menu").appendChild(copy);
}
