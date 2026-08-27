export const charges = {
  equity: {
    headers: [
      "Equity delivery",
      "Equity intraday",
      "F&O - Futures",
      "F&O - Options",
    ],

    rows: [
      {
        label: "Brokerage",
        values: [
          "Zero Brokerage",
          "0.03% or ₹20/executed order whichever is lower",
          "0.03% or ₹20/executed order whichever is lower",
          "Flat ₹20 per executed order",
        ],
      },
      {
        label: "STT/CTT",
        values: [
          "0.1% on buy & sell",
          "0.025% on the sell side",
          "0.05% on the sell side",
          [
            "0.15% of the intrinsic value on options that are bought and exercised",
            "0.15% on sell side (on premium)",
          ],
        ],
      },
      {
        label: "Transaction charges",
        values: [
          ["NSE: 0.00307%", "BSE: 0.00375%"],
          ["NSE: 0.00307%", "BSE: 0.00375%"],
          ["NSE: 0.00183%", "BSE: 0"],
          ["NSE: 0.03553% (on premium)", "BSE: 0.0325% (on premium)"],
        ],
      },
      {
        label: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
      },
      {
        label: "SEBI charges",
        values: [
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
        ],
      },
      {
        label: "Stamp charges",
        values: [
          "0.015% or ₹1500/crore on buy side",
          "0.003% or ₹300/crore on buy side",
          "0.002% or ₹200/crore on buy side",
          "0.003% or ₹300/crore on buy side",
        ],
      },
    ],
  },

  currency: {
    headers: [
      "Currency futures",
      "Currency options",
    ],

    rows: [
      {
        label: "Brokerage",
        values: [
          "0.03% or ₹20/executed order whichever is lower",
          "₹20/executed order",
        ],
      },
      {
        label: "STT/CTT",
        values: [
          "No STT",
          "No STT",
        ],
      },
      {
        label: "Transaction charges",
        values: [
          ["NSE: 0.00035%", "BSE: 0.00045%"],
          ["NSE: 0.0311%", "BSE: 0.001%"],
        ],
      },
      {
        label: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
      },
      {
        label: "SEBI charges",
        values: [
          "₹10 / crore",
          "₹10 / crore",
        ],
      },
      {
        label: "Stamp charges",
        values: [
          "0.0001% or ₹10/crore on buy side",
          "0.0001% or ₹10/crore on buy side",
        ],
      },
    ],
  },

  commodity: {
    headers: [
      "Commodity futures",
      "Commodity options",
    ],

    rows: [
      {
        label: "Brokerage",
        values: [
          "0.03% or ₹20/executed order whichever is lower",
          "₹20/executed order",
        ],
      },
      {
        label: "STT/CTT",
        values: [
          "0.01% on sell side (Non-Agri)",
          "0.05% on sell side",
        ],
      },
      {
        label: "Transaction charges",
        values: [
          ["MCX: 0.0021%", "NSE: 0.0001%"],
          ["MCX: 0.0418%", "NSE: 0.001%"],
        ],
      },
      {
        label: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
      },
      {
        label: "SEBI charges",
        values: [
          ["Agri: ₹1/crore", "Non-agri: ₹10/crore"],
          "₹10 / crore",
        ],
      },
      {
        label: "Stamp charges",
        values: [
          "0.002% or ₹200/crore on buy side",
          "0.003% or ₹300/crore on buy side",
        ],
      },
    ],
  },
};


export const valueAddedServices = {
  title: "Charges for optional value added services",

  headers: [
    "Service",
    "Billing Frequency",
    "Charges",
  ],

  rows: [
    {
      cols: [
        "Tickertape",
        "Monthly / Quarterly / Annual",
        "Free: 0 | Pro: 249/699/2399",
      ],
    },
    {
      cols: [
        "Smallcase",
        "Per transaction",
        "Buy & Invest More: 100 | SIP: 10",
      ],
    },
    {
      cols: [
        "Kite Connect",
        "Monthly",
        "Connect: 500 | Personal: Free",
      ],
    },
  ],
};


export const amcCharges = {
  title: "Demat AMC (Annual Maintenance Charge)",

  note: "Free for first year*",

  description: "From second year onwards, for BSDA accounts:",

  headers: ["Value of holdings", "AMC"],

  rows: [
    {
      cols: ["Up to ₹4 lakh", "FREE"],
    },
    {
      cols: ["₹4 lakh – ₹10 lakh", "₹100 per year + 18% GST, charged quarterly"],
    },
    {
      cols: ["Above ₹10 lakh", "₹300 per year + 18% GST, charged quarterly"],
    },
  ],

  footer: [
    "For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.",
    "*Resident individual accounts only.",
  ],
};



export const accountOpening = {
  title: "Charges for account opening",

  headers: ["Type of account", "Charges"],

  rows: [
    {
      cols: ["Individual account", "FREE"],
    },
    {
      cols: ["Minor account", "FREE"],
    },
    {
      cols: ["NRI account", "₹500"],
    },
    {
      cols: ["HUF account", "FREE (online) / ₹500 (offline)"],
    },
    {
      cols: ["Partnership, LLP, and Corporate accounts (offline only)", "₹500"],
    },
  ],
};


export const chargesExplained = [
  {
    title: "Securities/Commodities transaction tax",
    description: [
      "Tax charged by the government when transacting on the exchanges.",
      "Charged as above on both buy and sell sides when trading equity delivery.",
      "Charged only on selling side when trading intraday or in F&O.",
      "When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge.",
    ],
  },

  {
    title: "Transaction/Turnover Charges",
    description: [
      "Charged by exchanges (NSE, BSE, MCX) for executing trades.",
      "Rates vary depending on the exchange and trading segment.",
    ],
  },

  {
    title: "Call & trade",
    description: [
      "Additional charge of ₹50 per order for orders placed through a dealer instead of using Kite.",
    ],
  },

  {
    title: "Stamp charges",
    description: [
      "Charged by state governments on the buy side of transactions.",
      "Collected by exchanges and deposited with the respective state governments.",
    ],
  },

  {
    title: "NRI brokerage charges",
    description: [
      "Different brokerage applies for NRI trading accounts.",
      "Applicable brokerage depends on account type and trading segment.",
    ],
  },

  {
    title: "Account with debit balance",
    description: [
      "If the account has a debit balance, interest may be charged until the dues are cleared.",
    ],
  },

  {
    title: "Charges for Investor's Protection Fund (IPF) by NSE",
    description: [
      "Collected by NSE to contribute towards the Investor Protection Fund.",
      "Applicable across various trading segments.",
    ],
  },

  {
    title: "Margin Trading Facility (MTF)",
    description: [
      "MTF interest is charged only on the funded amount.",
      "Interest is applied daily until the funded amount is repaid.",
    ],
  },

  {
    title: "GST",
    description: [
      "18% GST is charged on brokerage, SEBI charges, and transaction charges.",
    ],
  },

  {
    title: "SEBI Charges",
    description: [
      "Regulatory charges collected by SEBI on every executed trade.",
    ],
  },

  {
    title: "DP (Depository Participant) charges",
    description: [
      "Charged when shares are debited from the Demat account during sell transactions.",
      "Applicable once per ISIN per day.",
    ],
  },

  {
    title: "Pledging charges",
    description: [
      "₹30 + GST per pledge request per ISIN.",
    ],
  },

  {
    title: "AMC (Account Maintenance Charges)",
    description: [
      "Free for the first year for resident individual accounts.",
      "Standard AMC applies from the second year onwards depending on account type.",
    ],
  },

  {
    title: "Corporate action order charges",
    description: [
      "Applicable when participating in corporate action requests through Console.",
    ],
  },

  {
    title: "Off-market transfer charges",
    description: [
      "₹25 per transaction.",
    ],
  },

  {
    title: "Physical CMR request",
    description: [
      "Physical Client Master Report requests are chargeable.",
    ],
  },

  {
    title: "Payment gateway charges",
    description: [
      "Applicable when adding funds using supported payment gateways.",
    ],
  },

  {
    title: "Delayed Payment Charges",
    description: [
      "Interest may be levied on outstanding debit balances.",
    ],
  },

  {
    title: "Trading using 3-in-1 account with block functionality",
    description: [
      "Delivery: ₹15 brokerage per executed order.",
      "Intraday: 0.05% or ₹15 per executed order.",
    ],
  },
];