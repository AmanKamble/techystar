import React from 'react';
import "../Styles/Home.css";
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle as Google,
    AiFillAmazonCircle as Amazon,
    AiFillYoutube as Youtube,
    AiFillInstagram as Instagram
} from "react-icons/ai"

const Home = () => {
    return (
        <>
            {/* Home page  */}
            <div id='home' className='home'>
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>
            {/* Home2 page  */}
            <div className="home2">
                <img src={vg} alt="vector graphics" />
                <div>
                    <p>We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.</p>
                </div>
            </div>
            {/* about page  */}
            <div id='about' className="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam quis officiis fugit sunt dolores nostrum tenetur iusto est odio mollitia. Dolor placeat repellendus officia aspernatur dolorum harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium quia tempore. Dignissimos esse sequi numquam est ipsam nemo, voluptas vel recusandae iste aspernatur qui quasi, commodi, atque ipsa dolores tempore asperiores? Dolores soluta placeat molestiae aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit similique maxime praesentium sunt unde necessitatibus voluptates ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat, qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum sed cumque corporis voluptate quibusdam nostrum quod saepe</p>
                </div>
            </div>
            {/* Brands page  */}
            <div id='brands' className="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <Google />
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay: "0.5s",
                        }}>
                            <Amazon />
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay: "0.7s",
                        }}>
                            <Youtube />
                            <p>Youtube</p>
                        </div>

                        <div style={{
                            animationDelay: "1s",
                        }}>
                            <Instagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home