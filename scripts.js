
function visitPage(){
    window.location = "portfolio.html"

}

function visitSoundCloud(){
    window.location = "www.soundcloud.com"
}

function countDown(){

    let counter = 60

    setInterval( function(){
        counter--;

        if(counter >= 0){
            id = document.getElementById("countdown").innerHTML = "Click in " + counter + " seconds or else ..."
        }

        else
            window.location = "explosion.gif"
    } ,1000)

}
