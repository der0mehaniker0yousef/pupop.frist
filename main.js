
/*
let mymainelment = document.createElement("div");
let myheaden = document.createElement("h1");
let mypraghraph = document.createElement("p")

let textheaden = document.createTextNode("Broduct title")
let textpraghraph = document.createTextNode("product discrption")

mymainelment.className = "product"
// adding my headen text
myheaden.appendChild(textheaden)
//Add headen to mainelement
mymainelment.appendChild(textheaden)
//add pragraph text
mypraghraph.appendChild(textpraghraph)
//add mypragraph to mainelement
mymainelment.appendChild(mypraghraph)
document.body.appendChild(mymainelment)
*/

/*
// two
let myelment = document.querySelector("div")

console.log(myelment);
console.log(myelment.children)
console.log(myelment.children[0])
console.log(myelment.childNodes)
console.log(myelment.childNodes[0]);
console.log(myelment.firstChild)
console.log(myelment.lastChild)
console.log(myelment.firstElementChild)
console.log(myelment.lastElementChild)
*/


/* Three
// onclick
// oncontextmenu
// onmouseleave

let mybutton = document.getElementById("but")


mybutton.onmouseleave = function (){
  console.log("cliced")
}

window.onscroll = function() {
    console.log("scrolling")
}*/


/*//four
let one = document.querySelector(".one")
let two = document.querySelector(".two")

window.onload = function(){
  two.focus();
};

one.onblur = function (){
  document.links[0].click()
}*/

/* five
// let element = document.getElementById("my-div")

// element.style.color = "red";
// element.style.fontWeight = "bold";

// element.style.cssText = "font-weight: bold ; color: green";

// element.style.removeProperty("color");
// element.style.setProperty("font-size","60px","important");
*/

/* six
// let element = document.getElementById("my-div")
// let createdp = document.createElement("p")

// element.before("hello js before")
// element.after("hello js after")
// element.before(createdp)
// element.append("hello js append")
// element.prepend("hello js preapend")
*/

/* seven
let span = document.querySelector(".two")

console.log(span.parentElement)
console.log(span.nextElementSibling.remove())

span.onclick = function(){
  span.parentElement.style.opacity = 0 ;
}*/

/* 8
let myp = document.querySelector("p").cloneNode(true)
let mydiv = document.querySelector("div")
//add id for clonenode
myp.id = `${myp}-clonenode`
//adding p inside div
mydiv.appendChild(myp) */


/* 9
let myP = document.getElementById("my-p");

myP.onclick = one;
myP.onclick = two;

function one() {
  console.log("hello click")
}

function two() {
  console.log("hello click")
}

myP.addEventListener("click",function() {
  console.log("hello click EventListener")
})

myP.addEventListener("click",one)

myP.addEventListener("click",two)

//myP.addEventListener("click","string") //Erore

myP.onclick = function(){
  let newp = myP.cloneNode(true)
  myP.className = "clone"
  document.body.appendChild(newp)
}


document.addEventListener("click",function(e){
 if(e.target.className === "clone"){
  console.log("i'm cloned")
 }
})
*/



/*

document.body.style.padding = "0px";
document.body.style.margin = "0px";
document.body.style.backgroundColor = "rgb(236, 236, 236)";
document.body.style.fontFamily = "Tahoma,Arial";

//declear varaibles Header
let header = document.createElement("header");
let menuTag = document.createElement("ul");
let menuItemsList = ["Home", "About", "service", "Contact"];

//styling Elzero title
let elzeroTitleSpan = document.createElement("span");
elzeroTitleSpan.style.color = "green";
elzeroTitleSpan.style.fontWeight = "bold";
let elzeroTitle = document.createTextNode("Elzero");
elzeroTitleSpan.appendChild(elzeroTitle);

//Header
header.className = "website-head";
header.style.display = "flex";
header.style.padding = "20px";
header.style.backgroundColor = "rgb(255, 255, 255)";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";

//header -> ul
menuItemsList.forEach(function (element) {
  let liMenu = document.createElement("li");
  liMenu.innerHTML = element;
  liMenu.style.display = "inline";
  liMenu.style.padding = "10px";
  liMenu.style.color = "black";
  menuTag.appendChild(liMenu);
});

//set Heder items
header.appendChild(elzeroTitleSpan);
header.appendChild(menuTag);

//div Content
let contentDiv = document.createElement("div");
contentDiv.className = "content";
contentDiv.style.display = "flex";
contentDiv.style.padding = "20px";
contentDiv.style.flexWrap = "wrap";
contentDiv.style.justifyContent = "center";
contentDiv.style.gap = "20px";
contentDiv.style.minHeight = "calc(100vh-142px)";
contentDiv.style.boxSizing = "border-box";

//prodcut div
let prodcutDiv = document.createElement("div");
prodcutDiv.className = "product";
prodcutDiv.style.padding = "20px";
prodcutDiv.style.backgroundColor = "rgb(255, 255,255)";
prodcutDiv.style.border = "1px sold rgb(221, 221, 221)";
prodcutDiv.style.width = "calc((100% - 40px) / 3)";
prodcutDiv.style.boxSizing = "border-box";
prodcutDiv.style.textAlign = "center";
prodcutDiv.style.color = "rgb(136,136,136)";
prodcutDiv.style.borderRadius = "6px";

//product->span
let productSpan = document.createElement("span");
productSpan.style.fontSize = "40px";
productSpan.style.colo = "black";
productSpan.style.fontWeight = "normal";
productSpan.style.display = "block";
productSpan.style.marginBottom = "10px";
productSpan.style.marginTop = "10px";

let copySpan = productSpan.cloneNode(true);
let spanText = document.createTextNode("product");
prodcutDiv.appendChild(copySpan);
prodcutDiv.appendChild(spanText);

for (let i = 1; i <= 15; i++) {
  copySpan.innerHTML = `${i}`;
  let copyProdcutDiv = prodcutDiv.cloneNode(true);
  contentDiv.appendChild(copyProdcutDiv);
}

//footer
let footer = document.createElement("footer");
footer.className = "footer";
footer.style.backgroundColor = "rgb(35, 169, 110)";
footer.style.fontSize = "26px";
footer.style.textAlign = "center";
footer.style.padding = "20px";
footer.style.color = "rgb(255,255,255)";
let footerContentText = document.createTextNode("Copyright 2022 !");

footer.appendChild(footerContentText);

//Body append
document.body.appendChild(header);
document.body.appendChild(contentDiv);
document.body.appendChild(footer);

*/

/*
let conmassage = confirm("confirm massage")

console.log(conmassage)

if(conmassage === true){
  console.log("deleted item")
}
else{
  console.log("not deleted item")
}
*/

/*
let promptmassage = prompt("confirm massage","write day with caractars")

console.log(promptmassage)
*/


/*setTimeout(function() {
  console.log("hellotime")
},3000)*/

/*setTimeout(saymas,3000)

 function saymas(){
  console.log("hello 2")
 }*/


/*
setTimeout(saymas,3000,"yousef",15)

 function saymas(user, age){
  console.log(`hello ${user} the age : ${age}`)
 }
*/

/*
let counter = setTimeout(saymas,3000)

 function saymas(){
  console.log("i'm massege")
 }
let  btn = document.querySelector("button")

btn.onclick = function(){
  clearTimeout(counter)
}
*/
/*
// setInterval(function(){
//   console.log("hello setInterval")
// },1000)

let div = document.querySelector("div")

function coundowen() {
  div.innerHTML -= 1

  if (div.innerHTML === "0"){
    clearInterval(couentr)
  }
}

let couentr = setInterval(coundowen, 1000)
*/


/*
let div = document.querySelector("div");

function coundowen(){
  div.innerHTML -= 1;
  if(div.innerHTML === "0"){
    clearInterval(couentr)
  }
}

let couentr = setInterval(coundowen,1000)
*/

/*
console.log(location)
console.log(location.href)
// location.href = "https://google.com"
//  location.href = "/#sec02"
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#advanced"
// console.log(location.hash)
// location.replace("https://elzero.org/")
location.assign("https://elzero.org/")
*/

