window.onload = function() {

  const pElement = document.createElement("p");
  const ulElement = document.createElement("ul");
  // const firstLi = document.createElement("li");
  // const secondLi = document.createElement("li");
  // const thirdLi = document.createElement("li");
  const firstH1 = document.querySelector("h1");
  const result = document.createElement("p");
  result.setAttribute("id", "result");

  pElement.append("The following are my favorite ice cream flavors");
  firstH1.after(pElement);

  // firstLi.append("Bubble Gum");
  // secondLi.append("Chocolate");
  // thirdLi.append("Strawberry");
  // ulElement.append(firstLi,secondLi,thirdLi);
  pElement.after(ulElement);
  ulElement.after(result);

  let iceCreamFlavors = ["Bubble Gum", " Chocolate ", " Strawberry"];
  iceCreamFlavors.forEach(function (iceCreamFlav) {
    let liElement = document.createElement("li");
    liElement.textContent = iceCreamFlav;
    ulElement.appendChild(liElement);
  })

}