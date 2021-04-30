import React, { useState } from 'react'
import styles from './Tooltip.module.scss'
import classnames from 'classnames'

const Tooltip: React.FC<{ content: string }> = (props) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className={styles.Wrap}>
      <span 
        className={classnames(styles.Content, visible && styles.open)}
      >{props.content}</span>
      <div 
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >{props.children}</div>
    </div>
  )
}

export default Tooltip