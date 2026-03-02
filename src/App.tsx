/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ShieldCheck,
  Truck,
  HeartPulse,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  X,
  ChevronLeft,
  Images
} from 'lucide-react';

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// Local images from src/images/
import founderImg from './images/Founder.png';
import frontpicImg from './images/frontpic.jpeg';
import pic1Img from './images/pic1.jpeg';
import pic2Img from './images/pic2.jpeg';
import pic3Img from './images/pic3.jpeg';

const GALLERY_IMAGES = [
  { src: frontpicImg, title: 'Our Store Front', description: 'Welcome to Deepshri Medical Store' },
  { src: pic1Img, title: 'Inside Our Store', description: 'Well-organized pharmacy with wide product range' },
  { src: pic2Img, title: 'Quality Products', description: 'Authentic medicines from trusted brands' },
  { src: pic3Img, title: 'Healthcare Essentials', description: 'Everything you need under one roof' },
];

export default function App() {
  const whatsappNumber = "7057626943";
  const whatsappLink = `https://wa.me/91${whatsappNumber.replace(/\s/g, '')}`;
  const locationLink = "https://share.google/4E39x8wG3X8JCEUcp";

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white shadow-lg shadow-teal-200">
              <HeartPulse size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Deepshri <span className="text-teal-600">Medical</span>
            </span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-medium hover:text-teal-600 transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium hover:text-teal-600 transition-colors">About Us</a>
            <a href="#gallery" className="text-sm font-medium hover:text-teal-600 transition-colors">Gallery</a>
            <a href="#contact" className="text-sm font-medium hover:text-teal-600 transition-colors">Contact</a>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-200 transition-all hover:bg-[#128C7E] hover:shadow-green-300 active:scale-95"
          >
            <WhatsAppIcon size={18} />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </nav>

      <main>
        <section id="home" className="relative min-h-screen bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex min-h-screen flex-col items-center justify-between gap-12 pt-32 pb-20 lg:flex-row lg:pt-20 lg:pb-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2"
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-bold text-teal-700 ring-1 ring-inset ring-teal-600/20">
                  <ShieldCheck size={16} />
                  <span>Trusted Pharmacy & General Store</span>
                </div>
                <h1 className="mb-6 text-5xl font-[900] leading-[1.05] tracking-tight text-slate-900 md:text-7xl lg:text-8xl">
                  Care Beyond <br />
                  <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">Prescription.</span>
                </h1>
                <p className="mb-10 text-lg leading-relaxed text-slate-600 md:text-xl">
                  Deepshri Medical Store provides 100% authentic medicines, healthcare essentials,
                  and expert pharmaceutical advice. We are committed to your family's health and well-being.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-green-100 transition-all hover:bg-[#128C7E] active:scale-95"
                  >
                    <WhatsAppIcon size={24} />
                    WhatsApp Order
                  </a>
                  <a
                    href={locationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-slate-100 px-8 py-4 text-lg font-bold text-slate-900 transition-all hover:bg-slate-200 active:scale-95"
                  >
                    <MapPin size={24} className="text-teal-600" />
                    Visit Store
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full lg:w-1/2"
              >
                <div className="relative aspect-square w-full sm:aspect-[4/3] lg:aspect-square">
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-teal-100/50 blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-emerald-100/50 blur-3xl" />

                  <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
                    <img
                      src={frontpicImg}
                      alt="Deepshri Medical Store"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Floating Stats Card */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute -bottom-6 right-6 hidden items-center gap-4 rounded-3xl bg-white p-6 shadow-2xl sm:flex"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-lg shadow-teal-200">
                      <HeartPulse size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Happy Customers</p>
                      <p className="text-2xl font-black text-slate-900">5000+</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats/Features */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: ShieldCheck, title: "100% Authentic", desc: "We source directly from authorized distributors to ensure medicine quality." },
                { icon: Truck, title: "Quick Delivery", desc: "Get your essential medicines delivered to your doorstep in no time." },
                { icon: Clock, title: "Expert Support", desc: "Our qualified pharmacists are always here to guide you with your prescriptions." }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-3xl border border-slate-100 bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-sm transition-all group-hover:bg-teal-600 group-hover:text-white">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Shop Section */}
        <section id="about" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <img
                    src={frontpicImg}
                    alt="Inside Deepshri Medical"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 hidden h-48 w-48 rounded-3xl bg-teal-600 p-8 text-white shadow-2xl md:block">
                  <p className="text-4xl font-bold">15+</p>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Years of Excellence</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                  Deepshri Medical: <br />
                  <span className="text-teal-600">A Legacy of Care</span>
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-slate-600">
                  Established with a vision to make healthcare accessible and reliable,
                  Deepshri Medical Store has grown into a trusted name in the locality.
                  We don't just sell medicines; we provide peace of mind.
                </p>
                <p className="mb-8 text-lg leading-relaxed text-slate-600">
                  Our store is equipped with a wide range of pharmaceutical products,
                  surgical supplies, and general healthcare items. We maintain strict
                  temperature controls for sensitive medications, ensuring they remain
                  effective when they reach you.
                </p>
                <ul className="space-y-4">
                  {['Prescription Medicines', 'OTC Healthcare Products', 'Surgical Supplies', 'Baby Care & Nutrition'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-semibold text-slate-800">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                        <ShieldCheck size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="bg-slate-900 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="mb-6 inline-block rounded-lg bg-teal-500/20 px-3 py-1 text-sm font-bold tracking-widest text-teal-400 uppercase">
                  Meet Our Founder
                </div>
                <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
                  Leading with <span className="text-teal-400">Compassion</span> and Expertise
                </h2>
                <p className="mb-6 text-xl italic text-slate-300">
                  "Our goal is to ensure that every person who walks through our doors
                  receives not just the right medicine, but the right care and guidance
                  for their well-being."
                </p>
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-white">Vikrant Patil</h4>
                  <p className="text-teal-400 font-medium">Registered Pharmacist</p>
                </div>
                <p className="text-lg leading-relaxed text-slate-400">
                  With over a decade of experience in the pharmaceutical industry,
                  our founder established Deepshri Medical Store to bridge the gap
                  between quality healthcare and the common man. His dedication to
                  ethical practice and patient safety is the cornerstone of our store.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="relative mx-auto max-w-md">
                  <div className="absolute -inset-4 rounded-[3rem] bg-teal-500/20 blur-2xl" />
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] border-4 border-slate-800 shadow-2xl">
                    <img
                      src={founderImg}
                      alt="Founder of Deepshri Medical"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700 ring-1 ring-inset ring-teal-600/20">
                <Images size={16} />
                <span>Our Store</span>
              </div>
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Store <span className="text-teal-600">Gallery</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Take a look inside Deepshri Medical Store — where quality healthcare meets trusted service.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {GALLERY_IMAGES.map((image, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-teal-200">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <h4 className="text-lg font-bold text-white">{image.title}</h4>
                      <p className="text-sm text-slate-300">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Location */}
        <section id="contact" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Get In Touch</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Have a question or need to order medicines? Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <Phone size={24} />
                  </div>
                  <h4 className="mb-1 text-lg font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-600">+91 {whatsappNumber}</p>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <Clock size={24} />
                  </div>
                  <h4 className="mb-1 text-lg font-bold text-slate-900">Working Hours</h4>
                  <p className="text-slate-600">Mon - Sat: 9:00 AM - 10:00 PM</p>
                  <p className="text-slate-600">Sun: 10:00 AM - 2:00 PM</p>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <MapPin size={24} />
                  </div>
                  <h4 className="mb-1 text-lg font-bold text-slate-900">Our Location</h4>
                  <p className="text-slate-600">Dipashri Medical Pimpri Krurd Main Road pimpri</p>
                </div>
              </div>

              {/* Map/CTA */}
              <div className="lg:col-span-2">
                <div className="relative h-full min-h-[400px] overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-inner">
                  {/* Background image for map placeholder */}
                  <img
                    src={frontpicImg}
                    className="absolute inset-0 h-full w-full object-cover opacity-20 pointer-events-none"
                    alt="Map background"
                  />
                  {/* Placeholder for Map - In real app, embed Google Map iframe */}
                  <div className="relative flex h-full flex-col items-center justify-center p-12 text-center">
                    <div className="mb-6 rounded-full bg-white p-6 shadow-xl">
                      <MapPin size={48} className="text-teal-600" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-slate-900">Visit Our Store</h3>
                    <p className="mb-8 max-w-sm text-slate-600">
                      Click the button below to open our exact location in Google Maps and get directions.
                    </p>
                    <a
                      href={locationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl bg-teal-600 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-teal-200 transition-all hover:bg-teal-700 active:scale-95"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-teal-600 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="mb-8 text-4xl font-bold md:text-5xl">Need Medicines? We're Just a Message Away!</h2>
            <p className="mb-10 text-xl text-teal-100">
              Send us your prescription on WhatsApp and we'll have it ready for you.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-10 py-5 text-xl font-bold text-white shadow-2xl transition-all hover:bg-[#128C7E] active:scale-95"
            >
              <WhatsAppIcon size={28} />
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white">
                <HeartPulse size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Deepshri <span className="text-teal-600">Medical</span>
              </span>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-teal-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-teal-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-teal-600 transition-colors"><Twitter size={20} /></a>
            </div>

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Deepshri Medical Store. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
            >
              <X size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 md:left-8"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-h-[80vh] max-w-5xl overflow-hidden rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_IMAGES[lightboxIndex].src}
                alt={GALLERY_IMAGES[lightboxIndex].title}
                className="h-full w-full object-contain"
              />
              <div className="bg-slate-900 p-6 text-center">
                <h3 className="text-xl font-bold text-white">{GALLERY_IMAGES[lightboxIndex].title}</h3>
                <p className="text-slate-400">{GALLERY_IMAGES[lightboxIndex].description}</p>
                <p className="mt-2 text-sm text-slate-500">{lightboxIndex + 1} / {GALLERY_IMAGES.length}</p>
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 md:right-8"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
      >
        <WhatsAppIcon size={32} />
      </a>
    </div>
  );
}
