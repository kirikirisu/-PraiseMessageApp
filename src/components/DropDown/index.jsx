import React, { useState } from 'react'
 
const DropDownMenu = () => {
  const [listOpen, setListOpen] = useState(false);
 
  const toggleList = () => {
    setListOpen(!listOpen);
  }
 
  const handleClickMenu = (val) => {
    setListOpen(false);
    alert(val);
  }
 
    return (
      <div style={styles.dropDownMenu}>
        <div onClick={() => toggleList()} style={styles.menuButton}>
          menu
        </div>
        {listOpen && (
          <div style={styles.menuBox}>
            <div style={styles.menuContent}>
              <div onClick={() => handleClickMenu(1)}>menu 1</div>
            </div>
            <div style={styles.menuContent}>
              <div onClick={() => handleClickMenu(2)}>menu 2</div>
            </div>
            <div style={styles.lastMenuContent}>
              <div onClick={() => handleClickMenu(3)}>menu 3</div>
            </div>
          </div>
        )}
      </div>
    )
}
 
const styles = {
  dropDownMenu: {
    position: 'relative',
  },
  menuButton: {
    display: 'inline',
    cursor: 'pointer',
    border: '1px solid black',
    padding: '3px 5px',
  },
  menuBox: {
    position: 'absolute',
    top: '23px',
    width: '120px',
    zIndex: 1,
    cursor: 'pointer',
    border: '1px solid black',
  },
  menuContent: {
    padding: '3px 5px',
    borderBottom: '1px solid black',
  },
  lastMenuContent: {
    padding: '3px 5px',
  },
}
 
export default DropDownMenu;