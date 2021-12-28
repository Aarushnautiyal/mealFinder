const resEl = document.querySelector(".result");
const submitEl = document.querySelector("#submit");
const notEl = document.querySelector('.textBad')
const dialog = document.querySelector('#dialogue')
const form = document.querySelector("form");

form.setPre


submitEl.addEventListener('click',(e)=>{
  e.preventDefault()
  resEl.innerHTML = "";
    notEl.innerHTML = `<strong>Nothing Found try something Else</strong>`;
  const inptEl = document.querySelector("#input").value;
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inptEl}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.meals.length);
    notEl.innerHTML = ""
          dialog.innerText = `Your search result for "${inptEl}"`
           for (let i = 0; i < data.meals.length; i++) {
             resEl.innerHTML += `<div class="card">
                <img src="${data.meals[i].strMealThumb}" alt="">
                <div class="text">
                    <p class="abs">${data.meals[i].strMeal}</p>
                </div>
            </div>`;
           }
    
  })
})
//   .then((data) => console.log(data.meals[0].strMeal));