/*
setTimeout(function() {
  window.open("https://elzero.org","_blank","width = 20% , height = 20%  , left = 30%, top = 30%")
},2000)
*/

/*
// stop()
// print()
// let windowopen = window.open("https://elzero.org","_blank","width = 400px , height = 400px  , left = 400px, top = 300px")
// window.scrollTo(500,200)
// window.scroll({
//   left: 1500,
//   top: 1200,
//   behavior: "smooth"
// })
*/


/*
let but = document.querySelector("button");

window.onscroll = function(){
  if(window.scrollY >= 650){
    // console.log(`scrolling Y value ${window.scrollY}`)
    but.style.display = "block"
  }

  else{
    but.style.display = "none"
  }
}

but.onclick = function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  })
}
*/

/*
// Local Storage
// set
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px"

// get
console.log(window.localStorage.getItem("color"))
// or
console.log(window.localStorage.color)
// or

// remove (one) color on page
window.localStorage.removeItem("color")

// remove all
window.localStorage.clear()
// set color in page
document.body.style.background = window.localStorage.getItem("color")

console.log(window.localStorage["color"])
console.log(window.localStorage)
*/


// project change background

/*
let lie = document.querySelectorAll("ul li")
let exp = document.querySelector(".experiment")

if (window.localStorage.getItem("color")) {
  // [1] add color to div
  exp.style.backgroundColor = window.localStorage.getItem("color")
  // [2] remove active class from all li
  lie.forEach((li) => {
    li.classList.remove("active")
  });
  // [3] add active class to current color
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
}
else {
  console.log("No")
}


lie.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color)
    // remove active class from all li
    lie.forEach((li) => {
      li.classList.remove("active")
    });
    // add active class to current element
    e.currentTarget.classList.add("active");
    // add current color to local stroage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);

    // change div background color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  })
})
*/

/*
document.querySelector(".name").onblur = function(){
  window.localStorage.setItem("input-name",this.value)
}
*/


/*
//project
document.querySelector("#bush").onclick = function () {
  if(document.querySelector('#newtaks input').value.length == 0){
    alert("Plaese Enter a Task")
  }

  else{
    document.querySelector('#taskes').innerHTML
    +=`
    <div id="task">
     <span id="taskname">
     ${document.querySelector('#newtaks input').value}
     </span>
     <button id="delete">
     <i class="fa-solid fa-trash"></i>
     </button>
     </div>
    `;
    }
    var removetasks = document.querySelectorAll('#delete')
    for(var i = 0; i < removetasks.length; i++){
      removetasks[i].onclick = function(){
        this.parentNode.remove()
      }
  }

 document.querySelector('#newtaks input').value = ""

}
*/


/*
// Destructuring Arrays 
let myfrinds = ["Ahmed", "khaled","yousef","ali"]
let [a = "ahe", k , y , l , o = "osama"] = myfrinds
console.log(a)
console.log(k)
console.log(y)
console.log(l)
console.log(o)

let [h , d , ,i] = myfrinds
console.log(h)
console.log(d)
console.log(i)
*/

/*
let myfrinds = ["Ahmed", "khaled","yousef",["omar","lili",["ihab","khalifa"]]]
// let [ ,  , ,[ a, [ , b]] ] = myfrinds;
let [, , ,[a , ,[ ,b ]]] = myfrinds
console.log(a) // omar
console.log(b) // khalifa
*/


/*
let book = "video";
let video = "book";
// // save book value in stash
// let stash = book;
// // change book value
// book = video ; // book
// // change value value
// video = stash ; // video
// or
[book,video] = [video,book]
console.log(book)
console.log(video)

*/


