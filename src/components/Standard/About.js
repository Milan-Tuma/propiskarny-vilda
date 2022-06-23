import classes from './About.module.css';

const aboutData = {
	en: {
		title: 'About our journey',
		text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur vitae diam non enim vestibulum interdum. In convallis. Quisque porta. Curabitur sagittis hendrerit ante. Morbi scelerisque luctus velit. Maecenas aliquet accumsan leo. ',
		textTwo:
			'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Aliquam erat volutpat. Fusce aliquam vestibulum ipsum. In rutrum. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Quisque porta. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est.',
	},
	cs: {
		title: 'O naší cestě',
		text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur vitae diam non enim vestibulum interdum. In convallis. Quisque porta. Curabitur sagittis hendrerit ante. Morbi scelerisque luctus velit. Maecenas aliquet accumsan leo. ',
		textTwo:
			'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Aliquam erat volutpat. Fusce aliquam vestibulum ipsum. In rutrum. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Quisque porta. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est.',
	},
};

const About = ({ lang }) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.background}>
				<div className={classes.content}>
					<h2>{aboutData[lang].title}</h2>
					<p className={classes.text}>{aboutData[lang].text}</p>
					<p className={classes.text}>{aboutData[lang].textTwo}</p>
				</div>
			</div>
		</div>
	);
};

export default About;
