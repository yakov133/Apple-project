let arr = JSON.parse(localStorage.getItem( "arr"));
if(arr){
    document.getElementById("cartItems").innerText=4+arr.length;  
}


let dataFake = [
    {
        id:100,
        name:"Macbook",
        price:12000,
        info:"Macbook pro",
        category:"Macbook",
        pic:["../pictures/cart/macbook.jpeg"]
    },
    {
        id:111,
        name:"iphone 3gs",
        price:123,
        info:"old phone 3gs",
        category:"iphone",
        pic:["../pictures/cart/iphone 3gs.jpeg"]
    },
    {
        id:122,
        name:"iphone 4",
        price:1232,
        info:"iphone 4",
        category:"iphone",
        pic:["../pictures/cart/iphone 4.jpeg"]
    },
    {
        id:320,
        name:"iphone 5",
        price:222,
        info:"nice phone",
        category:"iphone",
        pic:["../pictures/cart/iphone 5.jpeg"]
    },
]

let productId = document.getElementById("proudcs");
let element = document.getElementById("tbody");
arr = JSON.parse(localStorage.getItem( "arr"));
let sum = 0



if(arr){
    for (const iterator of data) {
        if(arr.includes(iterator.id)){
            dataFake.push(iterator);
        }
    }
}

// id product price category pic
for (const iterator of dataFake) {
    sum += iterator.price;
    element.innerHTML +=`<tr id=${iterator.id} onclick = deleteFromDom(${iterator.id})>
    <th scope="row">${iterator.id}</th>
    <td>${iterator.name}</td>
    <td>${iterator.price}$</td>
    <td>${iterator.category}</td>
    <td><img src="${iterator.pic[0]}" width="10%" height="20%" alt="${iterator.info}"></td>
    </tr>`
}

changeTotal(sum)

const deleteFromDom = function(id){
    let del = document.getElementById(id);
    del.parentNode.removeChild(del);   
    deleteFromData(id)
}

const deleteFromData = (id)=>{
    let i;
    for (let index = 0; index < dataFake.length; index++) {
        if (dataFake[index].id == id) {
            i = index;
            console.log("deletinig at index",index);
            console.log(dataFake[index]);
            break;
        }
    }
    
    sum -= dataFake[i].price;
    changeTotal(sum)
    dataFake.splice(i,1);
    
    if(arr.includes(id)){
        let localStorageIndex = arr.indexOf(id);
        arr.splice(localStorageIndex,1);
        localStorage.setItem("arr",JSON.stringify(arr));
        if(arr.length == 0){
            localStorage.removeItem("arr");
        }
    }
}
 function changeTotal(sum){
    let total = document.getElementById("total");
    total.innerText = ""
    if(sum != 0){
        total.innerText =`total cost ${sum}$`
    }
}

