import React from 'react';
import './AboutMe.css'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
const AboutMe = (props) => {
    let fadeInscreenHandler = (screen)=>{
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription= ScrollService.currentScreenFadeIn.subscribe(fadeInscreenHandler)
    const SCREEN_CONTANTS = {
			discription:
				"I can develop web application from frontend to backend and api and write applications from java and python.",
			highlights: {
				bullets: [
					"Full Stack development",
					"React Developer",
					"Python && Django",
				],
				heading: "Here are a few highlights:",
			},
		};
    const renderHighlight =()=>{
        return(
            SCREEN_CONTANTS.highlights.bullets.map((value,i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
            )
    }
    return (
			<div className="about-me-container screen-container" id={props.id || ""}>
				<div className="about-me-parent">
					<ScreenHeading title={"About Me"} subHeading={"Why Choose Me ?"} />
					<div className="about-me-card">
						<div className="about-me-profile"></div>
						<div className="about-me-details">
							<span className="about-me-description">
								{SCREEN_CONTANTS.discription}
							</span>
							<div className="about-me-highlights">
								<div className="highlight-heading">
									<span>{SCREEN_CONTANTS.highlights.heading}</span>
								</div>
								{renderHighlight()}
							</div>
							<div className="about-me-options">
								<button
									className="btn primary-btn"
									onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
								>
									{""}
									Hire ME{" "}
								</button>
								<a href="Resume_Mohamed_Tarek.pdf" download="MohamedTarek.pdf">
									<button className="btn highlighted-btn"> Get Resume</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}
 
 
export default AboutMe;