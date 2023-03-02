import scaledImages,
{
    generateSrcSet,
    generateSize
} from './carousel-images/scaled';

const lorem100 = `
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`

const startSliceMin = 0
const startSliceMax = 100
const endSliceMin = 150
const endSliceMax = 590

export const getProductList = () => {

    return scaledImages.map((img, key) => {

        let startSlice = Math.floor(Math.random() * (startSliceMax - startSliceMin + 1) + startSliceMin)
        let endSlice = Math.floor(Math.random() * (endSliceMax - endSliceMin + 1) + endSliceMin)

        return {
            images: img,
            name: `Product${key}`,
            text: lorem100.slice(startSlice, endSlice),
            alt: `Alt Text Image Product${key}`,
            src: `${img[3]}`,
            srcSet: generateSrcSet(img),
            size: generateSize(),
            btnText: `explore Product${key}`
        }
    })

}