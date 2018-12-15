function includeHTML () {
	var file_objects;
	var index;
	var element;
	var file;
	var xhttp;
	
	file_objects = document.getElementsByTagName("*");
	for (index = 0; index < file_objects.length; index++)
	{
		element = file_objects[index];
		file = element.getAttribute("include_html");
		if(file)
		{
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {element.innerHTML = this.responseText;};
					if (this.status == 404) {element.innerHTML = "Page not found.";};
					element.removeAttribute("include_html");
					includeHTML();
				}
			}
			xhttp.open("GET",file,true);
			xhttp.send();
			
			return;
		}
	}
}