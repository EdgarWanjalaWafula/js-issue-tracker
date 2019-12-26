<?php 

include 'partials/header.php'; 
?>
<body onload="fetchIssues()">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
            	<h6>JS Issue Tracker <small>by CodingTheSmartWay.com</small></h6> 
				<div class="jumbotron">
				<h3>Add New Issue:</h3>
					<form id="issueInputForm">
						<div class="form-group">
							<label for="issueDescInput">Description</label>
							<input type="text" class="form-control" id="issueDescInput" placeholder="Describe the issue ...">
						</div>
						<div class="form-group">
							<label for="issueDescInput">Severity</label>
							<select class="form-control" id="issueSeverityInput">
								<option value="Low">Low</option>
								<option value="Medium">Medium</option>
								<option value="High">High</option>
							</select> 
						</div>
						<div class="form-group">
							<label for="issueDescInput">Assigned To</label>
							<input type="text" class="form-control" id="issueAssignedToInput" placeholder="Enter responsible ...">
						</div>
						<button type="submit" class="btn btn-primary text-white">Add</button>
					</form>
				</div>
            </div>
            <div class="col-md-12">
				<!-- <div id="issuesList"> -->
					<table class="table">
						<thead>
							<tr>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody id="issuesList">

						</tbody>
					</table>
				<!-- </div> -->
            </div>
        </div>
    </div> 
    <?php 

include 'partials/footer.php'; 
?>