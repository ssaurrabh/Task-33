

const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 8000

http.createServer((req, res) => {

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head>')
        res.write('<link rel="stylesheet" href="style.css" />')
        res.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"/>')
        res.write('</head>')
        res.write('<body>')
        res.write('<div class="container">')
        res.write('<nav id="navbar">')
        res.write('<h1><a href="#">Thala<span>7.</span></a></h1>')
        res.write('<div class="menu">')
        res.write('<ul>')
        res.write('<li><a href="#">Home</a></li>')
        res.write('<li><a href="#">About</a></li>')
        res.write('<li><a href="#">Brands</a></li>')
        res.write('<li><a href="#">More</a></li>')
        res.write('<li><a href="#">Contact</a></li>')
        res.write('</ul>')
        res.write('</div>')
        res.write('<div class="search"><input type="search"><button>CartView</button><div class="image"><i class="fa-solid fa-user-astronaut"></i></div>')
        res.write('</nav>')
        res.write('<main class="main"><div class="heading" id="left"><h2>7!! Thala For a <br><span>Reason!</span></h2><h3></h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Velit aut eveniet accusantium,accusamusdistinctio inventore!</p><button>Shop Now</button></div><div class="main-shoe" id="right"><img src="images/shoe-new-removebg-preview.png" alt="shoe"></div></main>')
        res.write('</div>')
        res.write(`<footer class="footer"><div class="sec sect1"><i class="fa-solid fa-ranking-star"></i><div><h4>2K+</h4><p>Reviews</p></div></div><div class="sec sect2"><i class="fa-solid fa-people-group"></i><div><h4>30K+</h4><p>Customers</p></div></div ><div class="sec sect3"><i class="fa-solid fa-square-poll-horizontal"></i><div><h4>High</h4><p>Quality</p>
                </div>
            </div>
            <div class="sec sect4">
                <i class="fa-regular fa-star"></i>
                <div>
                    <h4>4.5/5</h4>
                    <p>Ratings</p>
                </div>
            </div>
        </footer>`)
        res.write('</body>')
        res.write('</html>')
        return res.end()
    } else if (req.url === '/style.css') {
        fs.readFile(path.join(__dirname, '/style.css'), (err, data) => {
            if (err) {
                res.code = 404
                res.setHeader('Content-Type', 'text/plain')
                res.end('CSS file not found')
            } else {
                res.setHeader('Content-Type', 'text/plain')
                res.end(data)
            }
        })
    } else if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<link rel="stylesheet" href="style.css">')
        res.write(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thala 7 Product Display</title>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="container">
        <header>
            <nav id="navbar">
                <h1><a href="#">Thala<span>7.</span></a></h1>
                <div class="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Brands</a></li>
                        <li><a href="#">More</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="search">
                    <input type="search">
                    <button>CartView</button>
                    <div class="image">
                        <img src="images/new cropped.jpg" alt="User1">
                    </div>
                </div>
            </nav>
        </header>
        <section class="main">
            <div class="main-box">
                <div class="img">
                    <img src="#" alt="image">
                </div>
                <div class="content">
                    <h3 class="head">Sneakers by Thala7! <br>with Perfect Grip and Color Block</h3>
                    <p>High Quality sneakers with extreme comfort and agility</p>
                    <div class="sideways">
                        <h3><i class="fa-solid fa-indian-rupee-sign"></i>4,500</h3>
                        <div class="spec">
                            <p class="green">Save Upto 40%</p>
                            <p>Inclusive of all Taxes</p>
                        </div>
                    </div>
                    <div class="buttons">
                        <button>2<i class="fa-solid fa-caret-down"></i></button>
                        <button class="bg">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div class="foot">
            <img src="" alt="mainimg">
            <img src="" alt="img1">
                <img src="" alt="img2">
                <img src="" alt="img3">
            </div>
        </footer>
    </div>
</body>

</html>`)
return res.end()
    }else if(req.url === '/contact'){
        res.setHeader('Content-Type','text/html')
          res.write('<link rel="stylesheet" href="style.css">')
        res.write(`
            <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thala 7 Payment Gateway</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="container">
        <header>
            <nav id="navbar">
                <h1><a href="#">Thala<span>7.</span></a></h1>
                <div class="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Brands</a></li>
                        <li><a href="#">More</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="search">
                    <input type="search">
                    <button>CartView</button>
                    <div class="image">
                        <img src="images/new cropped.jpg" alt="User1">
                    </div>
                </div>
            </nav>
        </header>
        <p class="che">checkout</p>
        <div class="gateway">
            <div class="contact">
                <h5>Contact Details</h5>
                <label>Email:</label><br>
                <input type="email" placeholder="Your Email" class="sea">
                <div class="payment">
                    <h5>Payment</h5>
                    <div class="paycurr">
                        <button><i class="fa-regular fa-credit-card"></i>card</button>
                        <button><i class="fa-solid fa-bitcoin-sign"></i>Crypto</button>
                        <button><i class="fa-solid fa-building-columns"></i>Bank</button>
                        <button>...</button>
                    </div>
                    <label>Card Number</label><br>
                    <input type="number" placeholder="Input Card Number" class="card">
                    <div class="expiry">
                        <div class="exp">
                            <label>Expiry</label><br>
                            <input type="number" placeholder="MM/YY" class="expe">
                        </div>
                        <div class="cvc">
                            <label>CVC</label><br>
                            <input type="number" placeholder="..." class="expe">
                        </div>
                    </div>
                    <div class="country">
                        <div class="exp">
                            <label>Country</label><br>
                            <select class="expe">
                                <option selected disabled>...</option>
                                <option>India</option>
                            </select>
                        </div>
                        <div class="cvc">
                            <label>Zip</label><br>
                            <input type="number" class="expe" placeholder="PIN Code">
                        </div>
                    </div>
                </div>
            </div>
            <div class="summary">
                <h5>Order Sumary</h5>
                <div class="sum">
                    <label>Enter Coupon Code</label>
                    <div class="apply">
                        <input type="search" placeholder="Coupon Code">
                        <button>Apply Coupon</button>
                    </div>
                    <div class="total">
                        <table class="itemsfinal">
                            <tr>
                                <td>Subtotal</td>
                                <td class="amount"><i class="fa-solid fa-indian-rupee-sign"></i>4,700</td>
                            </tr>
                            <tr>
                                <td>Taxes(if applicable)</td>
                                <td class="amount"><i class="fa-solid fa-indian-rupee-sign"></i>199</td>
                            </tr>
                            <tr>
                                <td>Discount</td>
                                <td class="amount"><i class="fa-solid fa-indian-rupee-sign"></i>0</td>
                            </tr>
                           
                            <tr>
                                <th>Total</th>
                                <th class="amount"><i class="fa-solid fa-indian-rupee-sign"></i>4,900</th>
                            </tr>
                        </table>
                        
                    </div>
                    <button class="pay">Pay Now &nbsp;<i class="fa-solid fa-indian-rupee-sign">&nbsp;4,900</i></button>
                    <div class="secure">
                        <img src="images/secure.jfif" alt="sec1">
                        <img src="images/razor.png" alt="sec2">
                        <img src="images/secure2.jfif" alt="sec3">
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>`)
return res.end()
    }else if(req.url === '/images/razor.png'){
        fs.readFile(path.join(__dirname, '/images/razor.png'),(err, data)=>{
            if(err){
                res.statusCode = 404
                res.setHeader('Content-Type','text/plain')
                res.end('Image not found')
            }else{
                res.setHeader('Content-Type','image/png')
                res.end(data)
            }
        })
    }

    else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end('Not found')
    }


}).listen(PORT, () => {
    console.log(`Server is started at port http://localhost:${PORT}`);

})