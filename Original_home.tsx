import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Users, Camera, Mountain, Star, Clock, Globe } from "lucide-react"
import { Link } from "react-router-dom";

export default function Home() {
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
          <h1 className="text-6xl font-bold mb-6 leading-tight"></h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore Stunning Landscapes And Connect With Nature On Our Guided Adventures. Experience Breathtaking Vistas
            And Immerse Yourself In The Wild. Embracing Every Moment Of Discovery And Natural Beauty.
          </p>
        </div>

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
        >
          <div className="w-0 h-0 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent border-r-white" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full"
        >
          <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-white" />
        </Button>
      </section>

      {/* Popular Destinations 2025 */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Destinations in 2025</h2>
            <p className="text-gray-600">
              Discover 2025's popular destinations, offering stunning landscapes and unforgettable experiences for every
              traveler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
                <Link to={`/blog/${item}`}>
                    <Card key={item} className="overflow-hidden hover:shadow-lg transition-all pt-0 cursor-pointer hover:scale-102 duration-300">
                        <div className="aspect-[4/3] relative">
                        <img
                            src={`/placeholder.svg?height=300&width=400&query=beautiful travel destination landscape ${item}`}
                            alt={`Destination ${item}`}
                            className="object-cover"
                        />
                        </div>
                        <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">Amazing Mountain Retreat</h3>
                        <p className="text-sm text-gray-600 mb-3">
                            Experience breathtaking views and peaceful mountain landscapes. Perfect for hiking and nature
                            photography.
                        </p>
                        <div className="flex items-center justify-between">
                            <Badge variant="secondary">5 Days 2 Nights</Badge>
                            <span className="font-semibold text-green-600">From $299</span>
                        </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: Mountain, name: "Mountain Tours", color: "bg-blue-500" },
              { icon: Camera, name: "Photo Tours", color: "bg-green-500" },
              { icon: Globe, name: "World Tours", color: "bg-purple-500" },
              { icon: Users, name: "Group Travel", color: "bg-orange-500" },
              { icon: MapPin, name: "Local Guides", color: "bg-red-500" },
            ].map((service, index) => (
              <Button
                key={index}
                className="!rounded-t-3xl !bg-gray-900 !rounded-b-none flex flex-row items-center gap-2 h-20 !transition-all !hover:scale-102 duration-300"
              >
                <service.icon className={`size-7 text-white p-1 rounded ${service.color}`} />
                <span className="text-white text-lg">{service.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural & Heritage Trips */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Cultural & Heritage Trips</h2>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Featured Heritage Tours</h3>
            <p className="text-gray-300 mb-8">
              Immerse yourself in rich cultural heritage and historical landmarks. Discover ancient traditions and
              architectural wonders.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="bg-white text-gray-900 overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={`/placeholder.svg?height=200&width=300&query=cultural heritage site temple ancient architecture ${item}`}
                      alt={`Heritage Site ${item}`}
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Ancient Temple Complex</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Explore magnificent ancient temples and learn about centuries-old traditions.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">4.8</span>
                      </div>
                      <Badge>2 Days 1 Night</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trip Listings */}
          <div className="grid gap-4">
            {[
              "Ancient Temple Discovery - Explore magnificent temples and historical sites",
              "Cultural Village Experience - Traditional crafts and local customs immersion",
              "Heritage Walking Tours - Guided walks through historic districts",
              "Archaeological Adventure - Discover ancient ruins and artifacts",
              "Traditional Arts Workshop - Learn local crafts and artistic traditions",
              "Historic Monuments Tour - Visit iconic landmarks and monuments",
              "Cultural Festival Experience - Participate in local celebrations",
            ].map((trip, index) => (
              <Card key={index} className="bg-white text-gray-900">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0">
                    <img
                      src={`/placeholder.svg?height=64&width=64&query=cultural heritage activity ${index + 1}`}
                      alt={`Activity ${index + 1}`}
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
                        <span>3 Days 2 Nights</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>Max 12 people</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Learn More
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
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Travel Deals</h3>
          <p className="text-gray-600 mb-6">
            Get the latest travel packages, destination guides, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email address" className="flex-1" />
            <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
