function selectionSort() {
    if(i < len-1)
		{  
            let index = i
            min1 = sortedTab[i]
			for(let j = i+1; j <len; j++)
			{
				if(min1 > sortedTab[j])
				{
                    min1 = sortedTab[j]
                    index = j	
				}	
			}
                let temp = sortedTab[i]
                sortedTab[i] =sortedTab[index]
                sortedTab[index] = temp

                //Coloring each min after placing it with green
                for(k=0; k < i; k++)
                {
                    fill(200,255,200)
                    rect(k*w, height-sortedTab[k], w, sortedTab[k])
                }
		}		
	else {
        console.log("Finished")
	}
	i++;
    
}