const typingElement = document.getElementById("typing");
const text = "Formez-vous à la Tech simplement avec Digital Morocco School";
let index = 0;
let deleting = false;

function typeWriter() {
  if (!deleting) {
    typingElement.innerHTML = text.substring(0, index);
    index++;
    if (index > text.length) {
      deleting = true;
      setTimeout(typeWriter, 1500); // انتظر قليلاً قبل الحذف
      return;
    }
  } else {
    typingElement.innerHTML = text.substring(0, index);
    index--;
    if (index < 0) {
      deleting = false;
      setTimeout(typeWriter, 1000); // انتظر قليلاً قبل إعادة الكتابة
      return;
    }
  }
  setTimeout(typeWriter, 70); // سرعة الكتابة والحذف
}

document.addEventListener("DOMContentLoaded", typeWriter);
