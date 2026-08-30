"use strict";

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const daySelect = document.querySelector("[data-birth-day]");
const monthSelect = document.querySelector("[data-birth-month]");
const yearSelect = document.querySelector("[data-birth-year]");

if (daySelect && monthSelect && yearSelect) {
  for (let day = 1; day <= 31; day += 1) {
    daySelect.add(new Option(String(day), `dia-${day}`));
  }

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  months.forEach((month, index) =>
    monthSelect.add(new Option(month, `mes-${index + 1}`)),
  );

  const currentYear = new Date().getFullYear();
  for (let year = currentYear - 13; year >= currentYear - 100; year -= 1) {
    yearSelect.add(new Option(String(year), `ano-${year}`));
  }
}
