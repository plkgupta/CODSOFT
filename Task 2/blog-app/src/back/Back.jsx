import "./back.css"
import { useLocation } from 'react-router-dom'

export const Back = ({title}) => {
  const location = useLocation()
  return (
    <>
        <section className='back'>
          <h1>{title}</h1>
        </section>
        <div className="margin">
        </div>
    </>
  )
} 