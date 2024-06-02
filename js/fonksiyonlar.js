import { modlar } from "./veri.js";

const kokEtiket = document.querySelector("#kok-etiket")

function UIGoster() {
    modlar.liste.forEach( (deger, index) => {
        const yeniDiv = document.createElement("div")
        yeniDiv.textContent = deger.tr

        // mod görseli oluşturma
        const yeniImg = document.createElement("img")
        yeniImg.src = '../img/' + deger.mod + '.jpg'

        // mod sesi oluşturma
        const yeniAudio = document.createElement("audio")
        yeniAudio.src = '../audio/' + deger.mod + '-sound.mp3'
        yeniAudio.loop = true

        yeniDiv.append(yeniImg)
        yeniDiv.append(yeniAudio)

        kokEtiket.append(yeniDiv)

        //eventler
        yeniDiv.addEventListener( 'click', ()=>{
            //eğer şarkı çalmıyorsa çalmaya başlasın
            if( yeniAudio.paused === true ) {
                yeniAudio.play()
                yeniDiv.classList.add("aktif")
                modlar.aktifSarkiSayisi++
                sayiGoster()
            } else { //eğer şarkı çalıyorsa durdurulsun
                yeniAudio.pause()
                yeniDiv.classList.remove("aktif")
                modlar.aktifSarkiSayisi--
                sayiGoster()
            }

        } )
    })
}

function sayiGoster(){
    console.log(modlar.aktifSarkiSayisi)
}




export {UIGoster}