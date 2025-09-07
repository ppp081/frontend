import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Users, Camera, Mountain, Star, Clock, Globe, Flame, Youtube, Landmark, Sun, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const destRef = useRef<HTMLDivElement | null>(null);
  const scrollDest = (dir: 'left' | 'right') => {
    const el = destRef.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth * 0.9, 300);
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen min-w-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0">
          <img
            src="/cover.png?height=800&width=1200"
            className="object-cover object-center "
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-6xl font-bold mb-6 leading-tight">ค้นพบโลกไปกับเรา</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            ออกเดินทางไปกับเรา  สัมผัสภูมิทัศน์ที่งดงาม ผจญภัยสู่ธรรมชาติ สัมผัสวัฒนธรรมที่หลากหลาย และสร้างความทรงจำที่จะอยู่กับคุณตลอดไป
          </p>
        </div>
      </section>

      {/* Popular Destinations 2025 */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">จุดหมายปลายทางยอดนิยม ปี 2025</h2>
            <p className="text-gray-600">
              ค้นพบจุดหมายปลายทางยอดนิยมปี 2025 ที่พร้อมด้วยธรรมชาติสวยงามและประสบการณ์น่าจดจำสำหรับนักเดินทางทุกสไตล์
            </p>
          </div>

          <div className="relative">
            <button
              aria-label="เลื่อนไปทางซ้าย"
              onClick={() => scrollDest('left')}
              className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 text-gray-700 shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
            <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              aria-label="เลื่อนไปทางขวา"
              onClick={() => scrollDest('right')}
              className="absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 text-gray-700 shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
            <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={destRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 pr-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <Link key={item} to={`/blog/${item}`} className="snap-center flex-none w-[280px] md:w-[360px]">
                  <Card className="overflow-hidden transition-all duration-300 pt-0 cursor-pointer hover:-translate-y-0.5 hover:shadow-xl">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={`/placeholder.svg?height=300&width=400&query=beautiful travel destination landscape ${item}`}
                        alt={`จุดหมายปลายทาง ${item}`}
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">ที่พักตากอากาศบนภูเขาสุดประทับใจ</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        ดื่มด่ำกับวิวทิวทัศน์ตระการตาและบรรยากาศภูเขาอันเงียบสงบ เหมาะสำหรับการเดินป่าและถ่ายภาพธรรมชาติ
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="!bg-black !text-white !rounded-md !px-2.5 !py-0.5 !text-xs !font-medium">5 วัน 2 คืน</Badge>
                        <span className="font-semibold text-green-600">เริ่มต้นที่ 500฿</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: Flame, name: "ทริปมาแรง", color: "bg-red-500", slug: "trending" },
              { icon: Youtube, name: "ทริปตามรอย Youtuber", color: "bg-green-500", slug: "youtuber" },
              { icon: Landmark, name: "ทริปเชิงวัฒนธรรม", color: "bg-purple-500", slug: "culture" },
              { icon: Sun, name: "เที่ยววันเดียว", color: "bg-orange-500", slug: "one-day" },
              { icon: Mountain, name: "ทริปเดินป่า", color: "bg-red-500", slug: "hiking" },
            ].map((service, index) => (
              <Button
                asChild
                key={index}
                className="group !rounded-t-3xl !bg-gray-900 !rounded-b-none flex flex-row items-center gap-2 h-20 !transition-all duration-300"
              >
                <Link to={`/category/${service.slug}`} aria-label={`เปิดหมวดหมู่ ${service.name}`}>
                  <service.icon className={`size-7 text-white p-1 rounded ${service.color} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`} />
                  <span className="text-white text-lg inline-block origin-left transition-transform transition-colors duration-300 group-hover:scale-105 group-hover:text-white/90">{service.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural & Heritage Trips */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">ทริปวัฒนธรรมและมรดก</h2>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">ทัวร์มรดกแนะนำ</h3>
            <p className="text-gray-300 mb-8">
              ดื่มด่ำกับมรดกทางวัฒนธรรมอันรุ่มรวยและสถานที่ประวัติศาสตร์ ค้นพบวิถีดั้งเดิมและสถาปัตยกรรมอันน่าทึ่ง
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="bg-white text-gray-900 overflow-hidden transition-all duration-300 ease-out pt-0 cursor-pointer hover:-translate-y-0.5 hover:scale-102 hover:shadow-xl">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={`/placeholder.svg?height=200&width=300&query=cultural heritage site temple ancient architecture ${item}`}
                      alt={`แหล่งมรดก ${item}`}
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">กลุ่มวัดโบราณ</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      สำรวจวัดโบราณอันงดงามและเรียนรู้ประเพณีที่สืบทอดมายาวนานนับศตวรรษ
                    </p>
                    <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="!bg-black !text-white !rounded-md !px-2.5 !py-0.5 !text-xs !font-medium">5 วัน 2 คืน</Badge>
                        <span className="font-semibold text-green-600">เริ่มต้นที่ 500฿</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trip Listings */}
          <div className="grid gap-4">
            {[
              "ค้นพบวัดโบราณ - สำรวจวัดอันงดงามและสถานที่สำคัญทางประวัติศาสตร์",
              "สัมผัสหมู่บ้านวัฒนธรรม - ซึมซับงานหัตถกรรมและวิถีท้องถิ่นดั้งเดิม",
              "ทัวร์เดินชมมรดก - เดินชมย่านเก่าแก่พร้อมไกด์ผู้เชี่ยวชาญ",
              "ผจญภัยโบราณคดี - ค้นพบซากปรักหักพังและโบราณวัตถุ",
              "เวิร์กช็อปศิลป์ดั้งเดิม - เรียนรู้งานฝีมือและศิลปะท้องถิ่น",
              "ทัวร์อนุสรณ์สถาน - เยี่ยมชมแลนด์มาร์กและอนุสรณ์สถานสำคัญ",
              "ประสบการณ์เทศกาลวัฒนธรรม - ร่วมฉลองกับชุมชนท้องถิ่น",
            ].map((trip, index) => (
              <Card key={index} className="bg-white text-gray-900 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0">
                    <img
                      src={`/placeholder.svg?height=64&width=64&query=cultural heritage activity ${index + 1}`}
                      alt={`กิจกรรม ${index + 1}`}
                      width={64}
                      height={64}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{trip}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>3 วัน 2 คืน</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>รองรับสูงสุด 12 คน</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    ดูรายละเอียด
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">อัปเดตดีลท่องเที่ยวสุดคุ้ม</h3>
          <p className="text-gray-600 mb-6">
            รับแพ็กเกจท่องเที่ยวล่าสุด คู่มือจุดหมาย และข้อเสนอโดนใจ ส่งตรงถึงกล่องอีเมลของคุณ
          </p>
          <div className="flex justify-center">
          <a
            href="https://line.me/R/ti/p/@yourlineid" // <-- ใส่ LINE ID ของคุณ
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-[#06C755] px-6 py-3 text-white font-semibold hover:opacity-90"
          >
            + เพิ่มเพื่อน LINE
          </a>
        </div>

        </div>
      </section>
    </div>
  )
}
