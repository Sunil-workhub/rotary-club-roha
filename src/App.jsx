import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { gsap } from "gsap";

const eventList = [
  {
    id: 1,
    title: "Doctor's Day",
    date: "2025-07-01",
    displayDate: "1 JULY 2025",
    imageCount: 4,
  },
  {
    id: 2,
    title: "Paddy Planting (Rice Plantation)",
    date: "2025-07-20",
    displayDate: "20 JULY 2025",
    imageCount: 4,
  },
  {
    id: 3,
    title: "Tree Plantation",
    date: "2025-08-01",
    displayDate: "AUGUST 2025",
    imageCount: 4,
  },
  {
    id: 4,
    title: "Govinda Celebration",
    date: "2025-08-14",
    displayDate: "14 AUGUST 2025",
    imageCount: 4,
  },
  {
    id: 5,
    title: "MEDICAL CAMP",
    date: "2025-08-17",
    displayDate: "17 AUGUST 2025",
    imageCount: 4,
  },
  {
    id: 6,
    title: "12th President Inauguration",
    date: "2025-08-17",
    displayDate: "17 AUGUST 2025",
    imageCount: 4,
  },
  {
    id: 7,
    title: "Ganpati Visarjan Chass Distribution",
    date: "2025-09-02",
    displayDate: "2 SEP 2025",
    imageCount: 4,
  },
  {
    id: 8,
    title: "Ganpati Visarjan Chass Distribution",
    date: "2025-09-06",
    displayDate: "6 SEP 2025",
    imageCount: 4,
  },
  {
    id: 9,
    title: "Ladies Picnic",
    date: "2025-09-16",
    displayDate: "16 SEP 2025",
    imageCount: 4,
  },
  {
    id: 10,
    title: "Men's Tour - Goa",
    date: "2025-09-19",
    displayDate: "19 SEP 2025",
    imageCount: 4,
  },
  {
    id: 11,
    title: "Navratri Celebration",
    date: "2025-09-28",
    displayDate: "28 SEP 2025",
    imageCount: 4,
  },
  {
    id: 12,
    title: "Dhavir Maharaj Palkhi Sohala - Chass Distribution",
    date: "2025-10-03a",
    displayDate: "3 OCT 2025",
    imageCount: 4,
  },
  {
    id: 13,
    title: "Dhavir Maharaj Palkhi Sohala - Dhokla 51 KG Distribution",
    date: "2025-10-03b",
    displayDate: "3 OCT 2025",
    imageCount: 2,
  },
  {
    id: 14,
    title: "Dhavir Maharaj Palkhi Sohala - Idli 4000 Pieces Distribution",
    date: "2025-10-04",
    displayDate: "4 OCT 2025",
    imageCount: 3,
  },
  {
    id: 15,
    title: "Blood Donation",
    date: "2025-10-07",
    displayDate: "7 OCT 2025",
    imageCount: 4,
  },
  {
    id: 16,
    title: "Killa Primary School Cupboard Distribution",
    date: "2025-10-15",
    displayDate: "15 OCT 2025",
    imageCount: 4,
  },
  {
    id: 17,
    title: "Membership Orientation - Dr. Parmar",
    date: "2025-10-20",
    displayDate: "OCT 2025",
    imageCount: 4,
  },
  {
    id: 18,
    title: "Bicycle Distribution - ZP School Mhasali (4 Cycles)",
    date: "2025-11-14a",
    displayDate: "14 NOVEMBER 2025",
    imageCount: 1,
  },
  {
    id: 19,
    title: "Bicycle Distribution - ZP School Barpe (3 Cycles)",
    date: "2025-11-14b",
    displayDate: "14 NOVEMBER 2025",
    imageCount: 2,
  },
  {
    id: 20,
    title: "Bicycle Distribution - ZP School Mahagaov (7 Cycles)",
    date: "2025-11-14c",
    displayDate: "14 NOVEMBER 2025",
    imageCount: 4,
  },
  {
    id: 21,
    title: "Socializing",
    date: "2025-11-27",
    displayDate: "27 NOVEMBER 2025",
    imageCount: 1,
  },
  {
    id: 22,
    title: "New Year Celebration",
    date: "2025-12-31",
    displayDate: "31 DECEMBER 2025",
    imageCount: 4,
  },
  {
    id: 23,
    title: "Calendar Opening",
    date: "2026-01-01",
    displayDate: "1 JAN 2026",
    imageCount: 4,
  },
  {
    id: 24,
    title: "Sanegaon Ashram School Water Tank Donation",
    date: "2026-01-09",
    displayDate: "9 JAN 2026",
    imageCount: 4,
  },
  {
    id: 25,
    title: "Rotary Popti Party",
    date: "2026-01-21",
    displayDate: "21 JAN 2026",
    imageCount: 4,
  },
  {
    id: 26,
    title: "Sinhagad Fort Tour - Durga Abhas Mohim",
    date: "2026-02-01",
    displayDate: "1 FEB 2026",
    imageCount: 4,
  },
  {
    id: 27,
    title: "Raigad Jillha Parished School - Navkhar Donated Chair & Table",
    date: "2026-02-27",
    displayDate: "27 FEB 2026",
    imageCount: 4,
  },
  {
    id: 31,
    title: "Navkhar - school 1 Water purifier and 1 smart TV",
    date: "2026-02-27",
    displayDate: "27 FEB 2026",
    imageCount: 4,
  },
  {
    id: 28,
    title: "Rotary Club Deccan Jimkhana Pune Donated Laptops to 5 Girls",
    date: "2026-03-06",
    displayDate: "6 MAR 2026",
    imageCount: 4,
  },
  {
    id: 29,
    title: "Women's Day Saree Distribution by Godrej & Rotary Club of Roha",
    date: "2026-03-08",
    displayDate: "8 MAR 2026",
    imageCount: 4,
  },
  {
    id: 30,
    title: "Mammography Test",
    date: "2026-04-04",
    displayDate: "4 April 2026",
    imageCount: 4,
  },
  {
    id: 32,
    title: "Dental Health Check Up - Roha School No.6 (Goargaonagar)",
    date: "2026-03-20",
    displayDate: "20 MAR 2026",
    imageCount: 4,
  },
  {
    id: 33,
    title:
      "Dental Health Check Up - Late Mr. Vitthal Shankar - Raosaheb Kulkarni Vidymandir",
    date: "2026-03-25",
    displayDate: "25 MAR 2026",
    imageCount: 4,
  },
  {
    id: 34,
    title: "Dental Health Check Up - Roha Nagar Parishad School No. 1",
    date: "2026-03-27",
    displayDate: "27 MAR 2026",
    imageCount: 4,
  },
  {
    id: 35,
    title:
      "Dental Health Check Up - School No. 10 (Late Mr. Prafulshet Bartake, Mangalwadi",
    date: "2026-03-27",
    displayDate: "27 MAR 2026",
    imageCount: 3,
  },
  {
    id: 36,
    title:
      "Dental Health Check Up - Param Pujya Pandurang Shastri Aatale Vidyamndir, Aastami",
    date: "2026-03-28",
    displayDate: "28 MAR 2026",
    imageCount: 4,
  },
  {
    id: 37,
    title: "Dental Health Check Up - Prerna School For Special Children, Roha",
    date: "2026-03-30",
    displayDate: "30 MAR 2026",
    imageCount: 4,
  },
  {
    id: 38,
    title:
      "Dental Health Check Up - Roha Nagar Parishad Urdu School No. 5 (Aastami)",
    date: "2026-04-06",
    displayDate: "6 APR 2026",
    imageCount: 2,
  },
  {
    id: 39,
    title: "Dental Health Check Up - Raigad Zilla Parishad School, Tamneshet ",
    date: "2026-04-06",
    displayDate: "6 APR 2026",
    imageCount: 4,
  },
  {
    id: 40,
    title: "Dental Health Check Up - Roha Nagar Parishad Urdu School No. 4",
    date: "2026-04-08",
    displayDate: "8 APR 2026",
    imageCount: 4,
  },
  {
    id: 41,
    title: "Dental Health Check Up - Government Ashram School, Sanegaon",
    date: "2026-04-09",
    displayDate: "9 APR 2026",
    imageCount: 4,
  },
  {
    id: 42,
    title: "Dental Health Check Up - M B Patil English School, Varse",
    date: "2026-04-16",
    displayDate: "16 APR 2026",
    imageCount: 4,
  },
  {
    id: 43,
    title: "Dental Health Check Up - Raigad Zilla Parishad School, Usar",
    date: "2026-04-18",
    displayDate: "18 APR 2026",
    imageCount: 2,
  },
  {
    id: 44,
    title: "Dental Health Check Up - Raigad Zilla Parishad School, Tambdi",
    date: "2026-04-20",
    displayDate: "20 APR 2026",
    imageCount: 2,
  },
  {
    id: 47,
    title: "Assam - Meghalay Tour",
    date: "2026-04-22",
    displayDate: "2026",
    imageCount: 4,
  },
  {
    id: 45,
    title: "मतिमंद मुलांच्या शाळेत ड्रेस वाटप कार्यक्रम",
    date: "2026-06-18",
    displayDate: "18 JUN 2026",
    imageCount: 4,
  },
  {
    id: 46,
    title: "Machine Inauguration",
    date: "2026-06-18",
    displayDate: "18 Jun 2026",
    imageCount: 4,
  },
];

