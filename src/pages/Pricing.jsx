import React from 'react'
import { Check, Star, ArrowRight } from 'lucide-react'
import './Pricing.css'

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "New Immigration Practice",
      description: "Perfect for new immigration consultants/lawyers starting their YouTube journey",
      price: "$1,297",
      period: "/month",
      popular: false,
      features: [
        "Immigration Channel Setup",
        "Competitor Analysis (Immigration Niche)",
        "Visa Content Strategy Development",
        "Post Production (4 immigration videos/month)",
        "Immigration-focused Thumbnail Design",
        "Immigration SEO Optimization",
        "Client Lead Generation System",
        "Monthly Immigration Marketing Calls"
      ],
      process: [
        "Immigration practice consultation",
        "Country-specific market research",
        "Immigration channel branding",
        "Visa content calendar creation",
        "Immigration video production",
        "Client conversion tracking"
      ]
    },
    {
      id: 2,
      name: "Growing Immigration Business",
      description: "Ideal for established immigration professionals wanting to scale their practice",
      price: "$1,997",
      period: "/month",
      popular: true,
      features: [
        "Immigration Channel Audit & Optimization",
        "Advanced Immigration Content Strategy",
        "Post Production (8 immigration videos/month)",
        "Premium Immigration Thumbnail Design",
        "Multi-Country SEO Optimization",
        "Advanced Client Acquisition System",
        "Immigration ROI Tracking & Analytics",
        "Bi-weekly Immigration Strategy Sessions",
        "Priority Immigration Expert Support"
      ],
      process: [
        "Comprehensive immigration channel audit",
        "Multi-country strategy optimization",
        "Immigration content quality enhancement",
        "Client traffic generation tactics",
        "Immigration conversion optimization",
        "Practice scaling strategies"
      ]
    },
    {
      id: 3,
      name: "High Traffic, Low Conversions",
      description: "For immigration professionals with good views but poor client conversion rates",
      price: "$2,997",
      period: "/month",
      popular: false,
      features: [
        "Immigration Conversion Rate Optimization",
        "Client Lead Generation Strategy",
        "Immigration Sales Funnel Integration",
        "Post Production (12 immigration videos/month)",
        "Advanced Immigration Analytics Setup",
        "Consultation Booking Optimization",
        "Immigration Email Marketing Integration",
        "Weekly Immigration Strategy Sessions",
        "Direct Access to Immigration Marketing Experts"
      ],
      process: [
        "Immigration conversion audit & analysis",
        "Consultation lead magnet development",
        "Immigration sales funnel creation",
        "Content optimization for client conversions",
        "Immigration lead tracking & nurturing",
        "Practice revenue optimization"
      ]
    }
  ]

  return (
    <div className="pricing-page">
      <div className="pricing-hero">
        <div className="container">
          <div className="pricing-header">
            <h1>Immigration Marketing <span className="gradient-text">Plans</span></h1>
            <p>Select the perfect plan based on your immigration practice stage. Every plan includes our proven Immigration Content to Client System for USA, Canada, Australia & more.</p>
          </div>
        </div>
      </div>

      <div className="pricing-content">
        <div className="container">
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                
                <div className="pricing-header-card">
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <div className="pricing-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>

                <div className="pricing-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <Check size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pricing-process">
                  <h4>Our Process:</h4>
                  <ol>
                    {plan.process.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>

                <button className="pricing-cta">
                  Choose Plan
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="pricing-guarantee">
            <div className="guarantee-card">
              <div className="guarantee-icon">
                <Star size={32} />
              </div>
              <h3>30-Day Money Back Guarantee</h3>
              <p>We're so confident in our system that if you don't see measurable improvement in your YouTube performance within 30 days, we'll refund your investment completely.</p>
            </div>
          </div>

          <div className="pricing-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>How quickly will I see results?</h4>
                <p>Most clients see initial improvements within 2-4 weeks, with significant growth typically occurring within 60-90 days.</p>
              </div>
              <div className="faq-item">
                <h4>Do you work with any niche?</h4>
                <p>We specialize in B2B, Immigration, E-commerce, and Crypto/Web3 niches, but our system works for most business-focused channels.</p>
              </div>
              <div className="faq-item">
                <h4>Can I upgrade or downgrade my plan?</h4>
                <p>Yes, you can change your plan at any time. We'll adjust the billing accordingly for your next cycle.</p>
              </div>
              <div className="faq-item">
                <h4>What if I need more videos per month?</h4>
                <p>We offer additional video packages that can be added to any plan. Contact us for custom pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
