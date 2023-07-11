import Nav from './Nav'
import { Link } from 'react-router-dom'

function NotFound(){
    return(
        <>
            <Nav />
            <div className='home-wrapper nf'>
                <div className="content">
                    <h1>This page doesn&apos;t exist</h1>
                    <p>Looks like you&apos;re trying to locate a page that doesn&apos;t exist. Please return to the homepage.</p>
                    <div>
                    <Link to='/'><button className='add-new'>Home</button></Link>
                    </div>        
                </div>
                <div className='visual'>
                    <div className='main-style'>
                        <div>
                            <div className='note'>
                                <img src='/img/cocktail-rosemary.jpg' alt='cocktail with rosemary' />              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound
