export function validateForm(event) {
  event.preventDefault(); // Предотвращаем отправку формы, если есть ошибка

  // Скрыть все ошибки перед валидацией
  const allErrors = document.querySelectorAll('.error-message');
  allErrors.forEach(error => {
    error.style.display = 'none'; // скрываем все ошибки
  });

  let isValid = true;

  // Проверяем поле имени
  const name = document.getElementById('name').value;
  const nameError = document.getElementById('nameError');

  if (name.trim() === "") {
    if (nameError) {
      nameError.innerText = "Пожалуйста, введите имя.";
      nameError.style.display = 'block';  // Показываем ошибку
    }
    isValid = false;
  }

  // Проверяем поле email
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');

  if (email.trim() === "") {
    if (emailError) {
      emailError.innerText = "Пожалуйста, введите e-mail.";
      emailError.style.display = 'block';  // Показываем ошибку
    }
    isValid = false;
  }

  // Проверяем поле телефона
  const phone = document.getElementById('phone').value;
  const phoneError = document.getElementById('phoneError');
  const phonePattern = /^\+7\d{10}$/;

  if (!phonePattern.test(phone)) {
    if (phoneError) {
      phoneError.innerText = "Введите корректный номер телефона в формате +7XXXXXXXXXX";
      phoneError.style.display = 'block';  // Показываем ошибку
    }
    isValid = false;
  }

  // Если форма прошла проверку, можно отправить ее
  if (isValid) {
    console.log("Форма успешно отправлена!");
    // Для отправки формы можно использовать:
    // event.target.submit();
  }

  return isValid; // Возвращаем результат валидации
}

// Вешаем обработчик события на форму
document.getElementById('myForm').addEventListener('submit', function(event) {
  validateForm(event);
});

// Автозаполнение номера телефона при вводе
document.getElementById("phone").addEventListener("input", (evt) => {
  let x = evt.target.value.replace(/\D/g, "");
  if (x.length > 0) {
    x = "+7" + x.substring(1, 11);
  }
  evt.target.value = x;
});
