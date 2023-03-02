import img1Sm from './1-sm.jpg'
import img1Md from './1-md.jpg'
import img1Lg from './1-lg.jpg'
import img1Xl from './1-xl.jpg'
import img2Sm from './2-sm.jpg'
import img2Md from './2-md.jpg'
import img2Lg from './2-lg.jpg'
import img2Xl from './2-xl.jpg'
import img3Sm from './3-sm.jpg'
import img3Md from './3-md.jpg'
import img3Lg from './3-lg.jpg'
import img3Xl from './3-xl.jpg'
import img4Sm from './4-sm.jpg'
import img4Md from './4-md.jpg'
import img4Lg from './4-lg.jpg'
import img4Xl from './4-xl.jpg'
import img5Sm from './5-sm.jpg'
import img5Md from './5-md.jpg'
import img5Lg from './5-lg.jpg'
import img5Xl from './5-xl.jpg'
import img6Sm from './6-sm.jpg'
import img6Md from './6-md.jpg'
import img6Lg from './6-lg.jpg'
import img6Xl from './6-xl.jpg'
import img7Sm from './7-sm.jpg'
import img7Md from './7-md.jpg'
import img7Lg from './7-lg.jpg'
import img7Xl from './7-xl.jpg'
import img8Sm from './8-sm.jpg'
import img8Md from './8-md.jpg'
import img8Lg from './8-lg.jpg'
import img8Xl from './8-xl.jpg'


export const imagesImg1 = [img1Sm, img1Md, img1Lg, img1Xl]
export const imagesImg2 = [img2Sm, img2Md, img2Lg, img2Xl]
export const imagesImg3 = [img3Sm, img3Md, img3Lg, img3Xl]
export const imagesImg4 = [img4Sm, img4Md, img4Lg, img4Xl]
export const imagesImg5 = [img5Sm, img5Md, img5Lg, img5Xl]
export const imagesImg6 = [img6Sm, img6Md, img6Lg, img6Xl]
export const imagesImg7 = [img7Sm, img7Md, img7Lg, img7Xl]
export const imagesImg8 = [img8Sm, img8Md, img8Lg, img8Xl]

export const images = [imagesImg1, imagesImg2, imagesImg3, imagesImg4, imagesImg5, imagesImg6, imagesImg7, imagesImg8]

export const generateSrcSet = (images) => {
    const [imgSm, imgMd, imgLg, imgXl] = images
    return `${imgSm} 576w, ${imgMd} 768w, ${imgLg} 992w, ${imgXl} 1200w`
}

export const generateSize = () => {
    return "(max-width: 576px) 576px, (max-width: 768px) 768px, (max-width: 992px) 992px, (max-width: 1200px) 1200px, 1400px"
}

export default images