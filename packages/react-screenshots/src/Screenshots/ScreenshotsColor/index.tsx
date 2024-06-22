import React, { memo, ReactElement } from 'react'
import './index.less'

export interface ColorProps {
  value: string
  onChange: (value: string) => void
}

export default memo(function ScreenshotsColor ({ value, onChange }: ColorProps): ReactElement {
  const colors = ['#E23E3E', '#E78742', '#55CD1D', '#1354F9', '#8430EF', '#222222', '#FFFFFFD9']
  return (
    <div className='screenshots-color'>
      {colors.map(color => {
        const classNames = ['screenshots-color-item']
        if (color === value) {
          classNames.push('screenshots-color-active')
        }
        return (
          <div
            key={color}
            className={'screenshots-color-item-container ' + ((color === value) ? 'screenshots-color-item-container-active' : '')}
            onClick={() => onChange && onChange(color)}
          >
            <div
              key={color}
              className={classNames.join(' ')}
              style={{ backgroundColor: color }}
            />
          </div>
        )
      })}
    </div>
  )
})
