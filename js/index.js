document.addEventListener('DOMContentLoaded', function() {
    const testInput = document.querySelector('.testInput')
    const testTextarea = document.querySelector('#testTextarea')
    const checkBox = document.querySelector('#check')
    const formButton = document.querySelector('button')
    const warningText = document.querySelector('.warning')
    
    // input event
    testInput.addEventListener('input', function(e) {
        console.log(testInput.value)
    })

    testTextarea.addEventListener("input", function(e){
        console.log(e.target.value)
    })

    // es6 arrow function
    document.addEventListener("keydown", (e) => {
        console.log(e)
        if(e.keyCode === 13) {
            console.log("ENTER'A TIKLADINIZ")
        }

        if(e.key === 'Enter') {
            console.log('enter...')
        }
    })

    // change event
    checkBox.addEventListener('change', function(e) {
        warningText.innerText = ""

        if(checkBox.checked) {
            if(testInput.value.length < 5) {
                warningText.textContent = "5 veya daha uzun olmalı"
            }
        }
    })


    // mousemove event
    const fancyBox =  document.querySelector('.fancy')
    document.addEventListener("mousemove", (e) => {
        // console.log(e.clientX);
        let x = e.clientX;
        let y = e.clientY;
  
        // fancyBox.style.top = y+"px"
        // fancyBox.style.left = x+"px"

        // template literal
        fancyBox.style.transform = `translate(${x}px, ${y}px)`
    })


    /* JSON object model - json data model */
    const data = {
        firstname: "Özgür",
        lastname: "ÇATAL",
        age: 26,
        lessons: {
            math: 100,
            science: 200
        }
    }

    console.log(data.lessons.science)


    function changeColor1 () {
        console.log('test1')
    }

    // arrow function
    const changeColor2 = () => {
        console.log('test2')
    }

    changeColor2()

    // 
    // if - for - foreach - while switch
    const number1 = 5, number2 = 10;
    let sum;

    sum = number1 + number2;
    console.log(sum)

    if (sum == 14) {
        console.log('x')
    } else if (sum == 15) {
        console.log('y')
    } else {
        console.log('z')
    }

    if (true) {
        console.log('olaylar 2')
    }

    if (false) {
        console.log('olaylar 3')
    } else {
        console.log('olay else 1')
    }

    // inline if else / ternary
    number1 == 14 ? console.log('xxx') : number1 == 5 ? console.log('yyy') : number1 == 12 ? console.log('zzz') : console.log('hiçbiri değil');

    // for - bir başlangıç değerinden başla belli bir sayıda artarak son değere kadar dön

    /*
        x = x +1
        x+=1
        x++
    */
    let xx;
    for (xx = 0; xx <= 10; xx++) {
        console.log(`for için ${xx}. değer`)
    }

    const fruits = [
        'Muz',
        'Elma', 
        'Şeftali',
        'Karpuz',
        'Kiraz'
    ]

    const numbers = [1, 5, 5, 10]

    let i;
    for (i = 0; i < fruits.length; i++) {
        console.log(`${i+1}. Meyve ${fruits[i]}`)

        if (fruits[i] == 'Karpuz') {
            console.log('karpuzu yedim')
        }
    }

    // foreach
    fruits.forEach((e, i) => console.log(`${i+1}. Meyve ${e}`))

    numbers.forEach(number => {
        if(number == 5) console.log('çak 5lik')
    })

    // while 
    let w = 0;
    while (w < 0) {
        console.log(w)
        w++;
    }

    // while döngüsü
    /* do {
        console.log(w)
        w++;
    } while (w < 0) */

    // switch case
    let sw = 0;
    switch (sw) {
        case 0:
            console.log('durum 0 olduğunda bu çalışsın');
        break;
        case 1:
            console.log('durum 1 old. da bu çalışsın');
        break;
        case 2:
            console.log('durum 2 old. da bu çalışsın');
        break;
        default: 
            console.log('default değer');
    }

    // javascript arrow functions
    

})