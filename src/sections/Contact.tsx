import { useState, useRef } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, Twitter, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sifat828micro@gmail.com',
    href: 'mailto:sifat828micro@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Working Remotely Across Time Zones',
    href: '#',
  },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Sifat-828', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/sifat828', label: 'Twitter' },
];

export default function Contact() {
  const { theme } = useTheme();
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error('EmailJS configuration is missing. Please check your environment variables.');
      console.error('EmailJS Environment Variables Missing:', { serviceId, templateId, publicKey });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] gradient-glow-orange opacity-15" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] gradient-glow-purple opacity-15" />
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          {/* Section Header */}
          <div
            ref={headerRef}
            className="text-center mb-20"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            <span className={`inline-block px-4 py-2 rounded-full text-sm text-fs-orange mb-6 ${theme === 'dark'
              ? 'bg-white/5 border border-white/10'
              : 'bg-white border border-gray-200 shadow-sm'
              }`}>
              Contact
            </span>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
              Let's Start a
              <span className="text-gradient"> Conversation</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'
              }`}>
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
            </p>
          </div>

          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info - Left Side */}
            <div
              className="lg:col-span-2 space-y-8"
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? 'translateX(0) translateZ(0)' : 'translateX(-30px) translateZ(0)',
                transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="floating-card floating-card-hover p-6 flex items-center gap-4 group"
                    style={{
                      opacity: contentVisible ? 1 : 0,
                      transform: contentVisible ? 'translateY(0)' : 'translateY(12px)',
                      transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.12}s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.12}s`,
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fs-orange/10 to-fs-red/10 flex items-center justify-center group-hover:from-fs-orange/20 group-hover:to-fs-red/20 transition-all duration-400 group-hover:scale-110 group-hover:rotate-3">
                      <info.icon className="w-5 h-5 text-fs-orange" />
                    </div>
                    <div>
                      <span className={`text-sm block ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                        }`}>{info.label}</span>
                      <span className={`group-hover:text-gradient transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div
                className="floating-card p-6"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transition: 'opacity 0.5s ease-out 0.3s',
                }}
              >
                <span className={`text-sm mb-4 block ${theme === 'dark' ? 'text-white/40' : 'text-gray-400'
                  }`}>Follow Me</span>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:rotate-3 ${theme === 'dark'
                        ? 'bg-white/5 text-white/50 hover:bg-fs-orange/20 hover:text-fs-orange'
                        : 'bg-gray-100 text-gray-500 hover:bg-fs-orange/20 hover:text-fs-orange'
                        }`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div
                className="floating-card p-6"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transition: 'opacity 0.5s ease-out 0.4s',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Available for new projects</span>
                </div>
                <p className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                  }`}>
                  Currently accepting projects starting February 2026. Typical response time: within 24 hours.
                </p>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div
              className="lg:col-span-3"
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? 'translateX(0) translateZ(0)' : 'translateX(30px) translateZ(0)',
                transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              }}
            >
              <div className="floating-card p-8 md:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-fs-orange to-fs-red flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Message Sent!</h3>
                    <p className={`mb-6 ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                      }`}>
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className={`block text-sm mb-2 ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                          }`}>
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input-dark"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={`block text-sm mb-2 ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                          }`}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input-dark"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className={`block text-sm mb-2 ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                        }`}>
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="input-dark appearance-none cursor-pointer"
                      >
                        <option value="">Select a subject</option>
                        <option value="project">New Project</option>
                        <option value="consultation">Consultation</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className={`block text-sm mb-2 ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                        }`}>
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="input-dark resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
