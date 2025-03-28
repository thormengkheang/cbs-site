import {
  agendasAfternoon,
  agendasEvening,
  agendasMorning,
} from "@/data/agenda";
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
            A full day of inspiring talks, networking, and blockchain
            innovation.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
              <div className="rounded-full bg-purple-900/50 px-3 py-1 text-sm font-medium text-purple-300">
                Cambodia Blockchain Summit 2025
              </div>
            </div>
            <div className="space-y-6">
              {/* Morning Session */}
              <div>
                <h3 className="mb-4 text-xl font-bold text-purple-300">
                  Morning
                </h3>
                <div className="space-y-4">
                  {agendasMorning.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="grid grid-cols-[100px_1fr] items-start gap-4 md:grid-cols-[140px_1fr]"
                      >
                        <div className="font-medium text-purple-400">
                          {item.time}
                        </div>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          {!!item.remarks &&
                            item.remarks.map((remark, i) => (
                              <p key={i} className="text-sm text-gray-400">
                                {remark}
                              </p>
                            ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Afternoon Session */}
              <div>
                <h3 className="mb-4 text-xl font-bold text-purple-300">
                  Afternoon
                </h3>
                <div className="space-y-4">
                  {agendasAfternoon.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="grid grid-cols-[100px_1fr] items-start gap-4 md:grid-cols-[140px_1fr]"
                      >
                        <div className="font-medium text-purple-400">
                          {item.time}
                        </div>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          {!!item.remarks &&
                            item.remarks.map((remark, i) => (
                              <p key={i} className="text-sm text-gray-400">
                                {remark}
                              </p>
                            ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Evening Session */}
              <div>
                <h3 className="mb-4 text-xl font-bold text-purple-300">
                  Evening
                </h3>
                <div className="space-y-4">
                  {agendasEvening.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="grid grid-cols-[100px_1fr] items-start gap-4 md:grid-cols-[140px_1fr]"
                      >
                        <div className="font-medium text-purple-400">
                          {item.time}
                        </div>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          {/* {!!item.remarks && (
                            <p className="text-sm text-gray-400">
                              {item.remarks.join(", ")}
                            </p>
                          )} */}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
