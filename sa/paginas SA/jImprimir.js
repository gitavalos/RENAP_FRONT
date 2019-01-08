$(document).ready(function () {
	$('#buscar').click(function (){
		$.ajax({
            async: true,
            type: "GET",
            url: "http://35.186.166.253/consultarDPI"
            ,data:{cui:$('#cui').val()}
			, dataType: "html",
            success: function (data)
            {
                var json = eval("(" + data + ")");
				var data = json["data"];
				$("#nombre").val(data["nombre"]);
				$("#apellido").val(data["apellido"]);
				$("#genero").val(data["genero"]);
				$("#fechaNacimiento").val(data["fechaNacimiento"]);
				$("#pais").val(data["pais"]);
				$("#departamento").val(data["departamento"]);
				$("#municipio").val(data["municipio"]);
				
				$("#cuiPadre").val(data["cuiPadre"]);
				$("#nombrePadre").val(data["nombrePadre"]);
				$("#apellidoPadre").val(data["apellidoPadre"]);
				$("#fechaNacimientoPadre").val(data["fechaNacimientoPadre"]);
				$("#paisPadre").val(data["paisPadre"]);
				$("#departamentoPadre").val(data["departamentoPadre"]);
				$("#municipioPadre").val(data["municipioPadre"]);
				
				
				$("#cuiMadre").val(data["cuiMadre"]);
				$("#nombreMadre").val(data["nombreMadre"]);
				$("#apellidoMadre").val(data["apellidoMadre"]);
				$("#fechaNacimientoMadre").val(data["fechaNacimientoMadre"]);
				$("#paisMadre").val(data["paisMadre"]);
				$("#departamentoMadre").val(data["departamentoMadre"]);
				$("#municipioMadre").val(data["municipioMadre"]);
				
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
});