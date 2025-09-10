import React from "react";
import Join from "../../JoinNow/Join";

function Pricing() {

    const plans = [
        {
            title: "Beginner",
            price: "$29 / month",
            features: [
            "Access to group runs",
            "Weekly training plan",
            "Email support",
            ],
        },
        {
            title: "Advanced",
            price: "$59 / month",
            features: [
            "Everything in Beginner",
            "Personalized training plan",
            "Nutrition guidance",
            "Monthly progress review",
            ],
            highlight: true, // for featured plan
        },
        {
            title: "Pro",
            price: "$99 / month",
            features: [
            "Everything in Advanced",
            "1-on-1 coaching",
            "Race day preparation",
            "Recovery & injury support",
            ],
        },
    ]

  return (
    <>
        <div id="priceHead">
            <h1>Pricing plans</h1>
            <p>A holistic approach to health and well-being entails embracing a healthy <br /> lifestyle that extends beyond mere participation in routine physical exercise.</p>
        </div>

        <div className="pricing-page">
            <div className="pricing-header">
            <h1>Membership Plans</h1>
            <p>Choose a plan that fits your running goals.</p>
            </div>

            <div className="pricing-grid">
            {plans.map((plan, index) => (
                <div
                key={index}
                className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
                >
                <h2>{plan.title}</h2>
                <p className="price">{plan.price}</p>
                <ul>
                    {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                    ))}
                </ul>
                <button className="btn">Get Started</button>
                </div>
            ))}
            </div>
        </div>

        <div id="prspartA" className='max-w-6xl flex justify-between items-center'>
            <div id='prstext' className=''>Our commitment to excellence has led to these impressive figures that showcase our dedication, hard work, and the value we bring to our customers.</div>
            <div id='prcounts' className=' flex justify-end items-center '>
                <div id='prfcount' className='flex flex-col items-start flex-shrink'>
                    <h1>785+</h1>
                    <h4>Kilometers Run</h4>
                </div>
                <div id='prfcount' className='flex flex-col items-center flex-shrink'>
                    <h1>145+</h1>
                    <h4>Location</h4>
                </div>
                <div id='prfcount' className='flex flex-col items-start flex-shrink'>
                    <h1>3,5k</h1>
                    <h4>Runners</h4>
                </div>
            </div>
        </div>

        <Join />
    </>
  );
}

export default Pricing;
