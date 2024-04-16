const categoriesLength = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${categoriesLength}`);

const categories = document.querySelectorAll('h2');

categories.forEach(function (categorie) {
  console.log(`Category: ${categorie.textContent}`);
  console.log(`Elements: ${categorie.parentNode.querySelectorAll('li').length}`);
});