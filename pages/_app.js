import "../assets/tailwind.css"
import '../assets/style.css'

import "swiper/swiper.scss"
import "swiper/swiper-bundle.css"
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
