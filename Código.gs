


function ObtenerDatos() {
  
  //Entorno:
  var sheet = SpreadsheetApp.getActiveSheet();
  var fila = sheet.getActiveCell().getRow();
  
  var tiempo = sheet.getRange("A" + fila).getValue();
  var nombre = sheet.getRange("B" + fila).getValue();
  var correo = sheet.getRange("C" + fila).getValue();
  var apes = sheet.getRange("E" + fila).getValue();
  var extrovertido = sheet.getRange("F" + fila).getValue();
  var opc1Ambito = sheet.getRange("G" + fila).getValue();
  var opc2TrabajoGrupo = sheet.getRange("H" + fila).getValue();
  var opc3TiempoLibre = sheet.getRange("I" + fila).getValue();
  var opc4Turno = sheet.getRange("J" + fila).getValue();
  var enlaceNuevasTec = "goo.gl/forms/8y6re5jtBAGlTFwn2";
  var enlaceComunicacion = "goo.gl/forms/JN7A8GVZZi6rp5nt1";
  var enlacePeriodismo = "goo.gl/forms/7bLdPHjbCG5hFFkM2";
  
  var mensaje;
  
  if(opc1Ambito == "Nuevas tecnologías"){
    mensaje = "<p>Hola "+nombre+" "+apes+" según el  estudio realizado por los orientadores y profesionales de nuestro centro creemos que la "
    +"mejor opción para tí con tu forma de ser y de pensar es la del curso de Nuevas tecnologías pues según tu perfil creemos que puedes llegar a promocionar de manera positiva en este curso,"
    +" estarás rodeado de lo mejores profesionales y el mejor material didáctico para poder avanzar de forma progresiva en tu curso y poder ser un gran profesional del entorno "
    +"Si está decidido/a a iniciar con nosotros el curso tendrá que proceder al proceso de matricula, para hacerlo haga click en el siguieante enlace. Gracias </p>" +enlaceNuevasTec
    +"<p> Atentamente el grupo de coordinación y orientación de EUSA.</p>"
    
    
    }//FinSi
  
  if(opc1Ambito == "Comunicación audiovisual"){
    mensaje = "<p>Hola "+nombre+" "+apes+" según el estudio realizado por los orientadores y profesionales de nuestro centro creemos que la "
    +"mejor opción para tí con tu forma de ser y de pensar es la del curso de Comunicación audiovisual pues según tu perfil creemos que puedes llegar a promocionar de manera positiva en este curso,"
    +" estarás rodeado de lo mejores profesionales y el mejor material didáctico para poder avanzar de forma progresiva en tu curso y poder ser un gran profesional del entorno "
    +"Si está decidido/a a iniciar con nosotros el curso tendrá que proceder al proceso de matricula, para hacerlo haga click en el siguieante enlace. Gracias </p>" +enlaceComunicacion
    +"<p> Atentamente el grupo de coordinación y orientación de EUSA.</p>"
    
    
    }//FinSi
  
  if(opc1Ambito == "Información periodismo e investigación"){
    mensaje = "Hola "+nombre+" "+apes+" según un estudio realizado por los orientadores y profesionales de nuestro centro creemos que la "
    +"mejor opción para tí con tu forma de ser y de pensar es la del curso de Información periodismo e investigación pues según tu perfil creemos que puedes llegar a promocionar de manera positiva en este curso,"
    +" estarás rodeado de lo mejores profesionales y el mejor material didáctico para poder avanzar de forma progresiva en tu curso y poder ser un gran profesional del entorno "
    +"Si está decidido/a a iniciar con nosotros el curso tendrá que proceder al proceso de matricula, para hacerlo haga click en el siguieante enlace. Gracias " +enlacePeriodismo
    +" "
    + " Atentamente el grupo de coordinación y orientación de EUSA."
    
    
    }//FinSi
  
  
  //Correo
  
  //Envira email
  GmailApp.sendEmail(correo, "Sugerencia EUSA", mensaje);
  
  
}//FinFunction