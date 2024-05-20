const texts = ["Web Developer", "Engineering Student", "Professional Sleeper"]; // Array teks yang akan ditampilkan
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let isDeleting = false;

function type() {
  currentText = texts[count];
  if (!isDeleting) {
    letter = currentText.slice(0, ++index);
    document.querySelector('.profecy').textContent = letter;
    if (letter.length === currentText.length) {
      isDeleting = true;
      setTimeout(type, 2000);
    } else {
      setTimeout(type, 100);
    }
  } else {
    letter = currentText.slice(0, --index);
    document.querySelector('.profecy').textContent = letter;
    if (letter.length === 0) {
      isDeleting = false;
      count++;
      if (count === texts.length) {
        count = 0;
      }
      setTimeout(type, 500);
    } else {
      setTimeout(type, 100);
    }
  }
}

type();