/*
const user = {
myname: "yusef",
theage: 15,
thetitle: "Devolper",
thecountry: "German",
skills: {
  html: 70,
  css: 80,
}
}
// console.log(user.myname)
// console.log(user.theage)
// console.log(user.thetitle)
// console.log(user.thecountry)

// let myname = user.myname
// let theage = user.theage
// let thetitle = user.thetitle
// let thecountry = user.thecountry

// console.log(user.myname)
// console.log(user.theage)
// console.log(user.thetitle)
// console.log(user.thecountry)

// I do not need thetitle
// the mycolor not found but iam added
 const { myname: a , theage: e , thecountry , mycolor: co = "red" , skills : {html: h , css},} = user

 console.log(a)
console.log(e)
console.log(thecountry)
console.log(co)
console.log(`iam programing with ${h}`)
console.log(`iam programing with ${css}`)

const { html: skillone , css: skilltwo} = user.skills
console.log(`iam programing with ${skillone}`)
console.log(`iam programing with ${skilltwo}`)

*/


/*
const user = {
  username: "yousef", 
  theage: 15,
  skills: ["Html","Css","JavaScript"],
  addresses: {
    egypt: "damytta",
    german: "München"
  },
}

const {username: u ,
  theage: h, 
  skills: [a,b],
  addresses: {egypt: e}, 
} = user

console.log(`My name ${u}`)
console.log(`My age ${h}`)
console.log(`My skills ${a,b}`)
console.log(`My live Now ${e}`)
*/


/*
//  Set Data Types

// Methots = {
  // 1- add
  // 2- delete
  // 3- clear
  // 4- has
// }

let mydata = [1,1,1,2,3,"A"]

// All same result
// let uniquedata = new Set([1,1,1,2,3])
 //  or
// let uniquedata = new Set().add(1).add(1).add(1).add(2).add(3)
let uniquedata = new Set()
uniquedata.add(1).add(1).add(1);
uniquedata.add(2).add(3).add("A");

console.log(`is set = A ${uniquedata.has("a".toLocaleUpperCase())}`)

console.log(mydata);
console.log(uniquedata);

console.log(uniquedata.size)

console.log(mydata[0])
// index cannot work on this type = undeifund
console.log(uniquedata[0])

// uniquedata.delete(2)
//  or
// clear delete all
uniquedata.clear()
console.log(uniquedata);
console.log(uniquedata.size)
*/


/*
// type of data
let myset = new Set([1,1,1,2,3,"A","A","A"])
console.log(myset)


// size
console.log(`size of Elements inside set is ${myset.size}`)

// for each
myset.forEach((el => console.log(el)))
// values + keys alias
let iterator = myset.keys()   //keys = values
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)

// values + keys [alias for values]
let mysetweek = ([{A: 1 , C: 2}])
console.log(mysetweek)
*/

/*
let myobjects = {}
let myemityobjects = Object.create(null)
let mymap = new Map()

console.log(myobjects);
console.log(mymap)

let mynewobject = {
  10: "number",
  "10": "string", // over right at => {10: "number",}
}

console.log(mynewobject[10])

let mynewmap = new Map()
mynewmap.set(10, "number")
mynewmap.set("10", "string")

console.log(mynewmap.get(10))
console.log(mynewmap.get("10"))
*/


/*
let mymap = new Map(
  [
    [10, "Number"],
    ["Name", "string"],
    [false, "boolean"]
  ]
)

// or

// mymap.set(10, "Number")
// mymap.set("Name", "string")

console.log(mymap.get(10))
console.log(mymap.get("Name"))
console.log(mymap.get(false))
console.log(mymap.size)
console.log("#####")
// this is "Name" exitst
console.log(mymap.has("Name"))
console.log("#####")
console.log(mymap.delete("Name"))
console.log(mymap.size)
// clear delete all
console.log(mymap.clear())
console.log(mymap.size)

*/

/*
let mapuser = { thename: "yousef" }

let mymap = new Map()
mymap.set(mapuser, "object value")
console.log(mymap)
console.log("#".repeat(20))

let myweekmapuser = { thename: "yousef" }

let myweekmap = new WeakMap()
myweekmap.set(myweekmapuser, "value")
console.log(myweekmap)
*/

/*
console.log(Array.from("yousef"))
console.log(Array.from("1,2,3,4,5,6", (n) => +n + +n));

let myArray = [1, 1, 1, 2, 3, 4]

let myset = new Set(myArray)
console.log(Array.from(myset))
*/

