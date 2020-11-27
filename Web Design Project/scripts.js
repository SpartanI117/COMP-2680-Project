//function expression to select nav elements
const selectElement = (s) => document.querySelector(s);

//Opening the menu by clicking
selectElement('.open').addEventListener('click', () => {
	selectElement('.nav-list').classList.add('active');
});

//Closing the menu by clicking
selectElement('.close').addEventListener('click', () => {
	selectElement('.nav-list').classList.remove('active');
});