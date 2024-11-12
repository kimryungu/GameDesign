function logEvent(eventId, eventDate, eventTime, id, eventType, comment, coin) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Logs");
  sheet.appendRow([eventId, eventDate, eventTime, id, eventType, comment, coin]);
}


function doGet(e) {
  var eventId = e.parameter.eventId;
  var eventDate = e.parameter.eventDate;
  var eventTime = e.parameter.eventTime;
  var id = e.parameter.id;
  var eventType = e.parameter.eventType;
  var comment = e.parameter.comment;
  var coin = e.parameter.coin;
  
  logEvent(eventId, eventDate, eventTime, id, eventType, comment, coin);
  
  return ContentService.createTextOutput("Logged Successfully");
}
