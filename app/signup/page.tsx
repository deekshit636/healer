import './signup.module.css'
function Signup() {
  
    return (
      <div className='signin-main-container'>
        <div className='signin-container'>
          <div className='signin-box-1'>
            <div className='signin-heading-div'>
              <div className='signin-heading'>
                Hello, Friend!
              </div>
            </div>
  
            <div className='signin-text-div'>
              <div className='signin-text'>
                Enter your details and start journey with us
              </div>
            </div>
  
            <div className='signin-btn-div'>
              <button type='button'  className='signin-btn'>SIGN UP</button>
            </div>
          </div>
          <div className='signin-box-2'>
            <div className='signin-box-2-heading-div'>
              <div className='signin-box-2-heading'>
                Sign in
              </div>
            </div>
  
            <div className='signin-box-2-formdiv'>
              <div className='signin-email-box'>

              <div className='signin-email'>
                  Your Name
                </div>
              </div>
              <div className='signin-email_address'>
                <input type='text' name="email" className='signin-email_address_box'  />
              </div>

                <div className='signin-email'>
                  Email Address
                </div>
              </div>
              <div className='signin-email_address'>
                <input type='email' name="email" className='signin-email_address_box'  />
              </div>
  
  
              <div className='signin-email-box'>
                <div className='signin-email'>
                  Password
                </div>
              </div>
              <div className='signin-email_address'>
                <input type='Password' name="password" className='signin-email_address_box' />
              </div>
  
              <div className='signin-btn-div-box-2'>
              <button type='submit' className='signin-btn'>
                SIGN UP
              </button>
            </div>
            </div>
          </div>
        </div>
    )
  }
  
  export default Signup