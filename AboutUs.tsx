import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Heart, Globe2, Leaf } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="min-h-svh w-full bg-[#12181f] text-white">
      {/* INTRO 2-COLUMN (ไม่มีฮีโร่ด้านบนแล้ว) */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pt-20 pb-12 md:grid-cols-2 md:pt-24 md:pb-16">
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Gogo Trip Thailand
            <br />
            <span className="font-extrabold text-white">ไปด้วยใจ</span>{" "}
            <span className="text-white/80">..ไปด้วยกัน</span>
          </h2>
          <p className="text-white/80">
            หากคุณเป็นคนที่หลงรักธรรมชาติ หลงรักการเดินทาง มองหากิจกรรมใหม่ๆ และประสบการณ์ที่มีความหมาย
            เราให้บริการที่มีคุณภาพ ด้วยความทุ่มเทและตั้งใจ ทีมงานเราเห็นความสำคัญในความปลอดภัยของผู้เดินทาง
            การอยู่ร่วมกับธรรมชาติ และการสร้างรายได้ให้ชุมชนอย่างยั่งยืน
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button className="bg-cyan-500 text-white hover:bg-cyan-600">สำรวจทริป</Button>
            <Button variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
              ติดต่อเรา
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 rounded-[24px] bg-cyan-500/20 blur-xl" />
          <img
            src="https://images.pexels.com/photos/913215/pexels-photo-913215.jpeg"
            alt="About image"
            className="relative h-full w-full rounded-[24px] border border-white/10 object-cover shadow-2xl"
          />
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-6xl px-6 pb-12 md:pb-16">
        <h3 className="mb-6 text-2xl font-semibold">สิ่งที่เราให้ความสำคัญ</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            { icon: <ShieldCheck className="mr-2 size-4" />, title: "ความปลอดภัย", body: "มาตรฐานการเดินทางและอุปกรณ์ ครอบคลุมทุกกิจกรรม" },
            { icon: <Heart className="mr-2 size-4" />, title: "บริการด้วยใจ", body: "ดูแลตั้งแต่เริ่มจอง จนจบทริปแบบหายห่วง" },
            { icon: <Globe2 className="mr-2 size-4" />, title: "ชุมชนท้องถิ่น", body: "เดินทางอย่างรับผิดชอบ เกื้อกูลเศรษฐกิจพื้นที่" },
            { icon: <Leaf className="mr-2 size-4" />, title: "รักษ์ธรรมชาติ", body: "เน้นกิจกรรมที่ไม่เบียดเบียนสิ่งแวดล้อม" },
          ].map((v) => (
            <Card key={v.title} className="border-white/10 bg-white/5 backdrop-blur">
              <CardContent className="flex flex-col gap-1 p-4">
                <div className="flex items-center text-cyan-400">{v.icon}<span className="font-medium">{v.title}</span></div>
                <p className="text-sm text-white/80">{v.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-600/30 to-cyan-400/20 p-6 text-center md:p-10">
          <h4 className="text-xl font-semibold md:text-2xl">พร้อมออกเดินทางไปด้วยกันไหม?</h4>
          <p className="mt-1 text-white/80">เลือกทริปที่ใช่ หรือติดต่อทีมงานเพื่อออกแบบประสบการณ์ของคุณ</p>
          <div className="mt-4 flex justify-center gap-3">
            <Button className="bg-white text-[#0b1117] hover:bg-white/90">เริ่มวางแผนทริป</Button>
          </div>
        </div>
      </section>
    </div>
  )
} 