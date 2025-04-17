// الانتقال بين الأقسام
function scrollToSection(id) {
  document.querySelectorAll('main section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// تشغيل أول قسم
window.onload = () => {
  scrollToSection('home');
};

// تسجيل الدخول وحفظ الحسابات باستخدام LocalStorage
function register() {
  const username = prompt("اسم المستخدم:");
  const password = prompt("كلمة المرور:");
  if (username && password) {
    localStorage.setItem("user_" + username, password);
    alert("تم إنشاء الحساب بنجاح");
  }
}

function login() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;
  const storedPass = localStorage.getItem("user_" + username);
  if (storedPass === password) {
    alert("مرحباً " + username);
    scrollToSection('dashboard');
  } else {
    alert("بيانات غير صحيحة");
  }
}

// النشر في لوحة النشر
function publishPost() {
  const post = document.getElementById("postInput").value.trim();
  if (post.length > 0) {
    const postsDiv = document.getElementById("posts");
    const box = document.createElement("div");
    box.className = "card";
    box.innerText = post;
    postsDiv.prepend(box);
    document.getElementById("postInput").value = "";
  } else {
    alert("اكتب شيئًا أولاً");
  }
}
