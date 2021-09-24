import React, { useState } from 'react'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import styles from './Skills.module.scss'
import { Fade } from 'react-awesome-reveal'

const Skills: React.FC = () => {
  return (
    <div className={styles.skills}>
      <Fade triggerOnce direction="up">
        <SectionHeader title="Skills" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          ducimus ad minima corporis soluta vel similique rem enim tempora
          incidunt, consequuntur architecto a nisi quibusdam aspernatur fugiat
          beatae dolor. Dolore excepturi ratione ipsa illum totam sunt earum ea
          assumenda veritatis? Dolorem dignissimos est tenetur, molestias
          aliquam, animi magni at similique cumque qui sequi sunt nobis?
          Officiis eos nam qui placeat. Voluptatem cumque soluta fuga, eos,
          totam quae similique perferendis mollitia, officiis provident iusto
          commodi deleniti voluptates sed illo maiores dolores. Obcaecati,
          aspernatur tempore modi officia laborum ad ratione numquam praesentium
          eos maxime! Inventore sit soluta saepe totam laudantium blanditiis
          quis.
        </p>
      </Fade>
    </div>
  )
}

export default Skills
