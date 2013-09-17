	
	
	var server;
	var username;
	var password;
	
	$(document).on('pageinit', '#home', function() {
		//alert("ciao sono home");
		server = localStorage.getItem('server');
		username = localStorage.getItem('username');
		password = localStorage.getItem('password');
		
		if (server == null || server == "" || username == "" || password == "")
		{
			// cambio alla pagina option
			$.mobile.changePage( $("#option"), "slide", true, true);
		}
		
	});
	
	$(document).on('pageinit', '#option', function() {
		//alert("ciao sono option");
		
		$('#txtUrl').val(server);
		$('#txtUsername').val(username);
		$('#txtPassword').val(password);

			
			
	});

	
	$('#btnSave').click(function() {
		server = $('#txtUrl').val();
		username = $('#txtUsername').val();
		password = $('#txtPassword').val();
		if (server != "" && username != "" && password != "")
		{
			localStorage.setItem('server',server);
			localStorage.setItem('username',username);
			localStorage.setItem('password',password);
			//alert('Saved');
			$( "#popupSaved" ).popup("open");
		}
		else
		{
			alert("fill all fields!")
		}
	    
	});