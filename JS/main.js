var btn = document.querySelector('.list-btn');
let listDown = document.querySelector('.list-down');
let svg1 = document.querySelector('#svg1');
let svg2 = document.querySelector('#svg2');
let i = 0;

function listBtn(){
	if(i == 0){
		svg1.setAttribute("class", "none");
		svg2.removeAttribute("class");
		listDown.removeAttribute("class");
		btn.style.backgroundColor="#FF620A"
		i+=1
	}
	else{
		svg1.removeAttribute("class");
		svg2.setAttribute("class", "none");
		listDown.setAttribute("class", "none");
		btn.style.backgroundColor="#FFECE2"
		i-=1
	}
}