import { useAuthStore } from "../store/auth"
import { useNavigate } from "react-router-dom"

function ProfilePage() {

  const logout = useAuthStore(state => state.logout)
  const profile = useAuthStore(state => state.profile)

  const navigate = useNavigate()

  function handlerLogout(){
    logout()
    navigate('/login')
  }

  return (
    <div>
      Profile Page
      <div>
        {JSON.stringify(profile)}
      </div>
      <button onClick={handlerLogout}>
        Logout
      </button>
    </div>
  )
}

export default ProfilePage