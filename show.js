function show(){
    background(249,250,251)

     for(let k = 0; k < len; k++)
    {	
        if(i < len-1)
        {
            //(240,248,250)
            fill(215, 233, 255)
            //Reset border to none
            b.style("border", "none")
        }else{
            //when it finishes play button set to false
            if(i>=len+1)
            {
                is_playing = false
            }
            fill(200,255,200)
            //Create a border when it finishes
            b.style("border", "4px solid #c8ffc8")
        }
        rect(k*w, height_div-sortedTab[k], w, sortedTab[k])
    }
}
