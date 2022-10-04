import { Link } from "react-router-dom"

const SignUp = () => {
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
                placeholder='E-MAIL'
                name='email'
                required >
            </input>

            <input
                type='password'
                placeholder='PASSWORD'
                name='psw'
                required>
            </input>
            
            <input
                type='password'
                placeholder='CONFIRM PASSWORD'
                name='cpsw'
                required>
            </input>


            <button type='submit'>SIGN UP!</button>

            <Link 
                className="text-link"
                to='/'>
                Already Registered?
            </Link>
        </div>

    </form>
    
    </>
  )
}

export default SignUp