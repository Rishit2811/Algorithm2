function bounceoff (){
    if(mr.x-fr.x<mr.width/2+fr.width/2 &&
      fr.x-mr.x<mr.width/2+fr.width/2){
    mr.velocityX=mr.velocityX*(-1)
    fr.velocityX=fr.velocityX*(-1)
    
      }
      if(mr.y-fr.y<mr.height/2+fr.height/2 &&
         fr.y-mr.y<mr.height/2+fr.height/2){
          mr.velocityY=mr.velocityY*(-1)
          fr.velocityY=fr.velocityY*(-1)
    
    
         }
    
    
    }
    function istouching() {

        if(mr.x-fr.x<mr.width/2+fr.width/2 &&
          fr.x-mr.x<mr.width/2+fr.width/2&&
          mr.y-fr.y<mr.height/2+fr.height/2 &&
          fr.y-mr.y<mr.height/2+fr.height/2) {
            return true; 
          }
          else {
           return false
      
          }
      
      
      
      
      }
      
      
      
      
      
      