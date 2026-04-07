"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Služby",          id: "services"},
        {
          name: "O nás",          id: "about"},
        {
          name: "Recenzie",          id: "testimonials"},
        {
          name: "Rezervovať",          id: "contact"},
      ]}
      brandName="Isle of Beauty"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "sparkles-gradient"}}
      logoText="Isle of Beauty"
      description="Vaša krása je naša vášeň. Profesionálna starostlivosť o vlasy, pedikúra a styling v príjemnom a útulnom prostredí."
      buttons={[
        {
          text: "Rezervovať termín",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/view-modern-futuristic-work-space-with-furniture_23-2151797714.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "5★",          title: "Hodnotenie Google",          description: "Najlepšie hodnotený salón v okolí.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-treatment-hairdresser-shop_23-2149230934.jpg"},
        {
          id: "m2",          value: "10+",          title: "Rokov skúseností",          description: "Vášnivý tím profesionálov.",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-view-various-multi-colored-eyeshadow-powder-wooden-background_23-2147878979.jpg"},
        {
          id: "m3",          value: "∞",          title: "Spokojných klientiek",          description: "Vaša krása je náš cieľ.",          imageSrc: "http://img.b2bpic.net/free-photo/spa-concept-with-woman-getting-massage-feet_23-2147821197.jpg"},
      ]}
      title="Kde sa cítite výnimočne"
      description="Naše úspechy v číslach."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Strihanie vlasov",          description: "Strihanie pre deti aj dospelých. Každý účes prispôsobený vašej tvári a štýlu.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-treatment-hairdresser-shop_23-2149230934.jpg"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-treatment-hairdresser-shop_23-2149230934.jpg"},
        },
        {
          title: "Farbenie & melír",          description: "Plné farbenie, melír, balayage. Techniky, ktoré váš vlas chránia a skrášľujú.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/high-angle-view-various-multi-colored-eyeshadow-powder-wooden-background_23-2147878979.jpg"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/high-angle-view-various-multi-colored-eyeshadow-powder-wooden-background_23-2147878979.jpg"},
        },
        {
          title: "Pedikúra",          description: "Starostlivosť o nohy na najvyššej úrovni. Odíďte s pocitom absolútnej ľahkosti.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/spa-concept-with-woman-getting-massage-feet_23-2147821197.jpg"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/spa-concept-with-woman-getting-massage-feet_23-2147821197.jpg"},
        },
      ]}
      showStepNumbers={false}
      title="Naše Služby"
      description="Komplexná starostlivosť od hlavy až po päty."
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Náš príbeh"
      description={[
        "Sme tím vášnivých profesionálok, ktoré milujú svoju prácu. Každá klientka odchádza nielen krajšia, ale aj nabitá dobrou náladou.",        "Útulné prostredie, úprimnú radosť z každého účesu a kávičku zadarmo — to sú naše sľuby, ktoré vždy dodržíme."]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Iveta C.",          handle: "Klientka",          testimonial: "Úžasné babenky, vždy odtiaľ chodím spokojná.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-excited-young-woman-showing-thumbs-up-having-fun_1262-14331.jpg"},
        {
          id: "2",          name: "Katarína C.",          handle: "Klientka",          testimonial: "Super kaderníctvo, kaderníčky sú profesionálky.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiling-bride-young-woman-with-wedding-hairstyle-silk-robe-drinking-looking-bridesmaids-gray-style-robes-standing-spacious-room-near-window_8353-12010.jpg"},
        {
          id: "3",          name: "Anna V.",          handle: "Klientka",          testimonial: "Tento salón je vynikajúci, prácu si vykonávajú poctivo.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-pretty-woman-with-ginger-hair_624325-860.jpg"},
        {
          id: "4",          name: "Veronika P.",          handle: "Klientka",          testimonial: "Najlepšie kaderníctvo! Príjemné prostredie.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-strong-sporty-athletic-fitness-trainer-instructor-woman-wearing-brown-tracksuit-sitting_1258-200304.jpg"},
        {
          id: "5",          name: "Tatiana P.",          handle: "Klientka",          testimonial: "Milé kaderníčky, profesionálna starostlivosť.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/copy-space-smiley-business-woman-with-glasses_23-2148317348.jpg"},
      ]}
      showRating={true}
      title="Čo hovoria klientky"
      description="Slová, ktoré nás každý deň inšpirujú."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      title="Zarezervujte si svoj termín"
      description="Radi vás privítame. Zanechajte nám správu alebo nás kontaktujte priamo — odpovieme čo najskôr."
      imageSrc="http://img.b2bpic.net/free-photo/young-girl-black-shirt-hanged-toy-camera-from-her-neck_114579-24475.jpg"
      mediaPosition="right"
      tag="Kontakt"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Isle of Beauty"
      leftLink={{
        text: "Kontakt: Trnovec nad Váhom",        href: "#contact"}}
      rightLink={{
        text: "© 2026 Isle of Beauty",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
