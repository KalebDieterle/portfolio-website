import { contactLinks, navLinks } from "@/app/data/portfolio-data";
import { getContactIcon } from "../icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-700/50">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Kaleb Dieterle
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack developer passionate about building real solutions and
              solving problems through code.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {getContactIcon(link.type)}
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-8">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Kaleb Dieterle. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
