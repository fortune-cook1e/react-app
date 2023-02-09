import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import styles from './index.module.less'
import CanvasArea from './modules/CanvasArea'
import ComponentsArea from './modules/ComponentsArea'
import Options from './modules/Options'

const Editor = (): JSX.Element => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.editor}>
        <ComponentsArea />
        <CanvasArea />
        <Options />
      </div>
    </DndProvider>
  )
}

export default Editor
