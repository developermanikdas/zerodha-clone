import {
  CirclePlus,
  User,
  Monitor,
  Wallet,
  Database,
  Coins,
} from "lucide-react";

export const supportSections = [
  {
    id: 1,
    title: "Account Opening",
    icon: CirclePlus,
    defaultOpen: true,

    links: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },

  {
    id: 2,
    title: "Your Zerodha Account",
    icon: User,

    links: [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
    ],
  },

  {
    id: 3,
    title: "Kite",
    icon: Monitor,

    links: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
      "Charts and orders",
      "Alerts and Nudges",
      "General",
    ],
  },

  {
    id: 4,
    title: "Funds",
    icon: Wallet,

    links: [
      "Add money",
      "Withdraw money",
      "Add bank accounts",
      "eMandates",
    ],
  },

  {
    id: 5,
    title: "Console",
    icon: Database,

    links: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
      "Segments",
    ],
  },

  {
    id: 6,
    title: "Coin",
    icon: Coins,

    links: [
      "Mutual funds",
      "National Pension Scheme (NPS)",
      "Fixed Deposit (FD)",
      "Features on Coin",
      "Payments and Orders",
      "General",
    ],
  },
];

export const latestUpdates = [
  "Latest Intraday leverages and Square-off timings",
  "Surveillance measure on scrips – July 2026",
];

export const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
  "Learn how to create a ticket",
];