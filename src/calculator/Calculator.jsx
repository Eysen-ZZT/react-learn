import { useState } from 'react'
import { TemperatureInput } from './components/TemperatureInput';
import { BoilongVerdict } from './components/BoilingVerdict';
import { toCelsius, toFahrenheit, tryConvert } from './utils/convert';

export function Calculator() {
  const [scale, setScale] = useState('c');
  const [temperature, setTemperature] = useState('');
  const handleCelsiusChange = (temperature) => {
    console.log('handleCelsiusChange', temperature);
    setScale('c');
    setTemperature(temperature);
  }
  const handleFahrenheitChange = (temperature) => {
    console.log('handleFahrenheitChange', temperature);
    setScale('f');
    setTemperature(temperature);
  }
  // 摄氏度  当scale为 f 时，说明此时正在修改华氏度，需要对摄氏度进行计算，反之，计算华氏度
  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  // 华氏度
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  return (
    <div>
      <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
      {/* 由于 BoilongVerdict 组件只对摄氏度进行判断，所以需要传计算出的 celsius 值 */}
      <BoilongVerdict celsius={parseFloat(celsius)} />
    </div>
  )
}