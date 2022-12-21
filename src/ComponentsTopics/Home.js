import React from 'react';
import Button from '@mui/material/Button';

function Home() {
  return (
    <div>
        <h1>Home</h1>
          <div className='cart'>
              <img src="https://www.nicepng.com/png/detail/261-2611207_cart-add-to-cart-icon-png.png" width='100%' alt="" /></div>
        <div className="Wrapper">
              <div className="itemOne hoverOne">
                <div className="img">
                      <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578" alt="" width="100%" />
                </div>
                <div cart_position>
                      <span style={{ textAlign:"center", display:"block"}}>$1000.00</span><br />
                      <Button variant="contained" color='error'>Add To Cart</Button>
                </div>
            </div>

              <div className="itemOne hoverOne">
                  <div className="img">
                      <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578" alt="" width="100%" />
                  </div>
                  <div cart_position>
                      <span style={{ textAlign: "center", display: "block" }}>$1000.00</span><br />
                      <Button variant="contained" color='error'>Add To Cart</Button>
                  </div>
              </div>

              <div className="itemOne hoverOne">
                  <div className="img">
                      <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578" alt="" width="100%" />
                  </div>
                  <div cart_position>
                      <span style={{ textAlign: "center", display: "block" }}>$1000.00</span><br />
                      <Button variant="contained" color='error'>Add To Cart</Button>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Home