function bubbleSort()
{
    if(i < len)
	{
		for(let j = 0; j < len-i-1; j++)
		{
			if(sortedTab[j+1] < sortedTab[j])
			{
				let temp = sortedTab[j]
				sortedTab[j] = sortedTab[j+1]
				sortedTab[j+1] = temp
			}	
		}
        
	}	
	else {
		console.log('finished');
	}
	i++;
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }
