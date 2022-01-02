import React from 'react';
import Typical from "react-typical";
import './Profile.css'
import ScrollService from "../../utilities/ScrollService";

const Profile  = () => {
    return (
			<div className="profile-container">
				<div className="profile-parent">
					<div className="profile-details">
						<div className="colz">
							<div className="colz-icon">
								<a href="https://www.facebook.com/UAO2011">
									<i className="fa fa-facebook-square"></i>
								</a>
								<a href="https://www.instagram.com/mohamedtarek121/">
									<i className="fa fa-instagram"></i>
								</a>
								<a href="https://www.linkedin.com/in/mohamed-tarek-bb4467186/">
									<i className="fa fa-linkedin-square"></i>
								</a>
							</div>
						</div>
						<div className="profile-details-name">
							<span className="primary-text">
								
								Hi , I Am <span className="highlighted-text">MOhamedTarek</span>
							</span>
						</div>
						<div className="profile-details-role">
							<span className="primary-text">
								{" "}
								<h1>
									{" "}
									<Typical
										loop={Infinity}
										steps={[
											"Python & Django😍",
											1000,
											"Full Stack 💻",
											1000,
											"MERN Stack ",
											1000,

											"React",
											1000,
										]}
									/>
								</h1>
								<span className="profile-role-tagline">
									I build applications with front and back end operations.
								</span>
							</span>
						</div>
						<div className="profile-options">
							<button
								className="btn primary-btn"
								onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
							>
								Hire ME
							</button>
							<a href="Resume_Mohamed_Tarek.pdf" download="MohamedTarek.pdf">
								<button className="btn highlighted-btn"> Get Resume</button>
							</a>
						</div>
					</div>
					<div className="profile-picture">
						<div className="profile-picture-background"></div>
					</div>
				</div>
			</div>
		);
}
 
 
export default Profile ;
