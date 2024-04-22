let Api_url = "https://jsonplaceholder.typicode.com/users";
async function usersApi(urlApi) {
  let data = await fetch(urlApi);
  data
    .json()
    .then((result) => mapData(result))
    .catch((error) => console.log(error));
}
usersApi(Api_url);

let usersImg = [
  "https://media.licdn.com/dms/image/D5603AQGF53pRjB5Xpg/profile-displayphoto-shrink_200_200/0/1703136338137?e=2147483647&v=beta&t=KDWjUjGDYEo7ZzynioAtz6S1T1dRhL4l2UiKRiphsm8",
  "https://media.licdn.com/dms/image/C4D03AQHLynsCrUnV4g/profile-displayphoto-shrink_800_800/0/1629122330892?e=2147483647&v=beta&t=eRJUvraCrp2cadjKfirbKNVbqYk-wNk8C4vwoUgpu-w",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0nlNISEyKqp29fyEUUA11YUnxNLfVDpmC4j3la9N4A&s",
  "https://cache.legacy.net/legacy/images/cobrands/DenverPost/photos/DP0026391-1_20230728.jpg",
  "https://tributecenteronline.s3-accelerate.amazonaws.com/Obituaries/9622376/Image.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmGclaXNES-GPgInrhGDLDw1VXG92y6Rs1rxtTTinu9A&s",
  "https://cdn.beta.qalampir.uz/uploads/cv/f_dE0R7DbUYkPYVhP8L6Lg7T76hLkfOD.jpg",
  "https://image.isu.pub/130128143300-6450f4b2caef47b78414615f72180d87/jpg/page_1_thumb_large.jpg",
  "https://media.licdn.com/dms/image/C5103AQFV4-Y0dxp-Rg/profile-displayphoto-shrink_800_800/0/1517376933752?e=2147483647&v=beta&t=JDyX1Tt1SS70xZYdcd4_Zg6s4wflW5wMm0hSZ0FShVU",
  "https://cdn.beta.qalampir.uz/uploads/pk/f_6yVAXlcSSfSjUqiW68XJXZav3QNCr3.jpg",
];

const users__cards = document.querySelector(".users__cards");

function mapData(user) {
  let usersData = "";
  user.forEach((us, index) => {
    usersData += `
          <div class="users__card">
            <div class="users__card__img">
              <img src="${usersImg[index]}" alt="" />
            </div>
            <div class="users__card__info">
              <h3 class="users__card__title">name: ${us.name}</h3>
              <p class="users__card__desc">username: ${us.username}</p>
              <p class="users__card__desc">email: ${us.email}</p>
              <p class="users__card__desc">phone: ${us.phone}</p>
              <a target="_blank" href="${us.website}">website: ${us.website}</a>
              <p class="users__card__desc">address: ${
                us.address.city +
                " " +
                us.address.street +
                " " +
                us.address.suite
              }</p>
              <p class="users__card__desc">company: ${
                us.company.bs +
                " " +
                us.company.catchPhrase +
                " " +
                us.company.name
              }</p>
            </div>
          </div>
    `;
  });
  users__cards.innerHTML = usersData;
}
