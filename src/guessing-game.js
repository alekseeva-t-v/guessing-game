class GuessingGame {
  min = 0;
  max = 0;

  /**
   * Принимает и сохраняет минимальное и максимальное значение диапазона чисел для угадывания.
   *
   * @param {number} min Минимальное число.
   * @param {number} max Максимальное число.
   */
  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  /**
   * Возвращает предполагаемый вариант решения, в виде среднего значения диапазона.
   *
   * @return {number} предполагаемый вариант решения.
   */
  guess() {
    return Math.round((this.min + this.max) / 2);
  }

  /**
   * Вызывается, если предыдущий вызов `guess()` вернул число, большее, чем ответ. Сохраняет новое максимальное значение
   *
   */
  lower() {
    this.max = Math.round((this.min + this.max) / 2);
  }

  /**
   * Вызывается, если предыдущий вызов `guess()` вернул число, которое меньше ответа. Сохраняет новое минимальное значение
   *
   */
  greater() {
    this.min = Math.round((this.min + this.max) / 2);
  }
}

module.exports = GuessingGame;
