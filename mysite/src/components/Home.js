import React from 'react'
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://lh3.googleusercontent.com/ypTIReM8DMjrCo2f5OvDxM8mADzN3ipG--Mr3LM25KzbJjUAcKw_VrAG1Vcs_WcxadeBNbi0WMtfBSsehSrCyNjrwAg_ihu9sKxKzP3w2x7fAqymYDHwfi6aphiAMsVN6ztxLjLL5DUSTRFcjcUTpKX2uVvCWs9trfKU10Zewk6BYytD_9wbyproVH62MrAW0k6wy2lpmu8FkPZ4-jXf0KfB_m_EHZUV9OYLIy_0ff_DZ33_9K8F5qUsEvZnaT-pDBLCIxgg4qLUxzymlZ6LAxGxBPyb1kwk26sfvU6sZH4ro8OaxxkCkapbWQgQTU4gBOl_qA6_azMjyFBqDdjzhdp3VTx9Q0gpiGrguA6dFhx8w-_QAr2GIEDcfC3-yNhDBVrArLcD9c55kzJpB0-n7sv6IefrFG5FIZy4JOhpSEFyCz7rMmg4NiAjhUhI4FahAP91HvpnTjQhCqaqV2tTMciMzzi7B2dOq40o0L4dgoASxQxuKNvwQG6v-SPLUOXlsj9rveynlbExyexvMpCw6vpG5YJytidqJT0C_PtAiC-MhBxTtyUIagQMnCi-prtpZDrGgA_93Mp-ffqH6ymvKOuzcCsWkLEvPavIfO4JEcqqgya0JFl1sZFlx4AW_8ZJ=w802-h402-no',
    altText: 'Slide 1',
    header: 'Fishing',
    caption: 'Jefferson Lake Rainbow Trout'
  },
  {
    src: 'https://lh3.googleusercontent.com/P2MYPueF1q5C_CGufpIIB4wI5MkUH78SaauFa1aDeg2vAZxPr7ZbGv0C6mMom2CL8erF7S_8gh_RCY6QpNOImJy-56ImguFvTSrVclsuIMSSPlOrknvjjaOgvna7c6a-apSiFTBZSbY9Ueoz50kssaPKZpwkoH8doc83CjPBW-Ca5lRwtJVLLIevNwMMNaegXTB4sRkDni1f4IAWmHfER09jSQnHWKtwmFA0gZO2KxFnBuW-SSeY9C4gMiAWgQjm5OIedsOKmCWk20BwAngyfI_B_7rH8EYMLKX76bh7VFbKetNC03Kvbt5SOGvf7Sv6UzWyYkfu4zAolkuwnNmGSOyWlL7ZiiAo1c1X4shNAaXoGCtbnRLWCBMO_oaUGkblqI8qYnwRHQVTooSJRGZSTgCv3LPARJ7AQyWgD7vDUfciul8Dp-8PclnfiXF3UMFMcp0PZiAGJRrLcMm4Im7bcRj96rz04ZdShHsfLubx2L6ecx2aKiCnl3cGI5rh7Ph776T2nX4utHzSbWaclXfHocSeeE4Zn7-KNCzDxC9QP264JD89twscf9yURjOnWwKyUBYRp4Cri5qk0jovR09Y_L_FxUzsVzYQYJVo6Sha6DMKbuJJTGdFSdiEyCJZ16Pw=w802-h402-no',
    altText: 'Slide 2',
    header: 'Hiking',
    caption: 'Some fall hiking at Jefferson Lake'
  },
  {
    src: 'https://lh3.googleusercontent.com/0f6CJC3NrNFb6hilwncSWyIF00DtRNiWGvCEv9jGLylwER9-poPurQKwtbGduyLjYe3FYRNHPoFbaLwTNEsyYgnuB-iVMXaSFNRDiPjvbKiB1a74Qk4twcFCZVpjyqtaqWhAbRT0vpLThDTA3CAE1LiMJjC9qDDTXJfRjFhRzYhHogXqVJethMMskWa43Mbi6ZWsDIF6Sp36fkUua8BtAfY1Cdu4qV3pjmWH71TM2v0frFtzNR9DKPyAUBwU5AgSLAdL8dDM-ZezhPSpZbrV6NrIE8lViqxh8h3WVAZxh5SMFL3CNy-JV7Q8IcZH2eXK1Ne_i1jrMIELzmONk5FabsazEmFwZmJiQzWjXka6HLHv65uDQvBckGw_dvDtMKMDWupDQ2-dudTyAzEKGEiGrReSgpTRJI9jLl__e0jKpNQ0g5JQsfcoaSJoOmVnYqQF9z8sJMm_S2MU9rSQVgoDEJzQHZTAgLOhAEBCzK94hwPqAKkd5dW1xbVOJascZEE2PEY1jxrWK5IVfINFgtRP0KMb46eR4I0vxuktcHUT8hJ3Xu8Pce2HzeZTYDMu6q4qLESJjnEygocYKRtMtt9zqG13yLKf_vO9JZOgrKMNv-vlhpOrivlTiQjXYKWlXWOe=w802-h402-no',
    altText: 'Slide 3',
    header: 'Baseball',
    caption: 'Taking in a game at AT&T Park in San Francisco'
  }
];

const Home = () => {
  return (
    <div className='homepage'>
      <div className="container">
        <div className="bird-container-one">
          <div className="bird-one"></div>
        </div>
        <div className="bird-container-two">
          <div className="bird-two"></div>
        </div>
        <div className="bird-container-three">
          <div className="bird-three"></div>
        </div>
        <div className="bird-container-four">
          <div className="bird-four"></div>
        </div>
      </div>
      <div className='homepage-name'>
        <h1>Daniel Pifer</h1>
        <h4>Full Stack Web Developer</h4>
        <h3>And I also enjoy...</h3>
      </div>
      <div id='carousel'>
        <UncontrolledCarousel id='carousel-items' items={items} />
      </div>
    </div>
  )
}

export default Home