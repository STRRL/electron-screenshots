import Ok from './Ok'
import Cancel from './Cancel'
import Redo from './Redo'
import Undo from './Undo'
import Mosaic from './Mosaic'
import Text from './Text'
import Brush from './Brush'
import Arrow from './Arrow'
import Ellipse from './Ellipse'
import Rectangle from './Rectangle'

export const OperationButtons = [Rectangle, Ellipse, Arrow, Brush, Text, Mosaic, '|', Undo, Redo, '|', Cancel, Ok]

export const OperationButtonWithName = [
  {name: 'Rectangle', OperationButton: Rectangle, category: 'tool'},
  {name: 'Ellipse', OperationButton: Ellipse, category: 'tool'},
  {name: 'Arrow', OperationButton: Arrow, category: 'tool'},
  {name: 'Brush', OperationButton: Brush, category: 'tool'},
  {name: 'Text', OperationButton: Text, category: 'tool'},
  {name: 'Mosaic', OperationButton: Mosaic, category: 'tool'},
  {name: '|', OperationButton: null, category: 'general'},
  {name: 'Undo', OperationButton: Undo, category: 'general'},
  {name: 'Redo', OperationButton: Redo, category: 'general'},
  {name: '|', OperationButton: null, category: 'general'},
  {name: 'Cancel', OperationButton: Cancel, category: 'general'},
  {name: 'Ok', OperationButton: Ok, category: 'general'}
]
