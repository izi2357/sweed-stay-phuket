import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  language: 'en' | 'th';
  onLanguageChange: (lang: 'en' | 'th') => void;
}

const Layout = ({ children, language, onLanguageChange }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: language === 'en' ? 'Home' : 'หน้าแรก', href: '/' },
    { name: language === 'en' ? 'Rooms' : 'ห้องพัก', href: '/rooms' },
    { name: language === 'en' ? 'About' : 'เกี่ยวกับเรา', href: '/about' },
    { name: language === 'en' ? 'Booking' : 'จองห้อง', href: '/booking' },
    { name: language === 'en' ? 'Contact' : 'ติดต่อ', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 glass border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/sweed stays logo.jpeg" 
                alt="Sweed Stay Logo" 
                className="h-14 w-14 rounded-lg object-cover"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'text-sm font-medium transition-fast hover:text-primary',
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLanguageChange(language === 'en' ? 'th' : 'en')}
                className="flex items-center space-x-1"
              >
                <Globe className="h-4 w-4" />
                <span>{language === 'en' ? 'ไทย' : 'EN'}</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLanguageChange(language === 'en' ? 'th' : 'en')}
                className="flex items-center space-x-1"
              >
                <Globe className="h-4 w-4" />
                <span>{language === 'en' ? 'ไทย' : 'EN'}</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-soft">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      'block px-3 py-2 text-base font-medium rounded-md transition-fast',
                      location.pathname === item.href
                        ? 'bg-secondary text-secondary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex justify-center mb-4">
                <img 
                  src="/sweed stays logo.jpeg" 
                  alt="Sweed Stay Logo" 
                  className="h-20 w-20 rounded-lg object-cover"
                />
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {language === 'en' ? 'Quick Links' : 'ลิงก์ด่วน'}
              </h4>
              <ul className="space-y-2">
                {navigation.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-fast"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
                         <div>
               <h4 className="text-sm font-semibold text-foreground mb-4">
                 {language === 'en' ? 'Contact' : 'ติดต่อ'}
               </h4>
               <p className="text-sm text-muted-foreground">
                 SWEED 14/101 มา.1 เมือง Phuket 83130
               </p>
               <p className="text-sm text-muted-foreground">
                 {language === 'en' ? 'Heart of Rawai' : 'ใจกลางราไวย์'}
               </p>
               <p className="text-sm text-muted-foreground">
                 084 248 9789
               </p>
               <p className="text-sm text-muted-foreground">
                 billygomak1@gmail.com
               </p>
               <p className="text-sm text-muted-foreground mt-2">
                 {language === 'en' ? 'Reception Hours: Open until midnight' : 'เวลาต้อนรับ: เปิดจนถึงเที่ยงคืน'}
               </p>
               <p className="text-sm text-muted-foreground">
                 {language === 'en' ? 'Check-in available during reception hours' : 'เช็คอินได้ในช่วงเวลาต้อนรับ'}
               </p>
             </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              © 2024 Sweed Stays. {language === 'en' ? 'All rights reserved.' : 'สงวนสิทธิ์ทุกประการ'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;