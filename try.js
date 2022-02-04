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



