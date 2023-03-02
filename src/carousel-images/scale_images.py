import os
import PIL.Image
from math import floor


breakpoints = {
    'sm': 576,
    'md': 768,
    'lg': 992,
    'xl': 1200
}


def get_images():
    return [f for f in os.listdir(os.path.curdir) if f.endswith('.jpg')]


def get_image_width(imagepath):
    with PIL.Image.open(imagepath) as img:
        return img.size


def resize_image(image, size, breakpoint):
    outfile = os.path.splitext(image)[0] + f'-{breakpoint}.jpg'
    outfilepath = os.path.join('scaled', outfile)
    if not os.path.exists(outfilepath):
        img = PIL.Image.open(image)
        img.thumbnail(size)
        img.save(outfilepath)


if __name__ == '__main__':
    images = get_images()
    for image in images:
        img_width, img_height = get_image_width(image)
        for b in breakpoints:
            scaled_width = breakpoints[b]
            ratio = scaled_width / img_width
            scaled_width = floor(img_width * ratio)
            scaled_height = floor(img_height * ratio)
            scaled_size = scaled_width, scaled_height
            resize_image(image, scaled_size, b)
