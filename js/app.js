document.getElementById("ingresar_clubItem").addEventListener("click", function(){
	location = 'club_item_form.html';
})


function alertConfirm(){
	const imgItem = document.getElementById('imgItem');
	const img = imgItem.getAttribute("src");
	const imgItemSelect = document.getElementById("imgItemSelect");
	const infoProd = document.querySelector(".infoProducto");
	const nombre = document.getElementById("nombre");
	const presio = document.getElementById("presio");
	const jumbotron = document.querySelector(".jumbotron");

	imgItemSelect.setAttribute("src", img);

	for (var i = 0; i < infoProd.children.length; i++) {
		let nombreProd = infoProd.children[0].innerHTML;
		let presioProd = infoProd.children[1].innerHTML;

		nombre.innerHTML = nombreProd;
		presio.innerHTML = presioProd;
	}

	jumbotron.classList.add("activo");
}
