import React from "react"

export default function MainContent(){
    return(
        <div>
            <div className= "author-name">Pham Trung Kien</div>
            <div className= "major">Frontend Developer</div>
            <p className= "website">PhamTrungKien.com</p>
            <button className="email-btn">Email</button>
            <button className="linkedin-btn">LinkedIn</button>
            <div className="main">
                <h4>About</h4>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h4>Interests</h4>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>         
        </div>   
    )
}