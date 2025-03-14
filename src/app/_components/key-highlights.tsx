import { MessageSquare, Network, Users } from "lucide-react";

export const KeyHighlights = () => {
  return (
    <section className="relative bg-black/20 py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-4xl/tight">
            Key Highlights
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
            <div className="mb-4 flex justify-center">
              <Users className="h-12 w-12 text-purple-400 transition-colors duration-300 group-hover:text-purple-300" />
            </div>
            <h3 className="mb-2 text-center text-xl font-bold">
              Industry Leaders & Speakers
            </h3>
            <p className="text-center text-gray-400">
              Connect with visionaries, thought leaders, and experts from around
              the globe who are shaping the future of blockchain technology.
            </p>
          </div>
          <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
            <div className="mb-4 flex justify-center">
              <MessageSquare className="h-12 w-12 text-purple-400 transition-colors duration-300 group-hover:text-purple-300" />
            </div>
            <h3 className="mb-2 text-center text-xl font-bold">
              Innovative Discussions & Panels
            </h3>
            <p className="text-center text-gray-400">
              Engage in cutting-edge conversations about blockchain
              applications, regulatory frameworks, and emerging trends in the
              industry.
            </p>
          </div>
          <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(120,80,255,0.3)]">
            <div className="mb-4 flex justify-center">
              <Network className="h-12 w-12 text-purple-400 transition-colors duration-300 group-hover:text-purple-300" />
            </div>
            <h3 className="mb-2 text-center text-xl font-bold">
              Networking & Business Opportunities
            </h3>
            <p className="text-center text-gray-400">
              {
                "Forge valuable connections, explore partnerships, and discover investment opportunities in Cambodia's growing blockchain ecosystem."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
