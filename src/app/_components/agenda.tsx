import { Ref } from "react";

export const Agenda = ({ ref }: { ref: Ref<HTMLElement> }) => {
  return (
    <section ref={ref} className="relative py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-4xl/tight">
            Event Agenda
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Three days of inspiring talks, workshops, and networking
            opportunities.
          </p>
        </div>
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center">
              <div className="rounded-full bg-purple-900/50 px-3 py-1 text-sm font-medium text-purple-300">
                Day 1 - June 15
              </div>
              <h3 className="text-xl font-bold">Opening & Keynotes</h3>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-[80px_1fr] gap-4 md:grid-cols-[120px_1fr]">
                <div className="text-purple-400">09:00 AM</div>
                <div>
                  <p className="font-medium">Registration & Welcome Coffee</p>
                </div>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-4 md:grid-cols-[120px_1fr]">
                <div className="text-purple-400">10:00 AM</div>
                <div>
                  <p className="font-medium">Opening Ceremony</p>
                  <p className="text-sm text-gray-400">
                    Welcome address by event organizers
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-4 md:grid-cols-[120px_1fr]">
                <div className="text-purple-400">11:00 AM</div>
                <div>
                  <p className="font-medium">
                    Keynote: The Future of Blockchain in Southeast Asia
                  </p>
                  <p className="text-sm text-gray-400">By Industry Leader</p>
                </div>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-4 md:grid-cols-[120px_1fr]">
                <div className="text-purple-400">02:00 PM</div>
                <div>
                  <p className="font-medium">
                    Panel Discussion: Blockchain Adoption Challenges
                  </p>
                  <p className="text-sm text-gray-400">
                    Industry experts discuss real-world implementation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center">
              <div className="rounded-full bg-purple-900/50 px-3 py-1 text-sm font-medium text-purple-300">
                Day 2 - June 16
              </div>
              <h3 className="text-xl font-bold">Workshops & Networking</h3>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-[80px_1fr] gap-4 md:grid-cols-[120px_1fr]">
                <div className="text-purple-400">09:30 AM</div>
                <div>
                  <p className="font-medium">
                    Technical Workshops (Multiple Tracks)
                  </p>
                  <p className="text-sm text-gray-400">
                    Hands-on sessions for developers and business leaders
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-4 md:grid-cols-[120px_1fr]">
                <div className="text-purple-400">01:00 PM</div>
                <div>
                  <p className="font-medium">Networking Lunch</p>
                </div>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-4 md:grid-cols-[120px_1fr]">
                <div className="text-purple-400">03:00 PM</div>
                <div>
                  <p className="font-medium">Startup Showcase</p>
                  <p className="text-sm text-gray-400">
                    Emerging blockchain startups pitch their innovations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center">
              <div className="rounded-full bg-purple-900/50 px-3 py-1 text-sm font-medium text-purple-300">
                Day 3 - June 17
              </div>
              <h3 className="text-xl font-bold">Future Trends & Closing</h3>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-[80px_1fr] gap-4 md:grid-cols-[120px_1fr]">
                <div className="text-purple-400">10:00 AM</div>
                <div>
                  <p className="font-medium">
                    Panel: Future of DeFi in Cambodia
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-4 md:grid-cols-[120px_1fr]">
                <div className="text-purple-400">01:30 PM</div>
                <div>
                  <p className="font-medium">Roundtable Discussions</p>
                  <p className="text-sm text-gray-400">
                    Topic-based small group discussions
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-4 md:grid-cols-[120px_1fr]">
                <div className="text-purple-400">04:00 PM</div>
                <div>
                  <p className="font-medium">
                    Closing Ceremony & Networking Reception
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
