abstract class AbstractCalculator {
  /**
   *  Calculate the sum of two numbers, e.g. 1 + 2
   */
  abstract add(num: number | string | AbstractCalculator): this;

  /**
   *  Calculate the difference between two numbers, e.g. 1 - 2
   */
  abstract sub(num: number | string | AbstractCalculator): this;

  /**
   *  Calculate the product of two numbers, e.g. 1 * 2
   */
  abstract mul(num: number | string | AbstractCalculator): this;

  /**
   *  Calculate the quotient of two numbers, e.g. 1 / 2
   */
  abstract div(num: number | string | AbstractCalculator): this;

  /**
   *  Get the calculation result
   */
  abstract equal(options?: { unit?: boolean }): string | number;
}

export default AbstractCalculator;
