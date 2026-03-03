import { useState } from "react";
import { motion } from "framer-motion";
import "./PricingPage.css";

const plans = [
  {
    title: "Question Paper Access",
    description: "Unlock full unrestricted access to the question paper generator",
    originalPrice: { monthly: 118, annual: 1188 },
    price: { monthly: 99, annual: 950 },
    features: [
      "Unlimited question paper generation",
      "Unlimited practice questions",
    ],
  },
  {
    title: "KEAM Mock Test Access",
    description: "Unlock KEAM mock tests",
    originalPrice: { monthly: 358, annual: 3588 },
    price: { monthly: 299, annual: 2870 },
    features: [
      "Full access to KEAM mock tests",
      "Unlimited attempts",
      "Unlimited practice questions",
    ],
  },
  {
    title: "JEE Mock Test Access",
    description: "Unlock JEE mock tests",
    originalPrice: { monthly: 478, annual: 4788 },
    price: { monthly: 399, annual: 3830 },
    features: [
      "Full access to JEE mock tests",
      "Unlimited attempts",
      "Unlimited practice questions",
    ],
  },
  {
    title: "NEET Mock Test Access",
    description: "Unlock NEET mock tests",
    originalPrice: { monthly: 478, annual: 4788 },
    price: { monthly: 399, annual: 3830 },
    features: [
      "Full access to NEET mock tests",
      "Unlimited attempts",
      "Unlimited practice questions",
    ],
  },
  {
    title: "Premium (All Access)",
    description: "Get unlimited access to all services",
    popular: true,
    originalPrice: { monthly: 958, annual: 9588 },
    price: { monthly: 799, annual: 7670 },
    features: [
      "Unlimited question paper generation",
      "Unlimited mock tests for KEAM, JEE & NEET",
      "Unlimited practice questions",
      "Priority support",
    ],
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1>Choose Your Plan</h1>
        <p>Unlock premium features tailored for students & achievers.</p>

        <div className="billing-toggle">
          <button
            className={billing === "monthly" ? "active" : ""}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={billing === "annual" ? "active" : ""}
            onClick={() => setBilling("annual")}
          >
            Annual (Save More)
          </button>
        </div>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <motion.div
                key={index}
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                >
                {plan.popular && <span className="badge">Popular</span>}

                <h3>{plan.title}</h3>

                {/* Old Price */}
                <div className="old-price">
                    ₹{plan.originalPrice[billing]}
                </div>

                {/* New Price */}
                <div className="price">
                    ₹{plan.price[billing]}
                    <span>
                    {billing === "monthly" ? "/mo" : "/year"}
                    </span>
                </div>

                <div className="save-text">Save 20%</div>

                <p className="description">{plan.description}</p>

                <ul>
                    {plan.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                    ))}
                </ul>

                <button className="choose-btn">
                    Choose {plan.title}
                </button>
        </motion.div>
        ))}
      </div>
    </div>
  );
}