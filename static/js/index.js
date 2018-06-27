/*
created on Sat Jun 23 15:08:16 IST 2018
Author: Prakhar Srivastava
*/
let state={}
const gebi=id=>document.getElementById(id)
const gebcn=cn=>document.getElementsByClassName(cn)
const set=(ns,f)=>{
	let ar=Array.from(ns)
	ar.forEach(element => {
		element.onclick=(ev=>{
			f(element)
		})
	})
}
const maximize=elem=>{
	let widget=elem.parentNode.parentNode.parentNode
	if(elem.innerHTML=='↗'){
		elem.innerHTML='&#x2198'
		widget.classList.add('maximizedWidget')
		document.body.style.overflow='hidden'
	}
	else{
		elem.innerHTML='&#x2197'
		widget.classList.remove('maximizedWidget')
		document.body.style.overflow=''
	}
}
const minimize=elem=>{
	console.log('Yellow is clicked')
}
const close=elem=>{
	gebi('widgets').removeChild(elem.parentNode.parentNode.parentNode)
}
const showMenu=(s=true)=>{
	console.log('showing menu: '+s)
}
const toggleMenu=ev=>{
	let ctr=gebi('menu'),b_ctr=gebi('menubtnc'),upper=gebi('menu_upper'),lower=gebi('menu_lower'),main=gebi('widgets'),save_scroll=main.scrollTop
	if(typeof state['toggleMenu_scrollSave'] === 'undefined')
		state["toggleMenu_scrollSave"]=save_scroll
	console.log(state['toggleMenu_scrollSave'])
	if(!ctr.classList.contains('menu_rotated')){
		showMenu()
		main.style.transform="scale(0.35)translate(75%,-100%)"
		//main.style.border="6px dashed grey"
		//main.scrollTo(0,-0.35*state.toggleMenu_scrollSave)
		gebi('bg').style="filter: blur(21px)saturate(180%);"
	}
	else{
		showMenu(false)
		main.style=''
		main.scrollTo(0,state.toggleMenu_scrollSave)
		gebi('bg').style=""
	}
	ctr.classList.toggle('menu_rotated')
	b_ctr.classList.toggle('menubtnc_rotated')
	upper.classList.toggle('menu_upper_rotated')
	lower.classList.toggle('menu_lower_rotated')
	gebi('menusect').classList.toggle('menuShow')
}
gebi('menu').onclick=toggleMenu
set(gebcn('red'),close)
set(gebcn('yellow'),minimize)
set(gebcn('green'),maximize)
