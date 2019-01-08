$(document).ready(function () {
	
	$.ajax({
            async: true,
            type: "POST",
            url: "http://35.186.166.253/getDepartamentos"
            
			, dataType: "html",
            success: function (data)
            {
                var json = eval("(" + data + ")");
				$("#selectDepartamento").html("");
				$("#selectDepartamento").append(new Option("SELECCIONE ....", ""));
                for (x in json["data"]) {
					$("#selectDepartamento").append(new Option(json["data"][x]["nombre"], json["data"][x]["idlugar"]));
				}
            }
        });
		
	$("#selectMunicipio").html("");
	$("#selectMunicipio").append(new Option("SELECCIONE ....", ""));
	
	
	$.ajax({
            async: true,
            type: "POST",
            url: "http://35.186.166.253/getDepartamentos"
            
			, dataType: "html",
            success: function (data)
            {
                var json = eval("(" + data + ")");
				$("#selectDepartamento").html("");
                for (x in json["data"]) {
					$("#selectDepartamento").append(new Option(json["data"][x]["nombre"], json["data"][x]["idlugar"]));
				}
            }
        });
	
	$('#btnSubmit').click(function (){
		console.log("hola");
		
		$.ajax({
            async: true,
            type: "POST",
            url: "http://35.186.166.253/registrarNacimiento",
            data: {nombre: $("#nombre").val()
					,apellido:$("#apellido").val()
					,fechaNacimiento:$("#fechaNacimiento").val()
					,genero:$("#selectGenero option:selected").val()
					,lugarNacimiento:$("#selectMunicipio option:selected").val()
					,direccion:$("#lugarNacimiento").val()
					,cuiPadre:$("#cuiPadre").val()
					,cuiMadre:$("#cuiMadre").val()
					}
			, dataType: "html",
            success: function (data)
            {
                var json = eval("(" + data + ")");
				if(json["status"] == "1"){
					$("#notificacion").html(getNotifCorrecta("se agrego correctamente"));
				}else{
					$("#notificacion").html(getNotifError("se produjo un error al agregar"));
				}
                
            }
        });
		
	});
	
	function getNotifCorrecta(texto){
		var textoN = "<div class=\"alert alert-success alert-dismissible \" role=\"alert\"> "
				  +"<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">"
					+"<span aria-hidden=\"true\">&times;</span>"
				  +"</button>"
				 +" <strong>Exito!</strong> "+ texto + "."
				+"</div>";
				return textoN;
	}
	function getNotifError(){
		var textoN = "<div class=\"alert alert-danger alert-dismissible \" role=\"alert\"> "
				  +"<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">"
					+"<span aria-hidden=\"true\">&times;</span>"
				  +"</button>"
				 +" <strong>Error!</strong> "+ texto + "."
				+"</div>";
				return textoN;
	}

	$('#selectDepartamento').change(function (){
		$.ajax({
            async: true,
            type: "POST",
            url: "http://35.186.166.253/getMunicipios"
            , data: {departamento:$("#selectDepartamento option:selected").val()}
			, dataType: "html",
            success: function (data)
            {
                var json = eval("(" + data + ")");
				$("#selectMunicipio").html("");
                for (x in json["data"]) {
					$("#selectMunicipio").append(new Option(json["data"][x]["nombre"], json["data"][x]["idlugar"]));
				}
            }
        });
	});
});