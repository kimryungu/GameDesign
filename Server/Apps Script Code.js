// Logs 시트에 기록하는 함수
function logEvent(eventId, eventDate, eventTime, id, eventType, comment, coin) {
  var sheetLogs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Logs");
  sheetLogs.appendRow([eventId, eventDate, eventTime, id, eventType, comment, coin]);
}

// buylog 시트에만 기록하는 함수
function logEventForBuyLog(buyData) {
  var sheetBuyLog = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("buylog");
  sheetBuyLog.appendRow([
    buyData.eventId,
    buyData.eventDate,
    buyData.eventTime,
    buyData.id,
    buyData.eventType,
    buyData.buy,
  ]);
}

// doGet 함수
function doGet(e) {
  // Logs 시트에 기록
  if (e.parameter.eventType !== "구매 버튼 클릭") {
    var logData = {
      eventId: e.parameter.eventId,
      eventDate: e.parameter.eventDate,
      eventTime: e.parameter.eventTime,
      id: e.parameter.id,
      eventType: e.parameter.eventType,
      comment: e.parameter.comment,
      coin: e.parameter.coin,
    };
    logEvent(logData.eventId, logData.eventDate, logData.eventTime, logData.id, logData.eventType, logData.comment, logData.coin);
  }

  // buylog 시트에만 기록 (구매 버튼 클릭 이벤트일 경우)
  if (e.parameter.eventType === "구매 버튼 클릭") {
    var buyData = {
      eventId: e.parameter.eventId,
      eventDate: e.parameter.eventDate,
      eventTime: e.parameter.eventTime,
      id: e.parameter.id,
      eventType: e.parameter.eventType,
      buy: e.parameter.buy,
    };

    // buylog에 기록
    logEventForBuyLog(buyData);
  }

  return ContentService.createTextOutput("Logged Successfully");
}