const events = eventList.map((ev) => {
  const count = ev.imageCount ?? 4;
  const images = Array.from(
    { length: count },
    (_, i) => `/media/events/${ev.id}/img${i + 1}.jpg`,
  );
  return { ...ev, images };
});

const slideStructure = [
  { type: "title" },
  { type: "anthem" },
  { type: "guests" },
  { type: "events-intro" },
  ...events.map((ev) => ({ type: "event", data: ev })),
  { type: "thanks" },
  { type: "profile-video" },
];

const TOTAL = slideStructure.length;

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #f4efe6;
  --bg-soft: #efe7da;
  --surface: rgba(255, 250, 242, 0.72);
  --surface-strong: rgba(255, 249, 240, 0.9);
  --surface-dark: rgba(59, 44, 29, 0.12);
  --text: #2e2418;
  --text-soft: #6f5a44;
  --text-faint: #9b866e;
  --accent: #8c5b2f;
  --accent-2: #c78d4d;
  --accent-3: #5d7d63;
  --line: rgba(122, 91, 57, 0.18);
  --shadow: 0 24px 70px rgba(78, 53, 28, 0.16);
  --radius-xl: 32px;
  --radius-lg: 24px;
  --radius-md: 18px;
  --timeline-w: 294px;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html, body, #root { width: 100%; height: 100%; overflow: hidden; }
body {
  font-family: "Manrope", "Segoe UI", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(199, 141, 77, 0.18), transparent 30%),
    radial-gradient(circle at bottom right, rgba(93, 125, 99, 0.12), transparent 28%),
    linear-gradient(145deg, #f7f2ea 0%, #eee4d3 48%, #f6efe5 100%);
}
h1, h2, h3 { font-family: "Cormorant Garamond", serif; }
button { font: inherit; }

.app {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 15% 20%, rgba(199, 141, 77, 0.18), transparent 25%),
    radial-gradient(circle at 85% 12%, rgba(140, 91, 47, 0.10), transparent 22%),
    radial-gradient(circle at 80% 85%, rgba(93, 125, 99, 0.16), transparent 22%),
    linear-gradient(135deg, #f8f2e8 0%, #eee1cc 45%, #f7f0e5 100%);
}

.app::before,
.app::after {
  content: "";
  position: absolute;
  pointer-events: none;
  z-index: 1;
}

.app::before {
  inset: 12px;
  border: 1px solid rgba(140, 91, 47, 0.16);
  border-radius: 30px;
}

.app::after {
  inset: 28px;
  border-radius: 26px;
  background:
    linear-gradient(120deg, rgba(255,255,255,0.16), transparent 30%),
    linear-gradient(300deg, rgba(140, 91, 47, 0.05), transparent 30%);
}

.slide {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 42px;
  text-align: center;
}

