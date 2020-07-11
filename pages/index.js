import Navbar from "../components/Navbar";
// import { Carousel } from "../components/Carousel";
import { Featur } from "../components/Featur";
import SwiperSlider from '../components/SwiperSlider'
import { Footer } from "../components/Footer";
import NewestBook from "../components/NewestBook";
import Link from "next/link";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#cbd5e0" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#cbd5e0" }}
      onClick={onClick}
    />
  );
}


const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  className: "px-4",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  pauseOnHover: true
};

export default () => (

  <div className="flex flex-col w-full">
    {/* Navbar */}
    <Navbar />
    <div className="container flex mt-6 lg:mt-10 px-4 md:px-12 lg:px-16">
      <SwiperSlider />
    </div>
    
    <Featur />

    {/* Flase Sale */}

    {/* Buku Terpopuler */}
    <div className="flex flex-col container px-4 md:px-12 lg:px-16 my-4">
      <div className="flex text-gray-800 justify-between items-center">
        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-medium">Buku Terpopuler</p>
        <Link href="/best-seller">
          <a className="text-gray-600 text-sm">Lihat Semua</a>
        </Link>
      </div>
      <div className="flex flex-wrap my-2 justify-start">
        <div className="flex-none bg-white overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1 mt-2">
          <div className="items-center">
              <img src="/images/books/berdikaribook_I_2019_Feb_10_02_02_01.jpg" alt=""/>
          </div>
          <div className="px-2 py-1 border">
            <div className="font-medium text-gray-700 h-16 text-xs md:text-sm truncatee">Orang miskin dilarang sekolah</div>
            <div className="font-normal truncate text-gray-600 text-xs">Puthut Ea</div>
            <div className="text-gray-900 font-medium text-xs md:text-sm">Rp 50.000</div>
          </div>
        </div>
        <div className="flex-none bg-white overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1 mt-2">
          <div className="items-center">
              <img src="/images/books/berdikaribook_I_2019_Feb_10_02_02_20.jpg" alt=""/>
          </div>
          <div className="px-2 py-1 border">
            <div className="font-medium text-gray-700 h-16 text-xs md:text-sm truncate">Marxisme untuk pemula</div>
            <div className="font-normal truncate text-gray-600 text-xs">Rupert Woodfin</div>
            <div className="text-gray-900 font-medium text-xs md:text-sm ">Rp 40.000</div>
          </div>
        </div>
        <div className="flex-none bg-white overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1 mt-2">
          <div className="items-center">
              <img src="/images/books/berdikaribook_I_2019_Feb_10_02_02_37.jpg" alt=""/>
          </div>
          <div className="px-2 py-1 border">
            <div className="font-medium text-gray-700 h-16 text-xs md:text-sm truncate">Panggung komunikasi politik</div>
            <div className="font-normal truncate text-gray-600 text-xs">Dr. Gun gun heryanto</div>
            <div className="text-gray-900 font-medium text-xs md:text-sm">Rp 78.000</div>
          </div>
        </div>
        <div className="flex-none bg-white overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1 mt-2">
          <div className="items-center">
              <img src="/images/books/berdikaribook_I_2019_Feb_10_02_02_50.jpg" alt=""/>
          </div>
          <div className="px-2 py-1 border">
            <div className="font-medium text-gray-700 h-16 text-xs md:text-sm truncate">Media kooperasi & kooperasi media</div>
            <div className="font-normal truncate text-gray-600 text-xs">Dave boyle</div>
            <div className="text-gray-900 font-medium text-xs md:text-sm">Rp 72.000</div>
          </div>
        </div>
        <div className="flex-none bg-white overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1 mt-2">
          <div className="items-center">
              <img src="/images/books/berdikaribook_I_2019_Feb_10_02_08_46.jpg" alt=""/>
          </div>
          <div className="px-2 py-1 border">
            <div className="font-medium text-gray-700 h-16 text-xs md:text-sm truncate">This is why i need you</div>
            <div className="font-normal truncate text-gray-600 text-xs">Brian khrisna</div>
            <div className="text-gray-900 font-medium text-xs md:text-sm">Rp 80.000</div>
          </div>
        </div>
        <div className="flex-none bg-white overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1 mt-2">
          <div className="items-center">
              <img src="/images/books/berdikaribook_I_2019_Feb_10_02_09_51.jpg" alt=""/>
          </div>
          <div className="px-2 py-1 border">
            <div className="font-medium text-gray-700 h-16 text-xs md:text-sm truncate">Tindakan tindakan kecil perlawanan</div>
            <div className="font-normal truncate text-gray-600 text-xs">Steve crawsaw</div>
            <div className="text-gray-900 font-medium text-xs md:text-sm">Rp 85.000</div>
          </div>
        </div>
      </div>
    </div>

    {/* Buku Pre Order */}
    <div className="flex flex-col container px-4 md:px-12 lg:px-16 my-4">
      <div className="flex text-gray-800 justify-between items-center">
        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl font-medium">Buku Pre Order</p>
        <Link href="/best-seller">
          <a className="text-gray-600 text-sm">Lihat Semua</a>
        </Link>
      </div>
      <div className="flex flex-wrap my-2 justify-start">
        <div className="flex-none bg-white overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1 mt-2">
          <div className="items-center">
              <img src="/images/books/berdikaribook_I_2019_Feb_10_02_02_01.jpg" alt=""/>
          </div>
          <div className="px-2 py-1 border">
            <div className="font-medium text-gray-700 h-16 text-xs md:text-sm truncatee">Orang miskin dilarang sekolah</div>
            <div className="font-normal truncate text-gray-600 text-xs">Puthut Ea</div>
            <div className="text-gray-900 font-medium text-xs md:text-sm">Rp 50.000</div>
          </div>
        </div>
        <div className="flex-none bg-white overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1 mt-2">
          <div className="items-center">
              <img src="/images/books/berdikaribook_I_2019_Feb_10_02_02_20.jpg" alt=""/>
          </div>
          <div className="px-2 py-1 border">
            <div className="font-medium text-gray-700 h-16 text-xs md:text-sm truncate">Marxisme untuk pemula</div>
            <div className="font-normal truncate text-gray-600 text-xs">Rupert Woodfin</div>
            <div className="text-gray-900 font-medium text-xs md:text-sm ">Rp 40.000</div>
          </div>
        </div>
        <div className="flex-none bg-white overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1 mt-2">
          <div className="items-center">
              <img src="/images/books/berdikaribook_I_2019_Feb_10_02_02_37.jpg" alt=""/>
          </div>
          <div className="px-2 py-1 border">
            <div className="font-medium text-gray-700 h-16 text-xs md:text-sm truncate">Panggung komunikasi politik</div>
            <div className="font-normal truncate text-gray-600 text-xs">Dr. Gun gun heryanto</div>
            <div className="text-gray-900 font-medium text-xs md:text-sm">Rp 78.000</div>
          </div>
        </div>
        <div className="flex-none bg-white overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1 mt-2">
          <div className="items-center">
              <img src="/images/books/berdikaribook_I_2019_Feb_10_02_02_50.jpg" alt=""/>
          </div>
          <div className="px-2 py-1 border">
            <div className="font-medium text-gray-700 h-16 text-xs md:text-sm truncate">Media kooperasi & kooperasi media</div>
            <div className="font-normal truncate text-gray-600 text-xs">Dave boyle</div>
            <div className="text-gray-900 font-medium text-xs md:text-sm">Rp 72.000</div>
          </div>
        </div>
        <div className="flex-none bg-white overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1 mt-2">
          <div className="items-center">
              <img src="/images/books/berdikaribook_I_2019_Feb_10_02_08_46.jpg" alt=""/>
          </div>
          <div className="px-2 py-1 border">
            <div className="font-medium text-gray-700 h-16 text-xs md:text-sm truncate">This is why i need you</div>
            <div className="font-normal truncate text-gray-600 text-xs">Brian khrisna</div>
            <div className="text-gray-900 font-medium text-xs md:text-sm">Rp 80.000</div>
          </div>
        </div>
        <div className="flex-none bg-white overflow-hidden w-1/3 md:w-1/5 lg:w-1/6 px-1 mt-2">
          <div className="items-center">
              <img src="/images/books/berdikaribook_I_2019_Feb_10_02_09_51.jpg" alt=""/>
          </div>
          <div className="px-2 py-1 border">
            <div className="font-medium text-gray-700 h-16 text-xs md:text-sm truncate">Tindakan tindakan kecil perlawanan</div>
            <div className="font-normal truncate text-gray-600 text-xs">Steve crawsaw</div>
            <div className="text-gray-900 font-medium text-xs md:text-sm">Rp 85.000</div>
          </div>
        </div>
      </div>
    </div>

    {/* Buku Terbaru */}
    <NewestBook />
    <Footer />
  </div>
)
