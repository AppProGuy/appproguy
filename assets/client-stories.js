/*
  Client stories data. ONE ENTRY PER CLIENT.
  To add a business: copy an entry, change the fields, save. The /results page renders every entry.
  Any value starting with "PLACEHOLDER:" shows on the page as a dashed "number coming soon" box.
  Rules: real, confirmed facts only. Write about what we do (website, Google profile,
  WhatsApp ordering, content, promos, marketing).
*/
window.CLIENT_STORIES = [
  {
    id: "sienna-shea-butter",
    name: "Sienna Shea Butter",
    owner: "Mashudu",
    type: "Handmade hair and skin care",
    place: "Centurion, Gauteng",
    since: "Handmade since 2019",
    link: { label: "siennashea.co.za", url: "https://siennashea.co.za" },
    headline: "From word of mouth to a brand people can find on Google",
    challenge: "A great handmade product with loyal customers, sold mostly through WhatsApp and word of mouth. She needed more people to find her and an easier way to order.",
    did: [
      "Built siennashea.co.za: a fast, phone-first website where every page has its own WhatsApp order button",
      "Set up WhatsApp ordering, so customers tap once and the message already says what they want",
      "Completed her verified Google Business Profile (hours, products, service areas) and replied to every review",
      "Planned a new 125 ml size with a launch price and refer-a-friend offer",
      "Designed new labels with a QR code, plus flyers and QR cards for local salons",
      "Made 6 adverts for Instagram and WhatsApp, a summer promo plan and a daily posting plan",
      "Hair-care guide pages so people find her when they search"
    ],
    results: [
      { value: "21", label: "pre-orders for the new 125 ml size before the tubs were even filled" },
      { value: "20", label: "five-star Google reviews on her verified profile" },
      { value: "181", label: "people saw her Google profile in search in one month" },
      { value: "PLACEHOLDER: tubs per month before (Sep 2026)", label: "tubs sold per month before" },
      { value: "PLACEHOLDER: tubs per month now (Oct/Nov 2026)", label: "tubs sold per month now" },
      { value: "PLACEHOLDER: rand sales per month before (Sep 2026)", label: "monthly sales before" },
      { value: "PLACEHOLDER: rand sales per month now (Oct/Nov 2026)", label: "monthly sales now" },
      { value: "PLACEHOLDER: Instagram followers before and now", label: "Instagram followers" }
    ],
    ordersFrom: "PLACEHOLDER: where orders come from now (WhatsApp, Instagram, Google, referrals, salons)",
    quote: { text: "PLACEHOLDER: short quote from Mashudu (needs her permission)", by: "Mashudu, founder of Sienna Shea Butter" },
    image: "PLACEHOLDER: photo of Mashudu or her products (needs her permission)",
    services: ["Website", "WhatsApp ordering", "Google profile", "Content", "Promos", "Marketing"]
  },
  {
    id: "king-lutendo",
    name: "King Lutendo",
    owner: "Lutendo",
    type: "Music artist: Venda alternative hip hop",
    place: "Thohoyandou, Limpopo",
    since: "One-man band: writes, produces and engineers everything",
    link: { label: "Spotify", url: "https://open.spotify.com/search/King%20Lutendo" },
    headline: "A 90-day plan to grow an independent artist's audience",
    challenge: "Great songs and listeners across South Africa, but no regular content plan, no radio pitching and royalties not fully registered.",
    did: [
      "Wrote a 90-day marketing plan (13 Oct 2026 to 10 Jan 2027) built around his strongest songs",
      "Content plan and shot lists for short videos on TikTok, Reels and Shorts",
      "Pitched his music to 33 radio stations and music blogs in South Africa and abroad",
      "Royalty registrations: SAMPRA confirmed, YouTube Content ID enrolled, YouTube channel allowlisted",
      "Press kit and a weekly numbers check"
    ],
    results: [
      { value: "+18%", label: "Spotify monthly listeners in two weeks: 3,442 (12 Oct) to 4,068 (26 Oct 2026)" },
      { value: "129,470", label: "plays on his lead song Phases and cycles (22 Oct 2026)" },
      { value: "33", label: "radio and blog pitches sent in October 2026" },
      { value: "PLACEHOLDER: Instagram followers now (baseline 1,810 on 22 Oct 2026)", label: "Instagram followers" },
      { value: "PLACEHOLDER: radio plays from our pitches", label: "radio spins from our pitches" }
    ],
    ordersFrom: "",
    quote: { text: "PLACEHOLDER: short quote from Lutendo (needs his permission)", by: "King Lutendo" },
    image: "PLACEHOLDER: press photo of King Lutendo (needs his permission)",
    services: ["Marketing plan", "Content", "Radio and blog pitching", "Royalties"]
  }
  /* Next: Lufuno's mother's business. Copy an entry above. */
];
