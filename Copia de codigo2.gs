function pdfprueba() {
    var file = null;
  
    var files = DriveApp.getFilesByName(SpreadsheetApp.getActiveSpreadsheet().getName());
  
    if ( files.hasNext() )
            file = files.next();
  
    var newFile = DriveApp.createFile(file.getAs('application/pdf')); 
  
}
