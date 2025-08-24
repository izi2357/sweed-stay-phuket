import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Wifi, Car, Coffee, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroRoom from '@/assets/hero-room.jpg';
import { Language } from '@/hooks/useLanguage';

interface HomePageProps {
  language: Language;
}

const HomePage = ({ language }: HomePageProps) => {
  const content = {
    en: {
      hero: {
        title: 'Premium Accommodation in Beautiful Phuket',
        subtitle: 'Discover your perfect retreat near Nai Harn Beach. Modern comfort meets tropical paradise.',
        cta: 'Book Your Stay'
      },
      about: {
        title: 'Welcome to Sweed Stays',
        description: 'We offer thoughtfully designed, modern rooms in a premium location near Nai Harn Beach. Our comfortable accommodations provide a perfect base for exploring the best of Phuket while enjoying quality service and amenities.'
      },
      rooms: {
        title: 'Our Beautiful Rooms',
        premium: {
          name: 'Premium Studio Suite',
          description: 'Our largest suite with living area and big full-size window with hills view',
          price: '฿1,100/day'
        },
        deluxe: {
          name: 'Deluxe Room',
          description: 'Spacious room with modern amenities and private balcony',
          price: '฿1,000/day'
        },
        standard: {
          name: 'Standard Room',
          description: 'Cozy room with private balcony perfect for solo travelers or couples',
          price: '฿650/day'
        }
      },
      features: {
        title: 'Why Choose Sweed Stays?',
        items: [
          { icon: Wifi, title: 'Free Wi-Fi', description: 'High-speed internet throughout the property' },
          { icon: Car, title: 'Free Parking', description: 'Secure parking available for all guests' },
                     { icon: MapPin, title: 'Great Location', description: 'SWEED 14/101 มา.1 เมือง Phuket 83130 - Heart of Rawai' }
        ]
      },
      testimonials: {
        title: 'What Our Guests Say',
        items: [
          {
            name: 'Sarah Johnson',
            text: 'The perfect blend of comfort and style. The room was immaculate and the hosts were incredibly welcoming.',
            rating: 5
          },
          {
            name: 'Michael Chen',
            text: 'Beautiful modern rooms in a great location near Nai Harn Beach. Excellent value and friendly service.',
            rating: 5
          }
        ]
      }
    },
    th: {
      hero: {
        title: 'ที่พักพรีเมียมในภูเก็ตที่สวยงาม',
        subtitle: 'ค้นพบที่พักผ่อนที่สมบูรณ์แบบใกล้หาดในหาน ความสะดวกสบายสมัยใหม่ผสานสวรรค์เมืองร้อน',
        cta: 'จองห้องพัก'
      },
      about: {
        title: 'ยินดีต้อนรับสู่ Sweed Stays',
        description: 'เราเสนอห้องพักสมัยใหม่ที่ออกแบบอย่างรอบคอบในทำเลพรีเมียมใกล้หาดในหาน ที่พักที่สะดวกสบายของเราเป็นฐานที่สมบูรณ์แบบสำหรับการสำรวจภูเก็ตที่ดีที่สุดพร้อมบริการและสิ่งอำนวยความสะดวกคุณภาพ'
      },
      rooms: {
        title: 'ห้องพักสวยงามของเรา',
        premium: {
          name: 'สวีทพรีเมียมสตูดิโอ',
          description: 'สวีทที่ใหญ่ที่สุดพร้อมพื้นที่นั่งเล่นและหน้าต่างขนาดใหญ่วิวเขา',
          price: '฿1,100/วัน'
        },
        deluxe: {
          name: 'ห้องดีลักซ์',
          description: 'ห้องกว้างขวางพร้อมสิ่งอำนวยความสะดวกทันสมัยและระเบียงส่วนตัว',
          price: '฿1,000/วัน'
        },
        standard: {
          name: 'ห้องมาตรฐาน',
          description: 'ห้องอบอุ่นพร้อมระเบียงส่วนตัวเหมาะสำหรับนักเดินทางคนเดียวหรือคู่รัก',
          price: '฿650/วัน'
        }
      },
      features: {
        title: 'ทำไมต้องเลือก Sweed Stays?',
        items: [
          { icon: Wifi, title: 'Wi-Fi ฟรี', description: 'อินเทอร์เน็ตความเร็วสูงทั่วทั้งอาคาร' },
          { icon: Car, title: 'ที่จอดรถฟรี', description: 'ที่จอดรถปลอดภัยสำหรับแขกทุกท่าน' },
                     { icon: MapPin, title: 'ทำเลดีเยี่ยม', description: 'SWEED 14/101 มา.1 เมือง Phuket 83130 - ใจกลางราไวย์' }
        ]
      },
      testimonials: {
        title: 'แขกของเราพูดว่า',
        items: [
          {
            name: 'Sarah Johnson',
            text: 'การผสมผสานที่สมบูรณ์แบบระหว่างความสะดวกสบายและสไตล์ ห้องสะอาดมากและเจ้าของบ้านต้อนรับอย่างอบอุ่น',
            rating: 5
          },
          {
            name: 'Michael Chen',
            text: 'ห้องพักสมัยใหม่ที่สวยงามในทำเลดีใกล้หาดในหาน บริการดีเยี่ยมและคุ้มค่า',
            rating: 5
          }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/8c07634412854678bf700a17a39d2255.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img
              src={heroRoom}
              alt="Sweed Stay Hero"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white/50 max-w-4xl mx-auto px-4 mt-20">
                            <div className="flex justify-center mb-6">
                    <img
                      src="/sweed stays new logo.jpeg"
                      alt="Sweed Stay Logo"
                      className="h-32 w-auto rounded-lg object-contain shadow-strong opacity-50"
                    />
                  </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight text-white/40">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-white/30">
            {t.hero.subtitle}
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                {t.about.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t.about.description}
              </p>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  {language === 'en' ? 'Learn More' : 'เรียนรู้เพิ่มเติม'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/main bed pic (2).png"
                alt="Premium Studio Suite - Main Room"
                className="rounded-lg shadow-strong w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20 bg-sage/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-12">
            {t.rooms.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover-lift">
              <div className="relative h-64">
                <img
                  src="/main bed pic (2).png"
                  alt="Premium Studio Suite"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary">
                  {language === 'en' ? 'Featured' : 'แนะนำ'}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {t.rooms.premium.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.rooms.premium.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-primary">
                    {t.rooms.premium.price}
                  </span>
                  <Link to="/rooms">
                    <Button variant="outline" size="sm">
                      {language === 'en' ? 'View Details' : 'ดูรายละเอียด'}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift">
              <div className="relative h-64">
                <img
                  src="/rooms pictures/2ndbig.JPG"
                  alt="Deluxe Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {t.rooms.deluxe.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.rooms.deluxe.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-primary">
                    {t.rooms.deluxe.price}
                  </span>
                  <Link to="/rooms">
                    <Button variant="outline" size="sm">
                      {language === 'en' ? 'View Details' : 'ดูรายละเอียด'}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift">
              <div className="relative h-64">
                <img
                  src="/rooms pictures/2ndsmall (1).JPG"
                  alt="Standard Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {t.rooms.standard.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.rooms.standard.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-primary">
                    {t.rooms.standard.price}
                  </span>
                  <Link to="/rooms">
                    <Button variant="outline" size="sm">
                      {language === 'en' ? 'View Details' : 'ดูรายละเอียด'}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-12">
            {t.features.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.items.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover-lift">
                <CardContent className="p-0">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-12">
            {t.testimonials.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="text-coral-warm text-lg">★</div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sage-gradient">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
            {language === 'en' 
              ? 'Ready to Experience Sweed Stays?' 
              : 'พร้อมที่จะสัมผัส Sweed Stays แล้วหรือยัง?'
            }
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {language === 'en'
              ? 'Book your perfect room today and discover premium accommodation near Nai Harn Beach in the heart of Phuket.'
              : 'จองห้องที่สมบูรณ์แบบของคุณวันนี้และค้นพบที่พักพรีเมียมใกล้หาดในหานในใจกลางภูเก็ต'
            }
          </p>
          <Link to="/booking">
            <Button size="lg" className="text-lg px-8 py-6">
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;