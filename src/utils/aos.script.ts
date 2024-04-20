import AOS from 'aos'
import 'aos/dist/aos.css'

export function aosInit() {
  AOS.init({
    duration: 1000,
    delay: 150,
    // once: true,
  })
}
