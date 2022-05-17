import { useState } from 'react';
export function FlavorForm() {
  const fruits = {
    grapefruit: '葡萄柚',
    lime: '酸橙',
    coconut: '椰子',
    mango: '芒果'
  }
  const [value, setValue] = useState('grapefruit');
  const handleChange = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)
  }
  const handleSubmit = (e) => {
    alert('你喜欢的风味是: ' + fruits[value])
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        选择你喜欢的风味：
        <select value={value} onChange={handleChange}>
          {Object.keys(fruits).map(fruit =>
            <option key={fruit} value={fruit}>
              {fruits[fruit]}
            </option>
          )}
        </select>
      </label>
      <input type="submit" value="提交" style={{ marginLeft: 5 }} />
    </form>
  )
}