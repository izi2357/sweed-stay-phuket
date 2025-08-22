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
      title: 'About Sweed Stay',
      subtitle: 'Where Scandinavian design meets Thai hospitality',
      story: {
        title: 'Our Story',
        content: [
          'Sweed Stay was born from a simple vision: to create a unique accommodation experience that combines the best of two worlds. Our founders, inspired by their travels through Scandinavia and their love for Thailand, wanted to bring the clean, minimalist aesthetic of Nordic design to the tropical paradise of Phuket.',
          'What started as a dream has become a reality - a place where guests can experience the serene beauty of Scandinavian design while enjoying the warm hospitality that Thailand is famous for. Every detail, from our carefully chosen furniture to our color palette, reflects this harmonious blend.',
          'We believe that travel is about more than just a place to sleep. It\'s about creating memories, finding peace, and discovering new perspectives. That\'s why we\'ve crafted each room to be a sanctuary - a space where you can unwind, recharge, and connect with the beauty around you.'
        ]
      },
      inspiration: {
        title: 'Scandinavian Inspiration',
        content: 'Our design philosophy is rooted in the Scandinavian principles of hygge - the art of creating atmosphere and enjoying life\'s simple pleasures. We\'ve carefully curated each space to embody these values: clean lines, natural materials, neutral colors, and an emphasis on functionality without sacrificing beauty.',
        features: [
          {
            icon: Home,
            title: 'Minimalist Design',
            description: 'Clean lines and uncluttered spaces that promote tranquility and peace of mind.'
          },
          {
            icon: Leaf,
            title: 'Natural Materials',
            description: 'Sustainable wood, organic textiles, and natural stone create a connection with nature.'
          },
          {
            icon: Heart,
            title: 'Hygge Atmosphere',
            description: 'Cozy, comfortable spaces designed to make you feel at home and promote wellbeing.'
          }
        ]
      },
      hospitality: {
        title: 'Thai Hospitality',
        content: 'While our design is inspired by Scandinavia, our service is unmistakably Thai. We believe in the concept of "jai yen" - keeping a cool heart - and "sanuk" - finding joy in what you do. Our team is dedicated to ensuring your stay is not just comfortable, but truly memorable.',
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
      title: 'เกี่ยวกับ Sweed Stay',
      subtitle: 'ที่ซึ่งการออกแบบแบบสแกนดิเนเวียผสานกับการต้อนรับแบบไทย',
      story: {
        title: 'เรื่องราวของเรา',
        content: [
          'Sweed Stay เกิดขึ้นจากวิสัยทัศน์ที่เรียบง่าย: เพื่อสร้างประสบการณ์ที่พักที่เป็นเอกลักษณ์ที่ผสมผสานสิ่งที่ดีที่สุดของสองโลก ผู้ก่อตั้งของเรา ซึ่งได้รับแรงบันดาลใจจากการเดินทางผ่านประเทศสแกนดิเนเวียและความรักในประเทศไทย ต้องการนำสุนทรียศาสตร์ที่สะอาดและเรียบง่ายของการออกแบบนอร์ดิกมาสู่สวรรค์เมืองร้อนของภูเก็ต',
          'สิ่งที่เริ่มต้นเป็นความฝันได้กลายเป็นความจริง - สถานที่ที่แขกสามารถสัมผัสความงามอันเงียบสงบของการออกแบบแบบสแกนดิเนเวียในขณะที่เพลิดเพลินกับการต้อนรับที่อบอุ่นซึ่งประเทศไทยมีชื่อเสียง รายละเอียดทุกอย่าง ตั้งแต่เฟอร์นิเจอร์ที่เลือกสรรอย่างรอบคอบไปจนถึงจานสีของเรา สะท้อนถึงการผสมผสานที่กลมกลืนนี้',
          'เราเชื่อว่าการเดินทางมีความหมายมากกว่าแค่สถานที่นอน มันเกี่ยวกับการสร้างความทรงจำ การค้นหาความสงบ และการค้นพบมุมมองใหม่ นั่นคือเหตุผลที่เราได้สร้างสรรค์แต่ละห้องให้เป็นสถานที่ศักดิ์สิทธิ์ - พื้นที่ที่คุณสามารถผ่อนคลาย เติมพลัง และเชื่อมต่อกับความงามรอบตัวคุณ'
        ]
      },
      inspiration: {
        title: 'แรงบันดาลใจแบบสแกนดิเนเวีย',
        content: 'ปรัชญาการออกแบบของเรามีรากฐานมาจากหลักการสแกนดิเนเวียของ hygge - ศิลปะแห่งการสร้างบรรยากาศและการเพลิดเพลินกับความสุขง่ายๆ ของชีวิต เราได้คัดสรรแต่ละพื้นที่อย่างรอบคอบเพื่อรวบรวมค่านิยมเหล่านี้: เส้นสายที่สะอาด วัสดุธรรมชาติ สีที่เป็นกลาง และการเน้นฟังก์ชันการใช้งานโดยไม่สูญเสียความงาม',
        features: [
          {
            icon: Home,
            title: 'การออกแบบมินิมัลลิสต์',
            description: 'เส้นสายที่สะอาดและพื้นที่ที่ไม่รกรุงรังที่ส่งเสริมความเงียบสงบและความสงบใจ'
          },
          {
            icon: Leaf,
            title: 'วัสดุธรรมชาติ',
            description: 'ไม้ที่ยั่งยืน สิ่งทอธรรมชาติ และหินธรรมชาติที่สร้างการเชื่อมต่อกับธรรมชาติ'
          },
          {
            icon: Heart,
            title: 'บรรยากาศ Hygge',
            description: 'พื้นที่ที่อบอุ่นและสะดวกสบายที่ออกแบบมาเพื่อให้คุณรู้สึกเหมือนอยู่บ้านและส่งเสริมความเป็นอยู่ที่ดี'
          }
        ]
      },
      hospitality: {
        title: 'การต้อนรับแบบไทย',
        content: 'แม้ว่าการออกแบบของเราจะได้รับแรงบันดาลใจจากสแกนดิเนเวีย แต่การบริการของเราเป็นแบบไทยอย่างแท้จริง เราเชื่อในแนวคิดของ "ใจเย็น" และ "สนุก" - การหาความสุขในสิ่งที่คุณทำ ทีมของเราทุ่มเทเพื่อให้แน่ใจว่าการเข้าพักของคุณไม่เพียงแต่สะดวกสบาย แต่น่าจดจำอย่างแท้จริง',
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

        {/* Scandinavian Inspiration */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary mb-6">
              {t.inspiration.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.inspiration.content}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.inspiration.features.map((feature, index) => (
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