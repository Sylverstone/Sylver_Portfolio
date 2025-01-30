import React from 'react'

const FooterDiv = ({ children, name } : { children : React.ReactNode, name : string }) => {
  return (
    <div>
        <p className="titreCatFooter">{name}</p>
        {children}
    </div>
  )
}

export default FooterDiv