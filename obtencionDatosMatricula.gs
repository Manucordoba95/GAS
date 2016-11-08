function emailOnFormSubmit(e) {
  
  //var doc = DocumentApp.getActiveDocument();
  var sheet = SpreadsheetApp.getActiveSheet();
  var fila = sheet.getActiveCell().getRow();
  
  var nombre = sheet.getRange("C"+ fila).getValue();
  var apes1 = sheet.getRange("D"+ fila).getValue();
  var apes2 = sheet.getRange("E"+ fila).getValue();
  var dni = sheet.getRange("F"+ fila).getValue();
  var nombreT = sheet.getRange("S"+ fila).getValue();
  var ape1T = sheet.getRange("T"+ fila).getValue();
  var ape2T = sheet.getRange("U"+ fila).getValue();
  var dniT = sheet.getRange("V"+ fila).getValue();
  var curso1 = sheet.getRange("AE"+ fila).getValue();
  var correo = sheet.getRange("B"+ fila).getValue();
  //var  = sheet.getRange("C", fila).getValue();
  
  //crear doaumento con información recopilada.
   var doc = DocumentApp.create('Matriculacion '+nombre+' '+apes1);
   var id = doc.getId();
   doc.getBody().insertParagraph(1, "El proceso de matriculación ha finalizado correctamente y el alumno "+nombre+apes1+apes2+" está inscrito en nuestra base de datos"+".");
   doc.getBody().insertParagraph(2,"");
   doc.getBody().insertParagraph(3, "Los datos del titular de la cuenta son "+nombreT+" "+ape1T+" "+ape2T+" con dni "+dniT+" compruebe que los datos son correctos"+".");
   doc.getBody().insertParagraph(4,"");
   doc.getBody().insertParagraph(5, "El curso en el que se ha matriculado es "+curso1+".");
   doc.getBody().insertParagraph(6,"");
   doc.getBody().insertParagraph(7, "Revisaremos todos los datos que nos has proporcionado en la busqueda de algun posible error, si es necesario se lo notificaremos a través del email que nos ha proporcionado.");
  
   
  
  
  
  // Send an email with a file from Google Drive attached as a PDF.
 var file = DriveApp.getFileById(id);
    var files = DriveApp.getFilesByName(SpreadsheetApp.getActiveSpreadsheet().getName());
  
    if ( files.hasNext() )
            file = files.next();
  
    var newFile = DriveApp.createFile(file.getAs('application/pdf')); 
 //No funciona para convertir //var adjunto = DocsList.getFileById(id).getAs('application/pdf');
  var adjunto = file.getAs('application/pdf');
   

  
  //Enviar correo con el archivo adjunto: 
 GmailApp.sendEmail(correo, 'Matricula EUSA', 'Por favor revise el documento.', {
     attachments: [adjunto],
     name: 'Matricula EUSA'});
   
}


