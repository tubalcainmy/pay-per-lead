/* ==========================================================================
   TUBALCAIN — OFFER PAGE CONFIG
   Launch Pack §4.1 — this page and the 9-gate qualifier live in separate
   repositories with different Meta Pixels and GA4 properties. There is no
   shared config file (this supersedes Rebuild Brief §6.4). Every value the
   offer page needs lives here, self-contained — nothing on this page reads
   from config.js (that file belongs to the qualifier repo only).

   Duplicated values (pricing, guarantee wording, the close rate, the city
   list) will drift between the two repos unless someone checks both against
   a canonical sheet/note at every deploy — that is a manual discipline now,
   not a technical guarantee. See Launch Pack §4.1.
   ========================================================================== */

const OFFER_CONFIG = {

  brand: {
    name: "Tubalcain Ads Enterprise",
    founderName: "Alajayibo Mystery",
    founderLocation: "Warri, Delta State",
    guideUrl: "https://tubalcain.systeme.io/solar-guide-thank-you",
    mainSiteUrl: "https://tubalcainmy.github.io",
    // Unconfirmed — the 9-gate qualifier repo's real live URL. Following the
    // brief's own renaming rule (8-gate slug -> 9-gate), but this MUST be
    // confirmed against the actual deployed qualifier URL before launch.
    qualifierMasterUrl: "https://tubalcainmy.github.io/8-gate/"
  },

  whatsapp: {
    // Installer/partner number — same number already live on the current page.
    installerNumber: "2348029234994",
    // Homeowner qualifier support line.
    homeownerNumber: "2348029234994"
  },

  pricing: {
    tier1Price: 5000,
    tier2Price: 10000,
    depositAmount: 150000,
    depositSplitFirst: 75000,
    depositSplitSecond: 75000,
    monthOneAllIn: 300000,
    guaranteedBuyers: 30,
    closeRatePct: 38
  },

  // Corrected in Launch Pack §1.3 — was 25/7, now 8/14. Read from here
  // everywhere the floor is stated so it can never drift again.
  territory: {
    volumeFloorPerMonth: 10,
    noticeDays: 7
  },

  // Live city list — same territories the qualifier serves.
  cities: [
    { name: "Lagos - Mainland (Ikeja axis)", open: true },
    { name: "Lagos - Island & Lekki", open: true },
    { name: "Abuja - FCT", open: true },
    { name: "Port Harcourt - Rivers State", open: true },
    { name: "Benin City - Edo State", open: true },
    { name: "Warri - Delta State", open: true }
  ],

  webhookUrl: "https://hook.us2.make.com/yc551ya9rm1jboam8eudm50xvv81egft",

  tracking: {
    metaPixelId: "2252101838924260",
    ga4MeasurementId: "G-62DKYP07HR"
  },

  // §3.3 — the only section of this file meant to change mid-week. Update
  // slotsRemaining as slots are actually taken; update the whole block when
  // a new week opens. Never leave a window open-ended past its lock terms.
  weeklyWindow: {
    label: "Week 1 · 1–7 August",
    opensAt: "2026-08-01T00:00:00+01:00",
    closesAt: "2026-08-7T23:59:59+01:00",
    slotsTotal: 3,
    slotsRemaining: 3,
    offerHeadline: "This Week: Package-Matched Buyers at Verified Buyer Price",
    offerDetail: "The first 3 installers to launch this week get Tier 2 Package-Matched Buyers appliance load calculated, system size matched to their own package list, homeowner opening the conversation already naming the package they want at ₦5,000 instead of ₦10,000, locked for their first 30 buyers.",
    tier2DiscountPrice: 5000,
    tier2StandardPrice: 10000,
    discountLockDuration: "first 30 buyers",
    nextWindowOpensAt: "2026-08-08T00:00:00+01:00",
    soldOutMessage: "This week's 3 slots are taken. The next window opens {date}."
  }
};
