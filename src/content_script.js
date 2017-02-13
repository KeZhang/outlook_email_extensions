function sendNotification(msg) {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    new Notification(msg + '  ' + new Date());
  }
}

setInterval(function() {

  var inbox = $('[title="Inbox"] + div')[0];
  var newCount = parseInt($(inbox).text());
  if (!isNaN(newCount) && newCount > 0) {
      sendNotification(newCount +' New Email Unread');
  }

}, 30 * 1000)