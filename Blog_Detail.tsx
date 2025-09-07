import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, MapPin, Share2, Heart, Bookmark, Star } from "lucide-react"
import { Link } from "react-router-dom";


export default function Blog_Detail() {
  return (
    <div className="min-h-screen min-w-screen bg-white">
      {/* Back Button */}
      <div className="pt-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 pb-12">
        {/* Category Badge */}
        <div className="mb-6">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
            Travel Guide
          </Badge>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Complete Guide to Exploring the Stunning Mirror Lake Valley
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Discover the breathtaking beauty of Mirror Lake Valley, where pristine waters reflect towering mountains and
          ancient forests create an unforgettable wilderness experience.
        </p>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>January 15, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>8 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Mirror Lake Valley, Norway</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mb-8">
          <Button size="sm" className="gap-2 bg-transparent">
            <Heart className="w-4 h-4" />
            Like
          </Button>
          <Button size="sm" className="gap-2 bg-transparent">
            <Bookmark className="w-4 h-4" />
            Save
          </Button>
          <Button size="sm" className="gap-2 bg-transparent">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/10] mb-12 rounded-2xl overflow-hidden">
          <img
            src="/placeholder.svg?height=600&width=960"
            alt="Mirror Lake Valley with wooden boat dock"
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Mirror Lake Valley Should Be Your Next Adventure
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Nestled in the heart of Norway's pristine wilderness, Mirror Lake Valley offers one of the most spectacular
            natural experiences you'll ever encounter. The crystal-clear waters perfectly reflect the surrounding peaks,
            creating a mirror-like surface that gives this magical place its name.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Whether you're an experienced hiker, a photography enthusiast, or simply someone who appreciates natural
            beauty, Mirror Lake Valley provides an unforgettable escape from the everyday world. The combination of
            towering mountains, ancient forests, and pristine waters creates a landscape that feels almost otherworldly.
          </p>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Hiking trail with valley views"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Wooden cabin by the lake"
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Time to Visit</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The optimal time to visit Mirror Lake Valley is during the summer months (June to September) when the
            weather is mild and all hiking trails are accessible. However, each season offers its own unique charm:
          </p>

          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>
              <strong>Summer (June-September):</strong> Perfect weather for hiking, camping, and water activities
            </li>
            <li>
              <strong>Autumn (October-November):</strong> Stunning fall colors reflect in the lake
            </li>
            <li>
              <strong>Winter (December-March):</strong> Snow-covered landscape creates a winter wonderland
            </li>
            <li>
              <strong>Spring (April-May):</strong> Wildflowers bloom and waterfalls are at their peak
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Activities and Experiences</h2>

          {/* Activity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Guided Hiking Tours</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Join experienced local guides on scenic trails around the valley. Perfect for all skill levels.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: 4-6 hours</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Photography Workshops</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn to capture the perfect reflection shots and landscape photography techniques.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: Full day</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.8</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Planning Your Trip</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Planning a trip to Mirror Lake Valley requires some preparation, but the effort is well worth it. Here are
            our top recommendations for making the most of your visit:
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 not-prose">
            <h3 className="font-semibold text-blue-900 mb-2">Pro Tip</h3>
            <p className="text-blue-800">
              Book your accommodation well in advance, especially during peak summer months. The limited number of
              lodges and campsites fill up quickly due to the area's popularity.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting There</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The nearest airport is Bergen Airport, approximately 3 hours by car. We recommend renting a car for the most
            flexibility, though guided tour buses are also available from major cities.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Where to Stay</h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Options range from luxury eco-lodges with lake views to rustic camping sites for the more adventurous. Book
            early and consider staying at least 2-3 nights to fully experience the area.
          </p>
        </div>

        <Separator className="my-12" />

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Travel Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Hidden Waterfalls of Northern Norway",
                excerpt: "Discover secret cascades tucked away in pristine wilderness areas.",
                image: "waterfall mountain landscape norway",
                readTime: "6 min read",
              },
              {
                title: "Best Hiking Trails in Scandinavia",
                excerpt: "From beginner-friendly paths to challenging mountain routes.",
                image: "hiking trail scandinavia mountains",
                readTime: "10 min read",
              },
              {
                title: "Photography Guide: Capturing Nordic Landscapes",
                // excerpt: "Professional tips for stunning landscape photography in the North.",
                excerpt: "Pro",
                image: "nordic landscape photography aurora",
                readTime: "7 min read",
              },
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative aspect-[16/10]">
                  <img
                    src={`/placeholder.svg?height=200&width=320&query=${article.image}`}
                    alt={article.title}
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4 pt-0">
                  <h3 className="h-16 font-semibold mb-2 line-clamp-2">{article.title}</h3>
                  <p className="h-14 text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>

                  <div className="h-1/5 flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    <Button variant="default" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}