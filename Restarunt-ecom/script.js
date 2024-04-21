drinks = [{id:1,dname:'Oreo Shake',dprice:3.99,img:'oreoShake.jpg'},
          {id:2,dname:'Kitkat',dprice:3.99,img:'oreoShake.jpg'},
          {id:3,dname:'Milk Shakes',dprice:4.50,img:'oreoShake.jpg'},
          {id:4,dname:'Ice Tea',dprice:6.00,img:'oreoShake.jpg'}];

ContainerProduct = document.getElementById("containerproduct");

drinks.forEach(element => {
            NewMenu = document.createElement('div');
            NewMenu.classname = 'card';
            NewMenu.style.width= '30rem'
            NewMenu.innerHTML =`<div class="card p-5 m-5">
            <img class="card-img-top" src="${element.img}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${element.dname}</h5>
            <p class="card-text">${element.dprice}$</p>
            <a href="#" class="btn btn-warning" type="button" onclick="addToCart(${element.id});">Add To Cart</a>
            </div>
            <input type="number">
            </div>`;
  ContainerProduct.appendChild(NewMenu);
});