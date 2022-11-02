import React from 'react'
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import ReactTooltip from 'react-tooltip';
import Styles from "./Calender.module.css"

export const Calendar = () => {
  return (
  <>
        <Row style={{ justifyContent: "center", padding: "0% 5%",color:"wheat"  }}>
          <ReactTooltip />
      
      <GitHubCalendar
      className="project-heading"

       style={{width:"100%",
    margin: "0 auto"}}
        username="tarunaNangla"
        blockSize={15}
        blockMargin={5}
        color="#C084F5"
        fontSize={11}
      />

<div>

<img
className={Styles.streak}
src="https://github-readme-streak-stats.herokuapp.com?user=tarunaNangla"></img>
  </div>

{/* <br/> */}

<div style={{display:"flex",gap:"10px", justifyContent:"center" }} >

<img
className={Styles.streak}
src="https://github-readme-stats.vercel.app/api?username=tarunaNangla"></img>

<img
className={Styles.streak}
src="https://github-readme-stats.vercel.app/api/top-langs/?username=tarunaNangla&layout=compact"></img>
</div>
      
    </Row>

    
  </>
  

  )
}