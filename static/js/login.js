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
	}
	store(obj){
		for (const key in obj) {
			if (!this.state.hasOwnProperty(key)) {
				this.state[key]=obj[key]
			}
		}
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

