// Функция для расчета ежемесячного платежа
function calculatePayment() {
  // Получаем входные значения
  var amount = document.getElementById("amount").value;
  var interest = document.getElementById("interest").value;
  var years = document.getElementById("years").value;

  // Рассчитываем ежемесячную процентную ставку и количество платежей
  var monthlyInterest = interest / 100 / 12;
  var payments = years * 12;

  // Рассчитываем ежемесячный платеж
  var x = Math.pow(1 + monthlyInterest, payments);
  var monthlyPayment = (amount * x * monthlyInterest) / (x - 1);

  // Округляем ежемесячный платеж до двух знаков после запятой
  monthlyPayment = monthlyPayment.toFixed(2);

  // Рассчитываем общую сумму платежа
  var totalPayment = (monthlyPayment * payments).toFixed(2);

  // Рассчитаем сумму переплат
  var totalInterest = (totalPayment - amount).toFixed(2);

  // Показываем результаты
  var html = "<h2>Результаты</h2>";
  html +=
    "<p>Ежемесячный платеж: <span class='sum'>" +
    monthlyPayment +
    "</span></p>";
  html +=
    "<p>Общая сумма платежа: <span class='sum'>" + totalPayment + "</span></p>";
  html += "<p>Переплата: <span class='sum'>" + totalInterest + "</span></p>";

  // Обновляем раздел результатов
  document.getElementById("results").innerHTML = html;
}

// Прикрепляем функцию расчета платежа к событию отправки формы
document.getElementById("loan-form").addEventListener("submit", function (e) {
  e.preventDefault();
  calculatePayment();
});
