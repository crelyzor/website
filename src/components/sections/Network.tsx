"use client";

import { motion } from "motion/react";

const GOLD = "#d4af61";

export function Network() {
  return (
    <section className="py-16 px-4 sm:py-28 sm:px-8 border-t border-neutral-900" style={{ backgroundColor: "#080808" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 sm:mb-14"
        >
          <p className="text-[10px] tracking-[0.15em] text-neutral-600 uppercase font-medium mb-3">The OS Difference</p>
          <h2
            className="font-semibold text-white leading-[1.06] tracking-tight"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Not 4 tools.
            <br />
            <span style={{ color: GOLD }}>One OS.</span>
          </h2>
        </motion.div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl border border-neutral-800 overflow-hidden mb-6 sm:mb-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:divide-x divide-neutral-800">
            <div className="p-5 sm:p-8 border-b border-neutral-800 sm:border-b-0">
              <p className="text-[10px] tracking-[0.12em] text-neutral-700 uppercase font-medium mb-6">Before</p>
              <div className="space-y-4">
                {[
                  { tool: "HiHello", use: "Digital cards" },
                  { tool: "Cal.com", use: "Scheduling" },
                  { tool: "Otter.ai", use: "Meeting notes" },
                  { tool: "Todoist", use: "Tasks" },
                ].map((t) => (
                  <div key={t.tool} className="flex items-center justify-between">
                    <span className="text-neutral-600 text-sm">{t.tool}</span>
                    <span className="text-neutral-700 text-xs">{t.use}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-neutral-900 text-xs text-neutral-700">
                4 apps · 4 logins · context lost on every switch
              </div>
            </div>
            <div className="p-5 sm:p-8" style={{ backgroundColor: "#0a0a0a" }}>
              <p className="text-[10px] tracking-[0.12em] uppercase font-medium mb-6" style={{ color: GOLD + "80" }}>After</p>
              <div className="space-y-4">
                {[
                  { label: "Cards + identity + sharing" },
                  { label: "Scheduling + availability" },
                  { label: "Meetings + AI + transcripts" },
                  { label: "Tasks + calendar + follow-ups" },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-3.5 h-px" style={{ backgroundColor: GOLD + "50" }} />
                    <span className="text-neutral-400 text-sm">{t.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-neutral-800 text-xs" style={{ color: GOLD + "60" }}>
                1 tool · full context · everything connected
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-900">
          {[
            { n: "01", title: "A contact becomes a participant", desc: "Add someone to your card list and they auto-appear in every meeting — history included." },
            { n: "02", title: "A meeting becomes a workspace", desc: "Every recording is transcribed, summarized, and broken into action items automatically." },
            { n: "03", title: "The AI knows your people", desc: "Ask anything about your week, your contacts, or your past conversations. Full context." },
            { n: "04", title: "Your calendar, connected", desc: "Action items land on your calendar. Your availability talks to your booking page." },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              className="p-7 hover:bg-neutral-900/30 transition-colors"
              style={{ backgroundColor: "#080808" }}
            >
              <p className="text-[10px] font-semibold tracking-widest mb-4" style={{ color: GOLD + "70" }}>{f.n}</p>
              <h3 className="text-white font-medium text-sm mb-2">{f.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
