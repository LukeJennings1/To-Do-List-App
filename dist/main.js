(()=>{const t=new class{constructor(t,e,s){this.title=t,this.description=e,this.dueDate=s}displayValue(){return this.title+this.description+"HULLO ITS SCON MANLEY"}}("EAT","EAT FUD","25th");console.log(t.displayValue());const e=document.getElementById("add-Button"),s=document.getElementById("popUpBox");e.addEventListener("click",(()=>{s.classList.add("show")})),document.getElementById("del-button").addEventListener("click",(()=>{s.classList.remove("show")})),document.getElementById("site-contents").addEventListener("click",(()=>{s.classList.remove("show")}))})();