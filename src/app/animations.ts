import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── helpers ────────────────────────────────────────────────────────────────

function q(root: Element, sel: string): Element[] {
  return Array.from(root.querySelectorAll(sel));
}

function scrollReveal(
  els: Element | Element[],
  vars: gsap.TweenVars,
  triggerEl?: Element,
  start = "top 85%"
) {
  const targets = Array.isArray(els) ? els : [els];
  if (!targets.length) return;
  gsap.from(targets, {
    ...vars,
    scrollTrigger: {
      trigger: (triggerEl ?? targets[0]) as Element,
      start,
      toggleActions: "play none none none",
    },
  });
}

// Resolve the actual text nodes to split: if el is a <p>, use it directly;
// otherwise find all <p> descendants so we never mutate a flex/grid container
// (which would cause spans to stack vertically instead of flowing as text).
function resolveTargets(el: Element): HTMLElement[] {
  if (el.tagName === "P") return [el as HTMLElement];
  const ps = Array.from(el.querySelectorAll<HTMLElement>("p"));
  return ps.length > 0 ? ps : [el as HTMLElement];
}

// Splits text into word <span>s, returns cleanup fn
function splitWords(el: Element): { words: HTMLElement[]; revert: () => void } {
  const targets = resolveTargets(el);
  const originals = targets.map((t) => t.innerHTML);
  const allWords: HTMLElement[] = [];

  targets.forEach((target) => {
    const text = target.textContent ?? "";
    target.innerHTML = text
      .split(" ")
      .filter((w) => w.length > 0)
      .map((w) => `<span class="gsap-word" style="display:inline-block;overflow:hidden;"><span class="gsap-word-inner" style="display:inline-block;">${w}</span></span>`)
      .join(" ");
    allWords.push(...Array.from(target.querySelectorAll<HTMLElement>(".gsap-word-inner")));
  });

  return {
    words: allWords,
    revert: () => targets.forEach((t, i) => { t.innerHTML = originals[i]; }),
  };
}

// Splits text into char <span>s, returns cleanup fn
function splitChars(el: Element): { chars: HTMLElement[]; revert: () => void } {
  const targets = resolveTargets(el);
  const originals = targets.map((t) => t.innerHTML);
  const allChars: HTMLElement[] = [];

  targets.forEach((target) => {
    const text = target.textContent ?? "";
    target.innerHTML = text
      .split("")
      .map((c) =>
        c === " " ? " " : `<span class="gsap-char" style="display:inline-block;">${c}</span>`
      )
      .join("");
    allChars.push(...Array.from(target.querySelectorAll<HTMLElement>(".gsap-char")));
  });

  return {
    chars: allChars,
    revert: () => targets.forEach((t, i) => { t.innerHTML = originals[i]; }),
  };
}

// ─── main export ────────────────────────────────────────────────────────────

