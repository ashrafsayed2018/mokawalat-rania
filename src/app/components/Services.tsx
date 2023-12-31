
import Image from "next/image"
import { NavList, ServicesObject } from "../constants"
import Link from "next/link"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Services() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="w-full mx-auto mt-10">
        <Slider {...settings} >
        {NavList.map((service,index) => {
            return <div 
              key={index}
              className="bg-white text-black h-[500px] rounded-xl mx-3"
            >
                <div className="rounded-xl bg-indigo-500 flex items-center justify-center h-80">
                    
                    <Image 
                    src={service.images[1]}
                    alt={service.label}
                    width={100}
                    height={100}
                    className="w-72 h-72 rounded-full"
                    />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-xl font-semibold">{service.label}</p>
                    <p>{service.description}</p>
                    <Link href={`categories/${service.id}`} className="bg-indigo-500 text-white text-lg px-6 py-1  rounded-xl">المزيد</Link>
                </div>
            </div>
        })}
        </Slider>
    </div>
  )
}

export default Services