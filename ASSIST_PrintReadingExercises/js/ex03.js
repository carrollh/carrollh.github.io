	function submitData(form) {
	var total = 0;
	confirm("Are you sure you want to submit these answers? (You cannot go back if you select 'Yes'.)");
	if(form.field01.value == 1.000) total += 1; 
	if(form.field02.value == 0.750) total += 1; 
	if(form.field03.value == 1.000) total += 1; 
	if(form.field04.value == 1.250) total += 1; 
	
	alert("Your score is: " + (Math.round(total / 4 * 1000)/10) + "%");
}