export function initAnimations(root: HTMLElement): () => void {
  const cleanups: Array<() => void> = [];
  const triggers: ScrollTrigger[] = [];

  function track(trig: ScrollTrigger) { triggers.push(trig); }

  // ── 1. NAV — slide down from above ─────────────────────────────────────
  const nav = root.querySelector('[data-name="Nav - Desktop"]');
  if (nav) {
    gsap.from(nav, { y: -40, opacity: 0, duration: 0.9, ease: "power2.out", delay: 0.1 });
  }

  // ── 2. HERO — staggered entrance timeline ──────────────────────────────
  const heroContent = root.querySelector('[data-name="Hero Content"]');
  if (heroContent) {
    const heroTl = gsap.timeline({ delay: 0.35 });

    // Big italic heading — split into chars, slide up
    const headingEls = heroContent.querySelectorAll('[data-name="Heading 1"] p');
    headingEls.forEach((p) => {
      const { chars, revert } = splitChars(p);
      cleanups.push(revert);
      if (chars.length) {
        heroTl.from(
          chars,
          { yPercent: 110, opacity: 0, duration: 0.55, ease: "power2.out", stagger: 0.018 },
          "<0.05"
        );
      }
    });

    // Tagline — words slide up
    const tagline = heroContent.querySelector('[data-name="Tagline"]');
    if (tagline) {
      const { words, revert } = splitWords(tagline);
      cleanups.push(revert);
      heroTl.from(
        words,
        { yPercent: 100, opacity: 0, duration: 0.5, ease: "back.out(2)", stagger: 0.08 },
        "-=0.3"
      );
    }

    // CTA button — scale + fade
    const cta = heroContent.querySelector('[data-name="Link - Variant 1"]');
    if (cta) {
      heroTl.from(cta, { scale: 0.85, opacity: 0, duration: 0.5, ease: "back.out(2)" }, "-=0.15");
    }
  }

  // Floating hero images — stagger rotate+fade
  const heroImages = q(root, '[data-name="Section - Hero"] [data-name="Container"]');
  if (heroImages.length) {
    gsap.from(heroImages, {
      opacity: 0,
      scale: 0.88,
      duration: 0.9,
      ease: "power2.out",
      stagger: 0.12,
      delay: 0.7,
    });
  }

  // ── 3. SNEAK PEEK HEADING — words rotate in on scroll ──────────────────
  const sneakHeading = root.querySelector('[data-name="Section Title → Heading 2"]');
  if (sneakHeading) {
    const { words, revert } = splitWords(sneakHeading);
    cleanups.push(revert);
    const tl = gsap.timeline({ paused: true });
    gsap.set(words, { transformPerspective: 1000 });
    tl.from(words, { rotationX: -90, opacity: 0, duration: 0.6, ease: "power2.out", stagger: 0.08 });
    track(ScrollTrigger.create({ trigger: sneakHeading, start: "top 80%", onEnter: () => tl.play() }));
  }

  // ── 4. "THIS IS SHEMA" SECTION — heading words slide up ────────────────
  const designHeading = root.querySelector('[data-name="Section - Design in actiion"] [data-name="Heading 2"]');
  if (designHeading) {
    const { words, revert } = splitWords(designHeading);
    cleanups.push(revert);
    const tl = gsap.timeline({ paused: true });
    tl.from(words, { yPercent: 100, opacity: 0, duration: 0.55, ease: "back.out(2)", stagger: 0.07 });
    track(ScrollTrigger.create({ trigger: designHeading, start: "top 82%", onEnter: () => tl.play() }));
  }

  // Subtitle in that section
  const designSub = root.querySelector('[data-name="Section - Design in actiion"] [data-name="Description"]');
  if (designSub) {
    scrollReveal(designSub, { y: 30, opacity: 0, duration: 0.65, ease: "power2.out" }, designSub, "top 88%");
  }

  // ── 5. PROJECT CARDS — stagger fade up ─────────────────────────────────
  const projectCards = q(root, '[data-name="Desktop"]');
  if (projectCards.length) {
    gsap.from(projectCards, {
      y: 60,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: projectCards[0] as Element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }

  // Load More button
  const loadMore = root.querySelector('[data-name="Load More"]');
  if (loadMore) {
    scrollReveal(loadMore, { y: 24, opacity: 0, duration: 0.5, ease: "power2.out" }, loadMore, "top 90%");
  }

  // ── 6. ABILITY SECTION — heading words rotate in ───────────────────────
  const abilityContent = root.querySelector('[data-name="Section - Ability"] [data-name="Content"]');
  if (abilityContent) {
    const heading = abilityContent.querySelector('[data-name="Heading 2"]');
    if (heading) {
      const { words, revert } = splitWords(heading);
      cleanups.push(revert);
      const tl = gsap.timeline({ paused: true });
      gsap.set(words, { transformPerspective: 1000 });
      tl.from(words, { rotationX: -90, opacity: 0, duration: 0.65, ease: "power2.out", stagger: 0.1 });
      track(ScrollTrigger.create({ trigger: heading, start: "top 80%", onEnter: () => tl.play() }));
    }

    const desc = abilityContent.querySelector('[data-name="Description"]');
    if (desc) {
      scrollReveal(desc, { y: 28, opacity: 0, duration: 0.6, ease: "power2.out" }, desc, "top 85%");
    }
  }

  // Skill tags — random stagger fade in (like letters-fade-in-random)
  const abilityTags = q(root, '[data-name="Ability tag"] [data-name="Init"]');
  if (abilityTags.length) {
    gsap.from(abilityTags, {
      opacity: 0,
      scale: 0.7,
      duration: 0.45,
      ease: "back.out(2)",
      stagger: { amount: 0.8, from: "random" },
      scrollTrigger: {
        trigger: root.querySelector('[data-name="Section - Ability"]') as Element,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  }

  // ── 7. BEHIND THE CANVAS (ABOUT) — heading + body ──────────────────────
  const btcSection = root.querySelector('[data-name="Section - Behind the canvas"]');
  if (btcSection) {
    const btcHeading = btcSection.querySelector('[data-name="Heading 2"]');
    if (btcHeading) {
      const { chars, revert } = splitChars(btcHeading);
      cleanups.push(revert);
      const tl = gsap.timeline({ paused: true });
      tl.from(chars, { yPercent: 100, opacity: 0, duration: 0.3, ease: "power1.out", stagger: 0.025 });
      track(ScrollTrigger.create({ trigger: btcHeading, start: "top 82%", onEnter: () => tl.play() }));
    }

    const btcSub = btcSection.querySelector('[data-name="Sub title"]');
    if (btcSub) {
      scrollReveal(btcSub, { y: 25, opacity: 0, duration: 0.6, ease: "power2.out" }, btcSub, "top 85%");
    }

    const btcDesc = btcSection.querySelector('[data-name="Description"]');
    if (btcDesc) {
      scrollReveal(btcDesc, { y: 30, opacity: 0, duration: 0.65, ease: "power2.out" }, btcDesc, "top 85%");
    }

    // Gallery photos — stagger rotate in
    const galleryPhotos = q(btcSection, '[data-name="BTC Gallery"] [data-name="Init"]');
    if (galleryPhotos.length) {
      gsap.from(galleryPhotos, {
        opacity: 0,
        scale: 0.85,
        rotation: 0,
        duration: 0.75,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: btcSection,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      });
    }
  }

  // ── 8. FAQs — heading chars slide up, items stagger in ──────────────────
  const faqSection = root.querySelector('[data-name="FAQs"]');
  if (faqSection) {
    const faqHeading = faqSection.querySelector('[data-name="Heading 2"]');
    if (faqHeading) {
      const { chars, revert } = splitChars(faqHeading);
      cleanups.push(revert);
      const tl = gsap.timeline({ paused: true });
      tl.from(chars, { yPercent: 100, opacity: 0, duration: 0.25, ease: "power1.out", stagger: 0.04 });
      track(ScrollTrigger.create({ trigger: faqHeading, start: "top 82%", onEnter: () => tl.play() }));
    }

    const faqItems = q(faqSection, '[data-name="Item → Closed"]');
    if (faqItems.length) {
      gsap.from(faqItems, {
        y: 30,
        opacity: 0,
        duration: 0.55,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: faqItems[0] as Element,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    }
  }

  // ── 10. CONTACT — heading words slide up, contact items stagger ─────────
  const contactSection = root.querySelector('[data-name="Section - Desktop"]');
  if (contactSection) {
    const contactHeading = contactSection.querySelector('[data-name="Heading 2"]');
    if (contactHeading) {
      const { words, revert } = splitWords(contactHeading);
      cleanups.push(revert);
      const tl = gsap.timeline({ paused: true });
      tl.from(words, { yPercent: 100, opacity: 0, duration: 0.6, ease: "back.out(2)", stagger: 0.07 });
      track(ScrollTrigger.create({ trigger: contactHeading, start: "top 82%", onEnter: () => tl.play() }));
    }

    const contactItems = q(contactSection, '[data-name="Contact Detail"] > *');
    if (contactItems.length) {
      gsap.from(contactItems, {
        x: -30,
        opacity: 0,
        duration: 0.55,
        ease: "power2.out",
        stagger: 0.09,
        scrollTrigger: {
          trigger: contactSection,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  }

  // ── cleanup ─────────────────────────────────────────────────────────────
  return () => {
    triggers.forEach((t) => t.kill());
    cleanups.forEach((fn) => fn());
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}
