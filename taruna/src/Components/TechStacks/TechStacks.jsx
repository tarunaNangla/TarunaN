import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './TechStacks.module.css';
// import React from 'react'
// import GitHubCalendar from "react-github-calendar";
// import { Row } from "react-bootstrap";

const TechStacks = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div
			data-aos='fade-right'
			data-aos-offset='200'
			data-aos-easing='ease-in-sine'
			data-aos-duration='800'
		>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
				// id="Proficiencies"
			>
				Skills
			</h1>
			<div className={styles.borderBottom} />
		     
            <h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
				id="Proficiencies"
			>
				Frontend
			</h1>

			<div className={styles.container}>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-html5-plain colored' />
					<span>HTML</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-css3-plain colored' />
					<span>CSS</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-javascript-plain colored' />
					<span>Javascript</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-react-original colored' />
					<span>React</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#7248B6' }}
						className='devicon-redux-original'
					/>
					<span>Redux</span>
				</div>
				{/* <div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#509941' }}
						className='devicon-nodejs-plain'
					/>
					<span>Node</span>
				</div> */}
				{/* <div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-express-original' />
					<span>Express</span>
				</div> */}
				{/* <div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-mongodb-plain colored' />
					<span>MongoDB</span>
				</div> */}

				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-typescript-plain colored' />
					<span>TypeScript</span>
				</div>

				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-bootstrap-plain colored' />
					<span>Bootstrap</span>
				</div>
				
			
			</div>

           

			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
				// id="Proficiencies"
			>
				Backend
			</h1>


			<div className={styles.container}>
				{/* <div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-html5-plain colored' />
					<span>HTML</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-css3-plain colored' />
					<span>CSS</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-javascript-plain colored' />
					<span>Javascript</span>
				</div> */}
				{/* <div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-react-original colored' />
					<span>React</span>
				</div> */}
				{/* <div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#7248B6' }}
						className='devicon-redux-original'
					/>
					<span>Redux</span>
				</div> */}
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#509941' }}
						className='devicon-nodejs-plain'
					/>
					<span>Node</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-express-original' />
					<span>Express</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-mongodb-plain colored' />
					<span>MongoDB</span>
				</div>
			</div>
          
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
				// id="Proficiencies"
			>
				Skill Section
			</h1>
			<div
			style={{ color: `${newTheme.title}` }}
			className={styles.heading}
			//  style={{ 
			// 	//  margin: "auto", width: "60%",padding: "10px"
			// 	 }}
			>
				
	        <table >
				<tr>
					<td><label for="file"><div style={{color:"white"}}>Html</div></label></td>
					<td><progress id="file" value="90" max="100"> 90% </progress></td>
				</tr>
				<tr>
					<td><label for="file"><div style={{color:"white"}}>Css</div></label></td>
					<td><progress id="file" value="87" max="100"> 87% </progress></td>
				</tr>

				<tr>
					<td><label for="file"><div style={{color:"white"}}>JavaScript</div></label></td>
					<td><progress id="file" value="68" max="100"> 68% </progress></td>
				</tr>

				<tr>
					<td><label for="file"><div style={{color:"white"}}>Redux</div></label></td>
					<td><progress id="file" value="66" max="100"> 66% </progress></td>
				</tr>

				<tr>
					<td><label for="file"><div style={{color:"white"}}>React</div></label></td>
					<td><progress id="file" value="65" max="100"> 65% </progress></td>
				</tr>

				<tr>
					<td><label for="file"><div style={{color:"white"}}>Bootstrap</div></label></td>
					<td><progress id="file" value="88" max="100"> 88% </progress></td>
				</tr>

				<tr>
					<td><label for="file"><div style={{color:"white"}}>Nodejs</div></label></td>
					<td><progress id="file" value="65" max="100"> 65% </progress></td>
				</tr>

				<tr>
					<td><label for="file"><div style={{color:"white"}}>Express</div></label></td>
					<td><progress id="file" value="77" max="100"> 77% </progress></td>
				</tr>

				<tr>
					<td><label for="file"><div style={{color:"white"}}>MongoDB</div></label></td>
					<td><progress id="file" value="88" max="100"> 88% </progress></td>
				</tr>

			</table>
			</div>
			
		
		</div>
	);
};

export default TechStacks;
