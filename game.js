// 1. Suzdavame promenlivi
let myX = 0
    myY = 0
    plodY=0
    plodX=400
    tochki=0
vragx=300
vragy=0
scorost=2
skorostvragx=3
skorostvragy=2

posoka=0

function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
    myX = myX + (mouseX - myX) / 1
    myY = myY + (mouseY - myY) / 1   
    plodY=plodY+scorost
    if(plodY>700)
        {plodY=-10
        tochki=tochki-1
        console.log(tochki)
        plodX=randomInteger(750)
        scorost=randomInteger(10)+1}
    
    if(myX>plodX-60){
        if(myX<plodX+60){
            if(myY>plodY-50){
                if(myY<plodY+50){
                    tochki=tochki+1
                    console.log(tochki)
                    plodY=0
                    plodX=randomInteger(750)
                    scorost=randomInteger(10)+1
                }
            }
        }
    }
 
    
    vragy=vragy+skorostvragy
    vragx=vragx+skorostvragx
  
   
    if(vragx>750)
        {skorostvragx=skorostvragx-skorostvragx-skorostvragx}    
    if(vragy>550)
        {skorostvragy=skorostvragy-skorostvragy-skorostvragy}
    if(vragx<0)
        {skorostvragx=skorostvragx-skorostvragx-skorostvragx}
    if(vragy<0)
        {skorostvragy=skorostvragy-skorostvragy-skorostvragy}
  
   
         
    if(myX>vragx-60){
        if(myX<vragx+60){
            if(myY>vragy-50){
                if(myY<vragy+50){
                    tochki=tochki-1
                    console.log(tochki)
                    vragy=0
                    vragx=randomInteger(750)
                    skorostvragy=randomInteger(8)+2
                    skorostvragx=randomInteger(8)+2
                }
            }
        }
    } 
    
    
}


function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backDesert, 0, 0, 800, 600)  
    drawImage(starDiamond,plodX,plodY,50,50)
     drawImage(femaleAction, myX, myY, 60, 80)
    drawImage(bomb,vragx,vragy,50,50)
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