/*
let myArray = [10, 20, 30, 40, 50, "A", "B"]
// myArray.copyWithin(4, 6) // [10, 20, 30, 40, "b", "A", "B"]
// myArray.copyWithin(1, -2) // [10, "A", "B", 40, 50, "A", "B"]
// myArray.copyWithin(1, -2, -1)  // [10, "A", 30, 40, 50, "A", "B"]
console.log(myArray)
*/

/*
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
let myNumber = 10;

let check = nums.some(function (e) {
  console.log("Test")
  return e > 5;
})

console.log(check)

function checkvalues(arr, val) {
  return arr.some(function (e) {
    return e === val
  })
}
// 20 is not found = false
console.log(checkvalues(nums, 20))
// 5 is exitst = true
console.log(checkvalues(nums, 5))

let range = {
  min: 10,
  max: 20,
}

let checknumberinrange = nums.some(function (e) {
  return e >= this.min && e <= this.max;
}, range)

console.log(checknumberinrange)
*/

/*
let locachons = {
  20: "place1",
  30: "place2",
  50: "place3",
  40: "place4"
}

let mainlocation = 15;

let locationArray = Object.keys(locachons)
console.log(locationArray)

let locationArraynumber = locationArray.map((n) => +n)
console.log(locationArraynumber)

let check = locationArraynumber.every(function (e) {
  return e.this
}, mainlocation)
// return true cuz all values in locachons > 15
console.log(check)
*/

/*
console.log("yousef")
console.log(..."yousef")
console.log([..."yousef"])

let myArray1 = [1, 2, 3]
let myArray2 = [4, 5, 6]

let allArays = [...myArray1, ...myArray2]
console.log(allArays)

let cobiedArray = [...myArray1]
console.log(cobiedArray)

let allfrinds = ["yousef", "khaled", "omar"]
let myyearfrinds = ["hassan", "ali", "sayed"]

allfrinds.push(myyearfrinds)
console.log(allfrinds)

let mynums = [10, 20, 500, 1000, -100]
console.log(Math.max(...mynums))

// object 
let objone = {
  a: 1,
  b: 2,
}
let objtwo = {
  c: 3,
  d: 4,
}

console.log({ ...objone, ...objtwo, e: 5 });
*/

/*
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(Math.max(...n2) * [...n1, ...n2].length);
*/

/*
let mystring = 'iam YOUSEF taha iam yousef taha';
// ig make two item appear
let myyou = /YOUSEF/ig;
console.log(mystring.match(myyou));
*/

/*
let mytld = "com net org info code io";
let tldre = /(info | org | io)/ig;
console.log(mytld.match(tldre));

let mynums = "12345678910";
let tldnums = /[0 - 5]/g;
console.log(mynums.match(tldnums))

let notmynums = "12345678910";
let nottldnums = /[^0 - 5]/g;
console.log(notmynums.match(nottldnums))

let specialnotmynums = "1!2@34#5%678910";
let speacailnottldnums = /[^0-9]/g;
console.log(specialnotmynums.match(speacailnottldnums))

let prictice = "os1 os10s os2 os8 os8os";
let pricticeRe = /os[5-9]os/g;
console.log(prictice.match(pricticeRe))
*/

/*
let myalphapets = "AaBbcdefg123!234%^&*";
let atozsmall = /[a-z]/g;
let Notatozsmall = /[^a-z]/g;
let atozbig = /[A-Z]/g;
let Notatozbig = /[^A-Z]/g;
let aandbandc = /[a b c]/g;
let Notaandbandc = /[^a b c]/g;
let captalandsmall = /[a - zA - Z]/g;
let Notcaptalandsmall = /[^a - zA - Z]/g;
console.log(myalphapets.match(atozsmall));
console.log(myalphapets.match(Notatozsmall));
console.log(myalphapets.match(atozbig));
console.log(myalphapets.match(Notatozbig));
console.log(myalphapets.match(aandbandc));
console.log(myalphapets.match(Notaandbandc));
console.log(myalphapets.match(captalandsmall));
console.log(myalphapets.match(Notcaptalandsmall));
*/

