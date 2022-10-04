import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
    
    <form>

        <div className='container'>

            <div className='img_container'>
                <img
                    className='avatar'
                    src='bbb_logo.jpg'
                    alt='avatar' >
                </img>
            </div>

            <input
                type='text'
                placeholder='USERNAME'
                name='uname'
                required >
            </input>

            <input
                type='password'
                placeholder='PASSWORD'
                name='psw'
                required>
            </input>


            <button type='submit'>LOGIN</button>

            <a href='/'>Forgot Password?</a>

            <Link
                className="text-link" 
                to='/register'>
                Sign Up!
            </Link>
        </div>

    </form>

    </>
  )
}

export default Login