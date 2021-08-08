import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import blogPost from '../../assets/images/blog-post.png'
import testimonial from '../../assets/images/testimonial-image.jpg'

import insta from '../../assets/buttons/insta.png'
import fb from '../../assets/buttons/fb.png'
import twitter from '../../assets/buttons/twitter.png'
import linkd from '../../assets/buttons/linkd.png'
import unlike from '../../assets/buttons/unlike-blog-button.png'
import heart from '../../assets/buttons/like-blog-button.png'
import leftArrow from '../../assets/buttons/left-blog-shift.png'
import rightArrow from '../../assets/buttons/right-blog-shift.png'
import nextShift from '../../assets/buttons/left-button-arrow.png'
import community from '../../assets/buttons/community_button_blue.png'
import checkOutPlans from '../../assets/buttons/check-out-plans.png'

import commentBox from '../../assets/vectors/comment-box.svg'

import BlogPost from './BlogPost'
import Engagement from './Engagement'
import PageConnect from './../layout/PageConnect'

const comments = [
  {
    commentId: 1,
    name: 'Name',
    date: 'November 3, 2020',
    body:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.',
  },
  {
    commentId: 2,
    name: 'Name',
    date: 'November 3, 2020',
    body: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
    dolor in hendrerit in vulputate velit esse mo- lestie consequat, vel illum dolore eu feugiat nulla
    facilisis at vero eros et`,
  },
]

const SingleBlog = ({ match }) => {
  useEffect(() => window.scrollTo(0, 0), [])
  const [like, setLike] = useState(false)

  // const [comments, setComments] = useState({});

  // useEffect(() => {
  //   const params = useParams()

  //   const fetchComments = async() => {
  //     const data = await getComments(params.slug);

  //     if (data && !data.data) {
  //       executeTostr("Can't get comments", { type: "error" });
  //       return false;
  //     } else if (data && data.status === 401) {
  //       executeTostr(data.data.message, { type: "error" });
  //     } else if (data && data.data && data.data.data.comments) {
  //       setComments(data.data.data.comments);
  //       console.log('Comments from SingleBlog.js line 64 ', comments)
  //     }
  //   }

  //   fetchComments();
  // })

  return (
    <>
      <div className='blog-post container-fluid vertical-margin'>
        <div className='row'>
          <div className='col-sm-8 blog-post-col'>
            <img src={blogPost} alt='' className='blog-post-img' />
          </div>
          <div className='col-md-4 user-info text-center d-flex flex-column justify-content-center align-items-center'>
            <img src={testimonial} alt='' className='blog-user' />
            <div className='user-info-data'>
              <p className='p4 text-medium lead my-0 pt-3'>Name</p>
              <p className='p4 text-medium lead my-0 pb-4'>November 3, 2020</p>
              <img src={insta} alt='' className='zoom-2 cursor' />
              <img src={fb} alt='' className='zoom-2 cursor' />
              <img src={twitter} alt='' className='zoom-2 cursor' />
              <img src={linkd} alt='' className='zoom-2 cursor' />
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-8 blog-post-col'>
            <h2 className='text-semi-bold lead py-5'>Want to travel for free? I think this article will help you.</h2>
            <Engagement showShare={true} smaller={true} spacing={true} />
            <div className='yellow-line' style={{ width: '60%' }}></div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-10 para-col text-justify'>
            <p className='p4 text-medium lead pb-4'>
              It all starts with a need to have some change in life and a need to do some- thing that not only gives you
              immense pleasure but also teaches you about different cultures and ways of life. Yes, it is all about
              going to beautiful places, but not like any usual trips where you just get to sit in a hammock all day
              long, that is just a part of the fun.
            </p>
            <p className='p4 text-medium lead pb-4'>
              We are talking about volunteering, an amazing experience where you also have to help the locals (hosts)
              with the skill set you already have. But wait you have come here to know about free traveling....... Don’t
              worry we have got it covered for you. When you volunteer through our site you get all the opportu- nities
              to travel also your accommodation and food will be taken care of by us/host. You can volunteer in various
              fields according to your skill set and in- terests, like art, managing, farming, and many more.
            </p>
            <p className='p4 text-medium lead pb-4'>
              You can get a relaxed touring experience with perks like learning from your co-volunteers, learning about
              the heritage of the city and its people, sharing your experience, and building relationships where ever
              you go. Although if you want to explore the city/place more and also travelling to the location of
              volunteering you may have to do it on your finances, but the meals and accommodation are on us. You can
              volunteer for a particular number of hours in a day and sit back and relax for the rest of the day.
            </p>
            <p className='p4 text-medium lead pb-4'>
              If you want to earn more through this journey or completely turn into a nomad by leaving your job behind
              you can also freelance using your abilities and skills. Take a leap of faith and start something to add
              life to your days. If you are still doubtful about this feel free to visit our site.
            </p>

            <h3 className='text-semi-bold'>Liked the blog?</h3>
            <h3 className='text-semi-bold'>
              Show some love
              <img src={!like ? unlike : heart} alt='' className='zoom-2 cursor' onClick={() => setLike(!like)} />
            </h3>
          </div>
        </div>

        <div className='row more-blogs'>
          <div className='col-1 text-center'>
            <img src={leftArrow} alt='' className='zoom' />
          </div>
          <div className='col-10'>
            <div className='row'>
              <div className='col-sm-3'>
                <div className='zoom-2 cursor'></div>
              </div>
              <div className='col-sm-3'>
                <div className='zoom-2 cursor'></div>
              </div>
              <div className='col-sm-3'>
                <div className='zoom-2 cursor'></div>
              </div>
              <div className='col-sm-3'>
                <div className='zoom-2 cursor'></div>
              </div>
            </div>
          </div>
          <div className='col-1 text-center'>
            <img src={rightArrow} alt='' className='zoom' />
          </div>
        </div>
      </div>

      <div className='yellow-line' style={{ margin: '3rem' }}></div>

      <div className='container-fluid'>
        <div className='add-comment'>
          <img src={commentBox} alt='' />
          <img src={testimonial} alt='' className='user-img color-2' />
          <input type='text' name='type-comment' id='type-comment' placeholder='Type a comment' />
          <div className='submit-comment-button'>
            <img src={nextShift} alt='' className='zoom' />
          </div>
        </div>
      </div>

      <div className='yellow-line' style={{ margin: '3rem' }}></div>

      <div className='container-fluid comments-section vertical-margin'>
        <h2 className='text-semi-bold'>Comments</h2>
        <div className='comment-list'>
          {comments.map((comment, index) => (
            <div className='comment-box' key={comment.commentId}>
              <div className='row'>
                <div className='col-xs-hide col-sm-2 user-pic-col'>
                  <img src={testimonial} alt='' className={`user-img color-${index % 2 === 0 ? '1' : '2'}`} />
                </div>
                <div className='col-sm-10'>
                  <div className='comment-content'>
                    <p className='text-medium'>{comment.name}</p>
                    <p className='text-medium'>{comment.date}</p>
                    <p className='p4 py-3 text-medium lead'>{comment.body}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='row mx-4'>
          <h3 className='text-bold cursor zoom-2'>See more</h3>
        </div>
      </div>

      <div className='also-read'>
        <div className='container-fluid vertical-margin'>
          <h1 className='text-semi-bold py-1 px-5'>Readers also read</h1>
          <div className='row more-blogs add-padding'>
            <div className='col-1 d-flex align-items-center justify-content-center'>
              <img src={leftArrow} alt='' className='zoom cursor' />
            </div>
            <div className='col-10'>
              <div className='row'>
                <div className='col-sm-4 blog-col'>
                  <BlogPost small='xs' spacing={true} />
                </div>
                <div className='col-sm-4 blog-col'>
                  <BlogPost small='xs' spacing={true} />
                </div>
                <div className='col-sm-4 blog-col'>
                  <BlogPost small='xs' spacing={true} />
                </div>
              </div>
            </div>
            <div className='col-1 d-flex align-items-center justify-content-center'>
              <img src={rightArrow} alt='' className='zoom cursor' />
            </div>
          </div>
        </div>
      </div>

      <PageConnect
        content={
          <>
            <p className='p4 text-bold text-center'>Want to join us and have the experience of your life?</p>
            <p className='p4 text-medium lead text-center'>
              Find unique places where you can exchange your skills for accommodation.
            </p>
            <div className='button-row text-center pb-5'>
              <Link to='/register/yatri'>
                <img src={community} alt='' className='cursor zoom-2' />
              </Link>
              <Link to='/pricing'>
                <img src={checkOutPlans} alt='' className='cursor zoom-2' />
              </Link>
            </div>
          </>
        }
      />
    </>
  )
}

export default SingleBlog
