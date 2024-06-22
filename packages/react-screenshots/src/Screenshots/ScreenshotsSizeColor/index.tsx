import React, { memo, ReactElement } from 'react'
import ScreenshotsSize from '../ScreenshotsSize'
import ScreenshotsColor from '../ScreenshotsColor'
import './index.less'

export interface SizeColorProps {
  size: number
  color: string
  onSizeChange: (value: number) => void
  onColorChange: (value: string) => void
}

export default memo(function ScreenshotsSizeColor ({
  size,
  color,
  onSizeChange,
  onColorChange
}: SizeColorProps): ReactElement {
  return (
    <div className='screenshots-sizecolor'>
      <div className='screenshots-operations-divider' />
      <ScreenshotsSize value={size} onChange={onSizeChange} />
      <div className='screenshots-operations-divider' />
      <ScreenshotsColor value={color} onChange={onColorChange} />
    </div>
  )
})
