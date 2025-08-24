import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wifi, Car, Coffee, MapPin, Users, Bed, Bath, Wind, ChefHat, Tv, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Language } from '@/hooks/useLanguage';
import RoomGallery from '@/components/RoomGallery';

interface RoomsProps {
  language: Language;
}

const Rooms = ({ language }: RoomsProps) => {
  const content = {
    en: {
      title: 'Our Rooms',
      subtitle: 'Choose from our carefully designed rooms, each featuring modern comfort and convenient amenities in our premium Phuket location.',
      rooms: [
        {
          id: 'premium-suite',
          name: 'Premium Studio Suite',
          price: '฿1,500',
          priceNote: 'per night',
          image: '/lovable-uploads/bad65b95-931c-4ee4-bf3d-da8afb85d9d9.png',
          description: 'Our largest and most luxurious accommodation. Spacious studio with living area and stunning hills view through a big full-size window from top to bottom. Perfect for extended stays or those wanting extra space and comfort.',
          features: [
            { icon: Bed, text: 'King Size Bed' },
            { icon: Users, text: '2-4 Guests' },
            { icon: Wind, text: 'Air Conditioning' },
            { icon: Wifi, text: 'Free Wi-Fi' },
            { icon: Eye, text: 'Full-Size Window with Hills View' }
          ],
          amenities: [
            'Spacious studio layout (45 sqm)',
            'King size bed with premium linens',
            'Comfortable living area with sofa',
            'Big full-size window from top to bottom with hills view',
            'Modern ensuite bathroom',
            'Air conditioning throughout',
            'Free high-speed Wi-Fi',
            'Flat-screen TV with cable',
            'Dining area with bar stools',
            'Coffee/tea making facilities',
            'Hair dryer and toiletries',
            'Safe deposit box',
            'Work desk area',
            'Ample storage space'
          ],
          popular: true,
          featured: true,
          gallery: [
            '/lovable-uploads/bad65b95-931c-4ee4-bf3d-da8afb85d9d9.png',
            '/lovable-uploads/6166090c-9182-4704-964c-1e04e9903078.png',
            '/lovable-uploads/6279a15d-74a0-49e2-b5f2-1aac10c0a877.png',
            '/lovable-uploads/b615edff-6a15-459b-8d87-79accdb406f0.png',
            '/lovable-uploads/19ecf6bc-3596-4c51-bf14-5e2d41329e6d.png',
            '/lovable-uploads/ef15cb6f-0ed4-47ba-8421-9eea76fa44c9.png',
            '/lovable-uploads/225612aa-752c-4270-98a9-4b6394d74fdd.png',
            '/rooms pictures/2ndtoilet.JPG',
            '/rooms pictures/2ndtoiletsmall.JPG'
          ]
        },
        {
          id: 'deluxe',
          name: 'Deluxe Room',
          price: '฿1,300',
          priceNote: 'per night',
          image: '/rooms pictures/2ndbig.JPG',
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
          featured: false,
          gallery: [
            '/rooms pictures/2ndbig.JPG',
            '/rooms pictures/2ndbig (1).JPG',
            '/rooms pictures/2ndbig (2).JPG',
            '/rooms pictures/2ndbig (3).JPG',
            '/rooms pictures/2ndbig (4).JPG',
            '/rooms pictures/2ndbig (5).JPG',
            '/rooms pictures/2ndbig (6).JPG',
            '/rooms pictures/2ndbigtoilet.jpg',
            '/rooms pictures/2ndbigtoilet (1).jpg'
          ]
        },
        {
          id: 'standard',
          name: 'Standard Room',
          price: '฿1,200',
          priceNote: 'per night',
          image: '/rooms pictures/2ndsmall (1).JPG',
          description: 'Cozy and comfortable room with all essential amenities and private balcony. Ideal for solo travelers or couples.',
          features: [
            { icon: Bed, text: 'Double Bed' },
            { icon: Users, text: '1-2 Guests' },
            { icon: Bath, text: 'Private Bathroom' },
            { icon: Wind, text: 'Air Conditioning' },
            { icon: Wifi, text: 'Free Wi-Fi' },
            { icon: Coffee, text: 'Coffee Corner' },
            { icon: MapPin, text: 'Private Balcony' }
          ],
          amenities: [
            'Comfortable double bed',
            'Private balcony',
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
          featured: false,
          gallery: [
            '/rooms pictures/2ndsmall (1).JPG',
            '/rooms pictures/2ndsmall (2).JPG',
            '/rooms pictures/2ndsmall (3).JPG',
            '/rooms pictures/2ndsmall.jpg',
            '/rooms pictures/2ndsmalltoilet.jpg',
            '/rooms pictures/2ndsmalltoilet (1).jpg'
          ]
        }
      ],
      bookNow: 'Book Now',
      amenitiesTitle: 'Room Amenities',
      allRoomsInclude: 'All rooms include:',
      commonAmenities: [
        'Daily housekeeping',
        'Fresh towels and linens',
        'Air conditioning',
        'Flat-screen TV',
        'Free high-speed Wi-Fi',
        'Private bathroom',
        'Coffee/tea making facilities',
        'Hair dryer',
        'Safe deposit box',
        'Free parking',
        'Luggage storage',
        '24-hour security',
        'Clean and comfortable bedding'
      ]
    },
    th: {
      title: 'ห้องพักของเรา',
      subtitle: 'เลือกจากห้องพักที่ออกแบบอย่างรอบคอบ แต่ละห้องมีความสะดวกสบายสมัยใหม่และสิ่งอำนวยความสะดวกที่สะดวกในทำเลพรีเมียมภูเก็ตของเรา',
      rooms: [
        {
          id: 'premium-suite',
          name: 'สวีทพรีเมียมสตูดิโอ',
          price: '฿1,500',
          priceNote: 'ต่อคืน',
          image: '/lovable-uploads/bad65b95-931c-4ee4-bf3d-da8afb85d9d9.png',
          description: 'ที่พักที่ใหญ่ที่สุดและหรูหราที่สุดของเรา สตูดิโอกว้างขวางพร้อมพื้นที่นั่งเล่น และวิวเขาแสนสวยผ่านหน้าต่างขนาดใหญ่จากบนลงล่าง เหมาะสำหรับการพักระยะยาวหรือผู้ที่ต้องการพื้นที่และความสะดวกสบายเพิ่มเติม',
          features: [
            { icon: Bed, text: 'เตียงคิงไซส์' },
            { icon: Users, text: 'แขก 2-4 คน' },
            { icon: Wind, text: 'เครื่องปรับอากาศ' },
            { icon: Wifi, text: 'Wi-Fi ฟรี' },
            { icon: Eye, text: 'หน้าต่างขนาดใหญ่วิวเขา' }
          ],
          amenities: [
            'เลย์เอาต์สตูดิโอกว้างขวาง (45 ตร.ม.)',
            'เตียงคิงไซส์พร้อมผ้าปูคุณภาพพรีเมียม',
            'พื้นที่นั่งเล่นที่สะดวกสบายพร้อมโซฟา',
            'หน้าต่างขนาดใหญ่จากบนลงล่างพร้อมวิวเขา',
            'ห้องน้ำในตัวทันสมัย',
            'เครื่องปรับอากาศทั่วห้อง',
            'Wi-Fi ความเร็วสูงฟรี',
            'ทีวีจอแบนพร้อมเคเบิล',
            'พื้นที่รับประทานอาหารพร้อมเก้าอี้บาร์',
            'อุปกรณ์ชงกาแฟ/ชา',
            'ไดร์เป่าผมและอุปกรณ์อาบน้ำ',
            'ตู้นิรภัย',
            'พื้นที่โต๊ะทำงาน',
            'พื้นที่จัดเก็บของมากมาย'
          ],
          popular: true,
          featured: true,
          gallery: [
            '/lovable-uploads/bad65b95-931c-4ee4-bf3d-da8afb85d9d9.png',
            '/lovable-uploads/6166090c-9182-4704-964c-1e04e9903078.png',
            '/lovable-uploads/6279a15d-74a0-49e2-b5f2-1aac10c0a877.png',
            '/lovable-uploads/b615edff-6a15-459b-8d87-79accdb406f0.png',
            '/lovable-uploads/19ecf6bc-3596-4c51-bf14-5e2d41329e6d.png',
            '/lovable-uploads/ef15cb6f-0ed4-47ba-8421-9eea76fa44c9.png',
            '/lovable-uploads/225612aa-752c-4270-98a9-4b6394d74fdd.png',
            '/rooms pictures/2ndtoilet.JPG',
            '/rooms pictures/2ndtoiletsmall.JPG'
          ]
        },
        {
          id: 'deluxe',
          name: 'ห้องดีลักซ์',
          price: '฿1,300',
          priceNote: 'ต่อคืน',
          image: '/rooms pictures/2ndbig.JPG',
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
          featured: false,
          gallery: [
            '/rooms pictures/2ndbig.JPG',
            '/rooms pictures/2ndbig (1).JPG',
            '/rooms pictures/2ndbig (2).JPG',
            '/rooms pictures/2ndbig (3).JPG',
            '/rooms pictures/2ndbig (4).JPG',
            '/rooms pictures/2ndbig (5).JPG',
            '/rooms pictures/2ndbig (6).JPG',
            '/rooms pictures/2ndbigtoilet.jpg',
            '/rooms pictures/2ndbigtoilet (1).jpg'
          ]
        },
        {
          id: 'standard',
          name: 'ห้องมาตรฐาน',
          price: '฿1,200',
          priceNote: 'ต่อคืน',
          image: '/rooms pictures/2ndsmall (1).JPG',
          description: 'ห้องที่อบอุ่นและสะดวกสบายพร้อมสิ่งอำนวยความสะดวกที่จำเป็นและระเบียงส่วนตัว เหมาะสำหรับนักเดินทางคนเดียวหรือคู่รัก',
          features: [
            { icon: Bed, text: 'เตียงคู่' },
            { icon: Users, text: 'แขก 1-2 คน' },
            { icon: Bath, text: 'ห้องน้ำส่วนตัว' },
            { icon: Wind, text: 'เครื่องปรับอากาศ' },
            { icon: Wifi, text: 'Wi-Fi ฟรี' },
            { icon: Coffee, text: 'มุมกาแฟ' },
            { icon: MapPin, text: 'ระเบียงส่วนตัว' }
          ],
          amenities: [
            'เตียงคู่ที่สะดวกสบาย',
            'ระเบียงส่วนตัว',
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
          featured: false,
          gallery: [
            '/rooms pictures/2ndsmall (1).JPG',
            '/rooms pictures/2ndsmall (2).JPG',
            '/rooms pictures/2ndsmall (3).JPG',
            '/rooms pictures/2ndsmall.jpg',
            '/rooms pictures/2ndsmalltoilet.jpg',
            '/rooms pictures/2ndsmalltoilet (1).jpg'
          ]
        }
      ],
      bookNow: 'จองเลย',
      amenitiesTitle: 'สิ่งอำนวยความสะดวกในห้อง',
      allRoomsInclude: 'ห้องทุกห้องรวม:',
      commonAmenities: [
        'บริการทำความสะอาดรายวัน',
        'ผ้าเช็ดตัวและผ้าปูที่นอนสด',
        'เครื่องปรับอากาศ',
        'ทีวีจอแบน',
        'Wi-Fi ความเร็วสูงฟรี',
        'ห้องน้ำส่วนตัว',
        'อุปกรณ์ชงกาแฟ/ชา',
        'ไดร์เป่าผม',
        'ตู้นิรภัย',
        'ที่จอดรถฟรี',
        'บริการเก็บกระเป๋า',
        'ระบบรักษาความปลอดภัยตลอด 24 ชั่วโมง',
        'ผ้าปูที่นอนสะอาดและสะดวกสบาย'
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src="/sweed stays logo.jpeg" 
              alt="Sweed Stay Logo" 
              className="h-20 w-20 rounded-lg object-cover shadow-medium"
            />
          </div>
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
                {/* Image Gallery */}
                <RoomGallery 
                  images={room.gallery || [room.image]}
                  roomName={room.name}
                  isPopular={room.popular}
                  language={language}
                />

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