import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Demo submit
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  /* 🔒 SAFE PUBLIC CONTACT INFO */
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'yourname@email.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 XXXXX XXXX',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Nuzvid, India',
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/bhavani3420',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/bhavani-saladi-758373286',
      label: 'LinkedIn',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Get In </span>
              <span className="text-gradient-neon">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Let’s talk.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div initial={{ y: 50, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}>
              <h3 className="text-2xl font-bold mb-6 text-gradient-neon">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 glass rounded-xl p-4 hover:shadow-glow transition-all"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass rounded-full hover:shadow-glow transition-all text-gray-400 hover:text-cyan-400"
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-6"
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
            >
              {['name', 'email', 'subject'].map((field) => (
                <div key={field}>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              ))}

              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
              />

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                  Message sent successfully!
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white shadow-glow hover:shadow-glow-purple flex items-center justify-center gap-3"
              >
                {isSubmitting ? 'Sending…' : <>
                  <FiSend /> Send Message
                </>}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
