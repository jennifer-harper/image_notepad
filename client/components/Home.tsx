import { useAuth0 } from '@auth0/auth0-react';

function Home() {
  const {loginWithRedirect } = useAuth0();

  const handleSignIn = () => {
    loginWithRedirect()
  }


  return (
    <div className='home-wrapper'>
      <div className="content">
        <h1>Need an online notepad?</h1>
        <p>Add images and record your thoughts. Its free to sign up, private and easy to use. (There is no email conformation, you can make up a gmail account if your worried about security.)</p>
        <div>
          <button className='signup' onClick={handleSignIn}>Sign Up Today</button>
        </div>        
      </div>

      <div className='visual'>
        <div className='main-style'>
          <div>
            <div className='note'>
              <img src='/img/cocktail-rosemary.jpg' alt='White boysenberry cake with green stand' />              
              <p><b>Category:</b> Cocktails</p>
              <p>Make notes about anything!</p> 
              <div className='button-wrapper'>
                <button className="update">Update</button>                        
                <button className="del_button" >Delete</button>
              </div>
            </div>
            <div className='note'>             
              <p><b>Category:</b> General</p>
              <p>Never remember that movie name, address to that website, your mums birthday. You dont have to add images to these notes.</p> 
              <div className='button-wrapper'>
                <button className="update">Update</button>                        
                <button className="del_button" >Delete</button>
              </div>
            </div>
          </div>
          <div className='note'>
              <img src='/img/cake-green-stand.jpg' alt='White boysenberry cake with green stand' />              
              <p><b>Category:</b> Baking</p>
              <p>Add your notes and thoughts for subjects such as baking. <br/>Include links and edits to recipes. Never loose that great recipe again. <br/>Link: greatcakes.com/vanilla</p> 
              <div className='button-wrapper'>
                <button className="update">Update</button>                        
                <button className="del_button" >Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