/*
let gmails = 'O@@2ef...com O@g.net A@Y.com o-g.com o@s.org 1@1.com';
let dot = /./g;
// /\w/ this return all values without markers(@ , .)
let word = /\w/g;
let valid = /\w@\w.(com|net)/g;
console.log(gmails.match(dot))
console.log(gmails.match(word))
console.log(gmails.match(valid))
*/

/*
let names = 'Yousef 1Spam 2Spam 3Spam Spam4 Spam5 Anas Aspamo'
let re = /spam/ig;
//  \b = after | before
let re2 = /\bspam/ig; // before
let re3 = /spam\b/ig; // after
let reafterandbefore = /(\bspam|spam\b)/ig;
console.log(names.match(re));
console.log(names.match(re2));
console.log(names.match(re3));
console.log(names.match(reafterandbefore));

console.log(reafterandbefore.test(names));
console.log(reafterandbefore.test("Yousef"));
console.log(reafterandbefore.test("spam5"))
*/

/*
let emails = "y@nn.sa yousef@gamil.com elesawey@gamil.net yousef@mail.ru"
let emailre = /\w@\w\w.sa/ig
let emailre2 = /\w+@\w+.(com|net)/ig
let emailre3 = /\w+@\w+.\w+/ig
console.log(emails.match(emailre));
console.log(emails.match(emailre2));
console.log(emails.match(emailre3));

// n+.....=> One or more 
// n*.....=> zero or more
// n?.....=> zero or one

let nums = "0110 10 150 05120 0560 350 00"
let numsre = /0\d+0/ig
let numsre2 = /0\d*0/ig
console.log(nums.match(numsre));
console.log(nums.match(numsre2));

let urls = "https://google.com http://www.website.net web.com"
let urlre = /https/ig;
let urlreS = /https?/ig;
let urlreS3 = /https?:\/\/(www.)?/ig;
console.log(urls.match(urlre));
console.log(urls.match(urlreS));
console.log(urls.match(urlreS3));

*/


/*
let serials = "s100s s3000s s50000s s950000s"

console.log(serials.match(/s\d{3}s/ig))
// from to
console.log(serials.match(/s\d{4,5}s/ig))
// from 4 to last 
console.log(serials.match(/s\d{4,}s/ig))
*/

/*
let myString = "We love programing"
let names = "10samaZ 2AhmedZ 3Mohammed 4MostafaZ 5GamalZ"

console.log(/ing$/ig.test(myString));
console.log(/^we/ig.test(myString));
// \s =Space
console.log(/^\s/ig.test(myString));
console.log(/^\d/ig.test(myString));
console.log(/lz$/ig.test(names));

console.log(names.match(/\d\w{5}(?=Z)/ig));
// ! = not 
console.log(names.match(/\d\w{8}(?!Z)/ig));
*/

/*
let txt = "We Love Programing And @ Because @ Is Amazing"

console.log(txt.replace("@", "Javascript"));
console.log(txt.replaceAll("@", "Javascript"));
*/

/*
document.getElementById("register").onsubmit = function () {
  let phoneinput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/ig; // (1253) 878-7655
  let valedtionResulte = phoneRe.test(phoneinput);
  console.log(valedtionResulte);
  if (valedtionResulte === false) {
    return false;
  }
  else true;
}
*/

/*
let url1 = 'elzero.org'
let url2 = 'http://elzero.org'
let url3 = 'http://www.elzero.org'
let url4 = 'http://www.elzero.org.8080/articles.php?id=100&cat=topics'

let re = /(https?:\/\/)?(www.)?\w+.\w+\S+/ig;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));

*/


/*
function User(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary + 5000;
}

const userone = new User(100, "Yousef", 20000);
const usertwo = new User(101, "Mohammed", 30000);
const usertree = new User(102, "ali", 40000);

console.log(userone.i);
console.log(userone.u);
console.log(userone.s);

console.log(usertwo.i);
console.log(usertwo.u);
console.log(usertwo.s);

console.log(usertree.i);
console.log(usertree.u);
console.log(usertree.s);
*/

