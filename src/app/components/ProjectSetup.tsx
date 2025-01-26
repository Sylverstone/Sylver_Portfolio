
import React from 'react'
import styles from "../../CSS/styles.module.css"
import ClickMe from './ClickMe'

const ProjectSetup = () => {
  return (
    <div className={styles.Project}>
        <p>This is a projet</p>
        <ClickMe />
    </div>
  )
}

export default ProjectSetup