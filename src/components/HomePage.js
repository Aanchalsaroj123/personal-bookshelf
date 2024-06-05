import React from 'react'
import RecommendedBooks from './RecommendedBooks'
import './Homepge.css';
import img from '../images/first1.png';

const HomePage = () => {
  return (
    <div className='bdy'>
      <div className='main'>
        <div className='first'>
        <h1>Welcome to Your Personal Bookshelf!</h1>
     <p>Whether you're an avid reader or just starting your literary journey, welcome to your own corner of the literary world. Here, you can curate your collection, discover new reads, and keep track of the books that inspire you.
        </p>
     </div>
        <div>
            <img className='img' src={img} alt="" />
        </div>
      </div>
      <hr />
      <RecommendedBooks/>
    </div>
  )
}

export default HomePage
