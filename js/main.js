'use strict'

document.getElementById("issueInputForm").addEventListener("submit", saveIssue); 

function saveIssue(e){
	var issueDesc         = document.querySelector("#issueDescInput").value; 
	var issueSeverity     = document.querySelector("#issueSeverityInput").value; 
	var issueAssignedTo   = document.querySelector("#issueAssignedToInput").value; 
	var issueId   		= chance.guid(); 

	// create a new object picked from input fields 
	var issueObj = {
		id:issueId, 
		desc: issueDesc, 
		severity: issueSeverity, 
		assigned: issueAssignedTo, 
		// status:issueStatus
	}

	if(localStorage.getItem('issues')== null){

		// create a new array 
		var issues = []; 
		issues.push(issueObj); 
		// console.log(issues); 
		
		localStorage.setItem('issues', JSON.stringify(issues));
	} else {

		// retrieve all items in local storage 
		var allIssues = JSON.parse(localStorage.getItem('issues')); 
		allIssues.push(issueObj); 	
		localStorage.setItem('issues', JSON.stringify(allIssues));

		console.log(allIssues); 
	}

	// Retrieve all issues 
	fetchIssues(); 

	e.preventDefault(); 
}

function fetchIssues(){	
	
	// Fetch issues as objects 
	var allIssues = JSON.parse(localStorage.getItem('issues')); 

	var issuesList = document.getElementById("issuesList"); 
	issuesList.innerHTML = ""; 
	
	for (let index = 0; index < allIssues.length; index++) {
		var iDesc 		= allIssues[index].desc; 
		var iSeverity 	= allIssues[index].severity; 
		var iAssigned 	= allIssues[index].assigned; 
		var iId 		= allIssues[index].id; 

		issuesList.innerHTML += 	'<tr>' +
										'<td>' + iId + '</td>' + 
										'<td>' + iAssigned + '</td>' + 
										'<td>' + iSeverity + '</td>' + 
										'<td>' + iDesc + '</td>' + 
									'</tr>'; 
	}

}