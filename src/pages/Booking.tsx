import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Users, Phone, Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Language } from '@/hooks/useLanguage';

interface BookingProps {
  language: Language;
}

const Booking = ({ language }: BookingProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: '',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const content = {
    en: {
      title: 'Book Your Stay',
      subtitle: 'Reserve your perfect room at Sweed Stay and experience the best of Scandinavian comfort in Phuket.',
      form: {
        personalInfo: 'Personal Information',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        phone: 'Phone Number',
        stayDetails: 'Stay Details',
        checkIn: 'Check-in Date',
        checkOut: 'Check-out Date',
        guests: 'Number of Guests',
        roomType: 'Room Type',
        specialRequests: 'Special Requests',
        specialRequestsPlaceholder: 'Any special requests or preferences...',
        submit: 'Request Booking',
        submitting: 'Submitting...'
      },
      rooms: {
        select: 'Select a room type',
        deluxe: 'Deluxe Room (฿2,500/night)',
        standard: 'Standard Room (฿1,800/night)'
      },
      guestOptions: {
        '1': '1 Guest',
        '2': '2 Guests',
        '3': '3 Guests',
        '4': '4 Guests'
      },
      features: [
        {
          icon: Calendar,
          title: 'Flexible Booking',
          description: 'Easy date changes and cancellation policy'
        },
        {
          icon: Users,
          title: 'Personal Service',
          description: 'Dedicated support for all your needs'
        },
        {
          icon: CheckCircle,
          title: 'Instant Confirmation',
          description: 'Quick response within 24 hours'
        }
      ],
      successMessage: 'Booking request submitted successfully! We\'ll contact you within 24 hours.',
      errorMessage: 'Please fill in all required fields.',
      contactInfo: {
        title: 'Need Help?',
        subtitle: 'Contact us directly for immediate assistance',
        phone: '+66 XX XXX XXXX',
        email: 'booking@sweedstay.com',
        whatsapp: 'WhatsApp Us'
      }
    },
    th: {
      title: 'จองห้องพัก',
      subtitle: 'จองห้องที่สมบูรณ์แบบของคุณที่ Sweed Stay และสัมผัสความสะดวกสบายแบบสแกนดิเนเวียที่ดีที่สุดในภูเก็ต',
      form: {
        personalInfo: 'ข้อมูลส่วนตัว',
        firstName: 'ชื่อ',
        lastName: 'นามสกุล',
        email: 'อีเมล',
        phone: 'หมายเลขโทรศัพท์',
        stayDetails: 'รายละเอียดการเข้าพัก',
        checkIn: 'วันที่เช็คอิน',
        checkOut: 'วันที่เช็คเอาท์',
        guests: 'จำนวนแขก',
        roomType: 'ประเภทห้อง',
        specialRequests: 'ความต้องการพิเศษ',
        specialRequestsPlaceholder: 'ความต้องการพิเศษหรือความชอบใดๆ...',
        submit: 'ส่งคำขอจอง',
        submitting: 'กำลังส่ง...'
      },
      rooms: {
        select: 'เลือกประเภทห้อง',
        deluxe: 'ห้องดีลักซ์ (฿2,500/คืน)',
        standard: 'ห้องมาตรฐาน (฿1,800/คืน)'
      },
      guestOptions: {
        '1': '1 แขก',
        '2': '2 แขก',
        '3': '3 แขก',
        '4': '4 แขก'
      },
      features: [
        {
          icon: Calendar,
          title: 'การจองที่ยืดหยุ่น',
          description: 'เปลี่ยนวันที่ง่ายและนโยบายการยกเลิก'
        },
        {
          icon: Users,
          title: 'บริการส่วนบุคคล',
          description: 'การสนับสนุนเฉพาะสำหรับความต้องการทั้งหมดของคุณ'
        },
        {
          icon: CheckCircle,
          title: 'การยืนยันทันที',
          description: 'การตอบสนองอย่างรวดเร็วภายใน 24 ชั่วโมง'
        }
      ],
      successMessage: 'ส่งคำขอจองสำเร็จแล้ว! เราจะติดต่อคุณภายใน 24 ชั่วโมง',
      errorMessage: 'กรุณากรอกข้อมูลที่จำเป็นทั้งหมด',
      contactInfo: {
        title: 'ต้องการความช่วยเหลือ?',
        subtitle: 'ติดต่อเราโดยตรงเพื่อความช่วยเหลือทันที',
        phone: '+66 XX XXX XXXX',
        email: 'booking@sweedstay.com',
        whatsapp: 'WhatsApp เรา'
      }
    }
  };

  const t = content[language];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'checkIn', 'checkOut', 'roomType'];
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
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '1',
        roomType: '',
        specialRequests: ''
      });
    }, 2000);
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-primary">
                  {language === 'en' ? 'Booking Request' : 'คำขอจอง'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4">
                      {t.form.personalInfo}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">{t.form.firstName}</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">{t.form.lastName}</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
                      <div>
                        <Label htmlFor="phone">{t.form.phone}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Stay Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4">
                      {t.form.stayDetails}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="checkIn">{t.form.checkIn}</Label>
                        <Input
                          id="checkIn"
                          type="date"
                          value={formData.checkIn}
                          onChange={(e) => handleInputChange('checkIn', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="checkOut">{t.form.checkOut}</Label>
                        <Input
                          id="checkOut"
                          type="date"
                          value={formData.checkOut}
                          onChange={(e) => handleInputChange('checkOut', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <Label htmlFor="guests">{t.form.guests}</Label>
                        <Select
                          value={formData.guests}
                          onValueChange={(value) => handleInputChange('guests', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(t.guestOptions).map(([value, label]) => (
                              <SelectItem key={value} value={value}>
                                {label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="roomType">{t.form.roomType}</Label>
                        <Select
                          value={formData.roomType}
                          onValueChange={(value) => handleInputChange('roomType', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={t.rooms.select} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="deluxe">{t.rooms.deluxe}</SelectItem>
                            <SelectItem value="standard">{t.rooms.standard}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <Label htmlFor="specialRequests">{t.form.specialRequests}</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      placeholder={t.form.specialRequestsPlaceholder}
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t.form.submitting : t.form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  {language === 'en' ? 'Why Book Direct?' : 'ทำไมต้องจองโดยตรง?'}
                </h3>
                <div className="space-y-4">
                  {t.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <feature.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="p-6 bg-sage/20">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {t.contactInfo.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t.contactInfo.subtitle}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t.contactInfo.email}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    {t.contactInfo.whatsapp}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;