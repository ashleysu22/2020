function reset(){
	//cat
	document.getElementById("main").style.display = 'block';

	//eyes
	document.getElementById("eye1").style.display = 'block';
	document.getElementById("eye2").style.display = 'block';
	document.getElementById("eye3").style.display = 'block';
	document.getElementById("eye4").style.display = 'block';
	document.getElementById("eye5").style.display = 'none';
	document.getElementById("eye6").style.display = 'none';
	
	//snooze
	document.getElementById("small_z1").style.display = 'none';
	document.getElementById("small_z2").style.display = 'none';
	document.getElementById("small_z3").style.display = 'none';
	document.getElementById("medium_z1").style.display = 'none';
	document.getElementById("medium_z2").style.display = 'none';
	document.getElementById("medium_z3").style.display = 'none';
	document.getElementById("large_z1").style.display = 'none';
	document.getElementById("large_z2").style.display = 'none';
	document.getElementById("large_z3").style.display = 'none';
	
	//walk
	document.getElementById("walk").style.display = 'none';
	
	//pet
	document.getElementById("pet").style.display = 'none';
}

function sleep(){
	document.getElementById("pet").style.display = 'none';
	document.getElementById("main").style.display = 'block';
	document.getElementById("walk").style.display = 'none';
	
	//eyes
	document.getElementById("eye1").style.display = 'none';
	document.getElementById("eye2").style.display = 'none';
	document.getElementById("eye3").style.display = 'none';
	document.getElementById("eye4").style.display = 'none';
	document.getElementById("eye5").style.display = 'block';
	document.getElementById("eye6").style.display = 'block';
	
	//snooze
	document.getElementById("small_z1").style.display = 'block';
	document.getElementById("small_z2").style.display = 'block';
	document.getElementById("small_z3").style.display = 'block';
	document.getElementById("medium_z1").style.display = 'block';
	document.getElementById("medium_z2").style.display = 'block';
	document.getElementById("medium_z3").style.display = 'block';
	document.getElementById("large_z1").style.display = 'block';
	document.getElementById("large_z2").style.display = 'block';
	document.getElementById("large_z3").style.display = 'block';
}

function walk(){
	document.getElementById("walk").style.display = 'block';
	document.getElementById("main").style.display = 'none';
	document.getElementById("pet").style.display = 'none';
}

function pet(){
	document.getElementById("main").style.display = 'none';
	document.getElementById("walk").style.display = 'none';
	document.getElementById("pet").style.display = 'block';
	
	//smile eyes
	document.getElementById("eye1").style.display = 'none';
	document.getElementById("eye2").style.display = 'none';
	document.getElementById("eye3").style.display = 'none';
	document.getElementById("eye4").style.display = 'none';
	document.getElementById("eye7").style.display = 'block';
	document.getElementById("eye8").style.display = 'block';
	
	//swinging tail
	document.getElementById("tail_swing").style.display = 'block';
	
	//heart
	document.getElementById("heart").style.display = 'block';
}
