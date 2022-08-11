




// AULA BAT

produtos =[
        {nome:"samsung a71",preço: 1700.30},
        {nome:"samsung s22",preço: 5470.21},
        {nome:"iphone 13",preço: 10000.22},
        {nome:"iphone x",preço: 4500.10},
]

console.log(produtos.map(
    (p, i) => "produtos ("+ i +")" + p.nome  //tudo que está em produto passa para p
)); 


console.log(produtos.filter(
    (p) => p.preço ==5000    // filter
));

 console.log(produtos.map(p => p.preço)
         .reduce(( previous, current) => previous + current) //reduce

);


console.log(produtos.find(p => p.nome == "samsung a71")); // verificação de linha

     