.nav-arrow {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  z-index: 120;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgba(140, 91, 47, 0.18);
  background: rgba(255, 251, 245, 0.72);
  color: var(--accent);
  backdrop-filter: blur(14px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  cursor: pointer;
  box-shadow: 0 14px 30px rgba(92, 62, 35, 0.12);
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
}
.nav-arrow:hover { transform: translateY(-50%) scale(1.06); background: rgba(255, 248, 239, 0.95); color: var(--accent-2); }
.nav-arrow.left { left: 22px; }
.nav-arrow.right { right: 22px; }

.top-bar {
  position: fixed;
  top: 18px;
  left: 0;
  right: 0;
  z-index: 120;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  pointer-events: none;
}
.top-bar > * { pointer-events: auto; }

.top-bar-btn,
.slide-counter {
  border-radius: 999px;
  padding: 10px 18px;
  border: 1px solid rgba(140, 91, 47, 0.16);
  background: rgba(255, 250, 244, 0.74);
  backdrop-filter: blur(16px);
  box-shadow: 0 12px 24px rgba(88, 57, 30, 0.08);
}
.top-bar-btn {
  color: var(--accent);
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.top-bar-btn:hover { background: rgba(255, 248, 239, 0.95); }
.slide-counter { color: var(--text-soft); font-size: 13px; font-weight: 700; min-width: 84px; }

.progress-bar-track {
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 16px;
  height: 6px;
  border-radius: 999px;
  background: rgba(122, 91, 57, 0.12);
  overflow: hidden;
  z-index: 120;
}
.progress-bar-fill {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--accent), var(--accent-2), #d8b07d);
  box-shadow: 0 0 20px rgba(199, 141, 77, 0.35);
  transition: width 0.4s ease;
}

.emblem {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--accent);
  font-size: 44px;
  margin-bottom: 18px;
  border: 1px solid rgba(140, 91, 47, 0.24);
  background: radial-gradient(circle, rgba(255,255,255,0.85), rgba(255,255,255,0.45));
  box-shadow: 0 12px 36px rgba(108, 72, 38, 0.12), inset 0 0 0 10px rgba(199, 141, 77, 0.08);
}

.title-slide {
  position: relative;
  overflow: hidden;
  padding: 72px 72px 56px;
}
.title-slide::before,
.title-slide::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  filter: blur(6px);
  opacity: 0.42;
}
.title-slide::before {
  width: 360px;
  height: 360px;
  top: -90px;
  right: -70px;
  background: radial-gradient(circle, rgba(199,141,77,0.34), rgba(199,141,77,0));
}
.title-slide::after {
  width: 280px;
  height: 280px;
  bottom: -70px;
  left: -40px;
  background: radial-gradient(circle, rgba(93,125,99,0.24), rgba(93,125,99,0));
}
.title-panel {
  position: relative;
  z-index: 2;
  width: min(1120px, 100%);
  min-height: min(78vh, 760px);
  padding: 48px 56px;
  border-radius: 36px;
  text-align: left;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 34px;
  align-items: stretch;
  background: linear-gradient(145deg, rgba(255,251,245,0.88), rgba(255,247,238,0.68));
  border: 1px solid rgba(140, 91, 47, 0.14);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}
