var state = false

//tazas variables
var base  = 300
let sized = []
let detail = []

var selectedA = 0
var selectedB = 0
var cantidad = 1

let plus 
let minus
let buy
let cnt 
var flag = false

var pieza = 0

let shop =[]
let erace 

function setup() { 
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  textAlign(CENTER)
  
  sized.push( new data("XS",100))   
  sized.push( new data("S",100)) 
  sized.push( new data("M",200) )
  sized.push( new data("L",300) )
  sized.push( new data("XL",400) )
  sized.push( new data("XXL",600) )

  
  detail.push( new data("Bajo",100) )
  detail.push( new data("Medio",200) )
  detail.push( new data("Alto",300) )
  detail.push( new data("Humano",500) )
  
  plus = new data("+",1)
  minus = new data("-",-1)
  cnt = new data("1",1)
  buy = new data("Agregar",0)
  erace = new data("X",0)
}

function draw() {
  background(0); 
  if (button(0,width/4,height * 0.1,width/2,height * 0.1,"Modo taza")){
      state = false
  }
  if (button(1,3*width/4,height * 0.1,width/2,height * 0.1,"Modo final")){
      state = true      
  }
  
  if (!state){
    // tasacion de cosas 
    fill(120)
    rect(width/2,0.4 * height,0.8 * width,0.4 * height)
    fill(255)
    textSize(width * 0.05)
    text("Tamaño",width/4,0.25 * height)
    for (var i = 0;i<sized.length;i++){
      if (selectedA == i){
          fill(100,0,0)
          }else{
            fill(100)
          }
      
     if( sized[i].show(width/4,0.3 * height + (i*0.05*height),0.12 * width, 0.05 * height)){
       selectedA = i
     }     
    }
    ////////////////////////////////////////
    fill(255)
    textSize(width * 0.05)
    text("Detalle",2*width/4,0.25 * height)
    for (var j = 0;j<detail.length;j++){
      if (selectedB == j){
          fill(100,0,0)
          }else{
            fill(100)
          }
      
     if( detail[j].show(2*width/4,0.3 * height + (j*0.07*height),0.2 * width, 0.05 * height)){
       selectedB = j
     }     
    }
    /////////////////////////////////////////////
    
    fill(255)
    textSize(width * 0.05)
    text("Cantidad",3*width/4,0.25 * height)
    fill(0,120,0)
    if (plus.show(3*width/4,0.3 * height,0.1 * width, 0.05 * height)){
      cantidad++;    
      cnt.rewrite(str(cantidad))
    }
    
    fill(120,0,0)
    if ( cantidad > 1&& minus.show(3*width/4,0.3 * height + (2*0.09*height),0.1 * width, 0.05 * height)){
      cantidad--; 
      cnt.rewrite(str(cantidad))
    }
    fill(120)
    cnt.show(3*width/4,0.3 * height + (1*0.09*height),0.1 * width, 0.05 * height)
    ////////////////////////////////////////////////
    fill(120)
    rect(width/2,0.8 * height,0.8 * width,0.3 * height)
    stroke(0)
    fill(100)
    rect(0.45*width,0.72 * height,0.6 * width,0.05 * height)
    fill(255)
    textSize(width * 0.05)    
    pieza = 300 + sized[selectedA].val + detail[selectedB].val
    if (selectedA == 0){
        pieza *= 0.1
        }
    text("Valor por pieza: $" + pieza,0.45*width,0.73 * height)
    fill(100)
    rect(0.45*width,0.82 * height,0.6 * width,0.05 * height)
    fill(255)
    text("Valor paquete: $" + pieza * cantidad,0.45*width,0.83 * height)
    fill(0,120,0)
    if (buy.show(0.45*width,0.90 * height,0.6 * width,0.05 * height)){
       shop.push( new item("TAM: " + sized[selectedA].txt + " Det: " + detail[selectedB].txt + " Cant: " + cantidad,pieza))
      pieza = 0
       selectedA = 0
      selectedB = 0
      cantidad = 1
      cnt.rewrite(str(cantidad))      
    }
    
  }else{
    if (shop [0] == null){
      fill(255)
      textSize(width * 0.05)
      text("No hay elementos aun",width/2,height/2)
        
    }else{
      var absoluteY = height * 0.66
      var space = absoluteY/shop.length
      var tot  = 0
      if (shop.length <10){
          space = 0.05 * height
          
          }
      for (var k = 0; k< shop.length;k++){
        fill(120)
        tot += shop[k].val
        shop[k].show(0.4 * width,height/4 + (k*space), 0.8 * width,space)
        fill(120,0,0)
        if ( erace.show(0.9 * width,height/4 + (k*space), 0.1 * width,space)){
            shop.splice(k,1)
            
            }
        
      }
      fill(255)
      textSize(width * 0.05)
        
      
      
      
      text("Costo total: $" + tot,width/2,0.95 * height)
      
      
      
    }
      
    
    
    
    
  }
  
  
  if (!mouseIsPressed){
      flag = false
      }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function button(st,x,y,xl,yl,tx){
  
  if (st == 0){      
    if (state){        
      fill(120)
    }else{
      fill(150,0,0)
    }
  }
  if(st == 1){
    if (!state){        
      fill(120)
    }else{
      fill(150,0,0)
    }
  }
  stroke(0)
  strokeWeight(2)
  rect(x,y,xl,yl);
  fill(0)
  textSize(width * 0.1)
  text(tx,x ,y + yl * 0.3)
  
  if (mouseIsPressed && !flag){
      if(mouseX < x + xl/2 && mouseX > x - xl/2){
         if(mouseY < y + yl/2 && mouseY > y - yl/2){
           flag = true
           return true        
        }        
      }      
  }
  return false
}


