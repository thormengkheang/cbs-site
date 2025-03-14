import { Button } from "@/components/ui/button";
import { Calendar, MapPin, MessageSquare } from "lucide-react";
import { Ref } from "react";

export const Contact = ({ ref }: { ref: Ref<HTMLElement> }) => {
  return (
    <section ref={ref} className="relative py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-4xl/tight">
              Contact Us
            </h2>
            <p className="mt-4 text-gray-300">
              {
                "Have questions about the Cambodia Blockchain Summit? We're here to help."
              }
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-purple-400" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-gray-400">
                      Phnom Penh Convention Center, Cambodia
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-5 w-5 text-purple-400" />
                  <div>
                    <p className="font-medium">Event Dates</p>
                    <p className="text-sm text-gray-400">June 15-17, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="mt-0.5 h-5 w-5 text-purple-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-400">
                      info@cambodiablockchain.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold">Quick Inquiry</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={3}
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  ></textarea>
                </div>
                <Button className="w-full rounded-lg border-0 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.displayName = "Contact";
