import React from "react";
import './MainArea.css';
import { FaMedrt, FaFontAwesomeFlag, FaFacebookMessenger, FaAngleDown, FaUserFriends, FaSearch, FaGrin, FaRegThumbsUp, FaCommentAlt, FaRegShareSquare } from 'react-icons/fa';
import { MdVideoCall, MdMoreHoriz } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

function MainArea() {
    return (
        <div className="Main">

            <div className="Rside">
                <div className="Profile">
                <img src="/pooja.jpg" alt="dp" style={{height:"60px", width:"50px", padding:"1rem"}} />

                    Pooja Joshi
                </div>
                <div className="Pro">
                    <FaUserFriends color="blue" fontSize="2rem" />
                    <div>Friends</div>
                </div>
                <div className="Pro">
                    <FaFontAwesomeFlag color="green" fontSize="2rem" />
                    <div>Pages</div>
                </div>
                <div className="Pro">
                    <FaMedrt color="blue" fontSize="2rem" />
                    <div>COVID-19 Information Center</div>
                </div>
                <div className="Pro">
                    <FaFacebookMessenger color="green" fontSize="2rem" />
                    <div>Messenger Kids</div>
                </div>
                <div className="Pro">
                    <FaAngleDown color="green" fontSize="2rem" />
                    <div>See More</div>
                </div>
                <br />
                <div className="Profiles">
                    <img src="/dog.jpg" alt="logo" style={{height:"35px", padding:"1rem"}} />
                    React Developer
                </div>
                <div className="Profiles">
                    <img src={require('../images/2.jpeg')} alt="logo" style={{height:"35px", padding:"1rem"}} />
                    MEAN STACK
                </div>
                <div className="Profiles">
                    <img src={require('../images/3.jpeg')} alt="logo" style={{height:"35px", padding:"1rem"}} />
                    JavaScript
                </div>
                <div className="Profiles">
                    <img src={require('../images/4.jpeg')} alt="logo" style={{height:"35px", padding:"1rem"}} />
                    React Developer
                </div>
                <div className="Pross">
                    <FaAngleDown color="blue" fontSize="2rem" />
                    <div>See More</div>
                </div>
            </div>

            <div className="MainArea">
                <div className="addStory">
                    <div className="Story">
                        <img src="/pooja.jpg" alt="IMG" style={{height:"60px", width:"50px", borderRadius:"60%"}} />
                        <br /><br /><br /><br /><br /><br />
                        Pooja Joshi
                    </div>
                    <div className="Story">
                        <img src="/mohit.jpg" alt="IMG" style={{height:"60px", width:"50px", borderRadius:"60%"}} />
                        <br /><br /><br /><br /><br /><br />
                        MOHIT
                    </div>
                    <div className="Story">
                        <img src="/manish.jpg" alt="IMG" style={{height:"60px", width:"50px", borderRadius:"60%"}} />
                        <br /><br /><br /><br /><br /><br />
                        Manish
                    </div>
                    <div className="Story">
                        <img src="/swati.jpeg" alt="IMG" style={{height:"60px", width:"50px", borderRadius:"60%"}} />
                        <br /><br /><br /><br /><br /><br />
                        Swati
                    </div>
                </div>

                <div className="message">
                    <div className="text">
                        <div className="Post">
                            <img src="/pooja.jpg" alt="PIC" />
                            <input type="Mind" placeholder="What's on your mind, Pooja?" />
                        </div>
                        <div className="Call">
                            <div className="ico">
                                <div className="icone">
                                    <MdVideoCall fontSize="2rem" color="red" />
                                    <div>LiveVideo</div>
                                </div>
                                <div className="icone">
                                    <AiFillFileImage fontSize="2rem" color="green" />
                                    <div>Photo/Video</div>
                                </div>
                                <div className="icone">
                                    <FaGrin fontSize="2rem" color="orange" />
                                    <div>Feeling/activity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="Posted">
                        <div className="poster">
                            <div className="Simplilearn">
                                <img src="/pooja.jpg" alt="Img" style={{height:"50px", width:"50px", borderRadius:"50%"}} />
                                Pooja Joshi 
                                <div className="update"> Updated his cover image.</div>
                            </div>
                            <div className="edit">
                                <MdMoreHoriz fontSize="1.5rem" />
                            </div>
                        </div>
                        <div className="caption">
                            The best view comes after the Hardest Climb
                        </div>
                        <br />
                        <div className="FacebookImg">
                            <img src="/post.jpg" alt="dp" style={{height:"auto", width:"100%"}} />
                        </div>
                        <div className="Comment">
                            <div className="Like">
                                <FaRegThumbsUp color="grey" />Like
                            </div>
                            <div className="Like">
                                <FaCommentAlt color="grey" />Comment
                            </div>
                            <div className="Like">
                                <FaRegShareSquare color="grey" />Share
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Lside">
                <div className="Contact">  
                    <div className="Contacts">Contacts</div>
                    <div className="chaticon">
                        <div className="icons">
                            <MdVideoCall fontSize="1.8rem" />
                        </div>
                        <div className="icons">
                            <FaSearch fontSize="1.6rem" />
                        </div>
                        <div className="icons">
                            <MdMoreHoriz fontSize="1.6rem" />
                        </div>
                    </div>
                </div>
                <div className="concise">
                    <div className="Profilee">
                    <img src={require('../images/lucy.jpg')} alt="logo" style={{height:"50px", width:"45px", padding:"1rem"}} />

                        Lucy
                    </div>
                    <div className="Profilee">
                    <img src={require('../images/rocky.jpg')} alt="logo" style={{height:"50px", width:"45px", padding:"1rem"}} />

                        Rocky
                    </div>
                    <div className="Profilee">
                    <img src={require('../images/pp.jpeg')} alt="logo" style={{height:"50px", width:"45px", padding:"1rem"}} />

                        Cute Girl
                    </div>
                    <div className="Profilee">
                    <img src={require("../images/sad.jpg")} alt="logo" style={{height:"50px", width:"45px", padding:"1rem"}} />
                        Sad Boy
                    </div>
                    <div className="Profilee">
                    <img src={require("../images/pic1.jpeg")} alt="logo" style={{height:"50px", width:"45px", padding:"1rem"}} />
                        Lakshita
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainArea;