const gallery = document.getElementById("gallery");

const images = [

{
title:"Lavender Valley",
category:"Nature",
image:"assets/images/nature-1.jpg"
},

{
title:"Mountain Lake",
category:"Nature",
image:"assets/images/nature-2.jpg"
},

{
title:"Forest Waterfall",
category:"Nature",
image:"assets/images/nature-3.jpg"
},

{
title:"Santorini",
category:"Travel",
image:"assets/images/travel-1.jpg"
},

{
title:"Maldives Beach",
category:"Travel",
image:"assets/images/travel-2.jpg"
},

{
title:"Hot Air Balloons",
category:"Travel",
image:"assets/images/travel-3.jpg"
},

{
title:"New York Skyline",
category:"City",
image:"assets/images/city-1.jpg"
},

{
title:"Tokyo Night",
category:"City",
image:"assets/images/city-2.jpg"
},

{
title:"Dubai Skyline",
category:"City",
image:"assets/images/city-3.jpg"
},

{
title:"African Lion",
category:"Wildlife",
image:"assets/images/wildlife-1.jpg"
},

{
title:"Elephant Safari",
category:"Wildlife",
image:"assets/images/wildlife-2.jpg"
},

{
title:"Colorful Parrot",
category:"Wildlife",
image:"assets/images/wildlife-3.jpg"
},

{
title:"Gourmet Burger",
category:"Food",
image:"assets/images/food-1.jpg"
},

{
title:"Italian Pizza",
category:"Food",
image:"assets/images/food-2.jpg"
},

{
title:"Fresh Sushi",
category:"Food",
image:"assets/images/food-3.jpg"
},

{
title:"Modern Tower",
category:"Architecture",
image:"assets/images/architecture-1.jpg"
},

{
title:"Historic Castle",
category:"Architecture",
image:"assets/images/architecture-2.jpg"
},

{
title:"Luxury Villa",
category:"Architecture",
image:"assets/images/architecture-3.jpg"
},

{
title:"Purple Waves",
category:"Abstract",
image:"assets/images/abstract-1.jpg"
},

{
title:"Neon Gradient",
category:"Abstract",
image:"assets/images/abstract-2.jpg"
},

{
title:"Geometric Art",
category:"Abstract",
image:"assets/images/abstract-3.jpg"
}

];

function displayGallery(){

gallery.innerHTML="";

images.forEach(photo=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`

<img src="${photo.image}" alt="${photo.title}">

<span class="badge">${photo.category}</span>

<div class="card-icons">
<i class="fa-solid fa-heart"></i>
<i class="fa-solid fa-download"></i>
</div>

<div class="overlay">
<h3>${photo.title}</h3>
<p>${photo.category}</p>
</div>

`;

gallery.appendChild(card);

});

}

displayGallery();