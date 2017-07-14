function sendNotification(msg, count) {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    msg && new Notification(msg + '  ' + new Date());
  }
  chrome.runtime && chrome.runtime.sendMessage({ "count": count });
}

setInterval(function () {

  var inbox = $('[title="Inbox"] + div')[0];
  var newCount = parseInt($(inbox).text());
  if (!isNaN(newCount) && newCount > 0) {
    sendNotification(newCount + ' New Email Unread', newCount);
  } else {
    sendNotification(null, 0);
  }

}, 30 * 1000)

//auto logout after 10 hours
setTimeout(function () {
  $('#O365_SubLink_ShellSignout').click();
}, 8 * 60 * 60 * 1000)