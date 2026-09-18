// ============ تنظیمات ============
var CONFIG = {
  recipient: "abuse@telegram.org",
  subject: "Reporting Channel for Hate Speech, Extremist Content, and Exploitation of a Minor's Image – @YouArPrick",
  body: [
    "To the Telegram Trust & Safety Team,",
    "",
    "I am reporting the channel @YouArPrick (https://t.me/YouArPrick) for violating Telegram's Terms of Service. This channel repeatedly publishes content that constitutes hate speech, incitement to violence, and exploitation of a minor.",
    "",
    "1. Exploitation of a Minor's Image",
    "The channel's profile picture uses the image of a 6-month-old infant girl in a degrading and abusive context. Using a child's image this way, without consent, for mockery or abuse is a serious violation and may constitute exploitation of a minor.",
    "",
    "2. Hate Speech and Incitement Against Public Figures",
    "The channel repeatedly posts text containing severe insults, slurs, and degrading language targeting political figures. Examples:",
    "https://t.me/YouArPrick/34",
    "https://t.me/YouArPrick/32",
    "https://t.me/YouArPrick/31",
    "https://t.me/YouArPrick/18",
    "https://t.me/YouArPrick/4",
    "https://t.me/YouArPrick/9",
    "",
    "3. Violent and Abusive Visual Content",
    "The channel also posts GIFs containing graphic, abusive, and violent imagery intended to incite hatred and violence. Examples:",
    "https://t.me/YouArPrick/6",
    "https://t.me/YouArPrick/7",
    "https://t.me/YouArPrick/25",
    "https://t.me/YouArPrick/26",
    "https://t.me/YouArPrick/30",
    "https://t.me/YouArPrick/33",
    "",
    "Request",
    "I respectfully request that Telegram's Trust & Safety team review this channel and take appropriate action, including removal of the channel and/or the offending content, in accordance with Telegram's Terms of Service prohibiting exploitation of minors, hate speech, and incitement to violence.",
    "",
    "Thank you for your attention to this matter.",
    "",
    "Sincerely,",
    "A concerned Telegram user"
  ].join("\n")
};

// ============ وضعیت ============
var sentCount = 0;
var SENT_KEY = "report_sent_count_youarprick";

// ============ توابع ============

function buildMailtoLink() {
  var subjectEncoded = encodeURIComponent(CONFIG.subject);
  var bodyEncoded = encodeURIComponent(CONFIG.body);
  return "mailto:" + CONFIG.recipient + "?subject=" + subjectEncoded + "&body=" + bodyEncoded;
}

function showPreview() {
  var preview = document.getElementById("emailPreview");
  if (preview) {
    preview.textContent = "Subject: " + CONFIG.subject + "\n\n" + CONFIG.body;
  }
}

function updateCounter() {
  var counter = document.getElementById("counter");
  if (!counter) return;
  if (sentCount === 0) {
    counter.textContent = "آماده برای ارسال";
  } else {
    counter.textContent = "✅ " + sentCount + " گزارش ارسال شده";
  }
}

function sendReport() {
  var link = buildMailtoLink();
  window.location.href = link;

  sentCount++;
  try {
    localStorage.setItem(SENT_KEY, String(sentCount));
  } catch (e) {}
  updateCounter();

  setTimeout(function() {
    alert("اگر ایمیل باز شد، لطفاً دکمه Send را بزنید.\nمتشکریم که به حفظ امنیت تلگرام کمک می‌کنید.");
  }, 1500);
}

document.addEventListener("DOMContentLoaded", function() {
  try {
    var saved = localStorage.getItem(SENT_KEY);
    if (saved) sentCount = parseInt(saved, 10) || 0;
  } catch (e) {}

  showPreview();
  updateCounter();

  var btn = document.getElementById("reportBtn");
  if (btn) {
    btn.addEventListener("click", sendReport);
  }
});