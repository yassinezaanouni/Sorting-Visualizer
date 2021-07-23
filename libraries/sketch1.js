let max = 550
let min = 100
let tab = []
let len, sortedTab
let w = 10
let i =0
let slider, val
let values = []
let c = 0 
function bubbleSort()
{
	for(let i=0; i < sortedTab.length; i++)
	{
		for(let j = 0; j < sortedTab.length-i-1; j++)
		{
			if(sortedTab[j+1] < sortedTab[j])
			{
				let temp = sortedTab[j]
				sortedTab[j] = sortedTab[j+1]
				sortedTab[j+1] = temp
			}
			
		}
	}
}

function generateArray()
{
	for(let i=0; i < tab.length; i++)
	{
		// Two Random so it can avoid two barss with the same height
		tab[i] =Math.floor(Math.random() * (max-min) + min) + Math.floor(Math.random() * 150);

	}

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// put setup code here

	//generating the array using width
	len = Math.floor(width/w)
	tab = new Array(len)
	generateArray()
	sortedTab = Array.from(tab)
	len = tab.length
	
	//Creating slider
	slider = createSlider(1, 20, 4, 2);
 	slider.style('width', '80px');
	
	//Creating a Button and making the loop only starts when it's clicked
	button = createButton('Bubble Sort')
	noLoop()

}


async function draw() {
	// put drawing code here
	background(255)
	
	//speed of slider(frameRate)
	val = slider.value()
	frameRate(val)
	button.mousePressed(loop);

	/*for(let j = 1; j < len-i; j++)
	{
		if(sortedTab[j] === tab[j])
		{
			fill(255,255,0)
			rect(i*w, height-sortedTab[i], w, sortedTab[i])
			fill(255,255,0)
			rect(j*w, height-sortedTab[j], w, sortedTab[j])
		}
	}*/


	for(let k = 0; k < len; k++)
	{
		
		if(i < len)
		{
			fill(255,0,0)
		
		}else{
			fill(0,255,0)
		}
		rect(k*w, height-sortedTab[k], w, sortedTab[k])
	}
	//Bubble sort Algorithm

	if(i < len)
	{
		values = []
		c = 0
		for(let j = 0; j < len-i-1; j++)
		{
			if(sortedTab[j+1] < sortedTab[j])
			{
				values[c] = sortedTab[j]
				values[c+1] = sortedTab[j+1]
				c++
				let temp = sortedTab[j]
				sortedTab[j] = sortedTab[j+1]
				sortedTab[j+1] = temp
				if(i>1)
				{
				await sleep(5000)
				fill(255,255,0)
				rect((j)*w, height-sortedTab[j], w, sortedTab[j])
				rect((j+1)*w, height-sortedTab[j], w, sortedTab[j])
				}

			}
		}
	}	
	else {
		console.log('finished');
		noLoop();
	}
	i++;
	let unique = [...new Set(values)]
	console.log(unique)

	

	
	
	
	//Drawing the bars
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }

