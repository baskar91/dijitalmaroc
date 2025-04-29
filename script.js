// تأثير الكتابة على عنصر الـ typing
const typingElement = document.getElementById("typing");
const text = "Formez-vous à la Tech simplement avec Digital Morocco School";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // سرعة الكتابة
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);
