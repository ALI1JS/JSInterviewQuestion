// 1- Write a code to get array of names from given product array
// 2- write a code to get array of names =>  onSale
// 3- sorting the products

const products = [
    {
        id:1,
        name:"TV",
        onSsale:true,
        price:2000
    },

    {
        id:1,
        name:"Phone",
        onSsale:false,
        price:1800
    },

    {
        id:1,
        name:"Laptop",
        onSsale:true,
        price:1500
    },
]


function nameOfProducts (products)
{
     return products.map(product => product.name);

}


function nameOfProductOnsale (products)
{
     return  products.filter(product => product.onSsale).map(product => product.name);
}


function sortProductsAccending (products)
{
    return products.sort((fArrg, sArrg) => fArrg.price > sArrg.price? 1: -1).map(product => product.name);
}

function sortProductsDeccending (products)
{
    return products.sort((fArrg, sArrg) => fArrg.price > sArrg.price? -1: 1).map(product => product.name);
}

