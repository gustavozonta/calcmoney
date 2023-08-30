const conversionRates = {
  usd: {
    eur: 0.91,
    gbp: 0.79,
    jpy: 145.86,
    brl: 4.86,
    chf: 0.87,
  },
  eur: {
    usd: 1.08,
    gbp: 0.86,
    jpy: 158.55,
    brl: 5.28,
    chf: 0.95,
    
  },
  gbp: {
    usd: 1.26,
    eur: 1.16,
    jpy: 185.25,
    brl: 6.14,
    chf: 1.11,
  },
  jpy: {
    usd: 0.19,
    eur: 0.0068,
    gbp: 0.0054,
    brl: 0.0333,
    chf: 0.0060,
  },
  brl: {
    usd: 0.20,
    eur: 0.18,
    gbp: 0.16,
    jpy: 30,
    chf: 0.18,
  },
  chf: {
    usd: 1.13,
    eur: 1.04,
    gbp: 0.90,
    jpy: 165.98,
    brl: 5.53,

  }

}
const convertBtn = document.getElementById("convertBtn")
convertBtn.addEventListener("click", convertCurrency)

function convertCurrency() {
  const sourceAmount = parseFloat(document.getElementById("sourceAmount").value)
  const sourceCurrency = document.getElementById("sourceCurrency").value
  const targetCurrency = document.getElementById("targetCurrency").value

  if (
    conversionRates[sourceCurrency] &&
    conversionRates[sourceCurrency][targetCurrency]
  ) {
    const conversionRate = conversionRates[sourceCurrency][targetCurrency]
    const targetAmount = sourceAmount * conversionRate
    document.getElementById("targetAmount").value = targetAmount.toFixed(3)
  } else {
    document.getElementById("targetAmount").value = "Invalid conversion"
  }
}
