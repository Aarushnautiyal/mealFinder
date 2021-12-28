const resEl = document.querySelector(".result");
const submitEl = document.querySelector("#submit");


submitEl.addEventListener('click',()=>{
const inptEl = document.querySelector("#input").value;
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inptEl}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.meals.length);
    resEl.innerHTML = ""
        
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


