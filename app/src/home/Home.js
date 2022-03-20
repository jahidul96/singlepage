import React from 'react'
import './home.css'
import Nav from '../components/nav/Nav'
import { ShowCase, TextComp, CardComp, ImageCard, ImageCardTwo } from '../components/reuse/Reuse'


export default function Home() {
    return (
        <div>

            <ShowCase />
            <Nav />
            <div className='planWrapper'>
                <TextComp title="Plan your trip easily" text="if you want some extra comport you can join us" />
            </div>
            <div className='mContainer flexCard'>
                <CardComp title="Room and Food Included" />
                <CardComp title="Good and Luxuries Vehicle" />
                <CardComp title="Friendly food.." />
            </div>

            <div className='planWrapper textAlign'>
                <TextComp title="Last some adventure tour's " />
                <div style={{ marginTop: "30px" }} >
                    <hr />
                </div>
            </div>

            <div className='mContainer flexCard'>
                <ImageCard />


            </div>


            <div className='mContainer expericeImageSection'>
                <div className='exWrapper'>
                    <h2>Your perfect </h2>
                    <h4 style={{ marginTop: "10px" }}>Adventure Experience</h4>
                    <div className='textWrapper'>
                        <h5 >we are some travel lover and we want to explore some place</h5>
                        <h5 >together and want to make some memories..</h5>
                        <button className='btn'>Explore More</button>
                    </div>
                </div>
            </div>

            <div className='planWrapper textAlign'>
                <TextComp title="Popular advenger place's " />
                <div style={{ marginTop: "30px" }} >
                    <hr />
                </div>
            </div>

            <div className='mContainer flexCard'>
                <ImageCardTwo />
            </div>

            <div className='bShowCaseWrapper'>
                <div className='mContainer bottomShowCase'>
                    <div></div>
                    <div className='leftflexWrapper'>
                        <h2>Enjoy a great travel</h2>
                        <h4 style={{ marginTop: "10px" }}>With us</h4>
                        <div className='textWrapper'>
                            <p style={{ color: "#333" }}>we are some travel lover and we want to explore some place</p>
                            <p style={{ color: "#333" }}>together and want to make some memories..</p>
                            <button style={{ borderRadius: "20px" }} className='btn'>Join Us</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <div className='mContainer flexFooter'>
                    <div>
                        <h4><span><i className="fa-solid fa-location-dot"></i></span> Dhaka, 1201..</h4>


                        <div className='followSection'>
                            <p>Follow us</p>
                            <div style={{ marginLeft: "10px" }}>
                                <span className='Icon'><i className="fa-brands fa-facebook"></i></span>
                                <span className='Icon'><i className="fa-brands fa-facebook-messenger"></i></span>
                                <span className='Icon'><i className="fa-brands fa-twitter"></i></span>
                                <span className='Icon'>
                                    <i className="fa-brands fa-instagram"></i>
                                </span>
                                <span className='Icon'>
                                    <i className="fa-solid fa-mobile-signal"></i>
                                </span></div>
                        </div>
                    </div>
                    <div className='newsletter'>
                        <h3>NewsLetter</h3>
                        <input />
                        <button style={{ padding: "5px 10px", marginLeft: "10px" }} className='btn'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
