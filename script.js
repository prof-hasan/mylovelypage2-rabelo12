let money = 0;
let teste =0;
let click = 1;

let auto = 0;
let superclick=0;

function clicar1() {
    if(money>=10) {
        click++;
        money-=10;
    }
}
function auto1() {
    if(money>=50) {
        auto++;
        money-=50;
    }
}

function clicar5() {
    if(money>=200) {
        click+=5;
        money-=200;
    }
}
function auto5() {
    if(money>=500) {
        auto+=5;
        money-=500;
    }
}

function clicar10() {
    if(money>=1000) {
        click+=10;
        money-=1000;
    }
}
function auto10() {
    if(money>=2500) {
        auto+=10;
        money-=2500;
    }
}

function clicar20() {
    if(money>=10000) {
        click+=20;
        money-=10000;
    }
}
function auto20() {
    if(money>=30000) {
        auto+=20;
        money-=30000;
    }
}

function clicar50() {
    if(money>=20000) {
        click+=50;
        money-=20000;
    }
}
function auto50() {
    if(money>=50000) {
        auto+=50;
        money-=50000;
    }
}

function clicar100() {
    if(money>=50000) {
        click+=100;
        money-=50000;
    }
}
function auto100() {
    if(money>=100000) {
        auto+=100;
        money-=100000;
    }
}

function clicar500() {
    if(money>=100000) {
        click+=500;
        money-=100000;
    }
}
function auto500() {
    if(money>=250000) {
        auto+=500;
        money-=250000;
    }
}

function clicar1000() {
    if(money>=300000) {
        click+=1000;
        money-=300000;
    }
}
function auto1000() {
    if(money>=500000) {
        auto+=1000;
        money-=500000;
    }
}

function clicar5000() {
    if(money>=500000) {
        click+=5000;
        money-=500000;
    }
}
function auto5000() {
    if(money>=1000000) {
        auto+=5000;
        money-=1000000;
    }
}

function clicar10000() {
    if(money>=2000000) {
        click+=10000;
        money-=2000000;
    }
}
function auto10000() {
    if(money>=3000000) {
        auto+=10000;
        money-=3000000;
    }
}


document.getElementById("bananas").innerText = 0;

let superbanana =0;
function farm() {
    superbanana++;
    if(superclick >= 27) {
        money+=click*2;
        teste+=click*2;

        document.getElementById("mostrar_dinheiro").style.animation = "none";
        document.getElementById("mostrar_dinheiro").innerText = "+ " + click*2
        document.getElementById("macacos").style.backgroundColor = "rgba(94, 35, 12, 1)";
        document.getElementById("mostrar_dinheiro").style.fontSize = "35px";
        document.getElementById("macacos").style.animation = "none"

    }
    else {
        money+=click;
        teste+=click;

        document.getElementById("mostrar_dinheiro").style.animation = "none";
        document.getElementById("mostrar_dinheiro").innerText = "+ " + click
    }
    if(superclick<30) {
        superclick++;
    }

    let bonus = Math.floor(Math.random() * 10);
    let j = document.getElementById("super")


    document.getElementById("monkeys").style.transform = "scale(0.95)";

    setTimeout(() => {
        document.getElementById("mostrar_dinheiro").style.animation = "subir 1.35s ease forwards";
    }, 10)
    setTimeout(() => {
        document.getElementById("monkeys").style.transform = "scale(1)"
    }, 150);

}

function automoney() {
    money+=auto;
    teste+=auto;
}
setInterval(automoney, 1000);

function mostrarbananas() {
    document.getElementById("bananas").innerText = parseInt(money);
}
setInterval(mostrarbananas, 10)

