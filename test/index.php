<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=windows-1252"><title>Index of /</title>
	<script type="text/javascript">
		function refresh() {
		  var req = new XMLHttpRequest();
		  console.log("Grabbing Value");
		  req.onreadystatechange = function () {
			if (req.readyState == 4 && req.status == 200) {
			  document.getElementById('amne').innerText = req.responseText;
			}
		  }
		  req.open("GET", 'number.txt', true); // Grabs whatever you've written in this file
		  req.send(null);
		}
		
		function init() // This is the function the browser first runs when it's loaded.
		{
		  refresh() // Then runs the refresh function for the first time.
		  var int = self.setInterval(function () {
			refresh()
		  }, 1000); // Set the refresh() function to run every 10 seconds. [1 second would be 1000, and 1/10th of a second would be 100 etc.
		}
		</script>
</head>
<body onload="init()">
	<div id="main">
		<div id="updateMe">
			<h2>Amne's favourite number is:</h2>
			<h1 id="amne"></h1>
		</div>
	</div>
</body>
</html>