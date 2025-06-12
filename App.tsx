
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { APP_NAME, NAVIGATION_LINKS, PRODUCTS, HERO_CONTENT, ABOUT_CONTENT, CONTACT_CONTENT, FOOTER_CONTENT } from './constants';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-cream text-dark-slate font-body">
      <Header appName={APP_NAME} navLinks={NAVIGATION_LINKS} />
      <main className="flex-grow">
        <Hero
          title={HERO_CONTENT.title}
          subtitle={HERO_CONTENT.subtitle}
          ctaButtonText={HERO_CONTENT.ctaButtonText}
          backgroundImageUrl={HERO_CONTENT.backgroundImageUrl}
          altText={HERO_CONTENT.altText}
          ctaLink="#collection"
        />
        <ProductList products={PRODUCTS} />
        <AboutSection
          title={ABOUT_CONTENT.title}
          paragraph1={ABOUT_CONTENT.paragraph1}
          paragraph2={ABOUT_CONTENT.paragraph2}
          imageUrl={ABOUT_CONTENT.imageUrl}
          altText={ABOUT_CONTENT.altText}
        />
        <ContactSection
            title={CONTACT_CONTENT.title}
            intro={CONTACT_CONTENT.intro}
            email={CONTACT_CONTENT.email}
            phone={CONTACT_CONTENT.phone}
            address={CONTACT_CONTENT.address}
        />
      </main>
      <Footer 
        appName={APP_NAME} 
        copyrightText={FOOTER_CONTENT.copyright} 
        socialLinks={FOOTER_CONTENT.socialLinks} 
      />
    </div>
  );
}

export default App;
