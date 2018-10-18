import React from 'react'
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://lh3.googleusercontent.com/kGoHTNdNBKeC5UEYuVPu_NdjOlcBlcGxKfK-hi9q7ZSo7MytfFFaQQaM94uQbh6XYGBMtoKP7JFUcRMUIBHM_-1dHue60aKVhCQqLrRpm_jeQ6gK_I0m2RKbyYUAm7ZSi-0aWvAJ_oYOQcCscMErzx3xrBSwttl7pPefQSIfPyub2fh5BuH7lz5WvwGM_ODdfzesgcqZ6OSP_CiXPl1RQzDLkOGSxfGm9wIGWMRWFQwqGZL3V7ewaY-vTG__4F3WW9nGNtzAHiYJjUVtqOjJs-cDRht06G3z-owixALz4Y7gqgxzGRvzdByvOvMa4xEGrJpqhJ5slZCca8E7W9Z1ZEuKjdhHgF1oxDNSSA4fZ1Vr6dpjSTLJH7E0DTysqYIYw1DaFNvqkS07FatR6kvS9_kHt8GCyzEatF24ShlG5Y-ZbKXiLtbq3ufBj32AixYWgrnqhhqNiWPYxpOkS59lN0o4TmWg2Mxll9nm58MOzpcvi156N7RxpbqINXOXXc5C5FfAn8B4QKGefIJuMHCCSiDEiMj_ojxRbQsgBvawqIl-kfFsuzd8EgrOMPo5l2OkJlib1aUeJoMnkVx6JitJyO84PUxJZnTTMX1ipeAbJOmYA1cW3j_Zg7z3iSkD3ZsC=w802-h403-no',
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
    src: 'https://lh3.googleusercontent.com/4fAtsAAINi9rySLESglBV0G8YJOJoOo8j4E4j92BR3To0gF3goH2iCKcIdLA45gyqoOy6Ku36wNAj72m83PVcCYzMHwkAkQDDw8BbS1JBeGLAm7DzrblzAumLEDRqxN9JIzbvqpYQjQdGH-wy44gz4PQAkm-RVvE0qiH-J7hZpx4Mxc_X3HiPtKAFVpQiYRcw46ytg_HwrIF53x7RtoLo2vHGts6AlaepciF9HhJfk4Oz8RW2dwQ_GXhNR6p1pFqiOnmsQA_PxdnRg4QUewjqD4dpvldrG9_KZvbpqLrv0CS6wwoUr-i21Ged5ib_P8VNKyusLigGEo9xYRKJyePbtcx4WWSuFFly-uWrTgO7wjYR-3xunCmoqiyJpGykN0NOkbno3Q1O2oKzb5g24Y1Gl7Z95m9wlMeMWJ0qvh-a35kkz4Ryr99XoqMk29tUDxEFMLN7GxUIK8oBb4X8s_VMKbPIcUrTc9htatmTWFkQPmRvtUCIOw3f7zOmWuS8ZW4UGkTWKbly1Cs0swg-v7_gb__UkuDeHI_cm2G6X-6IRqEHZtrXQnh-Sm93VbYimlDFsipqrCRtB54xlE09bPke5ecsLpAESncfSYEkTeclL9oLCiccWBcqkWp_YdKXZTf=w803-h402-no',
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
      </div>
      <div id='carousel'>
        <UncontrolledCarousel id='carousel-items' items={items} />
      </div>
      <div className='homepage-bio'>
        <h3>Biography</h3>
        <p>I have a wide range of experience that makes me uniquely well rounded. This quality makes me a valuable asset to any company. My military experience taught me leadership, and how to be an effective member of a team. My building experience taught me attention to detail, and how to deliver a professional, finished product to a customer.</p>
        <p>My tech experience in Customer Support and QA allow me to see the larger picture, and gave me a familiarity with the entire development process. As a QA Tester, I used my customer support experience to keep the users' needs in mind, which in turn made for a better final product.</p>
        <p>I'm comfortable diving into projects by myself, and also enjoy collaboration with a team. I worked remote for a year so I can get the job done with little supervision.</p>
        <p>But it's not all just work! I love heading up into the mountains for the weekend, exploring new hiking trails, or finding a good spot on a river and going fly-fishing. As an avid baseball fan, I also enjoy going to Rockies games whenever I can.</p>
        <p>I’m looking for opportunities that allow me to continue learning, and to fine tune my skills as a developer. I'd love to join a team that I can contribute to, and through the developers around me, become a valuable addition to the company.</p>
      </div>
    </div>
  )
}

export default Home