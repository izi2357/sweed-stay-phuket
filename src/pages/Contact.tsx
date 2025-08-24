import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Language } from '@/hooks/useLanguage';

interface ContactProps {
  language: Language;
}

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with us for any questions, bookings, or assistance. We\'re here to help make your stay perfect.',
      form: {
        title: 'Send us a Message',
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Message',
        messagePlaceholder: 'Tell us how we can help you...',
        send: 'Send Message',
        sending: 'Sending...'
      },
      contactInfo: {
        title: 'Get in Touch',
        address: {
          title: 'Our Location',
          text: 'SWEED 14/101 มา.1 เมือง Phuket 83130',
          description: 'Easily accessible location in the heart of Rawai'
        },
        phone: {
          title: 'Phone',
          text: '084 248 9789',
          description: 'Available during reception hours'
        },
                 email: {
           title: 'Email',
           text: 'billygomak1@gmail.com',
           description: 'We reply within 24 hours'
         },
        hours: {
          title: 'Reception Hours',
          text: 'Open until midnight',
          description: 'Check-in available during reception hours • Walk-ins welcome'
        }
      },
      social: {
        title: 'Follow Us',
        whatsapp: 'WhatsApp',
        facebook: 'Facebook',
        instagram: 'Instagram'
      },
      map: {
        title: 'Find Us',
        description: 'Located in the beautiful island of Phuket, Thailand'
      },
      successMessage: 'Message sent successfully! We\'ll get back to you soon.',
      errorMessage: 'Please fill in all required fields.'
    },
    th: {
      title: 'ติดต่อเรา',
      subtitle: 'ติดต่อเราสำหรับคำถาม การจอง หรือความช่วยเหลือใดๆ เราพร้อมช่วยให้การเข้าพักของคุณสมบูรณ์แบบ',
      form: {
        title: 'ส่งข้อความถึงเรา',
        name: 'ชื่อของคุณ',
        email: 'อีเมลของคุณ',
        subject: 'หัวข้อ',
        message: 'ข้อความ',
        messagePlaceholder: 'บอกเราว่าเราสามารถช่วยคุณได้อย่างไร...',
        send: 'ส่งข้อความ',
        sending: 'กำลังส่ง...'
      },
      contactInfo: {
        title: 'ติดต่อเรา',
        address: {
          title: 'ที่ตั้งของเรา',
          text: 'SWEED 14/101 มา.1 เมือง Phuket 83130',
          description: 'ทำเลที่เข้าถึงง่ายในใจกลางราไวย์'
        },
        phone: {
          title: 'โทรศัพท์',
          text: '084 248 9789',
          description: 'พร้อมให้ความช่วยเหลือในช่วงเวลาต้อนรับ'
        },
                 email: {
           title: 'อีเมล',
           text: 'billygomak1@gmail.com',
           description: 'เราตอบกลับภายใน 24 ชั่วโมง'
         },
        hours: {
          title: 'เวลาต้อนรับ',
          text: 'เปิดจนถึงเที่ยงคืน',
          description: 'เช็คอินได้ในช่วงเวลาต้อนรับ • ยินดีต้อนรับลูกค้าเดินเข้า'
        }
      },
      social: {
        title: 'ติดตามเรา',
        whatsapp: 'WhatsApp',
        facebook: 'Facebook',
        instagram: 'Instagram'
      },
      map: {
        title: 'หาเรา',
        description: 'ตั้งอยู่ในเกาะภูเก็ตที่สวยงาม ประเทศไทย'
      },
      successMessage: 'ส่งข้อความสำเร็จแล้ว! เราจะติดต่อกลับเร็วๆ นี้',
      errorMessage: 'กรุณากรอกข้อมูลที่จำเป็นทั้งหมด'
    }
  };

  const t = content[language];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const requiredFields = ['name', 'email', 'subject', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast({
        title: language === 'en' ? 'Error' : 'ข้อผิดพลาด',
        description: t.errorMessage,
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: language === 'en' ? 'Success' : 'สำเร็จ',
        description: t.successMessage,
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-primary">
                  {t.form.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">{t.form.name}</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t.form.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">{t.form.subject}</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">{t.form.message}</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder={t.form.messagePlaceholder}
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t.form.sending : t.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-display font-bold text-primary mb-6">
                  {t.contactInfo.title}
                </h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {t.contactInfo.address.title}
                      </h4>
                      <p className="text-foreground">{t.contactInfo.address.text}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.contactInfo.address.description}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {t.contactInfo.phone.title}
                      </h4>
                      <p className="text-foreground">{t.contactInfo.phone.text}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.contactInfo.phone.description}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {t.contactInfo.email.title}
                      </h4>
                      <p className="text-foreground">{t.contactInfo.email.text}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.contactInfo.email.description}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {t.contactInfo.hours.title}
                      </h4>
                      <p className="text-foreground">{t.contactInfo.hours.text}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.contactInfo.hours.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="p-6 bg-sage/20">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  {t.social.title}
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {t.social.whatsapp}
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Facebook className="h-4 w-4 mr-2" />
                    {t.social.facebook}
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Instagram className="h-4 w-4 mr-2" />
                    {t.social.instagram}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {t.map.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t.map.description}
                </p>
                <div className="h-64 rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD0cI4WnCdDQRSts-COVGDP1-RhTMmFlOw&q=SWEED+14%2F101+มา.1+เมือง+Phuket+83130+Thailand"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={language === 'en' ? 'Sweed Stays Location Map' : 'แผนที่ที่ตั้ง Sweed Stays'}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;