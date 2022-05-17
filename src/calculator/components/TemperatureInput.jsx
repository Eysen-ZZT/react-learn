const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
export function TemperatureInput(props) {
  console.log('TemperatureInput', props);
  const { temperature, scale } = props;
  const handleChange = (e) => {
    console.log(e.target.value);
    // 调用父组件提供的 onTemperatureChange 方法
    props.onTemperatureChange(e.target.value);
  }
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input type="text" value={temperature} onChange={handleChange} />
    </fieldset>
  )
}