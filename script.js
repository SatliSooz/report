// ============ تنظیمات ============
var CONFIG = {
  recipient: "abuse@telegram.org",
  subject: "URGENT: Reporting Channel for Child Exploitation Image, Hate Speech, and Violent Content – @kosmadararzeshii",
  body: [
    "To the Telegram Trust & Safety Team,",
    "",
    "I am reporting the channel @kosmadararzeshii (https://t.me/kosmadararzeshii) for severe and repeated violations of Telegram's Terms of Service, including the exploitation of a minor's image, hate speech, and incitement to violence.",
    "",
    "=== CRITICAL: EXPLOITATION OF A MINOR ===",
    "",
    "The channel's profile picture uses the image of a young child (approximately 6 months old) in a context of abuse and mistreatment. This image depicts a child being harmed, and it is being used publicly as the channel's identifying avatar. This constitutes serious exploitation of a minor and a violation of Telegram's policies on child safety. I urge the Trust & Safety team to treat this as a priority case and remove this image immediately.",
    "",
    "=== 1. Hate Speech and Incitement Against Public Figures ===",
    "",
    "The channel repeatedly posts text containing severe insults, slurs, and degrading language targeting political figures. Examples:",
    "https://t.me/kosmadararzeshii/34",
    "https://t.me/kosmadararzeshii/32",
    "https://t.me/kosmadararzeshii/31",
    "https://t.me/kosmadararzeshii/18",
    "https://t.me/kosmadararzeshii/4",
    "https://t.me/kosmadararzeshii/9",
    "",
    "=== 2. Highly Violent Content ===",
    "",
    "The channel has published content containing extreme violence. A clear example is the following post, which shows very graphic and violent material:",
    "https://t.me/kosmadararzeshii/49",
    "",
    "Other examples of violent and abusive visual content (GIFs with graphic imagery):",
    "https://t.me/kosmadararzeshii/6",
    "https://t.me/kosmadararzeshii/7",
    "https://t.me/kosmadararzeshii/25",
    "https://t.me/kosmadararzeshii/26",
    "https://t.me/kosmadararzeshii/30",
    "https://t.me/kosmadararzeshii/33",
    "",
    "=== Request ===",
    "",
    "I respectfully but urgently request that Telegram's Trust & Safety team:",
    "",
    "1. Immediately review this channel and the offending image in its profile picture.",
    "2. Remove the child exploitation image from the channel's avatar and all related content.",
    "3. Remove the violent post at https://t.me/kosmadararzeshii/49 and all other violent content.",
    "4. Take appropriate action against the channel, including restriction or permanent ban, in accordance with Telegram's Terms of Service prohibiting exploitation of minors, hate speech, and incitement to violence.",
    "",
    "This channel poses an ongoing risk. I request that this report be treated with high priority.",
    "",
    "Thank you for your attention to this matter.",
    "",
    "Sincerely,",
    "A concerned Telegram user"
  ].join("\n")
};

// ============ وضعیت ============
var sentCount = 0;
var SENT_KEY = "report_sent_count_kosmadararzeshii";

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