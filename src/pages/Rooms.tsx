import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wifi, Car, Coffee, MapPin, Users, Bed, Bath, Wind, ChefHat, Tv, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import suiteMain from '@/assets/suite-main.jpg';
import suiteLiving from '@/assets/suite-living.jpg';
import suiteBalcony from '@/assets/suite-balcony.jpg';
import suiteBathroom from '@/assets/suite-bathroom.jpg';
import roomDeluxe from '@/assets/room-deluxe.jpg';
import roomStandard from '@/assets/room-standard.jpg';
import { Language } from '@/hooks/useLanguage';

interface RoomsProps {
  language: Language;
}

const Rooms = ({ language }: RoomsProps) => {
  const content = {
    en: {
      title: 'Our Rooms',
      subtitle: 'Choose from our carefully designed rooms, each featuring Scandinavian aesthetics and modern Thai comfort.',
      rooms: [
        {
          id: 'premium-suite',
          name: 'Premium Studio Suite',
          price: '฿3,500',
          priceNote: 'per night',
          image: suiteMain,
          description: 'Our largest and most luxurious accommodation. Spacious studio with kitchenette, living area, and stunning balcony views. Perfect for extended stays or those wanting extra space and comfort.',
          features: [
            { icon: Bed, text: 'King Size Bed' },
            { icon: Users, text: '2-4 Guests' },
            { icon: ChefHat, text: 'Full Kitchenette' },
            { icon: Wind, text: 'Air Conditioning' },
            { icon: Wifi, text: 'Free Wi-Fi' },
            { icon: Eye, text: 'Balcony with Hills View' }
          ],
          amenities: [
            'Spacious studio layout (45 sqm)',
            'King size bed with premium linens',
            'Full kitchenette with refrigerator',
            'Comfortable living area with sofa',
            'Private balcony with hillside views',
            'Modern ensuite bathroom',
            'Air conditioning throughout',
            'Free high-speed Wi-Fi',
            'Flat-screen TV with cable',
            'Dining area with bar stools',
            'Microwave and cooking facilities',
            'Coffee/tea making facilities',
            'Hair dryer and toiletries',
            'Safe deposit box',
            'Work desk area',
            'Ample storage space'
          ],
          popular: true,
          featured: true,
          gallery: [suiteMain, suiteLiving, suiteBalcony, suiteBathroom]
        },
        {
          id: 'deluxe',
          name: 'Deluxe Room',
          price: '฿2,500',
          priceNote: 'per night',
          image: roomDeluxe,
          description: 'Spacious room with modern amenities and private balcony. Perfect for couples or small families seeking comfort and style.',
          features: [
            { icon: Bed, text: 'King Size Bed' },
            { icon: Users, text: '2-3 Guests' },
            { icon: Bath, text: 'Private Bathroom' },
            { icon: Wind, text: 'Air Conditioning' },
            { icon: Wifi, text: 'Free Wi-Fi' },
            { icon: MapPin, text: 'Balcony with View' }
          ],
          amenities: [
            'King size bed with premium linens',
            'Private balcony with garden view',
            'Modern ensuite bathroom',
            'Air conditioning',
            'Free high-speed Wi-Fi',
            'Flat-screen TV',
            'Mini refrigerator',
            'Coffee/tea making facilities',
            'Hair dryer',
            'Safe deposit box'
          ],
          popular: false,
          featured: false
        },
        {
          id: 'standard',
          name: 'Standard Room',
          price: '฿1,800',
          priceNote: 'per night',
          image: roomStandard,
          description: 'Cozy and comfortable room with all essential amenities. Ideal for solo travelers or couples.',
          features: [
            { icon: Bed, text: 'Double Bed' },
            { icon: Users, text: '1-2 Guests' },
            { icon: Bath, text: 'Private Bathroom' },
            { icon: Wind, text: 'Air Conditioning' },
            { icon: Wifi, text: 'Free Wi-Fi' },
            { icon: Coffee, text: 'Coffee Corner' }
          ],
          amenities: [
            'Comfortable double bed',
            'Modern ensuite bathroom',
            'Air conditioning',
            'Free high-speed Wi-Fi',
            'Flat-screen TV',
            'Coffee/tea making facilities',
            'Hair dryer',
            'Safe deposit box',
            'Work desk',
            'Wardrobe'
          ],
          popular: false,
          featured: false
        }
      ],
      bookNow: 'Book Now',
      amenitiesTitle: 'Room Amenities',
      allRoomsInclude: 'All rooms include:',
      commonAmenities: [
        'Daily housekeeping',
        'Fresh towels and linens',
        'Complimentary breakfast',
        'Free parking',
        '24/7 front desk support',
        'Luggage storage'
      ]
    },
    th: {
      title: 'ห้องพักของเรา',
      subtitle: 'เลือกจากห้องพักที่ออกแบบอย่างรอบคอบ แต่ละห้องมีสุนทรียศาสตร์แบบสแกนดิเนเวียและความสะดวกสบายแบบไทยสมัยใหม่',
      rooms: [
        {
          id: 'premium-suite',
          name: 'สวีทพรีเมียมสตูดิโอ',
          price: '฿3,500',
          priceNote: 'ต่อคืน',
          image: suiteMain,
          description: 'ที่พักที่ใหญ่ที่สุดและหรูหราที่สุดของเรา สตูดิโอกว้างขวางพร้อมครัวขนาดเล็ก พื้นที่นั่งเล่น และระเบียงพร้อมวิวที่สวยงาม เหมาะสำหรับการพักระยะยาวหรือผู้ที่ต้องการพื้นที่และความสะดวกสบายเพิ่มเติม',
          features: [
            { icon: Bed, text: 'เตียงคิงไซส์' },
            { icon: Users, text: 'แขก 2-4 คน' },
            { icon: ChefHat, text: 'ครัวขนาดเล็กเต็มรูปแบบ' },
            { icon: Wind, text: 'เครื่องปรับอากาศ' },
            { icon: Wifi, text: 'Wi-Fi ฟรี' },
            { icon: Eye, text: 'ระเบียงวิวเขา' }
          ],
          amenities: [
            'เลย์เอาต์สตูดิโอกว้างขวาง (45 ตร.ม.)',
            'เตียงคิงไซส์พร้อมผ้าปูคุณภาพพรีเมียม',
            'ครัวขนาดเล็กเต็มรูปแบบพร้อมตู้เย็น',
            'พื้นที่นั่งเล่นที่สะดวกสบายพร้อมโซฟา',
            'ระเบียงส่วนตัวพร้อมวิวเนินเขา',
            'ห้องน้ำในตัวทันสมัย',
            'เครื่องปรับอากาศทั่วห้อง',
            'Wi-Fi ความเร็วสูงฟรี',
            'ทีวีจอแบนพร้อมเคเบิล',
            'พื้นที่รับประทานอาหารพร้อมเก้าอี้บาร์',
            'ไมโครเวฟและอุปกรณ์ทำอาหาร',
            'อุปกรณ์ชงกาแฟ/ชา',
            'ไดร์เป่าผมและอุปกรณ์อาบน้ำ',
            'ตู้นิรภัย',
            'พื้นที่โต๊ะทำงาน',
            'พื้นที่จัดเก็บของมากมาย'
          ],
          popular: true,
          featured: true,
          gallery: [suiteMain, suiteLiving, suiteBalcony, suiteBathroom]
        },
        {
          id: 'deluxe',
          name: 'ห้องดีลักซ์',
          price: '฿2,500',
          priceNote: 'ต่อคืน',
          image: roomDeluxe,
          description: 'ห้องกว้างขวางพร้อมสิ่งอำนวยความสะดวกทันสมัย ระเบียงส่วนตัว และวิวที่สวยงาม เหมาะสำหรับคู่รักหรือครอบครวัวเล็ก',
          features: [
            { icon: Bed, text: 'เตียงคิงไซส์' },
            { icon: Users, text: 'แขก 2-3 คน' },
            { icon: Bath, text: 'ห้องน้ำส่วนตัว' },
            { icon: Wind, text: 'เครื่องปรับอากาศ' },
            { icon: Wifi, text: 'Wi-Fi ฟรี' },
            { icon: MapPin, text: 'ระเบียงพร้อมวิว' }
          ],
          amenities: [
            'เตียงคิงไซส์พร้อมผ้าปูคุณภาพพรีเมียม',
            'ระเบียงส่วนตัวพร้อมวิวสวน',
            'ห้องน้ำในตัวทันสมัย',
            'เครื่องปรับอากาศ',
            'Wi-Fi ความเร็วสูงฟรี',
            'ทีวีจอแบน',
            'ตู้เย็นขนาดเล็ก',
            'อุปกรณ์ชงกาแฟ/ชา',
            'ไดร์เป่าผม',
            'ตู้นิรภัย'
          ],
          popular: false,
          featured: false
        },
        {
          id: 'standard',
          name: 'ห้องมาตรฐาน',
          price: '฿1,800',
          priceNote: 'ต่อคืน',
          image: roomStandard,
          description: 'ห้องที่อบอุ่นและสะดวกสบายพร้อมสิ่งอำนวยความสะดวกที่จำเป็น เหมาะสำหรับนักเดินทางคนเดียวหรือคู่รัก',
          features: [
            { icon: Bed, text: 'เตียงคู่' },
            { icon: Users, text: 'แขก 1-2 คน' },
            { icon: Bath, text: 'ห้องน้ำส่วนตัว' },
            { icon: Wind, text: 'เครื่องปรับอากาศ' },
            { icon: Wifi, text: 'Wi-Fi ฟรี' },
            { icon: Coffee, text: 'มุมกาแฟ' }
          ],
          amenities: [
            'เตียงคู่ที่สะดวกสบาย',
            'ห้องน้ำในตัวทันสมัย',
            'เครื่องปรับอากาศ',
            'Wi-Fi ความเร็วสูงฟรี',
            'ทีวีจอแบน',
            'อุปกรณ์ชงกาแฟ/ชา',
            'ไดร์เป่าผม',
            'ตู้นิรภัย',
            'โต๊ะทำงาน',
            'ตู้เสื้อผ้า'
          ],
          popular: false,
          featured: false
        }
      ],
      bookNow: 'จองเลย',
      amenitiesTitle: 'สิ่งอำนวยความสะดวกในห้อง',
      allRoomsInclude: 'ห้องทุกห้องรวม:',
      commonAmenities: [
        'บริการทำความสะอาดรายวัน',
        'ผ้าเช็ดตัวและผ้าปูที่นอนสด',
        'อาหารเช้าฟรี',
        'ที่จอดรถฟรี',
        'บริการแผนกต้อนรับ 24/7',
        'บริการเก็บกระเป๋า'
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            {t.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="space-y-16">
          {t.rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden shadow-medium">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  {room.popular && (
                    <Badge className="absolute top-4 left-4 bg-primary">
                      {language === 'en' ? 'Most Popular' : 'ยอดนิยม'}
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <CardContent className="p-8">
                  <div className="h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-display font-bold text-primary">
                        {room.name}
                      </h2>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {room.price}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {room.priceNote}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {room.description}
                    </p>

                    {/* Quick Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {room.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <feature.icon className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-primary mb-3">
                        {t.amenitiesTitle}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-muted-foreground">
                        {room.amenities.slice(0, 6).map((amenity, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                      {room.amenities.length > 6 && (
                        <button className="text-primary text-sm mt-2 hover:underline">
                          {language === 'en' ? 'Show all amenities' : 'แสดงสิ่งอำนวยความสะดวกทั้งหมด'}
                        </button>
                      )}
                    </div>

                    {/* Book Button */}
                    <div className="mt-auto">
                      <Link to="/booking" className="w-full block">
                        <Button size="lg" className="w-full">
                          {t.bookNow}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Common Amenities */}
        <Card className="mt-16 p-8 bg-sage/20">
          <CardContent className="p-0">
            <h3 className="text-xl font-display font-bold text-primary mb-6 text-center">
              {t.allRoomsInclude}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.commonAmenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">{amenity}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Rooms;