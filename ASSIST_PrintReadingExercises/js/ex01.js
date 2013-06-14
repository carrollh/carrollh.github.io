	function submitData(form) {
	var total = 0;
	confirm("Are you sure you want to submit these answers? (You cannot go back if you select 'Yes'.)");
	if(form.field01.value == 1.375) total += 1; 
	if(form.field02.value == 1.125) total += 1; 
	if(form.field03.value == 0.500) total += 1; 
	if(form.field04.value == 0.750) total += 1; 
	if(form.field05.value == 0.500) total += 1;
	if(form.field06.value == 1.625) total += 1;
	if(form.field07.value == 1.625) total += 1;
	if(form.field08.value == 2.625) total += 1; 
	if(form.field09.value == 0.375) total += 1; 
	if(form.field10.value == 2.000) total += 1; 
	if(form.field11.value == 1.125) total += 1;
	
	alert("Your score is: " + (Math.round(total / 11 * 1000)/10) + "%");
}