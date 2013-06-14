function submitData(form) {
	var total = 0;
	confirm("Are you sure you want to submit these answers? (You cannot go back if you select 'Yes'.)");
	if(form.field01.value == 0.750) total += 10; 
	if(form.field02.value == 0.375) total += 10; 
	if(form.field03.value == 1.250) total += 10; 
	if(form.field04.value == 0.875) total += 10; 
	if(form.field05.value == 1.500) total += 10; 
	if(form.field06.value == 3.250) total += 10; 
	if(form.field07.value == 0.875) total += 10; 
	if(form.field08.value == 1.750) total += 10; 
	if(form.field09.value == 1.000) total += 10; 
	if(form.field10.value == 2.500) total += 10; 
	
	alert("Your score is: " + total + "%");
}	