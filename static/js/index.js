/*
created on Sat Jun 23 15:08:16 IST 2018
Author: Prakhar Srivastava
*/
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
set(gebcn('red'),close)
set(gebcn('yellow'),minimize)
set(gebcn('green'),maximize)
