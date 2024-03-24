function isSameType(value1, value2) 
{
  //your js code here
	try {
		if(typeof(value1)==typeof(value2))
	{
	window.alert(true);
	}
	
	else
		window.alert(false);
	} catch (error) 
	{
		window.alert(false);
	}
	
}

 //do not change the code below.
//let value1 = prompt("Enter Start of the Range.");
//let value2 = prompt("Enter End Of the Range.");
isSameType(value1, value2);

