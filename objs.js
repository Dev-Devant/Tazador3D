class data{
  constructor(txt,val){
    this.txt = txt
    this.val = val    
  }
  show( x, y, xl, yl){
    stroke(0)
    strokeWeight(2)
    rect(x,y,xl,yl);
    fill(255)
    textSize(width * 0.05)
    text(str(this.txt),x ,y + yl * 0.3)
  
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
  rewrite(news){
    this.txt = news
    
  } 
  
  
}

class item{
  constructor(txt,val){
    this.txt = txt
    this.val = val    
  }
  show( x, y, xl, yl){
    stroke(0)
    strokeWeight(2)
    rect(x,y,xl,yl);
    fill(255)
    textSize(width * 0.05)
    text(str(this.txt) + " $" + this.val,x ,y + yl * 0.3)
  
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
  
  
}


