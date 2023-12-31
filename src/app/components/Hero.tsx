import Link from "next/link"
import { ContactInfo } from "../constants"

function Hero() {
  return (
    <div className="text-center flex flex-col gap-8 h-auto">
        <h1 className="text-blue-900 font-bold text-xl">العصر الحديث للمقاولات</h1>
        <p className="text-[#800000] font-bold text-xl">مقاول ترميم بناء ملاحق صباغ </p>
        <p className="text-[#993366] font-bold text-xl">ترميم مباني بناء ملاحق اصباغ اصباغ خارجيه\ اصباغ داخليه \ ازالة اصباغ قديمة \ اعمال بروفايل \ كسر ركام</p>
        <p className="text-[#993300] font-bold text-xl">تركيب عوازل اسطح \ ديكورات \ بناء مجالس خارجيه \ بناء ملاحق \ ترميمي شامل \ تركيب اسفلت وايبوكسي \ مظلات - سواتر - برجولات -عشب صناعي</p>
        <p className="text-[#ff0000] font-bold text-xl">لدينا عماله مهنية مدربه على مستوى من الخبره والاحترافيه في انجاز العمل المطلوب باكمل وجه</p>
        <p className="text-[#800080] font-bold text-xl">تصاميم عصرية .. جودة عالية .. ضمانة حقيقية</p>
        <Link href={`tel:${ContactInfo.mobileNumber}`} className="block w-40 mx-auto bg-blue-600 text-white rounded-3xl p-3 mt-8 hover:bg-blue-800 transition-all font-bold tracking-wider">{ContactInfo.mobileNumber}</Link>
    </div>
  )
}

export default Hero