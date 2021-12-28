const resEl = document.querySelector(".result");
const submitEl = document.querySelector("#submit");
const notEl = document.querySelector('.textBad')
const dialog = document.querySelector('#dialogue')


submitEl.addEventListener('click',(e)=>{
  e.preventDefault()
    const inptEl = document.querySelector("#input").value;
  if (inptEl<1) {
    alert("C'mon don't be lazy Type something first")
  } else {
    resEl.innerHTML = "";
    notEl.innerHTML = `<strong>Nothing Found try something Else</strong>`;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inptEl}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.meals.length);
        notEl.innerHTML = "";
        dialog.innerText = `Your search result for "${inptEl}"`;
        for (let i = 0; i < data.meals.length; i++) {
          resEl.innerHTML += `<div class="card">
                <img src="${data.meals[i].strMealThumb}" alt="">
                <div class="text">
                    <p class="abs">${data.meals[i].strMeal}</p>
                </div>
            </div>`;
        }
      });
  }
})

const random = document.querySelector('.random')
random.addEventListener('click',(e)=>{
  e.preventDefault()
  const str = 'abcdefghijklmnopqrstuvwxyz';
  const arr = str.split('')
  let value = Math.floor(Math.random()*arr.length)
  resEl.innerHTML = "";
  notEl.innerHTML = `<strong>Nothing Found try something Else</strong>`;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${arr[value]}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.meals.length);
      notEl.innerHTML = "";
      dialog.innerText = `Your search result for "Random Food"`;
      for (let i = 0; i < data.meals.length; i++) {
        resEl.innerHTML += `<div class="card">
                <img src="${data.meals[i].strMealThumb}" alt="">
                <div class="text">
                    <p class="abs">${data.meals[i].strMeal}</p>
                </div>
            </div>`;
      }
    });
})
//   .then((data) => console.log(data.meals[0].strMeal));


