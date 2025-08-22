import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Wifi, Car, Coffee, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroRoom from '@/assets/hero-room.jpg';
import phuketView from '@/assets/phuket-view.jpg';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomStandard from '@/assets/room-standard.jpg';
import { Language } from '@/hooks/useLanguage';

interface HomePageProps {
  language: Language;
}

const HomePage = ({ language }: HomePageProps) => {
  const content = {
    en: {
      hero: {
        title: 'Experience Scandinavian Comfort in Tropical Phuket',
        subtitle: 'Where Nordic minimalism meets Thai warmth. Discover your perfect home away from home.',
        cta: 'Book Your Stay'
      },
      about: {
        title: 'Welcome to Sweed Stay',
        description: 'We blend the clean, minimalist aesthetic of Scandinavian design with the warm hospitality that Thailand is famous for. Our thoughtfully designed rooms offer a serene retreat in the vibrant heart of Phuket.'
      },
      rooms: {
        title: 'Our Beautiful Rooms',
        deluxe: {
          name: 'Deluxe Room',
          description: 'Spacious room with modern amenities and private balcony',
          price: '฿2,500/night'
        },
        standard: {
          name: 'Standard Room',
          description: 'Cozy room perfect for solo travelers or couples',
          price: '฿1,800/night'
        }
      },
      features: {
        title: 'Why Choose Sweed Stay?',
        items: [
          { icon: Wifi, title: 'Free Wi-Fi', description: 'High-speed internet throughout the property' },
          { icon: Car, title: 'Free Parking', description: 'Secure parking available for all guests' },
          { icon: Coffee, title: 'Daily Breakfast', description: 'Fresh Thai and international breakfast' },
          { icon: MapPin, title: 'Great Location', description: 'Walking distance to beaches and attractions' }
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
            text: 'Beautiful Scandinavian design with Thai touches. Great location and excellent value for money.',
            rating: 5
          }
        ]
      }
    },
    th: {
      hero: {
        title: 'สัมผัสความสะดวกสบายแบบสแกนดิเนเวียในภูเก็ตเมืองร้อน',
        subtitle: 'ที่ซึ่งมินิมัลลิสต์แบบนอร์ดิกผสานกับความอบอุ่นแบบไทย ค้นพบบ้านที่สมบูรณ์แบบของคุณ',
        cta: 'จองห้องพัก'
      },
      about: {
        title: 'ยินดีต้อนรับสู่ Sweed Stay',
        description: 'เราผสมผสานความสวยงามที่สะอาดและเรียบง่ายของการออกแบบแบบสแกนดิเนเวียเข้ากับการต้อนรับที่อบอุ่นซึ่งประเทศไทยมีชื่อเสียง ห้องพักที่ออกแบบอย่างรอบคอบของเราเสนอที่พักผ่อนที่เงียบสงบในใจกลางเมืองภูเก็ตที่มีชีวิตชีวา'
      },
      rooms: {
        title: 'ห้องพักสวยงามของเรา',
        deluxe: {
          name: 'ห้องดีลักซ์',
          description: 'ห้องกว้างขวางพร้อมสิ่งอำนวยความสะดวกทันสมัยและระเบียงส่วนตัว',
          price: '฿2,500/คืน'
        },
        standard: {
          name: 'ห้องมาตรฐาน',
          description: 'ห้องอบอุ่นเหมาะสำหรับนักเดินทางคนเดียวหรือคู่รัก',
          price: '฿1,800/คืน'
        }
      },
      features: {
        title: 'ทำไมต้องเลือก Sweed Stay?',
        items: [
          { icon: Wifi, title: 'Wi-Fi ฟรี', description: 'อินเทอร์เน็ตความเร็วสูงทั่วทั้งอาคาร' },
          { icon: Car, title: 'ที่จอดรถฟรี', description: 'ที่จอดรถปลอดภัยสำหรับแขกทุกท่าน' },
          { icon: Coffee, title: 'อาหารเช้าประจำวัน', description: 'อาหารเช้าไทยและนานาชาติสดใหม่' },
          { icon: MapPin, title: 'ทำเลดีเยี่ยม', description: 'เดินไปชายหาดและสถานที่ท่องเที่ยวได้' }
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
            text: 'การออกแบบแบบสแกนดิเนเวียที่สวยงามพร้อมสัมผัสไทย ทำเลดีและคุ้มค่าเงินเยี่ยม',
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
          <img
            src={heroRoom}
            alt="Sweed Stay Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
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
                src={phuketView}
                alt="Phuket View"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover-lift">
              <div className="relative h-64">
                <img
                  src={roomDeluxe}
                  alt="Deluxe Room"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary">
                  {language === 'en' ? 'Popular' : 'ยอดนิยม'}
                </Badge>
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
                  src={roomStandard}
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
              ? 'Ready to Experience Sweed Stay?' 
              : 'พร้อมที่จะสัมผัส Sweed Stay แล้วหรือยัง?'
            }
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {language === 'en'
              ? 'Book your perfect room today and discover the perfect blend of Scandinavian comfort and Thai hospitality.'
              : 'จองห้องที่สมบูรณ์แบบของคุณวันนี้และค้นพบการผสมผสานที่สมบูรณ์แบบของความสะดวกสบายแบบสแกนดิเนเวียและการต้อนรับแบบไทย'
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