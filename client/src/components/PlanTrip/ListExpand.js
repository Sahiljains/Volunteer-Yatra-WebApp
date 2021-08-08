import { useState } from 'react'

import openAll from '../../assets/buttons/open-all.png'
import hideAll from '../../assets/buttons/hide-all.png'

const ListItem = ({ ques: { question, answers }, allOpen, showBullets, bigBullet }) => {
  const [visible, setVisible] = useState(false)
  return (
    <h2 className='text-semi-bold lead'>
      <li>
        {question}{' '}
        <span className='text-normal cursor sign' onClick={() => setVisible(!visible)}>
          {visible || allOpen ? '-' : '+'}
        </span>
      </li>
      <div className={`opened-contents ${visible || allOpen ? 'show' : ''}`}>
        {answers.map((ans, index) => (
          <p className='p3 text-medium text-justify d-flex' key={index}>
            {showBullets && <span className='bullet' style={{ width: bigBullet ? '1rem' : '0.6rem' }} />}{' '}
            <span className='mx-2'>{ans}</span>
          </p>
        ))}
      </div>
    </h2>
  )
}

const ListExpand = ({ questions, title, showBullets, bigBullet }) => {
  const [allOpen, setAllOpen] = useState(false)
  return (
    <div className='container-fluid vertical-margin expand-list'>
      <div className='head'>
        <h1 className='text-semi-bold'>{title}</h1>
        <img src={allOpen ? hideAll : openAll} alt='' className='cursor zoom-2' onClick={() => setAllOpen(!allOpen)} />
      </div>

      <ol>
        {questions.map((question, index) => (
          <ListItem ques={question} key={index} allOpen={allOpen} showBullets={showBullets} bigBullet={bigBullet} />
        ))}
      </ol>
    </div>
  )
}
ListExpand.defaultProps = {
  questions: [],
  showBullets: true,
  bigBullet: false,
}

export default ListExpand