/*
function User(id, username, salary) {
  this.i = id;
  this.u = username || "Unfound";
  this.s = salary < 6000 ? salary + 500 : salary;
  this.msg = function () {
    return `Hello ${this.u} Your Salary is ${this.s}`
  }
}

let userone = new User(100, "youssef", 5000);
let usertwo = new User(120, "", 6000);

console.log(userone.i);
console.log(userone.u);
console.log(userone.s);
console.log(userone.msg());

console.log(usertwo.i);
console.log(usertwo.u);
console.log(usertwo.s);
console.log(usertwo.msg());

*/

/*
class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  updateName(newname) {
    this.u = newname
  }
}

let userone = new User(100, "youssef", 5000);

console.log(userone.u);
userone.updateName("Osama");
console.log(userone.u)
*/

/*
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayhello() {
    return `hello ${this.u}`
  }
}

class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

let userone = new User(100, "Elesawey");
let adminone = new Admin(110, "youssef", 1);


console.log(userone.u);
console.log(userone.sayhello());
console.log("#########");
console.log(adminone.i);
console.log(adminone.u);
console.log(adminone.p);
console.log(userone.sayhello());
*/

/*
class User {
  #e;
  constructor(id, username, esalary) {
    this.i = id;
    this.u = username;
    this.#e = esalary;
  }
  getsalary() {
    return parseInt(this.#e);
  }
}

let userone = new User(101, "yousef", 5000)

console.log(userone.u)
console.log(userone.getsalary() * 0.3)
*/


/*
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayhello() {
    return `Hello ${this.u}`
  }
}

let userone = new User(100, "ElEsawey")

console.log(userone.u);
console.log(User.prototype);
console.log(userone);

Object.prototype.love = "Yousef taha elesawey"
*/

/*
const myobject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myobject, "c", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: 3,
})
// OR
myobject.c = 100;
console.log(myobject)
*/

/*
const myobject = {
  a: 1,
  b: 2,
}

Object.defineProperties(myobject, {
  c: {
    configurable: true,
    value: 3,
  },
  b: {
    configurable: true,
    value: 4,
  }
})

console.log(myobject)
console.log(Object.getOwnPropertyDescriptor(myobject, "b"));
console.log(Object.getOwnPropertyDescriptors(myobject));

*/

/*
// date and time
const datenow = new Date()

console.log(datenow);

console.log(Date.now());

let seconds = Date.now() / 1000;
console.log(`Seconds ${seconds}`);

let minutes = seconds / 60;
console.log(`minutes ${minutes}`);

let hours = minutes / 60;
console.log(`Hours ${hours}`);

let days = hours / 24;
console.log(`Days ${days}`);

let years = days / 365;
console.log(`years ${years}`);
*/

/*
let dateNow = new Date();
let birthday = new Date("Oct 1 , 2007");
let datediff = dateNow - birthday;

console.log(dateNow);
console.log(datediff);
console.log(datediff / 1000 / 60 / 60 / 24 / 365);

// day of mounth
console.log(dateNow.getDate());
// year now
console.log(dateNow.getFullYear());
// get mounth now
console.log(dateNow.getMonth());
// get day of the week 
console.log(dateNow.getDay());
// get hour now
console.log(dateNow.getHours());
// get minutes now
console.log(dateNow.getMinutes());

*/

/*
let dateNow = new Date()
console.log(dateNow)

console.log("#".repeat(30))

// //Control history through days
// dateNow.setDate(980)
// console.log(dateNow);

// // control history through year and days
// dateNow.setFullYear(2030, 12)
// console.log(dateNow);

// // control history through mounth 
// dateNow.setMonth(11)
// console.log(dateNow);

*/

