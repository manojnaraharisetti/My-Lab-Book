

  function visitPage(pageName) {
	let pageVisits = localStorage.getItem('pageVisits');
	pageVisits = pageVisits ? JSON.parse(pageVisits) : {};
  
	pageVisits[pageName] = (pageVisits[pageName] || 0) + 1;
  
	localStorage.setItem('pageVisits', JSON.stringify(pageVisits));
  }
  
  function displayVisitCounts() {
	let pageVisits = localStorage.getItem('pageVisits');
	pageVisits = pageVisits ? JSON.parse(pageVisits) : {};
  
	let visitCounts = '';
	for (let pageName in pageVisits) {
	  visitCounts += 'You visited ' + pageName + ' ' + pageVisits[pageName] + ' time(s)<br>';
	}
  
	// Display the results on the webpage
	// Assuming 'content' is the class of the element where you want to display the results
	let contentElement = document.getElementById('content');
	contentElement.innerHTML += '<p>' + visitCounts + '</p>';
  
	localStorage.removeItem('pageVisits');
  }
  	