import { Card, CardContent } from '@/components/ui/card';
import { Heart, Home, Leaf, Users } from 'lucide-react';
import phuketView from '@/assets/phuket-view.jpg';
import heroRoom from '@/assets/hero-room.jpg';
import { Language } from '@/hooks/useLanguage';

interface AboutProps {
  language: Language;
}

const About = ({ language }: AboutProps) => {
  const content = {
    en: {
      title: 'About Sweed Stays',
      subtitle: 'Premium accommodation near Nai Harn Beach, Phuket',
      story: {
        title: 'Our Story',
        content: [
          'Sweed Stays was born from a simple vision: to create exceptional accommodation in one of Phuket\'s most beautiful locations. Situated near the pristine Nai Harn Beach, we offer our guests a perfect blend of comfort, quality, and convenience.',
          'What started as a dream has become a reality - a place where guests can experience modern comfort while being perfectly positioned to explore the best of Phuket. Every detail, from our carefully chosen furnishings to our thoughtful amenities, reflects our commitment to providing an outstanding stay.',
          'We believe that accommodation is about more than just a place to sleep. It\'s about creating memories, finding relaxation, and having the perfect base for your Phuket adventure. That\'s why we\'ve crafted each room to be comfortable, clean, and welcoming - a space where you can unwind and prepare for your next discovery.'
        ]
      },
      location: {
        title: 'Prime Location',
        content: 'Located at SWEED 14/101 มา.1 เมือง Phuket 83130, in the heart of Rawai, Sweed Stays offers easy access to one of Phuket\'s most scenic and peaceful areas. You\'re perfectly positioned to enjoy both the tranquil beach life and Phuket\'s vibrant attractions.',
        features: [
          {
            icon: Home,
            title: 'Modern Comfort',
            description: 'Clean, contemporary rooms designed for your comfort and relaxation.'
          },
          {
            icon: Leaf,
            title: 'Premium Location',
            description: 'Near Nai Harn Beach in one of Phuket\'s most desirable areas.'
          },
          {
            icon: Heart,
            title: 'Quality Service',
            description: 'Attentive service focused on making your stay memorable and comfortable.'
          }
        ]
      },
      hospitality: {
        title: 'Thai Hospitality',
        content: 'Our service embodies authentic Thai hospitality. We believe in the concept of "jai yen" - keeping a cool heart - and "sanuk" - finding joy in what you do. Our team is dedicated to ensuring your stay is not just comfortable, but truly memorable.',
        values: [
          'Genuine warmth and friendliness',
          'Attention to detail in service',
          'Respect for our guests and environment',
          'Creating authentic experiences',
          'Building lasting connections'
        ]
      },
      team: {
        title: 'Meet Our Team',
        content: 'Our small but dedicated team brings together international experience with local knowledge. We\'re here to help you discover the best of Phuket while ensuring your stay with us exceeds expectations.'
      },
      commitment: {
        title: 'Our Commitment',
        subtitle: 'We\'re committed to sustainable tourism and supporting our local community',
        points: [
          {
            icon: Leaf,
            title: 'Environmental Responsibility',
            description: 'We use eco-friendly products, promote water conservation, and support local conservation efforts.'
          },
          {
            icon: Users,
            title: 'Community Support',
            description: 'We source from local suppliers, employ local staff, and contribute to community development projects.'
          },
          {
            icon: Heart,
            title: 'Guest Experience',
            description: 'We continuously improve our services based on guest feedback and changing needs.'
          }
        ]
      }
    },
    th: {
      title: 'เกี่ยวกับ Sweed Stays',
      subtitle: 'ที่พักพรีเมียมใกล้หาดในหาน ภูเก็ต',
      story: {
        title: 'เรื่องราวของเรา',
        content: [
          'Sweed Stays เกิดขึ้นจากวิสัยทัศน์ที่เรียบง่าย: เพื่อสร้างที่พักที่ยอดเยี่ยมในหนึ่งในทำเลที่สวยงามที่สุดของภูเก็ต ตั้งอยู่ใกล้หาดในหานที่บริสุทธิ์ เราเสนอให้แขกของเราการผสมผสานที่สมบูรณ์แบบของความสะดวกสบาย คุณภาพ และความสะดวก',
          'สิ่งที่เริ่มต้นเป็นความฝันได้กลายเป็นความจริง - สถานที่ที่แขกสามารถสัมผัสความสะดวกสบายสมัยใหม่ในขณะที่อยู่ในตำแหน่งที่สมบูรณ์แบบในการสำรวจสิ่งที่ดีที่สุดของภูเก็ต รายละเอียดทุกอย่าง ตั้งแต่เฟอร์นิเจอร์ที่เลือกสรรอย่างรอบคอบไปจนถึงสิ่งอำนวยความสะดวกที่รอบคอบ สะท้อนถึงความมุ่งมั่นของเราในการให้การเข้าพักที่โดดเด่น',
          'เราเชื่อว่าที่พักมีความหมายมากกว่าแค่สถานที่นอน มันเกี่ยวกับการสร้างความทรงจำ การค้นหาการผ่อนคลาย และการมีฐานที่สมบูรณ์แบบสำหรับการผจญภัยภูเก็ตของคุณ นั่นคือเหตุผลที่เราได้สร้างสรรค์แต่ละห้องให้สะดวกสบาย สะอาด และเป็นมิตร - พื้นที่ที่คุณสามารถผ่อนคลายและเตรียมตัวสำหรับการค้นพบครั้งต่อไป'
        ]
      },
      location: {
        title: 'ทำเลยอดเยี่ยม',
        content: 'ตั้งอยู่ที่ SWEED 14/101 มา.1 เมือง Phuket 83130 ในใจกลางราไวย์ Sweed Stays ให้การเข้าถึงที่ง่ายดายไปยังหนึ่งในพื้นที่ที่งดงามและเงียบสงบที่สุดของภูเก็ต คุณอยู่ในตำแหน่งที่สมบูรณ์แบบในการเพลิดเพลินกับทั้งชีวิตชายหาดที่เงียบสงบและสถานที่ท่องเที่ยวที่มีชีวิตชีวาของภูเก็ต',
        features: [
          {
            icon: Home,
            title: 'ความสะดวกสบายสมัยใหม่',
            description: 'ห้องพักร่วมสมัยที่สะอาดออกแบบมาเพื่อความสะดวกสบายและการผ่อนคลายของคุณ'
          },
          {
            icon: Leaf,
            title: 'ทำเลพรีเมียม',
            description: 'ใกล้หาดในหานในหนึ่งในพื้นที่ที่น่าปรารถนาที่สุดของภูเก็ต'
          },
          {
            icon: Heart,
            title: 'บริการคุณภาพ',
            description: 'บริการที่ใส่ใจเน้นการทำให้การเข้าพักของคุณน่าจดจำและสะดวกสบาย'
          }
        ]
      },
      hospitality: {
        title: 'การต้อนรับแบบไทย',
        content: 'การบริการของเราประกอบด้วยการต้อนรับแบบไทยที่แท้จริง เราเชื่อในแนวคิดของ "ใจเย็น" และ "สนุก" - การหาความสุขในสิ่งที่คุณทำ ทีมของเราทุ่มเทเพื่อให้แน่ใจว่าการเข้าพักของคุณไม่เพียงแต่สะดวกสบาย แต่น่าจดจำอย่างแท้จริง',
        values: [
          'ความอบอุ่นและมิตรภาพที่แท้จริง',
          'ความใส่ใจในรายละเอียดของการบริการ',
          'ความเคารพต่อแขกและสิ่งแวดล้อม',
          'การสร้างประสบการณ์ที่แท้จริง',
          'การสร้างความสัมพันธ์ที่ยั่งยืน'
        ]
      },
      team: {
        title: 'พบกับทีมของเรา',
        content: 'ทีมเล็กแต่ทุ่มเทของเรานำประสบการณ์นานาชาติมาผสมผสานกับความรู้ในท้องถิ่น เราอยู่ที่นี่เพื่อช่วยคุณค้นพบสิ่งที่ดีที่สุดของภูเก็ตในขณะที่ให้การเข้าพักกับเราเกินความคาดหมาย'
      },
      commitment: {
        title: 'ความมุ่งมั่นของเรา',
        subtitle: 'เรามุ่งมั่นที่จะท่องเที่ยวอย่างยั่งยืนและสนับสนุนชุมชนท้องถิ่นของเรา',
        points: [
          {
            icon: Leaf,
            title: 'ความรับผิดชอบต่อสิ่งแวดล้อม',
            description: 'เราใช้ผลิตภัณฑ์ที่เป็นมิตรกับสิ่งแวดล้อม ส่งเสริมการอนุรักษ์น้ำ และสนับสนุนความพยายามในการอนุรักษ์ท้องถิ่น'
          },
          {
            icon: Users,
            title: 'การสนับสนุนชุมชน',
            description: 'เราจัดหาจากซัพพลายเออร์ท้องถิ่น จ้างพนักงานท้องถิ่น และมีส่วนร่วมในโครงการพัฒนาชุมชน'
          },
          {
            icon: Heart,
            title: 'ประสบการณ์ของแขก',
            description: 'เราปรับปรุงบริการของเราอย่างต่อเนื่องตามข้อเสนอแนะของแขกและความต้องการที่เปลี่ยนแปลง'
          }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src="/sweed stays new logo.jpeg" 
              alt="Sweed Stay Logo" 
              className="h-32 w-auto rounded-lg object-contain shadow-medium hover:shadow-strong transition-shadow duration-300"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-6">
                {t.story.title}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                {t.story.content.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <img
                src={heroRoom}
                alt="Our Story"
                className="rounded-lg shadow-medium w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary mb-6">
              {t.location.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.location.content}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.location.features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover-lift">
                <CardContent className="p-0">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Thai Hospitality */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={phuketView}
                alt="Thai Hospitality"
                className="rounded-lg shadow-medium w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-6">
                {t.hospitality.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.hospitality.content}
              </p>
              <ul className="space-y-3">
                {t.hospitality.values.map((value, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <Card className="p-8 bg-sage/20">
            <CardContent className="p-0 text-center">
              <h2 className="text-3xl font-display font-bold text-primary mb-6">
                {t.team.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.team.content}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Commitment */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              {t.commitment.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.commitment.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.commitment.points.map((point, index) => (
              <Card key={index} className="text-center p-6 hover-lift">
                <CardContent className="p-0">
                  <point.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;