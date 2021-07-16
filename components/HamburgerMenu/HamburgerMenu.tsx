import React, { useState } from 'react'
import styles from './HamburgerMenu.module.scss'

type HamburgerMenuProps = {
  open: boolean
  onClick: () => void
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = (props) => {
  const { open, onClick } = props
  const [clickedOnce, setClickedOnce] = useState(false)

  const getMenuClass = () => {
    // Used to prevent keyframe animation on page load
    // TODO: Investigate better solution for this issue
    if (clickedOnce) {
      return open ? styles.open : styles.closed
    } else {
      return ''
    }
  }

  return (
    <button
      className={`${styles.hamburgerMenu} ${getMenuClass()}`}
      onClick={() => {
        setClickedOnce(true)
        onClick()
      }}
    >
      <div className={styles.hamburgerLine} />
      <div className={styles.hamburgerLine} />
      <div className={styles.hamburgerLine} />
    </button>
  )
}

export default HamburgerMenu
