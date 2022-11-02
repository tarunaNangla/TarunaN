import { styled } from '@material-ui/core'
import React from 'react'
import Styles from "./Streak.module.css"
const Streak = () => {
  return (
    <div >
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

{/* https://github-readme-stats.vercel.app/api/top-langs/?username=tarunaNangla&layout=compact */}

    </div>
  )
}

export default Streak
