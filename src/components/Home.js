import React from 'react';

function Home(){
    return(
        <div>
            <div className='add-to-cart'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7ZPKG_UacoPEL06wORCeoCQNwNZDcDfQ1Q&s"/>
            </div>
            <h1>Home comp</h1>
            <div className="cart-wrapper"> 
                <div className='img-wrapper item '>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6PK3L6qBW43ntNx1blVignJwt8v0kgc14Q&s"/>
                </div>
                <div className='text-wrapper item'>
                    <span>i-phone</span>
                    <span>price:$1000.00</span>
                    
                </div>
                <div className='btn-wrapper item'>
                    <button>Add to cart</button>
                    
                </div>
            </div>
        </div>
    )
}
export default Home;