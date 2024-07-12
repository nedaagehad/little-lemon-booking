import React from "react"
import small_logo from "../images/small_logo.png"

const Footer = () => {
    return(
        <footer>
            <section>
            <div>
                <img alt="little limon logo" src={small_logo} />
            </div>
            <div>
                <h3>Navigation</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Youtube</li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;