.title-copy { display: flex; flex-direction: column; justify-content: center; }
.title-kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  color: var(--accent);
  font-size: 13px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 800;
}
.title-kicker::before {
  content: "";
  width: 46px;
  height: 1px;
  background: linear-gradient(90deg, var(--accent), transparent);
}
.title-slide h1 {
  font-size: clamp(3.4rem, 5vw, 5.6rem);
  line-height: 0.94;
  color: var(--text);
  margin-bottom: 18px;
}
.title-slide h1 .accent { color: var(--accent); }
.title-slide h2 {
  font-size: clamp(1.6rem, 2.5vw, 2.4rem);
  color: var(--text-soft);
  margin-bottom: 18px;
}
.title-description {
  max-width: 620px;
  color: var(--text-soft);
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 26px;
}
.title-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.meta-pill {
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(140, 91, 47, 0.07);
  border: 1px solid rgba(140, 91, 47, 0.12);
  color: var(--text-soft);
  font-size: 13px;
  font-weight: 700;
}
.title-side {
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 16px;
  background: url("/media/logo.png") center / cover no-repeat;
}
.title-art {
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  min-height: 100%;
  border: 1px solid rgba(140, 91, 47, 0.12);
}
.title-art-grid {
  position: absolute;
  inset: 20px;
  border-radius: 24px;
  border: 1px solid rgba(140, 91, 47, 0.08);
  background-image:
    linear-gradient(rgba(140,91,47,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(140,91,47,0.06) 1px, transparent 1px);
  background-size: 38px 38px;
}
.title-badge {
  position: absolute;
  top: 22px;
  right: 22px;
  padding: 12px 16px;
  border-radius: 18px;
  background: rgba(255, 252, 248, 0.82);
  color: var(--accent);
  border: 1px solid rgba(140,91,47,0.12);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.title-orbit,
.title-orbit-small,
.title-orbit-leaf {
  position: absolute;
  border-radius: 50%;
}
.title-orbit {
  width: 240px;
  height: 240px;
  border: 1px solid rgba(140,91,47,0.12);
  left: 52%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.title-orbit-small {
  width: 148px;
  height: 148px;
  border: 1px dashed rgba(199,141,77,0.22);
  left: 52%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.title-center-mark {
  position: absolute;
  left: 52%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 110px;
  height: 110px;
  border-radius: 28px;
  display: grid;
  place-items: center;
  font-size: 44px;
  color: var(--accent);
  background: rgba(255, 250, 244, 0.94);
  border: 1px solid rgba(140,91,47,0.16);
  box-shadow: 0 18px 32px rgba(120, 80, 43, 0.14);
}
.title-orbit-leaf.one { width: 20px; height: 20px; background: rgba(199,141,77,0.85); top: 18%; left: 51%; }
.title-orbit-leaf.two { width: 16px; height: 16px; background: rgba(93,125,99,0.75); bottom: 22%; right: 24%; }
.title-orbit-leaf.three { width: 14px; height: 14px; background: rgba(140,91,47,0.72); top: 55%; left: 20%; }
.title-note {
  display: grid;
  gap: 10px;
  padding: 18px 20px;
  border-radius: 24px;
  background: rgba(255, 249, 240, 0.75);
  border: 1px solid rgba(140,91,47,0.12);
}
.title-note strong { font-size: 14px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); }
.title-note span { color: var(--text-soft); font-size: 14px; line-height: 1.6; }

.video-slide .label,
.guests-slide .label,
.events-intro-slide .label,
.thanks-slide .label {
  font-size: 13px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 800;
  margin-bottom: 12px;
}
.video-slide h2,
.guests-slide h2,
.events-intro-slide h1,
.thanks-slide h1 {
  color: var(--text);
}
.video-slide video {
  width: min(82%, 980px);
  max-height: 64vh;
  border-radius: 22px;
  background: #000;
  border: 1px solid rgba(140, 91, 47, 0.14);
  box-shadow: var(--shadow);
}

.guests-slide { padding-inline: 60px; }
.guests-slide h2 { font-size: clamp(2.5rem, 4vw, 3.6rem); margin-bottom: 38px; }
.guest-cards { display: flex; gap: 34px; justify-content: center; flex-wrap: wrap; }
.guest-card {
  width: 320px;
  padding: 28px 26px;
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(255,250,243,0.86), rgba(255,247,237,0.70));
  border: 1px solid rgba(140,91,47,0.12);
  box-shadow: 0 20px 40px rgba(92, 62, 35, 0.10);
}
.guest-photo {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  margin: 0 auto 20px;
  overflow: hidden;
  border: 4px solid rgba(199,141,77,0.48);
  background: rgba(255,255,255,0.66);
  display: flex;
  align-items: center;
  justify-content: center;
}
.guest-photo img { width: 100%; height: 100%; object-fit: cover; }
.guest-card h3 { font-size: 30px; margin-bottom: 8px; color: var(--text); }
.guest-card p { color: var(--text-soft); font-size: 14px; line-height: 1.6; }

.events-intro-slide h1 { font-size: clamp(3rem, 5vw, 5rem); margin-bottom: 16px; }
.events-intro-slide h1 .accent { color: var(--accent); }
.events-intro-slide p { color: var(--text-soft); font-size: 18px; max-width: 780px; line-height: 1.8; }

/* ── Event layout ─────────────────────────────────────────── */
.event-slide { flex-direction: row; align-items: stretch; padding: 0; }

/* Sidebar / Timeline */
.event-timeline {
  position: fixed;
  top: 0;
  left: 0;
  width: var(--timeline-w);
  height: 100vh;
  padding: 82px 16px 84px;
  overflow-y: auto;
  background: linear-gradient(180deg, rgba(255,248,240,0.9), rgba(247,239,226,0.76));
  border-right: 1px solid rgba(140,91,47,0.12);
  backdrop-filter: blur(20px);
  z-index: 70;
  /* Slide-in/out transition */
  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}
.event-timeline.collapsed {
  transform: translateX(-100%);
}
.event-timeline::-webkit-scrollbar { width: 6px; }
.event-timeline::-webkit-scrollbar-thumb { background: rgba(140,91,47,0.22); border-radius: 999px; }

/* Toggle tab — always visible, anchored to the sidebar's right edge */
.sidebar-toggle {
  position: fixed;
  top: 50%;
  left: var(--timeline-w);
  transform: translateY(-50%) translateX(0);
  z-index: 80;
  width: 28px;
  height: 56px;
  border-radius: 0 14px 14px 0;
  border: 1px solid rgba(140,91,47,0.18);
  border-left: none;
  background: rgba(255, 251, 245, 0.92);
  color: var(--accent);
  backdrop-filter: blur(14px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 4px 0 16px rgba(92, 62, 35, 0.10);
  transition: left 0.32s cubic-bezier(0.4, 0, 0.2, 1), background 0.18s ease, color 0.18s ease;
  user-select: none;
}
.sidebar-toggle.collapsed {
  left: 0;
  border-radius: 0 14px 14px 0;
  border-left: none;
}
.sidebar-toggle:hover { background: rgba(255, 248, 239, 0.98); color: var(--accent-2); }

.timeline-item {
  padding: 14px 16px 14px 18px;
  border-radius: 18px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease;
  text-align: left;
  margin-bottom: 8px;
}
.timeline-item:hover { transform: translateX(3px); background: rgba(255,255,255,0.46); border-color: rgba(140,91,47,0.08); }
.timeline-item.active {
  background: linear-gradient(135deg, rgba(140,91,47,0.12), rgba(199,141,77,0.06));
  border-color: rgba(140,91,47,0.12);
  box-shadow: 0 10px 18px rgba(90, 60, 34, 0.08);
}
.timeline-item .t-date {
  display: block;
  margin-bottom: 4px;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 800;
  color: var(--accent);
}
.timeline-item .t-title {
  color: var(--text-soft);
  font-size: 13px;
  line-height: 1.5;
  font-weight: 700;
}
.timeline-item.active .t-title { color: var(--text); }

/* Shell that wraps the main event content area */
.event-shell {
  width: 100%;
  height: 100%;
  /* margin-left is set inline via JS so it can animate with sidebar */
  transition: margin-left 0.32s cubic-bezier(0.4, 0, 0.2, 1), width 0.32s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 78px 26px 44px;
  overflow: hidden;
}
.event-main {
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  border-radius: 34px;
  background: linear-gradient(180deg, rgba(255,251,246,0.88), rgba(255,247,238,0.68));
  border: 1px solid rgba(140,91,47,0.12);
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}
.event-main::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 16% 20%, rgba(199,141,77,0.12), transparent 26%),
    radial-gradient(circle at 86% 86%, rgba(93,125,99,0.11), transparent 24%);
  pointer-events: none;
}
.event-content-viewport {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 22px 26px;
}
.event-content-inner {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.event-header {
  width: 100%;
  max-width: 980px;
  text-align: center;
  flex-shrink: 0;
}
.event-header .ev-date {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 14px;
  border-radius: 999px;
  background: rgba(140,91,47,0.08);
  border: 1px solid rgba(140,91,47,0.12);
  color: var(--accent);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 6px;
}
.event-header h2 {
  font-size: clamp(1.4rem, 2vw, 2.1rem);
  line-height: 1.15;
  color: var(--text);
}

/* IMAGE VIEWER */
.image-viewer {
  position: relative;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-viewer-frame {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  overflow: hidden;
  background: rgba(255,255,255,0.5);
  border: 1px solid rgba(140,91,47,0.12);
  box-shadow: 0 16px 36px rgba(90, 60, 34, 0.10);
  cursor: zoom-in;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-viewer-frame img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.image-viewer .img-fallback {
  position: absolute;
}
.image-viewer-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(140, 91, 47, 0.18);
  background: rgba(255, 251, 245, 0.85);
  color: var(--accent);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 10px 22px rgba(92, 62, 35, 0.14);
  transition: transform 0.18s ease, background 0.18s ease, color 0.18s ease, opacity 0.18s ease;
}
.image-viewer-nav:hover { transform: translateY(-50%) scale(1.07); background: rgba(255, 248, 239, 0.96); color: var(--accent-2); }
.image-viewer-nav.prev { left: 14px; }
.image-viewer-nav.next { right: 14px; }
.image-viewer-nav:disabled { opacity: 0; pointer-events: none; }
.image-viewer-counter {
  position: absolute;
  bottom: 14px;
  right: 18px;
  z-index: 5;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(46, 36, 24, 0.55);
  color: #fdf6ec;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
}
.image-viewer-dots {
  flex-shrink: 0;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}
.image-viewer-dots button {
  width: 9px;
  height: 9px;
  padding: 0;
  border-radius: 50%;
  border: none;
  background: rgba(140, 91, 47, 0.22);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}
.image-viewer-dots button.active {
  background: var(--accent);
  transform: scale(1.25);
}

/* LIGHTBOX */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(42, 29, 18, 0.82);
  backdrop-filter: blur(14px);
}
.lightbox-stage {
  position: relative;
  width: min(96vw, 1400px);
  height: min(92vh, 980px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  overflow: hidden;
}
.lightbox-overlay img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 22px 70px rgba(0,0,0,0.28);
}
.lightbox-close {
  position: fixed;
  top: 24px;
  right: 28px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 251, 245, 0.92);
  border: 1px solid rgba(140,91,47,0.16);
  color: var(--accent);
  font-size: 28px;
  cursor: pointer;
  z-index: 2001;
  box-shadow: 0 14px 30px rgba(0,0,0,0.18);
}
/* Lightbox prev/next arrows */
.lightbox-nav {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2001;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgba(140,91,47,0.22);
  background: rgba(255, 251, 245, 0.88);
  color: var(--accent);
  backdrop-filter: blur(14px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  cursor: pointer;
  box-shadow: 0 14px 30px rgba(0,0,0,0.22);
  transition: transform 0.18s ease, background 0.18s ease, color 0.18s ease;
}
.lightbox-nav:hover { transform: translateY(-50%) scale(1.07); background: rgba(255,248,239,0.98); color: var(--accent-2); }
.lightbox-nav.prev { left: 24px; }
.lightbox-nav.next { right: 88px; }
.lightbox-nav:disabled { opacity: 0.25; pointer-events: none; }
/* Lightbox image counter */
.lightbox-counter {
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2001;
  padding: 8px 20px;
  border-radius: 999px;
  background: rgba(46, 36, 24, 0.62);
  color: #fdf6ec;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
}
/* Lightbox caption: which event/slide the current image belongs to */
.lightbox-caption {
  position: fixed;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2001;
  max-width: min(80vw, 720px);
  padding: 6px 18px;
  border-radius: 999px;
  background: rgba(46, 36, 24, 0.42);
  color: #fdf6ec;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.lightbox-caption .lc-date {
  opacity: 0.78;
  margin-right: 8px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 11px;
}

.thanks-slide h1 { font-size: clamp(3.4rem, 5vw, 5.5rem); color: var(--accent); margin-bottom: 12px; }
.thanks-slide p { color: var(--text-soft); font-size: 18px; line-height: 1.7; }
.ribbon-line {
  width: 220px;
  height: 1px;
  margin: 18px auto 22px;
  background: linear-gradient(90deg, transparent, rgba(140,91,47,0.55), transparent);
}

@media (max-width: 1180px) {
  .title-panel { grid-template-columns: 1fr; min-height: auto; }
  .title-art { min-height: 320px; }
}

@media (max-width: 980px) {
  :root { --timeline-w: 100%; }
  .event-timeline {
    position: fixed;
    top: 72px;
    left: 12px;
    right: 12px;
    width: auto;
    height: 112px;
    padding: 12px;
    display: flex;
    gap: 10px;
    overflow-x: auto;
    overflow-y: hidden;
    border: 1px solid rgba(140,91,47,0.12);
    border-radius: 24px;
  }
  .event-timeline.collapsed { transform: translateY(calc(-100% - 80px)); }
  .sidebar-toggle {
    left: 50% !important;
    transform: translateX(-50%) !important;
    top: 70px;
    width: 56px;
    height: 28px;
    border-radius: 0 0 14px 14px;
    border-top: none;
    border-left: 1px solid rgba(140,91,47,0.18);
    flex-direction: row;
    font-size: 12px;
  }
  .timeline-item { min-width: 210px; margin-bottom: 0; }
  .event-shell { padding: 198px 16px 50px; }
  .event-content-viewport { padding: 22px; overflow-y: auto; }
  .event-content-inner { height: auto; }
  .image-viewer { min-height: 280px; }
  .image-viewer-frame { height: 280px; }
}

@media (max-width: 760px) {
  .slide { padding: 24px; }
  .title-slide { padding: 88px 18px 42px; }
  .title-panel { padding: 26px 22px; border-radius: 28px; }
  .title-description { font-size: 14px; }
  .title-art { min-height: 250px; }
  .title-center-mark { width: 86px; height: 86px; font-size: 34px; }
  .title-orbit { width: 190px; height: 190px; }
  .title-orbit-small { width: 122px; height: 122px; }
  .guests-slide { padding-inline: 22px; }
  .guest-card { width: min(100%, 340px); }
  .guest-photo { width: 170px; height: 170px; }
  .video-slide video { width: 100%; }
  .nav-arrow { width: 48px; height: 48px; font-size: 24px; }
  .top-bar { top: 12px; gap: 8px; }
  .top-bar-btn, .slide-counter { padding: 8px 12px; font-size: 11px; }
  .event-timeline { top: 60px; }
  .lightbox-overlay { padding: 16px; }
  .lightbox-stage { width: 100%; height: min(88vh, 720px); padding: 8px; }
  .lightbox-close { top: 16px; right: 16px; }
  .lightbox-nav.next { right: 76px; }
  .lightbox-caption { bottom: 56px; max-width: 88vw; font-size: 11px; }
  .image-viewer-nav { width: 40px; height: 40px; font-size: 18px; }
}
`;

// ── Lightbox with cross-event image navigation ──────────────────────────────
// Navigates across ALL events' images, the same way the main (unzoomed) view
// does: reaching the last image of an event rolls forward into the next
// event's first image, and vice versa for "previous".
function Lightbox({
  allEvents,
  startEventIndex,
  startImageIndex,
  onClose,
  onPositionChange,
}) {
  const overlayRef = useRef(null);
  const imgRef = useRef(null);
  const [eventIdx, setEventIdx] = useState(startEventIndex);
  const [imgIdx, setImgIdx] = useState(startImageIndex);

  const currentEvent = allEvents[eventIdx];
  const images = currentEvent.images;
  const total = images.length;
  const src = images[imgIdx];

  const atVeryFirst = eventIdx === 0 && imgIdx === 0;
  const atVeryLast =
    eventIdx === allEvents.length - 1 && imgIdx === images.length - 1;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.22, ease: "power2.out" },
    );
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 0.3, ease: "power3.out" },
    );

    return () => {
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Let parent know where we are, so the underlying slide/event view can
  // stay in sync (and so closing the lightbox lands on the right slide).
  useEffect(() => {
    onPositionChange(eventIdx, imgIdx);
  }, [eventIdx, imgIdx, onPositionChange]);

  const animateTo = useCallback((dirForward) => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, x: dirForward ? 30 : -30 },
      { opacity: 1, x: 0, duration: 0.24, ease: "power2.out" },
    );
  }, []);

  const goNext = useCallback(() => {
    setEventIdx((ei) => {
      setImgIdx((ii) => {
        const evImages = allEvents[ei].images;
        if (ii < evImages.length - 1) {
          animateTo(true);
          return ii + 1;
        }
        return ii;
      });
      return ei;
    });

    // Handle rollover into next event (needs current state, so do it after
    // checking same-event case using latest values via functional updates).
    setEventIdx((ei) => {
      const evImages = allEvents[ei].images;
      if (imgIdx < evImages.length - 1) {
        return ei; // stayed within the same event
      }
      if (ei < allEvents.length - 1) {
        animateTo(true);
        setImgIdx(0);
        return ei + 1;
      }
      return ei; // already at the very last image overall
    });
  }, [allEvents, animateTo, imgIdx]);

  const goPrev = useCallback(() => {
    setEventIdx((ei) => {
      if (imgIdx > 0) {
        animateTo(false);
        setImgIdx((ii) => ii - 1);
        return ei;
      }
      if (ei > 0) {
        const prevImages = allEvents[ei - 1].images;
        animateTo(false);
        setImgIdx(prevImages.length - 1);
        return ei - 1;
      }
      return ei; // already at the very first image overall
    });
  }, [allEvents, animateTo, imgIdx]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, goNext, goPrev]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      className="lightbox-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close image preview"
      >
        ✕
      </button>

      <button
        className="lightbox-nav prev"
        onClick={goPrev}
        disabled={atVeryFirst}
        aria-label="Previous image"
      >
        &lt;
      </button>
      <button
        className="lightbox-nav next"
        onClick={goNext}
        disabled={atVeryLast}
        aria-label="Next image"
      >
        &gt;
      </button>

      {total > 1 && (
        <div className="lightbox-counter">
          {imgIdx + 1} / {total}
        </div>
      )}

      {/* Small detail line: which event/slide this image belongs to */}
      <div className="lightbox-caption" title={currentEvent.title}>
        <span className="lc-date">{currentEvent.displayDate}</span>
        {currentEvent.title}
      </div>

      <div className="lightbox-stage">
        <img
          ref={imgRef}
          src={src}
          alt={`${currentEvent.title} - ${imgIdx + 1}`}
        />
      </div>
    </div>
  );
}

function SafeImage({ src, alt, fallback }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    setFailed(false);
  }, [src]);
  if (failed) return <span className="img-fallback">{fallback}</span>;
  return <img src={src} alt={alt} onError={() => setFailed(true)} />;
}

function TitleSlide() {
  return (
    <div className="slide title-slide">
      <div className="title-panel">
        <div className="title-copy">
          <div className="title-kicker">
            Rotary Club of Roha · District 3131
          </div>
          <h1>
            Rotary Club <span className="accent">of Roha</span>
          </h1>
          <h2>13th Installation Ceremony</h2>
          <p className="title-description">
            Celebrating leadership, service, fellowship, and the moments that
            shaped our shared journey through the year.
          </p>
        </div>
        <div className="title-side">
          <div className="title-art"></div>
        </div>
      </div>
    </div>
  );
}

function VideoSlide({ label, title, src, isActive }) {
  return (
    <div className="slide video-slide">
      <div className="label">{label}</div>
      <h2>{title}</h2>
      <video key={src} src={src} controls playsInline autoPlay={isActive}>
        Your browser does not support video playback.
      </video>
    </div>
  );
}

function GuestsSlide() {
  return (
    <div className="slide guests-slide">
      <div className="label">Welcome</div>
      <h2>Our Distinguished Guests</h2>
      <div className="guest-cards">
        <div className="guest-card">
          <div className="guest-photo">
            <SafeImage
              src="/media/guests/chief-guest.jpg"
              alt="Rtn. Nitin Dhamale"
              fallback={
                <>
                  Add photo at
                  <br />
                  /media/guests/chief-guest.jpg
                </>
              }
            />
          </div>
          <h3>Rtn. Nitin Dhamale</h3>
          <p>Chief Guest — District Governor Elect 2026-27</p>
        </div>
        <div className="guest-card">
          <div className="guest-photo">
            <SafeImage
              src="/media/guests/guest-of-honour.jpg"
              alt="Rtn. Madhubala Nikam"
              fallback={
                <>
                  Add photo at
                  <br />
                  /media/guests/guest-of-honour.jpg
                </>
              }
            />
          </div>
          <h3>Rtn. Madhubala Nikam</h3>
          <p>Guest of Honour — Assistant Governor Elect 2026-27</p>
        </div>
      </div>
    </div>
  );
}

function EventsIntroSlide() {
  return (
    <div className="slide events-intro-slide">
      <div className="label">Highlights</div>
      <h1>
        Our Year <span className="accent">in Service</span>
      </h1>
      <p>
        A journey through community projects, fellowship, outreach, and
        celebration from Jul 2025 to Mar 2026.
      </p>
    </div>
  );
}

function EventContent({
  data,
  imgIndex,
  onImgIndexChange,
  onLightboxOpen,
  registerImageNav,
}) {
  const headerRef = useRef(null);
  const frameRef = useRef(null);
  const wrapperRef = useRef(null);

  const images = data.images;
  const imageCount = images.length;

  const goNextImage = useCallback(() => {
    onImgIndexChange((i) => (i < imageCount - 1 ? i + 1 : i));
  }, [imageCount, onImgIndexChange]);

  const goPrevImage = useCallback(() => {
    onImgIndexChange((i) => (i > 0 ? i - 1 : i));
  }, [onImgIndexChange]);

  useEffect(() => {
    registerImageNav({
      atFirstImage: imgIndex === 0,
      atLastImage: imgIndex === imageCount - 1,
      goNextImage,
      goPrevImage,
    });
  }, [registerImageNav, imgIndex, imageCount, goNextImage, goPrevImage]);

  useEffect(() => {
    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.22, ease: "power1.out" },
    );
    gsap.fromTo(
      headerRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.42, ease: "power3.out" },
    );
  }, [data.id]);

  useEffect(() => {
    if (!frameRef.current) return;
    gsap.fromTo(
      frameRef.current,
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 0.32, ease: "power3.out" },
    );
  }, [imgIndex, data.id]);

  const currentSrc = images[imgIndex];

  return (
    <div className="event-content-inner" ref={wrapperRef}>
      <div className="event-header" ref={headerRef}>
        <span className="ev-date">{data.displayDate}</span>
        <h2>{data.title}</h2>
      </div>

      <div className="image-viewer">
        <div
          className="image-viewer-frame"
          ref={frameRef}
          onClick={() => onLightboxOpen(imgIndex)}
        >
          <SafeImage
            key={currentSrc}
            src={currentSrc}
            alt={`${data.title} - ${imgIndex + 1}`}
            fallback={
              <>
                Image {imgIndex + 1}
                <br />
                /media/events/{data.id}/img{imgIndex + 1}.jpg
              </>
            }
          />
          {imageCount > 1 && (
            <span className="image-viewer-counter">
              {imgIndex + 1} / {imageCount}
            </span>
          )}
        </div>

        {imageCount > 1 && (
          <>
            <button
              type="button"
              className="image-viewer-nav prev"
              onClick={(e) => {
                e.stopPropagation();
                goPrevImage();
              }}
              disabled={imgIndex === 0}
              aria-label="Previous image"
            >
              &lt;
            </button>
            <button
              type="button"
              className="image-viewer-nav next"
              onClick={(e) => {
                e.stopPropagation();
                goNextImage();
              }}
              disabled={imgIndex === imageCount - 1}
              aria-label="Next image"
            >
              &gt;
            </button>
          </>
        )}
      </div>

      {imageCount > 1 && (
        <div className="image-viewer-dots">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={i === imgIndex ? "active" : ""}
              onClick={() => onImgIndexChange(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function EventTimeline({ activeId, onJumpToEvent, collapsed }) {
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!timelineRef.current) return;
    const activeEl = timelineRef.current.querySelector(".timeline-item.active");
    if (activeEl)
      activeEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
  }, [activeId]);

  return (
    <div
      className={`event-timeline${collapsed ? " collapsed" : ""}`}
      ref={timelineRef}
    >
      {events.map((ev) => (
        <div
          key={ev.id}
          className={`timeline-item${ev.id === activeId ? " active" : ""}`}
          onClick={() => onJumpToEvent(ev.id)}
        >
          <span className="t-date">{ev.displayDate}</span>
          <span className="t-title">{ev.title}</span>
        </div>
      ))}
    </div>
  );
}

function ThanksSlide() {
  return (
    <div className="slide thanks-slide">
      <div className="label">With Gratitude</div>
      <h1>Thank You</h1>
      <div className="ribbon-line" />
      <p>For your continued support, encouragement, and partnership.</p>
      <p>Rotary Club of Roha — 13th Installation Ceremony</p>
    </div>
  );
}

// ── Root App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [index, setIndex] = useState(0);
  // Sidebar collapsed by default
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  // Per-event image index, keyed by event id, so position is remembered
  // when navigating away and back, and so it can be kept in sync with the lightbox.
  const [imgIndexByEvent, setImgIndexByEvent] = useState({});
  // Lightbox state: null = closed, { eventIndex, imageIndex } = open
  const [lightbox, setLightbox] = useState(null);

  const containerRef = useRef(null);
  const isAnimating = useRef(false);
  const imageNavRef = useRef(null);

  const registerImageNav = useCallback((nav) => {
    imageNavRef.current = nav;
  }, []);

  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = STYLES;
    document.head.appendChild(styleEl);
    return () => document.head.removeChild(styleEl);
  }, []);

  const eventIdToIndex = useMemo(() => {
    const map = {};
    slideStructure.forEach((s, i) => {
      if (s.type === "event") map[s.data.id] = i;
    });
    return map;
  }, []);

  // Maps a position within the flat `events` array to/from the slide index,
  // used to keep the lightbox (which walks `events` directly) and the main
  // slide deck (which walks `slideStructure`) in sync.
  const eventArrayIndexToSlideIndex = useMemo(() => {
    return events.map((ev) => eventIdToIndex[ev.id]);
  }, [eventIdToIndex]);

  const slideIndexToEventArrayIndex = useMemo(() => {
    const map = {};
    events.forEach((ev, i) => {
      map[eventIdToIndex[ev.id]] = i;
    });
    return map;
  }, [eventIdToIndex]);

  const isEventSlide = useCallback(
    (i) => slideStructure[i]?.type === "event",
    [],
  );

  const goTo = useCallback(
    (newIndex, dir = 1) => {
      if (isAnimating.current || lightbox) return;
      if (newIndex < 0 || newIndex >= TOTAL) return;
      if (newIndex === index) return;

      isAnimating.current = true;
      const container = containerRef.current;
      const offset = dir > 0 ? 60 : -60;
      const bothEventSlides = isEventSlide(index) && isEventSlide(newIndex);

      imageNavRef.current = null;

      if (bothEventSlides) {
        setIndex(newIndex);
        isAnimating.current = false;
        return;
      }

      gsap
        .timeline({
          onComplete: () => {
            isAnimating.current = false;
          },
        })
        .to(container, {
          opacity: 0,
          x: -offset,
          duration: 0.26,
          ease: "power2.in",
          onComplete: () => setIndex(newIndex),
        })
        .set(container, { x: offset })
        .to(container, {
          opacity: 1,
          x: 0,
          duration: 0.34,
          ease: "power2.out",
        });
    },
    [index, isEventSlide, lightbox],
  );

  const next = useCallback(() => {
    const nav = imageNavRef.current;
    if (isEventSlide(index) && nav && !nav.atLastImage) {
      nav.goNextImage();
      return;
    }
    goTo(index + 1, 1);
  }, [goTo, index, isEventSlide]);

  const prev = useCallback(() => {
    const nav = imageNavRef.current;
    if (isEventSlide(index) && nav && !nav.atFirstImage) {
      nav.goPrevImage();
      return;
    }
    goTo(index - 1, -1);
  }, [goTo, index, isEventSlide]);

  const goFirst = useCallback(() => goTo(0, -1), [goTo]);
  const goLast = useCallback(() => goTo(TOTAL - 1, 1), [goTo]);

  const jumpToEvent = useCallback(
    (eventId) => {
      if (lightbox) return;
      const target = eventIdToIndex[eventId];
      if (target === undefined) return;
      goTo(target, target > index ? 1 : -1);
    },
    [eventIdToIndex, goTo, index, lightbox],
  );

  useEffect(() => {
    const handleKey = (e) => {
      // Lightbox handles its own keys
      if (lightbox) return;

      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goFirst();
      } else if (e.key === "End") {
        e.preventDefault();
        goLast();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev, goFirst, goLast, lightbox]);

  const current = slideStructure[index];
  const onEventSlide = current.type === "event";

  // Sync the underlying slide deck to match wherever the lightbox has
  // navigated to (it can roll across event boundaries), so closing the
  // lightbox always lands on the correct slide and image.
  const handleLightboxPositionChange = useCallback(
    (eventArrayIdx, imageIdx) => {
      const ev = events[eventArrayIdx];
      const slideIdx = eventArrayIndexToSlideIndex[eventArrayIdx];
      setImgIndexByEvent((prev) => ({ ...prev, [ev.id]: imageIdx }));
      if (slideIdx !== undefined && slideIdx !== index) {
        setIndex(slideIdx);
      }
    },
    [eventArrayIndexToSlideIndex, index],
  );

  const setImgIndexForEvent = useCallback((eventId, updater) => {
    setImgIndexByEvent((prevMap) => {
      const prevVal = prevMap[eventId] ?? 0;
      const nextVal =
        typeof updater === "function" ? updater(prevVal) : updater;
      return { ...prevMap, [eventId]: nextVal };
    });
  }, []);

  // Timeline sidebar width for layout calculations
  const SIDEBAR_W = "294px";

  const renderMainSlide = () => {
    switch (current.type) {
      case "title":
        return <TitleSlide />;
      case "anthem":
        return (
          <VideoSlide
            label="National Anthem"
            title="Jana Gana Mana"
            src="/media/videos/national-anthem.mp4"
            isActive={true}
          />
        );
      case "guests":
        return <GuestsSlide />;
      case "profile-video":
        return (
          <VideoSlide
            label="Profile"
            title="Rtn. Nitin Dhamale"
            src="/media/videos/nitin-dhamale-profile.mov"
            isActive={true}
          />
        );
      case "events-intro":
        return <EventsIntroSlide />;
      case "event": {
        const data = current.data;
        const imgIndex = imgIndexByEvent[data.id] ?? 0;
        return (
          <div
            className="event-shell"
            style={{
              marginLeft: sidebarCollapsed ? "0" : SIDEBAR_W,
              width: sidebarCollapsed ? "100%" : `calc(100% - ${SIDEBAR_W})`,
            }}
          >
            <div className="event-main">
              <div className="event-content-viewport">
                <EventContent
                  key={data.id}
                  data={data}
                  imgIndex={imgIndex}
                  onImgIndexChange={(updater) =>
                    setImgIndexForEvent(data.id, updater)
                  }
                  onLightboxOpen={(startIdx) => {
                    const eventArrayIdx = slideIndexToEventArrayIndex[index];
                    setLightbox({
                      eventIndex: eventArrayIdx,
                      imageIndex: startIdx,
                    });
                  }}
                  registerImageNav={registerImageNav}
                />
              </div>
            </div>
          </div>
        );
      }
      case "thanks":
        return <ThanksSlide />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      {!lightbox && (
        <>
          <div className="top-bar">
            <button className="top-bar-btn" onClick={goFirst}>
              &lt;&lt; First
            </button>
            <div className="slide-counter">
              {index + 1} / {TOTAL}
            </div>
            <button className="top-bar-btn" onClick={goLast}>
              Last &gt;&gt;
            </button>
          </div>

          {onEventSlide && (
            <>
              <EventTimeline
                activeId={current.data.id}
                onJumpToEvent={jumpToEvent}
                collapsed={sidebarCollapsed}
              />
              {/* Sidebar toggle tab */}
              <button
                className={`sidebar-toggle${sidebarCollapsed ? " collapsed" : ""}`}
                onClick={() => setSidebarCollapsed((v) => !v)}
                aria-label={
                  sidebarCollapsed
                    ? "Show event timeline"
                    : "Hide event timeline"
                }
                title={sidebarCollapsed ? "Show timeline" : "Hide timeline"}
              >
                {sidebarCollapsed ? "▶" : "◀"}
              </button>
            </>
          )}

          <div
            className="nav-arrow left"
            onClick={prev}
            style={{ visibility: index === 0 ? "hidden" : "visible" }}
          >
            &lt;
          </div>
          <div
            className="nav-arrow right"
            onClick={next}
            style={{ visibility: index === TOTAL - 1 ? "hidden" : "visible" }}
          >
            &gt;
          </div>

          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${((index + 1) / TOTAL) * 100}%` }}
            />
          </div>
        </>
      )}

      <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
        {renderMainSlide()}
      </div>

      {lightbox && (
        <Lightbox
          allEvents={events}
          startEventIndex={lightbox.eventIndex}
          startImageIndex={lightbox.imageIndex}
          onClose={() => setLightbox(null)}
          onPositionChange={handleLightboxPositionChange}
        />
      )}
    </div>
  );
}
