let arr = JSON.parse(localStorage.getItem( "arr"));
if(arr){
    document.getElementById("cartItems").innerText=4+arr.length;  
}


const items = document.getElementById("items");

for (let index = 0; index < data.length; index++) {
  if(data[index].category == "iphone"){
    items.innerHTML += `<div class="col-3 card-space ">
    <div class="card h-100  ">
        <div id="carousel${index}" class="carousel slide" data-ride="false" data-interval="false"    >
            <ol class="carousel-indicators">
                <li data-target="#carousel${index}" data-slide-to="0" class="active"></li>
                <li data-target="#carousel${index}" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="${data[index].pic[0]}" class="card-img-top" width="20%" height="25%" alt="Error">
                </div>
                <div class="carousel-item">
                    <img src="${data[index].pic[1]}" class="card-img-top" width="20%" height="25%" alt="Error">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carousel${index}" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel${index}" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <div class="card-body">
            <h5 class="card-title">${data[index].name}</h5>
            <p class="card-text">COST: ${data[index].price}$</p>
            <button type="button" onclick="add(${data[index].id})" class="btn btn-outline-secondary">Add To Cart</button>
        </div>
    </div>
  </div>`;
  }
}
function add(id) {    
  let num = document.getElementById("cartItems");
  num.style.color = "blue";
  
  let arr = JSON.parse(localStorage.getItem( "arr"));
  if(!arr){
      localStorage.setItem("arr",JSON.stringify([id]));

  }else{
      if(! arr.includes(id)){
          arr.push(id);
          localStorage.setItem("arr",JSON.stringify(arr));
      }
  }
  arr = JSON.parse(localStorage.getItem("arr"));
  document.getElementById("cartItems").innerText=4+arr.length;  
}


