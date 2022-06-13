import classes from './About.module.css';

const About = () => {
	return (
		<div className={classes.wrapper}>
			<video autoPlay muted loop className={classes.video}>
				<source src="/layout/about-us-video.mp4" type="video/mp4" />
			</video>
		</div>
	);
};

export default About;
