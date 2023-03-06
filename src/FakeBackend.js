import {
    generateSrcSet,
    generateSize,
    images
} from './product-images/scaled';

const lorem100 = `
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`

const startSliceMin = 0
const startSliceMax = 100
const endSliceMin = 150
const endSliceMax = 590


export const getProductList = (count) => {

    let imageIndex = 0;

    return [...Array(count).keys()].map((x, key) => {

        let startSlice = Math.floor(Math.random() * (startSliceMax - startSliceMin + 1) + startSliceMin)
        let endSlice = Math.floor(Math.random() * (endSliceMax - endSliceMin + 1) + endSliceMin)

        let img = images[imageIndex]
        let imgBackside = images[imageIndex + 1]

        imageIndex += 2

        return {
            name: `Product${key}`,
            text: lorem100.slice(startSlice, endSlice),
            alt: `Alt Text Image Product${key}`,
            altBackside: `Alt Text Image Backside Product${key}`,
            src: `${img[3]}`,
            srcBackside: `${imgBackside[3]}`,
            srcSet: generateSrcSet(img),
            srcSetBackside: generateSrcSet(imgBackside),
            size: generateSize()
        }
    })

}