function insertionSort()
{
   
    if(i < len)
    {
        j = i-1;
        key = sortedTab[i]

        fill(255, 255, 132)
        rect(i*w, height-sortedTab[i], w, sortedTab[i])

        while(j >= 0 && key < sortedTab[j])
        {
            sortedTab[j+1] = sortedTab[j]
            j = j-1
        }
        sortedTab[j+1] = key
    }
    else {
		console.log('finished');
	}

    //Coloring before i with green
    /*for(let k=0; k<i; k++)
    {
        fill(0,255,0)
        rect((k)*w, height-sortedTab[k+1], w, sortedTab[k+1])
    }*/
	i++;
}