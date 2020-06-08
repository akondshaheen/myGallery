const URL = "https://randomuser.me/api/?results=40";

const errorImage =
  "https://comercializadora.electricadecadiz.es/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png";

const getPhotosInfo = (URL) => {
  fetch(URL)
    .then((response) => onResponse(response))
    .catch((err) => onError(err));
};
getPhotosInfo(URL);

const onResponse = (response) =>
  response.json().then((photos) => onPhotosReady(photos));

const onError = (error) => console.error(error);

const app = document.querySelector("#app");
app.className = "container";

function show(photos) {
  for (let i = 0; i < photos.results.length; i++) {
    divImg = document.createElement("img");
    divImg.className = "card__image";
    divImg.src = photos.results[i].picture.large;

    divCard = document.createElement("div");
    divCard.className = "card";
    divName = document.createElement("p");
    divName.innerHTML = `${photos.results[i].name.title} ${photos.results[i].name.first} ${photos.results[i].name.last}`;

    divName.className = "card__name";

    divAge = document.createElement("div");
    divAge.className = "age";
    divAge.innerHTML = `Age: ${photos.results[i].dob.age}`;

    divGender = document.createElement("div");
    divGender.className = "gender";
    divGender.innerHTML = `Gender: ${photos.results[i].gender}`;

    divIcon = document.createElement("ul");
    divIcon.className = "social-icons";
    divIcon.innerHTML = `
  <li><a href="#"><i class="fa fa-instagram"></i></a></li>
  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
  <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
    <li><a href="#"><i class="fa fa-codepen"></i></a></li>`;

    let myDate = new Date(photos.results[i].dob.date);
    divDob = document.createElement("div");
    divDob.innerHTML = `DOB: ${myDate.toDateString()}`;
    divCol = document.createElement("div");
    divCol.className = "column";
  }
}
function onPhotosReady(photos) {
  for (let i = 0; i < photos.results.length; i++) {
    if (i % 4 == 0) {
      show(photos);
      divRow = document.createElement("div");
      divRow.className = "row";
      // myList = [divImg, divName, divAge, divGender, divIcon, divDob];
      // myList.forEach((el) => divCard.appendChild(el));
      // divCol.appendChild(divCard);
      // divRow.appendChild(divCol);
      // app.appendChild(divRow);
    } else {
      show(photos);
      // myList = [divImg, divName, divAge, divGender, divIcon, divDob];
      // myList.forEach((el) => divCard.appendChild(el));
      // divCol.appendChild(divCard);
      // divRow.appendChild(divCol);
    }
    myList = [divImg, divName, divAge, divGender, divIcon, divDob];
    myList.forEach((el) => divCard.appendChild(el));
    divCol.appendChild(divCard);
    divRow.appendChild(divCol);
    app.appendChild(divRow);
  }
}
