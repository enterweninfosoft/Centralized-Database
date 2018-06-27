/*
created on Sat Jun 23 15:08:16 IST 2018
Author: Prakhar Srivastava
*/
class Storage{
	constructor(){
		this.state={}
	}
	add(obj){
		obj=obj||{}
		if(obj==={})
			return
		else
			this.state={...this.state,...obj}
		console.log(this.state)
	}
	store(obj){
		for (const key in obj) {
			if (!this.state.hasOwnProperty(key)) {
				this.state[key]=obj[key]
			}
		}
		console.log(this.state)
	}
	remove(key){delete this.state[key]}
	get(key){return this.state[key]}
}
const Cache=new Storage()
const asyncWait=async (ms,fn=()=>{},...args)=>new Promise(resolve=>{
	setTimeout(resolve.bind(fn,...args),ms)
})
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
	let widget=elem.parentNode.parentNode.parentNode
	widget.classList.toggle('minimizedWidget')
	asyncWait(451).then(()=>{
		gebi('minimized').appendChild(widget,true)
		widget.style.position="initial"
		widget.onclick=()=>{
			console.log('Nigga executed')
			widget.style.position=""
			widget.classList.remove('minimizedWidget')
			gebi('widgets').appendChild(widget)
			widget.onclick=null
		}
	})
}
const close=elem=>{
	let wd=elem.parentNode.parentNode.parentNode
	console.log(wd)
	gebi('widgets').removeChild(elem.parentNode.parentNode.parentNode)
}
const showMenu=(s=true)=>{
	console.log('showing menu: '+s)
}
const toggleMenu=ev=>{
	let ctr=gebi('menu'),b_ctr=gebi('menubtnc'),upper=gebi('menu_upper'),lower=gebi('menu_lower'),main=gebi('widgets'),save_scroll=main.scrollTop
	Cache.store({saveScroll:main.scrollTop})
	if(!ctr.classList.contains('menu_rotated')){
		showMenu()
		gebi('bg').style="filter: blur(21px)saturate(180%);"
	}
	else{
		showMenu(false)
		main.scrollTo(0,Cache.get('saveScroll'))
		gebi('bg').style=""
	}
	main.classList.toggle('withMenu')
	ctr.classList.toggle('menu_rotated')
	b_ctr.classList.toggle('menubtnc_rotated')
	upper.classList.toggle('menu_upper_rotated')
	lower.classList.toggle('menu_lower_rotated')
	gebi('menusect').classList.toggle('menuShow')
	Cache.remove('saveScroll')
}
gebi('menu').onclick=toggleMenu
set(gebcn('red'),close)
set(gebcn('yellow'),minimize)
set(gebcn('green'),maximize)