const numero =Math.floor(Math.random() * 100) +1;
let sorridente = false;
let narigudu = false;
let gorila = false;
let kong = false;
function teste_de_macaco() {
        if(teste >= 10000 && !sorridente) {
            document.getElementById("mico").style.display = "none"
            document.getElementById("sorridente").style.display = "block" 
            sorridente = true;

            document.getElementById("vc").style.animation = "none"

            document.getElementById("vc").innerText = "Voce agora e o macaco sorridente"
            setTimeout(() => {
                document.getElementById("vc").style.animation = "vc 3s ease forwards"
            }, 10)

            document.getElementById("macaco").style.opacity = "0"
            document.getElementById("macaco").innerText = "Macaco sorridente"

            setTimeout(() => {
                document.getElementById("macaco").style.opacity = "1"
            }, 3001)
        }
        if(teste >= 200000 && !narigudu) {
            document.getElementById("sorridente").style.display = "none"
            document.getElementById("narigudo").style.display = "block"  
            narigudu = true 
            
            document.getElementById("vc").style.animation = "none"

            document.getElementById("vc").innerText = "Voce agora e o macaco narigudo"
            setTimeout(() => {
                document.getElementById("vc").style.animation = "vc 3s ease forwards"
            }, 10)
            document.getElementById("macaco").innerText = "Macaco narigudo"

            document.getElementById("macaco").style.opacity = "0"
            setTimeout(() => {
                document.getElementById("macaco").style.opacity = "1"
            }, 3001)
        }
        if(!gorila && teste >= 1000000) {
                document.getElementById("narigudo").style.display = "none"
                document.getElementById("gorila").style.display = "block" 
                gorila = true

                document.getElementById("vc").style.animation = "none"

                document.getElementById("vc").innerText = "Voce agora e um gorila"
                setTimeout(() => {
                    document.getElementById("vc").style.animation = "vc 3s ease forwards"
                }, 10)
                document.getElementById("macaco").innerText = "gorila"

                document.getElementById("macaco").style.opacity = "0"
                setTimeout(() => {
                document.getElementById("macaco").style.opacity = "1"
                }, 3001)
            }  
            if(numero != 2 && teste>=500000000 && !kong) {
                document.getElementById("gorila").style.display = "none"
                document.getElementById("kong").style.display = "block" 
                kong = true

                document.getElementById("vc").style.animation = "none"

                document.getElementById("vc").innerText = "voce agora e o kong, muito vicio!"
                setTimeout(() => {
                    document.getElementById("vc").style.animation = "vc 3s ease forwards"
                }, 10)
                document.getElementById("macaco").innerText = "kong"

                document.getElementById("macaco").style.opacity = "0"
                setTimeout(() => {
                document.getElementById("macaco").style.opacity = "1"
                }, 3001)
            } 
            if(numero == 2 && teste>=500000000 && !kong) {
                document.getElementById("gorila").style.display = "none"
                document.getElementById("sj").style.display = "block" 
                kong = true

                document.getElementById("vc").style.animation = "none"

                document.getElementById("vc").innerText = "Parabens! voce agora e o Kong Saiyajin"
                setTimeout(() => {
                    document.getElementById("vc").style.animation = "vc 3s ease forwards"
                }, 10)
                document.getElementById("macaco").innerText = "kong Saiyajin"

                document.getElementById("macaco").style.opacity = "0"
                setTimeout(() => {
                document.getElementById("macaco").style.opacity = "1"
                }, 3001)
            }  
        
}
setInterval(teste_de_macaco, 1000);

function supermenos() {
    if(superclick>0) {
        superclick--;
    }
    if(superclick<20 && superclick > 15) {
        document.getElementById("macacos").style.animation = "back 1.5s ease forwards"


    }
}
setInterval(supermenos,300)


addEventListener("animationiteration", () => {
        banas.style.animation= "none"
})

function bana1() {
    let g = document.getElementById("bana1")
    let banana1
    banana1 = Math.floor(Math.random()*90);

    g.style.left = banana1 + "%"
}
setInterval(bana1, 4000)

function bana2() {
    let g = document.getElementById("bana2")
    let banana2;
    banana2 = Math.floor(Math.random()*90);

    g.style.left = banana2 + "%"

}
setInterval(bana2, 5000)

function bana3() {
    let g = document.getElementById("bana3")
    let banana3;
    banana3 = Math.floor(Math.random()*90);

    g.style.left = banana3 + "%"
}
setInterval(bana3, 8000)


let bonus = Math.floor(Math.random() * 200) + 200;
let j = document.getElementById("super")

function superBanana() {
    if (superbanana >= bonus) {
        let bananaSx = Math.floor(Math.random() * 90);
        let bananaSy = Math.floor(Math.random() * 90);

        j.style.left = bananaSx + "%"
        j.style.top = bananaSy + "%"

        j.style.pointerEvents = "auto"
        j.style.animation = "bananachataAparece 1s linear forwards"
        superbanana = 0;
        bonus = Math.floor(Math.random() * 200) + 200; 

        let pegou = false;

        j.addEventListener("click", () => {
            money += (click * 15) + click;
            pegou = true;
            j.style.pointerEvents = "none"
            setTimeout(() => {
                document.getElementById("mostrar_dinheiro").innerText = "+ " + click*15;
                j.style.animation = "bananachataDesaparece 2s linear"
            } , 20)
        });

        setTimeout(() => {
            if(!pegou) {
                j.style.animation = "bananachataDesaparece 0.5s linear forwards"
                j.style.pointerEvents = "none"
            }
        }, 3000)
    }
}
setInterval(superBanana, 5000)

