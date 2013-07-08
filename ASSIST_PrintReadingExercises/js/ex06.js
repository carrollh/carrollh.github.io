	function submitData(form) {
	var total = 0;
	confirm("Are you sure you want to submit these answers? (You cannot go back if you select 'Yes'.)");
	if(form.field01.value == 1.000) total += 1; 
	if(form.field02.value == 1.500) total += 1; 
	if(form.field03.value == 1.250) total += 1; 
	if(form.field04.value == 1.000) total += 1; 
	if(form.field05.value == 0.750) total += 1;
	if(form.field06.value == 1.000) total += 1;
	if(form.field07.value == 0.250) total += 1;
	if(form.field08.value == 0.500) total += 1; 
	if(form.field09.value == 2.000) total += 1; 
	if(form.field10.value == 150.0) total += 1;
	if(form.field11.value == 0.250) total += 1;
	if(form.field12.value == 1.130) total += 1;	
	
	alert("Your score is: " + (Math.round(total / 12 * 1000)/10) + "%");
}