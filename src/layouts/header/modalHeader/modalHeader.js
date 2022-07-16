import React from 'react'
import './modalHeader.scss'


const ModalWindowHeader = ({active,setActive,children}) => {


    return(
        <div className={active ? 'modalHeader active' : 'modalHeader'} onClick={()=> setActive(false)}>
            <div className={active ? 'modalHeaderContent active' : 'modalHeaderContent'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalWindowHeader