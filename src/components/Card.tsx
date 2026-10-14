import React from 'react'

type CardProps = {
  title : string
  description : string
}
const Card = ({title, description} : CardProps) => {
  return (
    <>
    <div>Hello Prince</div>
    <div>
        <p>{title}</p>
        <p>{description}</p>
    </div>
    </>
  )
}

export default Card