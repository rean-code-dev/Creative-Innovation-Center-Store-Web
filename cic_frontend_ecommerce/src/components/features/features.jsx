import React from "react";
import { FaShieldAlt, FaTruck, FaMoneyBillWave, FaLock } from "react-icons/fa"; // Icons for trust features

const Features = () => {
  // Features tailored for an electronics/robotics company to build trust
  const trustFeatures = [
    {
      name: "Certified Quality",
      description: "All products meet industry standards for electronics and robotics.",
      icon: <FaShieldAlt className="text-white text-2xl mr-4" />, // Shield icon for quality
    },
    {
      name: "Fast & Reliable Shipping",
      description: "Get your robotics kits delivered securely and on time.",
      icon: <FaTruck className="text-white text-2xl mr-4" />, // Truck icon for shipping
    },
    {
      name: "30-Day Money-Back Guarantee",
      description: "Return any product within 30 days for a full refund.",
      icon: <FaMoneyBillWave className="text-white text-2xl mr-4" />, // Money bill icon for guarantee
    },
    {
      name: "Secure Payment",
      description: "Shop with confidence using encrypted payment methods.",
      icon: <FaLock className="text-white text-2xl mr-4" />, // Lock icon for security
    },
  ];

  return (
    <section
      className="grid grid-cols-4 gap-4 w-full px-20 h-40 pt-2"
      style={{ backgroundColor: "#ef4444" }} // Matching the red theme from your navbar
    >
      {trustFeatures.map((feature, index) => (
        <div key={index} className="flex items-center justify-center flex-col text-center">
          <div className="flex items-center justify-center mb-2">
            {feature.icon}
            <h4 className="text-xl text-white font-medium">{feature.name}</h4>
          </div>
          <p className="text-sm text-white opacity-80">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;