/*
// get your age through melesecound
console.log(Date.parse("oct 1 2007"));

// convert melesecound to histroy
const date1 = new Date(1191189600000)
console.log(date1);
// or
const date2 = new Date("oct 1 2007")
console.log(date2);
// or
const date3 = new Date("2007-10-1")
console.log(date3);
*/
// start
let mainColors = localStorage.getItem("color_option")

if (mainColors !== null) {
  document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"))
}

// random background
let backgroundoption = true;

let backgroundinterval;

// local storage for  random background
let backgroundLocalitem = localStorage.getItem("background_option");

if (backgroundLocalitem !== null) {
  if (backgroundLocalitem === 'true') {
    backgroundoption = true;
  }
  else {
    backgroundoption = false;
  }

  // remove active class for span
  document.querySelectorAll(".random-background span").forEach(element => {
    element.classList.remove("active")
  })

  if (backgroundLocalitem === 'true') {
    document.querySelector(".random-background .yes").classList.add("active")
  }
  else {
    document.querySelector(".random-background .no").classList.add("active")
  }
}


document.querySelector(".settings-box .fa-gear").onclick = function () {

  // document.querySelector(".settings-box").classList.toggle("open")
  document.querySelector(".settings-box").classList.toggle("open")
}
// end


// start choose color

const colorli = document.querySelectorAll(".color-list li");

colorli.forEach(li => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    localStorage.getItem("color_option", e.target.dataset.color)

    // Remove Active class from All Childrens
    e.target.parentElement.querySelectorAll("active").forEach(element => {
      element.classList.remove("active")
    });
    // Add Active Class On self
    e.target.classList.add("active")
  })
})
// end

// Start
const randomBackground = document.querySelectorAll(".random-background span");

randomBackground.forEach(span => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active")
    });
    e.target.classList.add("active")

    if (e.target.dataset.background === 'yes') {
      backgroundoption = true;
      randomBackgrounds()
      localStorage.setItem("background_option", true)
    } else {
      backgroundoption = false;
      clearInterval(backgroundinterval)
      localStorage.setItem("background_option", false)
    }
  })
})
// End

// start
let landingPage = document.querySelector(".landing-page");


let imgeArray = ["01.jpg", "02.jpg", "03.jpg"];



function randomBackgrounds() {
  if (backgroundoption === true) {
    backgroundinterval = setInterval(() => {

      let randomNumber = Math.floor(Math.random() * imgeArray.length);

      landingPage.style.backgroundImage = 'url("' + imgeArray[randomNumber] + '")';
      console.log(randomNumber);
    }, 10000);
  }
}

randomBackgrounds()
// end

// skills Start
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  let skillsOffsettop = ourSkills.offsetTop;

  let skillsOffsetHight = ourSkills.offsetHeight;

  let windowHeight = this.innerHeight;

  let windowtop = this.pageYOffset;

  if (windowtop > (skillsOffsettop + skillsOffsetHight - windowHeight)) {
    let allSkills = document.querySelectorAll(".skills-box .skill-progress span")

    allSkills.forEach(skills => {
      skills.style.width = skills.dataset.progress
    })
  }
}
// skills End

// create popup with the images
let ourGallery = document.querySelectorAll(".gallery img")

ourGallery.forEach(img => {
  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div")

    overlay.className = 'div-popup'

    document.body.appendChild(overlay)

    let popupBox = document.createElement("div")

    popupBox.className = 'popup-box'

    if (img.alt !== null) {
      let imageheading = document.createElement("h3")

      let imgText = document.createTextNode(img.alt)

      imageheading.appendChild(imgText)

      popupBox.appendChild(imageheading)
    }

    let popupImages = document.createElement("img")

    popupImages.src = img.src

    popupBox.appendChild(popupImages)

    document.body.appendChild(popupBox)

    let closebotton = document.createElement("span")

    let closebottonText = document.createTextNode("X")

    closebotton.appendChild(closebottonText)

    closebotton.className = 'close-button'
    popupBox.appendChild(closebotton)
  })
})

document.addEventListener("click", e => {
  if (e.target.className == 'close-button') {
    e.target.parentNode.remove()

    document.querySelector(".div-popup").remove()
  }
})
// create popup with the images End

