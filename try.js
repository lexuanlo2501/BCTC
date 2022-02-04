function myFunc_Main(x){
    let timeR = 200
    for(let i = 0; i<15; i++){
        setTimeout(function(){
            x.innerHTML = `<img class="radom_result__item__img" src="${
                $(`.animal-item[number="${Math.floor(Math.random()*6)+1}"] .animal-img`).getAttribute('src')
            }
            " alt="">`
        }, timeR)
        timeR +=100

    }
    
}

[1,2,3,4,5].forEach(function(x){
    // setTimeout(function(){
    //     for(let i = 1; i<=20; i++){
    //         console.log(i)
    //     }

    // },0)
    for(let i = 1; i<=20; i++){
        console.log(i)
    }
    console.log(x)
})


