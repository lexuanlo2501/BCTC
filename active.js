const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let animals =$$('.animal-item')

animals.forEach(function(value, index){
    value.onclick = function(){
        let checkAndDel = $('.animal-item.active')
        if(checkAndDel){
            checkAndDel.classList.remove('active')
        }
        this.classList.add('active')
    }
});

let randNum = Math.floor(Math.random()*5)+1

// return result 1...6
function randNums(){
    return [
        Math.floor(Math.random()*6)+1
        ,Math.floor(Math.random()*6)+1
        ,Math.floor(Math.random()*6)+1
    ]
}


let myPoint = 500
$('.panel_bet__point').innerHTML = myPoint


let rand_btn = $('.random-animals__btn')
let getPoint = 0;

rand_btn.onclick = function(){
    let valueAnimal_IDs = randNums()
   
    let check = $('.animal-item.active')
    if(check){
        check = $('.animal-item.active').getAttribute('number');

        $$('.radom_result__item').forEach(function(x, i){
            // Array.from($$('.radom_result__item')).forEach(function(x, i){
            myFunc_Main(x,100) /** here */
            setTimeout(function(){
                x.innerHTML = `
                    <img class="radom_result__item__img" src="${
                        $(`.a${valueAnimal_IDs[i]} .animal-img`).getAttribute('src')
                    }" alt="">
                `
            },1500) /** x */
        })
    }

    let correct = false;
    getPoint = parseInt($('.panel_bet__input').value) ;
    // if(getPoint != '' && getPoint != NaN && check){
    if(getPoint && check){


        for(let x of valueAnimal_IDs) {
    
            if(check == x){
                console.log('true')
                myPoint+=getPoint;
                correct = true;
                console.log("get point from input: " + getPoint) /**check */
            }
        }
    
        if(correct === true){
    
        }
        if(correct === false) {
            myPoint-=getPoint;
        }
        $('.panel_bet__input').value = ''
        $('.panel_bet__point').innerHTML = myPoint
        
        console.log("my point: " + myPoint) /**check */
        console.log(valueAnimal_IDs)

    }
    
}




function myFunc_Main(x, s){
    function rollRand(ms){
        return new Promise(function(resolve){
            setTimeout(resolve, ms)
        })
    }
    rollRand()
    .then(function(){
        x.innerHTML = `<img class="radom_result__item__img" src="${
            $(`.animal-item[number="${Math.floor(Math.random()*6)+1}"] .animal-img`).getAttribute('src')
        }
        " alt="">`
        return rollRand(s)
    })
    .then(function(){
        x.innerHTML = `<img class="radom_result__item__img" src="${
            $(`.animal-item[number="${Math.floor(Math.random()*6)+1}"] .animal-img`).getAttribute('src')
        }
        " alt="">`
        return rollRand(s)
    })
    .then(function(){
        x.innerHTML = `<img class="radom_result__item__img" src="${
            $(`.animal-item[number="${Math.floor(Math.random()*6)+1}"] .animal-img`).getAttribute('src')
        }
        " alt="">`
        return rollRand(s)
    })
    .then(function(){
        x.innerHTML = `<img class="radom_result__item__img" src="${
            $(`.animal-item[number="${Math.floor(Math.random()*6)+1}"] .animal-img`).getAttribute('src')
        }
        " alt="">`
        return rollRand(s)
    })
    .then(function(){
        x.innerHTML = `<img class="radom_result__item__img" src="${
            $(`.animal-item[number="${Math.floor(Math.random()*6)+1}"] .animal-img`).getAttribute('src')
        }
        " alt="">`
        return rollRand(s)
    })
    .then(function(){
        x.innerHTML = `<img class="radom_result__item__img" src="${
            $(`.animal-item[number="${Math.floor(Math.random()*6)+1}"] .animal-img`).getAttribute('src')
        }
        " alt="">`
        return rollRand(s)
    })
    .then(function(){
        x.innerHTML = `<img class="radom_result__item__img" src="${
            $(`.animal-item[number="${Math.floor(Math.random()*6)+1}"] .animal-img`).getAttribute('src')
        }
        " alt="">`
        return rollRand(s)
    })
    .then(function(){
        x.innerHTML = `<img class="radom_result__item__img" src="${
            $(`.animal-item[number="${Math.floor(Math.random()*6)+1}"] .animal-img`).getAttribute('src')
        }
        " alt="">`
        return rollRand(s)
    })
    .then(function(){
        x.innerHTML = `<img class="radom_result__item__img" src="${
            $(`.animal-item[number="${Math.floor(Math.random()*6)+1}"] .animal-img`).getAttribute('src')
        }
        " alt="">`
        return rollRand(s)
    })
    .then(function(){
        x.innerHTML = `<img class="radom_result__item__img" src="${
            $(`.animal-item[number="${Math.floor(Math.random()*6)+1}"] .animal-img`).getAttribute('src')
        }
        " alt="">`
        return rollRand(s)
    })
    .then(function(){
        x.innerHTML = `<img class="radom_result__item__img" src="${
            $(`.animal-item[number="${Math.floor(Math.random()*6)+1}"] .animal-img`).getAttribute('src')
        }
        " alt="">`
        return rollRand(s)
    })
    .then(function(){
        x.innerHTML = `<img class="radom_result__item__img" src="${
            $(`.animal-item[number="${Math.floor(Math.random()*6)+1}"] .animal-img`).getAttribute('src')
        }
        " alt="">`
        return rollRand(s)
    })
    .then(function(){
        x.innerHTML = `<img class="radom_result__item__img" src="${
            $(`.animal-item[number="${Math.floor(Math.random()*6)+1}"] .animal-img`).getAttribute('src')
        }
        " alt="">`
        return rollRand(s)
    })
    .then(function(){
        x.innerHTML = `<img class="radom_result__item__img" src="${
            $(`.animal-item[number="${Math.floor(Math.random()*6)+1}"] .animal-img`).getAttribute('src')
        }
        " alt="">`
        return rollRand(s)
    })
    // .finally(function(){
    //     x.innerHTML = `<img class="radom_result__item__img" src="${
    //         $(`.animal-item[number="6"] .animal-img`).getAttribute('src')
    //     }
    //     " alt="">`
    // })
   
    
    // .then(function(){
    //     containerRollR.innerHTML = `<img src="${
    //         $('.animal-item[number="2"] .animal-img').getAttribute('src')
    //     }
    //     " alt="">`
    //     return rollRand(100)
    // })
   
}









// $('[number="1"]')


// dark mode

$('.headingPage__status.dark').onclick = function(){
    
    $('.dark_mode').innerHTML = '<link rel="stylesheet" href="./override.css">'
    this.classList.add('off')
    $('.headingPage__status.light').classList.remove('off')
    $('.headingPage__status.light').classList.add('move')

    $('.cir').classList.add('move')
}

$('.headingPage__status.light').onclick = function(){
    $('.dark_mode').innerHTML = ''
    this.classList.add('off')
    $('.headingPage__status.dark').classList.remove('off')

    $('.cir').classList.remove('move')

}

// MODEL

// btn setting
let model = $('.model')

$('.setting').onclick = function(){
    model.classList.add('open')
}

$('.model__page__close').onclick = function(){
    model.classList.remove('open')

}

$('.model__overlay').onclick = function(){
    model.classList.remove('open')

}