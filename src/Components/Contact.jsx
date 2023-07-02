import React from 'react';
import "../Styles/Contact.css";
import image from "../assets/5.jpg"

const Contact = () => {
    return (
        <div className='contact'>
            <main>
                <div>
                    <h1>Contact Us</h1>
                    <form>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='Name' required />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='E - Mail' required />
                        </div>
                        <div>
                            <label>Message</label>
                            <input type="text" placeholder='Tell us about your query...' required />
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div>
                    <img src={image} alt="contact cover" />
                </div>
            </main>
        </div>
    )
}

export default Contact