import { coreTeamMembers } from "@/data/teams";
import Image from "next/image";
import { Ref } from "react";

export const Teams = ({ ref }: { ref?: Ref<HTMLElement> }) => {
  return (
    <section ref={ref} className="relative bg-black/20 py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-4xl/tight">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            The dedicated individuals working behind the scenes to make the
            Cambodia Blockchain Summit a success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {coreTeamMembers.map((member) => (
            <div key={member.id} className="group flex flex-col items-center">
              <div className="mb-4 aspect-square w-full max-w-[180px] overflow-hidden rounded-full border-2 border-purple-500/30 bg-white/5 p-1 transition-all duration-300 group-hover:border-purple-500/70">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={180}
                  height={180}
                  className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-center text-lg font-bold transition-colors duration-300 group-hover:text-white">
                {member.name}
              </h3>
              {!!member.department && (
                <p className="mt-1 text-center text-sm text-purple-400">
                  {member.department}
                </p>
              )}
              <p className="mt-1 text-center text-sm text-purple-400">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <Link href="/teams">
            <Button className="rounded-full border-0 bg-white/10 px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20">
              View Full Team
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

Teams.displayName = "Teams";
