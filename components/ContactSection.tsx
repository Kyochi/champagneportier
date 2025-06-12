
import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from './icons/InfoIcons';

interface ContactSectionProps {
  title: string;
  intro: string;
  email: string;
  phone: string;
  address: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ title, intro, email, phone, address }) => {
  const contactItems = [
    { icon: <MailIcon className="w-7 h-7 text-champagne-gold" />, label: "Email", value: email, href: `mailto:${email}` },
    { icon: <PhoneIcon className="w-7 h-7 text-champagne-gold" />, label: "Téléphone", value: phone, href: `tel:${phone.replace(/\s/g, '')}` },
    { icon: <MapPinIcon className="w-7 h-7 text-champagne-gold" />, label: "Adresse", value: address, href: `https://maps.google.com/?q=${encodeURIComponent(address)}`, target:"_blank" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl font-display font-bold text-dark-slate">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-700 font-body max-w-2xl mx-auto">
            {intro}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-xl border border-light-gray">
          <div className="space-y-8">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start space-x-4">
                <div className="flex-shrink-0 pt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold font-body text-dark-slate">{item.label}</h3>
                  <a 
                    href={item.href} 
                    className="text-lg text-muted-gold hover:text-champagne-gold transition-colors duration-300 break-all"
                    target={item.target || "_self"}
                    rel={item.target ? "noopener noreferrer" : ""}
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
