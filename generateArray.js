function generateArray()
{
	// In generate array because after size is changed we generate new array once
	len = parseInt(size.value())
	w = Math.floor(width_div/len)
	tab = new Array(len)


	for(let i=0; i < tab.length; i++)
	{
		// Two Random so it can avoid two barss with the same height
		tab[i] =Math.floor(Math.random() * (max-min) + min) + Math.floor(Math.random() * min);
	}
	sortedTab = Array.from(tab)
	i = 0
	//each time we randomize we  show
	show()
}