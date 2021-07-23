let max = 400
let min = 20
let tab = []
let len, sortedTab
let i =0
let slider, slider_width
let values = []
let height_div, width_div
let is_playing = false
let size
let div
let is_shown = false
let whats_shown =""
let div_show
let width_resize
let b

function setup() {
	setupWidth()
	size = select('#size')
	len = parseInt(size.value())
	w = Math.floor(width_div/len)
	tab = new Array(len)
	generateArray()


	//Creating slider, randomize and sort button
	slider = createSlider(2, 20, 4, 2);
	randomize = select('#randomize')
	button = createButton('Sort')


	//Putting slider, sort and speed text(1x, 4x) inside a container
	div = createDiv()
	div2 = createDiv()
	div.id('div_sort')
	div2.id('xs')

	button.id('sort')
	slider.id('slider')

	x=createP('1x')
	x2=createP('4x')
	
	//If you want to change postion of slider and sort switch div and div2
	button.parent(div)
	x.id("x1")
	x2.id("x2")
	x.parent(div2)
	slider.parent(div2)
	x2.parent(div2)


	//styling slider
 	slider.style('width', '130px');

	//Creating a Button and making the loop only starts when it's clicked
	//speed=createP("Speed")
	//speed.position(width/2+(width*0.25))
	
	//Show information about the algorithm div
	div_show = createDiv()
	div_show.class("info")

	//So I can have a footer under all divs
	div2.parent("container")
	div.parent("container")
	div_show.parent("container")
}

async function draw() {

	// new setup() Canvas relative to new windowWidth (Responsive)
	if(windowWidth != width_resize){
		setupWidth()
	}


	sel = select('#algorithm')
	// Disable button Sort if not an Algorithm is slected
	if(sel.value() == "Sort Algorithm")
	{
		button.attribute('disabled','')
	}
	else{
		button.removeAttribute('disabled');
	}
	//getting the size and speed
	size = select('#size')
	size.changed(generateArray)
	val =slider.value()
	
	frameRate(val)
	
	randomize.mousePressed(generateArray)

	button.mousePressed(play)
	show()
	if(is_shown == false || whats_shown != sel.value())
	{
		showInfo(sel.value())
	}

	if(is_playing == true)
	{
		switch(sel.value())
		{
			case 'Bubble Sort' : 
				bubbleSort()
				break
			case 'Selection Sort' : 
				selectionSort()
				break	
			case 'Insertion Sort' : 1
				insertionSort()
				break	
			case 'Merge Sort' : 
				i += 1.95
				if(i > len+1)
				{
					console.log("Finisheed")
					is_playing = false
				}
				await mergeSort(sortedTab, 0, len-1)
					break
			/*case 'Quick Sort':
				quickSort(sortedTab, 0, len-1)*/
		}
	}

}
// Keep track if button Sort pressed or not(Play / Stop)
function play()
{
	is_playing = !is_playing
}
function  moreWidth() {
	slider.style('width', '120px');
	
}
function  lessWidth() {
	slider.style('width', '10px');
	
}
function showInfo(info){

	if(info == 'Bubble Sort')
	{
		div_show.html("<hr><div id='left_info'><h1>Bubble Sort</h1><p><a href='https://en.wikipedia.org/wiki/Bubble_sort' target='_blank'>Bubble Sort</a> is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements 'bubble' to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems</p></div><div class = 'vertical'></div><div id='O'><h3>Performance</h3>Worst-case time complexity O(n2)<br>Average time complexity	O(n2)<br>Best-case time complexity	O(n)<br>Worst-case space complexity	O(1)</div></div>")
		is_shown = true
		whats_shown = 'Bubble Sort'

	}
	if(info == 'Selection Sort')
	{
		div_show.html("<hr><div id='left_info'><h1>Selection Sort</h1><p><a href='https://en.wikipedia.org/wiki/Selection_sort' target='_blank'>Selection Sort</a> is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.</p></div><div class = 'vertical'></div><div id='O'><h3>Performance</h3>Worst-case time complexity O(n2)<br>Average time complexity	O(n2)<br>Best-case time complexity	O(n2)<br>Worst-case space complexity	O(1)</div></div>")
		is_shown = true
		whats_shown = 'Selection Sort'

	}
	if(info == 'Insertion Sort')
	{
		div_show.html("<hr><div id='left_info'><h1>Insertion Sort</h1><p><a href='https://en.wikipedia.org/wiki/Insertion_sort' target='_blank'>Insertion Sort</a> is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.</p></div><div class = 'vertical'></div><div id='O'><h3>Performance</h3>Worst-case time complexity	O(n2)<br>Average time complexity	O(n2)<br>Best-case time complexity	O(n)<br>Worst-case space complexity	O(1)<br></div>")
		is_shown = true
		whats_shown = 'Insertion Sort'

	}
	if(info == 'Merge Sort')
	{
		div_show.html("<hr><div id='left_info'><h1>Merge Sort</h1><p><a href='https://en.wikipedia.org/wiki/Merge_sort' target='_blank'>Merge Sort</a> is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows:<br><ol><li>Divide the unsorted list into n sublists, each containing one element(a list of one element is considered sorted)</li><li>Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.</li></ol></p></div><div class = 'vertical'></div><div id='O'><h3>Performance</h3>Worst-case time complexity	O(n log n)<br>Average time complexity	O(n log n)<br>Best-case time complexity	O(n log n)<br>Worst-case space complexity	O(n)<br></div></div>")
		is_shown = true
		whats_shown = 'Merge Sort'
	}

}
function switchIsShown()
{
	is_shown = !is_shown
}


//create canvas and changes the width of the array(basicly new setup())
function setupWidth()
{
	//b = document.getElementById("bars");
	//width_div = b.clientWidth;
	//height_div = b.clientHeight;

	b = select("#bars")
	width_div = b.width;
	height_div = b.height;
	var canvas = createCanvas(width_div, height_div);
	canvas.parent('bars')
	size = select('#size')
	len = parseInt(size.value())
	w = Math.floor(width_div/len)
	tab = new Array(len)
}