import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient-neon mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Building beautiful, functional, and user-centered digital
              experiences that make a difference.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:shadow-glow transition-all text-gray-400 hover:text-cyan-400"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Masked Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>yourname@email.com</li>
              <li>+91 XXXXX XXXX</li>
              <li>Nuzvid, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Bhavani Saladi. All rights reserved.
          </p>

          <motion.p
            className="text-gray-400 text-sm flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Made with{' '}
            <FaHeart className="text-red-500 animate-pulse" /> using React &
            Framer Motion
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
