function ObtenerDatos() {
  
  //Entorno:
  var sheet = SpreadsheetApp.getActiveSheet();
  var fila = sheet.getActiveCell().getRow();
  
  var tiempo = sheet.getRange("A" + fila).getValue();
  var nombreApes = sheet.getRange("B"+fila).getValue();
  var correo = sheet.getRange("C"+fila).getValue();
  var opc = sheet.getRange("D"+fila).getValue();
  var mensaje;
    
  
  //Algoritmo:
  
  if(opc == "Desarrollo informático y nuevas tecnologías"){
    mensaje = "Hola "+nombreApes+" Has escogido el curso de desarrollo y nuevas tecnologías. \n Es para nosotros un placer contar con usted, para mas información pongasé en contacto con nosotros mediante telefono: 651010748  " 
  }else{
    if (opc == "Comunicación verbal y estudio del lenguaje"){
      mensaje = "Hola "+nombreApes+" Has escogido el curso de comunicación verbal y estudio del lenguaje \n Es para nosotros un placer contar con usted, para mas información pongasé en contacto con nosotros mediante telefono: 651010748  "  
      }else{
        if(opc == "Desarrollo artistico y físico"){
        mensaje = "Hola "+nombreApes+" Has escogido el curso de desarrollo artistico y físico \n Es para nosotros un placer contar con usted, para mas información pongasé en contacto con nosotros mediante telefono: 651010748  " 
        }else{ mensaje = "Tu respuesta no responde a ninguno de nuestros cursos, lo sentimos. para ponerse en contacto con  nosotros llame al 651010748"
        }//FinSi
  
      }//FinSi
  }//FinSi


//Envira email
  GmailApp.sendEmail(correo, "Sugerencia cursos", mensaje);
  

}//Fin función
