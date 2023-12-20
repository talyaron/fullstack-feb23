import { useLocation, useParams } from 'react-router-dom'

const UserPage = () => {
  const { id } = useParams()
  const { state } = useLocation()
  console.log(id)
  console.log(state)

  return (
    <div>UserPage</div>
  )
}

export default UserPage