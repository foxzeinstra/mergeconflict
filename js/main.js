const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()


function basicHaiku()
{
    return ["Toward those short trees","kaasje","On a day in spring."]
}
function HaikuX(){
    console.log("haiku by:","AUTHOR");
    console.log("bomba");
    console.log("clat");
    console.log("fam");
}
haikus = [
    basicHaiku()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

start()