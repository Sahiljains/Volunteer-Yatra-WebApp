import { useState } from 'react'

import projectCard from '../../assets/vectors/project-type-card.svg'

import eco from '../../assets/vectors/eco.svg'
import hospitality from '../../assets/vectors/hospitality.svg'
import social from '../../assets/vectors/social.svg'
import otherProjects from '../../assets/vectors/other-projects.svg'

const allProjects = [
  {
    img: eco,
    title: 'Eco Projects',
    types: ['Eco Village', 'Farm', 'Eco Lodge', 'Holistic Centre', 'Permaculture Project'],
  },
  {
    img: social,
    title: 'Social Projects',
    types: ['Donation Drive', 'Sapling Plantation', 'Cleanliness Drive', 'Food Distribution', 'Old Age Care Drive'],
  },
  {
    img: hospitality,
    title: 'Hospitality',
    types: ['Covid caring', 'Charity cruises', 'Touring with heart', 'Feed the hungry', 'Pack for Purpose'],
  },
  {
    img: otherProjects,
    title: 'Other Projects',
    types: ['Books Donation', 'Blood Donation', 'Nature restorative', 'Clothes Collection', 'Emergency services'],
  },
]

const ProjectType = ({ content }) => {
  const [active, setActive] = useState(eco)
  const [index, setIndex] = useState(0)

  return (
    <div className='container-fluid vertical-margin project-type'>
      <h1 className='text-semi-bold'>Project Type</h1>
      <p className='p4 text-medium lead'>A wide variety of projects to be a part of.</p>
      <div className='row'>
        <div className='col-6 projects-list d-flex flex-column justify-content-center'>
          {allProjects.map((projectItem, i) => (
            <div className='project-item' key={i}>
              <h2
                className='text-semi-bold lead my-4 cursor'
                onClick={() => {
                  setActive(projectItem.img)
                  setIndex(i)
                }}>
                {projectItem.title}{' '}
                {active !== projectItem.img && <img src={projectItem.img} alt='' className='mx-3' />}
              </h2>
              {active === projectItem.img && (
                <div className='underline-item d-flex'>
                  <div className='bulb'></div> <div className='line'></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='col-6 project-card-col d-flex position-relative justify-content-center'>
          <img src={projectCard} alt='' className='project-info-card-img' />
          <div className='project-info-card position-absolute'>
            <img src={active} alt='' />
            <div className='project-info-lists'>
              {allProjects[index].types.map((type, i) => (
                <p className='p4 text-semi-bold lead mt-2 mb-4' key={i}>
                  {type}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <>{content}</>
    </div>
  )
}

export default ProjectType
