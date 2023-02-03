const right = document.querySelector(".right")
const left = document.querySelector(".left")
const slider = document.querySelector('.slider')
const image = document.querySelectorAll('.img')

let slidecount = 1

const rightSlide = () => {
    slider.style.transform = `translateX(${-slidecount * 500}px)`
    slidecount++
}
const prevSlide = () => {
    slider.style.transform = `translateX(${-(slidecount - 2) * 500}px)`
    slidecount--
}
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`
    slidecount = 1
}
const getLastSlide = () => {
    slider.style.transform = `translateX(-${(image.length - slidecount) * 500}px)`
    slidecount = image.length
}


right.addEventListener("click", () => {
    image.length > slidecount ?
        rightSlide()
        :
        getFirstSlide()

})
left.addEventListener("click", () => {
    slidecount > 1 ?
        prevSlide()
        : getLastSlide()


})