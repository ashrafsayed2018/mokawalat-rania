"use client"

import Image from "next/image"

type PropsType = {
    props: {
    id:string,
    label:string,
    link:string,
    description:string,
    images?:string[]
    }
}
function Category({props}:PropsType) {
  return (
    <div className="mt-10">
        <h1 className="text-center font-bold text-3xl text-indigo-500 mb-4">{props.label}</h1>
        <p className="text-center text-2xl flex-wrap leading-8">
            {props.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 space-y-8 gap-x-3 mt-8">
            {props.images?.map((image,index) => {
                return <div  key={image} className="h-[250px] md:h-[350px] bg-indigo-500">
                    <Image 
                      placeholder="blur"
                      blurDataURL={image}
                      src={image}
                      className="w-full h-full"
                      width={100}
                      height={100}
                    alt="image"
                    />
                </div>
            }).reverse()}
        </div>
    </div>
  )
}

export default Category