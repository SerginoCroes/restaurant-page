(()=>{"use strict";function e(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("h1"),i=document.createElement("p"),a=document.createElement("div"),c=document.createElement("ul"),l=document.createElement("li"),r=document.createElement("li"),o=document.createElement("li"),m=document.createElement("p");return e.classList.add("header"),a.classList.add("menu"),c.classList.add("menulist"),l.classList.add("menubutton"),l.classList.add("active"),r.classList.add("menubutton"),o.classList.add("menubutton"),t.classList.add("footer"),n.classList.add("background"),d.innerText="De friettent",i.innerText="De beste friet van het land!",l.innerText="home",r.innerText="menu",o.innerText="contact",m.innerText="© De friettent",c.appendChild(l),c.appendChild(r),c.appendChild(o),a.appendChild(c),e.appendChild(n),e.appendChild(d),e.appendChild(i),e.appendChild(a),t.appendChild(m),{header:e,footer:t}}const t=document.querySelector("#content"),n={home:function(){let e=["Eerste zin.","Tweede zin.","Derde zin."],t=document.createElement("div");for(let n of e){let e=document.createElement("p");e.innerText=n,t.appendChild(e)}return t}(),menu:function(){let e=["Vierde.","Vijfde zin.","Zesde zin."],t=document.createElement("div");for(let n of e){let e=document.createElement("p");e.innerText=n,t.appendChild(e)}return t}(),contact:function(){let e=["Zevende zin.","Achtste zin.","Negende zin."],t=document.createElement("div");for(let n of e){let e=document.createElement("p");e.innerText=n,t.appendChild(e)}return t}()};let d=n.home;d.classList.add("main"),t.appendChild(e().header),t.appendChild(d),t.appendChild(e().footer);let i=document.querySelector(".active");document.querySelectorAll(".menubutton").forEach((a=>{a.addEventListener("click",(a=>function(a){let c=a.textContent;i.classList.remove("active"),a.classList.add("active"),i=a,t.removeChild(t.querySelector(".main")),t.removeChild(t.querySelector(".footer")),d=n[c],d.classList.add("main"),t.appendChild(d),t.appendChild(e().footer)}(a.target)))}))})();