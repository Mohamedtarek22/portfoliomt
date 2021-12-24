import React, { useState ,useEffect} from "react";
import "./Resume.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import img1 from '../../assets/Resume/education.svg'
import img2 from '../../assets/Resume/work-history.svg'
import img3 from '../../assets/Resume/programming-skills.svg'
import img4 from '../../assets/Resume/projects.svg'
import img5 from "../../assets/Resume/interests.svg";


const Resume = (props) => {
	const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
	const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

	let fadeInscreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};
	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInscreenHandler);

	const ResumeHeading = (props) => {
        return (
					<div className="resume-heading">
						<div className="resume-main-heading">
							<div className="heading-bullet"></div>
							<span>{props.heading ? props.heading : ""}</span>

							{props.fromDate && props.toDate ? (
								<div className="heading-date">
									{props.fromDate + "-" + props.toDate}
								</div>
							) : (
								<div></div>
							)}
						</div>
						<div className="resume-sub-heading">
							<span>{props.subHeading ? props.subHeading : ""}</span>
						</div>
						<div className="resume-heading-discription">
							<span>{props.description ? props.description : ""}</span>
						</div>
					</div>
				);
	};

	const resumeBullets = [
		{ label: "Education", logoSrc: img1 },
		{ label: "Work History", logoSrc: img2 },
		{ label: "Programming Skills", logoSrc: img3 },
		{ label: "Projects", logoSrc: img4 },
		{ label: "Interests", logoSrc: img5 },
	];

	const programmingSkillDetails = [
		{ skill: "JavaScript", ratingPercentage: 80 },
		{ skill: "React", ratingPercentage: 80 },
		{ skill: "Python", ratingPercentage: 80 },
		{ skill: "Django", ratingPercentage: 80 },
		{ skill: "Java", ratingPercentage: 80 },
		{ skill: "ComputerVision", ratingPercentage: 80 },
		{ skill: "Node js", ratingPercentage: 80 },
		{ skill: "HTML", ratingPercentage: 80 },
		{ skill: "CSS", ratingPercentage: 80 },
		{ skill: "SASS", ratingPercentage: 80 },
		{ skill: "jQUERY", ratingPercentage: 80 },
		// { skill: "javaScript", ratingPercentage: 80 },
	];
	const projectDetails = [
		{
			title: "Personal Portfolio Website",
			duration: { fromDate: "2021", toDate: "persent" },
			description:
				"A Personal Portfolio website to showcase all my details and projects at one place",
			subHeading: "Technologies Used:React Js , BootStrap , Node Js",
		},
		{
			title: "Sign Language Recognition",
			duration: { fromDate: "2020", toDate: "2021" },
			description:
				"Graduate Project: Created an Project that helps dumb and deaf people to be able to communicate more effectively to show this project From: https://graduatemymain1.gatsbyjs.io",
			subHeading: "Technologies Used :React Js ,Tensorflow js , Gatsby",
		},
		{
			title: "Zerowaste",
			duration: { fromDate: "Aug-2021", toDate: "Sep-2021" },
			description:
				": Created an Project that helps zero waste society To Show this project From : http://zerowaste.otgcom.com/",
			subHeading: "Technologies Used :HTML,CSS ,JAVASCRIPT ,DJANGO",
		},
	];

	const resumeDetails = [
		<div className="resume-screen-container" key="education">
			<ResumeHeading
				heading={"University of Cairo"}
				subHeading={"BACHELOR OF SCIENCE MAJOR:COMPUTER SCIENCE"}
				fromDate={"2017"}
				toDate={"2021"}
			/>
			
		</div>,
		<div className="resume-screen-container" key="work-experience">
			<ResumeHeading
				heading={"On Time Group "}
				subHeading={"FULL STACK DEVEOPER"}
				fromDate={"2021"}
				toDate={"persent"}
			/>
			<div className="experience-description">
				<span className="resume-description-text">
					Currently Working as React ,php and django on websites
				</span>
			</div>
			<div className="experience-description">
				<span className="resume-description-text">
					- Developed an ecommerce website for client with the dashbord for
					managing for products , managing reviews ,users ,payment etc .
				</span>
				<br />
				<span className="resume-description-text">
					- Developed an recycle website for client
				</span>
			</div>
            </div>,
			<div className="resume-screen-container programming-skills-container"
				key="programming-skills"
			>
				{programmingSkillDetails.map((skill, index) => (
					<div className="skill-parent" key={index}>
						<div className="heading-bullet"></div>
						<span>{skill.skill}</span>
						<div className="skill-percentage">
							<div
								style={{ width: skill.ratingPercentage + "%" }}
								className="active-percentage-bar"
							></div>
						</div>
					</div>
				))}
			</div>
			,
			<div className="resume-screen-container" key="projects">
				{projectDetails.map((projectDetails, index) => (
					<ResumeHeading
						key={index}
						heading={projectDetails.title}
						subHeading={projectDetails.subHeading}
						description={projectDetails.description}
						fromDate={projectDetails.duration.fromDate}
						toDate={projectDetails.duration.toDate}
					/>
				))}
			</div>
			,
			<div className="resume-screen-container" key="interests">
				<ResumeHeading heading="Football" description="I Love ALAhly Sports" />
			</div>
		
	];

	const handleCarousal = (index) => {
		let offsetHeight = 360;
		let newCarousalOffset = {
			style: {
				transform: "translateY(" + index * offsetHeight * - 1 + "px)",
			},
		};
		setCarousalOffSetStyle(newCarousalOffset);
		setSelectedBulletIndex(index);
	};

	const getBullets = () => {
		return resumeBullets.map((bullet, index) => (
			<div
				onClick={() => handleCarousal(index)}
				className={
					index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
				}
				key={index}
			>
				<img
					className="bullet-logo"
                    src={bullet.logoSrc}
					alt="B "
				/>
				<span className="bullet-label">{bullet.label}</span>
			</div>
		));
	}
	const getResumeScreen = () => {
		return (
			<div
				style={carousalOffSetStyle.style}
				className="resume-details-carousal"
			>
				{resumeDetails.map((ResumeDetail) => ResumeDetail)}
			</div>
		);
	};
useEffect(() => {
    return () => {
        fadeInSubscription.unsubscribe();
    };
}, [fadeInSubscription]);

	return (
		<div className="resume-container screen-container " id={props.id || ""}>
			<div className="resume-content">
				<ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
				<div className="resume-card">
					<div className="resume-bullets">
						<div className="bullet-container">
							<div className="bullet-icons"></div>
							<div className="bullets">{getBullets()}</div>
						</div>
					</div>

                    <div className="resume-bullet-details">
                        {getResumeScreen()}
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
