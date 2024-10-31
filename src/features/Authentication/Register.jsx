import { Link, Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/authContext"
import { useState } from "react"
import { doSignUpWithEmailAndPassword, signInWithGithub, signInWithGoogle } from "../../firebase/auth"
import { FaArrowAltCircleLeft, FaGithub, FaGoogle } from "react-icons/fa"


const Register = () => {
  const { userLoggedIn } = useAuth()
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    const [email, password] = e.target.elements
    if (!isSigningIn) {
      try {
        setIsSigningIn(true)
        const result = await doSignUpWithEmailAndPassword(email.value, password.value).catch((error) => {
          setIsSigningIn(false)
          setError(error.message)
        }
        )
        console.log(result)
      } catch (error) {
        setIsSigningIn(false)
        setError(error.message)
      }
    }
  }
  const onGoogleSignIn = async () => {
    if (!isSigningIn) {
      setIsSigningIn(true)
      try {
        await signInWithGoogle().catch((error) => {
          setIsSigningIn(false)
          setError(error.message)
        }
        )
        navigate('/')
      } catch (error) {
        setIsSigningIn(false)
        setError(error.message)

      }
    }
  }
  const onGithubSignIn = async () => {
    if (!isSigningIn) {
      setIsSigningIn(true)
      try {
        await signInWithGithub().catch((error) => {
          setIsSigningIn(false)
          setError(error.message)
        }
        )
        navigate('/')
      } catch (error) {
        setIsSigningIn(false)
        setError(error.message)

      }
    }
  }



  return (
    <div className="hero bg-base-200 min-h-screen" style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
    }}>
      {userLoggedIn && <Navigate to="/" replace={true} />}
      <div className="hero-content">
        <div className="card bg-base-100 w-full md:w-[500px] shrink-0 shadow-2xl">
          <div className="p-5">
            <Link className="text-2xl hover:text-primary transition-all" to="/"><FaArrowAltCircleLeft /></Link>
          </div>
          <h3 className="text-center text-3xl font-bold">Register</h3>
          <form onSubmit={handleSubmit} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="flex items-center justify-center gap-4 mt-5">
            <button type="button" onClick={() => onGoogleSignIn()} className="btn btn-sm btn-outline btn-primary">
              <FaGoogle />  Google
            </button>
            <button type="button" onClick={() => onGithubSignIn()} className="btn btn-sm btn-outline border border-slate-700">
              <FaGithub /> GitHub
            </button>
          </div>
          {error && <div className="card-body text-center text-sm text-red-500">{error}</div>}
          <div className="card-body text-center text-sm text-neutral-content">
            Already have an account? <Link to="/login" className="link link-hover">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register