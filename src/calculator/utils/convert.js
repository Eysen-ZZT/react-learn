/* 摄氏度换算 */
export function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
/* 华氏度换算 */
export function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
/* 换算结果处理 */
export function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}