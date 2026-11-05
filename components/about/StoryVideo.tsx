"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Clock3,
  MessageSquare,
  Play,
  X,
} from "lucide-react";
import { useEnquiry } from "@/components/providers/EnquiryProvider";
import { ourStory } from "@/lib/about";
import { lockBodyScroll } from "@/lib/scroll-lock";

export function StoryVideo() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const { openEnquiry } = useEnquiry();
  const { video } = ourStory;

  const openDialog = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    setOpen(true);
    dialog.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  useEffect(() => {
    if (!open) return;
    return lockBodyScroll();
  }, [open]);

  const enquire = () => {
    closeDialog();
    openEnquiry({ source: "about-manufacturing-film" });
  };

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        aria-haspopup="dialog"
        aria-label={`${video.title} — manufacturing film details, ${video.duration}`}
        className="group relative block w-full overflow-hidden rounded-[20px] bg-navy-950 text-left focus-visible:ring-offset-navy-900 sm:rounded-[24px]"
      >
        <span className="relative block aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2.65/1]">
          <Image
            src={video.image}
            alt={video.imageAlt}
            fill
            sizes="(min-width: 1024px) 1500px, 92vw"
            className="object-cover object-[50%_46%] transition-transform duration-[1100ms] ease-premium group-hover:scale-[1.035]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,10,28,0.14)_0%,rgba(0,10,28,0.06)_34%,rgba(0,10,28,0.7)_78%,rgba(0,8,22,0.94)_100%)]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 ring-1 ring-inset ring-white/10"
          />

          <span className="absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-navy-950/55 px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md sm:left-5 sm:top-5 sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            {video.posterLabel}
          </span>

          <span className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full bg-brand-yellow text-navy-900 shadow-[0_18px_44px_-12px_rgba(0,0,0,0.7)] transition-transform duration-500 ease-premium group-hover:scale-105 sm:h-[78px] sm:w-[78px]">
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-white/50"
              />
              <Play
                className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8"
                strokeWidth={1.4}
              />
            </span>
          </span>

          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-6 lg:p-7">
            <span className="min-w-0">
              <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-brand-yellow">
                Watch the film
              </span>
              <span className="mt-1.5 block text-[20px] font-extrabold leading-tight tracking-[-0.025em] text-white sm:text-[26px] lg:text-[30px]">
                {video.title}
              </span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 bg-navy-950/65 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-md sm:px-3.5 sm:py-2 sm:text-[12px]">
              <Clock3 className="h-3.5 w-3.5 text-brand-yellow" strokeWidth={2} />
              {video.duration}
            </span>
          </span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
        aria-labelledby="manufacturing-dialog-title"
        aria-describedby="manufacturing-dialog-description"
        className="m-auto max-h-[90svh] w-[min(92vw,540px)] overflow-y-auto rounded-[24px] border-0 bg-navy-900 p-0 text-white shadow-modal [&::backdrop]:bg-navy-950/80 [&::backdrop]:backdrop-blur-sm"
      >
        <div className="relative">
          <div className="relative h-40 overflow-hidden sm:h-48">
            <Image
              src={video.image}
              alt=""
              fill
              sizes="540px"
              className="object-cover object-[50%_48%]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,23,54,0.16)_0%,rgba(0,23,54,0.42)_56%,#001736_100%)]"
            />
            <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy-950/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">
              <Clock3 className="h-3.5 w-3.5 text-brand-yellow" />
              {video.duration}
            </span>
          </div>

          <button
            type="button"
            onClick={closeDialog}
            aria-label="Close manufacturing film dialog"
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-navy-950/55 text-white backdrop-blur-md transition-colors hover:bg-navy-950/80"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="px-5 pb-6 pt-5 sm:px-7 sm:pb-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-brand-yellow">
              Manufacturing film
            </p>
            <h2
              id="manufacturing-dialog-title"
              className="mt-2 text-[24px] font-extrabold leading-tight tracking-[-0.03em] sm:text-[28px]"
            >
              {video.title}
            </h2>
            <p
              id="manufacturing-dialog-description"
              className="mt-3 text-[13.5px] leading-[1.7] text-white/70"
            >
              The full manufacturing film is being finalised. In the meantime,
              our team can tell you more about our in-house manufacturing
              capabilities and how our pumps are engineered and built.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={enquire}
                className="btn-yellow group h-11 w-full px-5 sm:w-auto"
              >
                <MessageSquare className="h-[17px] w-[17px]" strokeWidth={1.9} />
                Ask about our capabilities
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={closeDialog}
                className="btn-outline h-11 w-full px-5 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
