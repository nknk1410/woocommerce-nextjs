import React from 'react'
import styles from "@/styles/About.module.css";


const About = () => {
  return (
   <>
<div className= {`${styles.container} ${styles.pageText}`}>
<h1 className={`${styles.pY40} ${styles.textCenter}`}>Custom Heading</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum eu massa quis consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec non lorem consequat, dapibus ante eget, auctor arcu. Quisque mauris magna, condimentum in iaculis vel, suscipit eu augue. Ut porttitor in ex et gravida. Etiam vel venenatis nisl. Proin egestas tincidunt aliquet. Sed risus neque, finibus ut lacus at, scelerisque luctus dui.</p>  

<p>Proin maximus enim in lacus faucibus, in ullamcorper mi molestie. Nullam aliquet nisl non eros tincidunt, vel convallis quam interdum. Aenean malesuada ut sem sit amet venenatis. Fusce vitae molestie nulla. Praesent vitae enim diam. Nunc sit amet dignissim ante, at hendrerit tortor. Quisque et convallis diam, eu feugiat odio. Nullam eget rhoncus erat. Ut odio nisl, posuere nec gravida id, finibus vitae diam. Sed in molestie nunc. Nullam augue felis, gravida eget tempus ac, viverra sed ante. Curabitur sed sapien ut velit mollis ornare eu et urna.</p>
</div>
</> 
  )
}

export default About
