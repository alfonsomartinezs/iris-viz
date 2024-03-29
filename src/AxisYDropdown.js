import React from 'react'

const AxisYDropdown = ({ id,onChange}) => {
  return (
    <select id={id} onChange={onChange}>
      <option value="">Please select an option</option>
      <option value="Sepal Length" >Sepal Length</option>
      <option value="Sepal Width" selected="selected">Sepal Width</option>
      <option value="Petal Length">Petal Length</option>
      <option value="Petal Width">Petal Width</option>
      
    </select>
  )
}

export default AxisYDropdown
