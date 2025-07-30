import { useState } from 'react'

export const DemoControl: React.FC<any> = ({ value, onChange, options, initialValue }) => {
  const [selected, setSelected] = useState<string | undefined>(initialValue)
  return (
    <div
      style={{
        width: 200,
        border: '1px solid #ccc',
        borderRadius: 4,
        padding: 4,
      }}
    >
      {options.map((option) => (
        <div
          key={option.value}
          style={{
            backgroundColor: selected === option.value ? 'red' : 'white',
          }}
          onClick={() => {
            setSelected(option.value)
            onChange?.(option.value)
          }}
        >
          <label>{option.label}</label>
        </div>
      ))}
    </div>
  )
}
