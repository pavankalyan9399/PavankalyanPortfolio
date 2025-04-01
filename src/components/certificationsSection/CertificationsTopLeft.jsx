import CertificationInfo from "./CertificationInfo";

const certifications = [
  { title: "Enterprise Application Developer", provider: "Red Hat (2026)" },
  { title: "AI Fundamentals", provider: "Microsoft Azure AI (2026)" },
  { title: "Data Science Professional", provider: "Oracle Cloud (2025)" },
  { title: "AI Associate", provider: "Salesforce AI (2028)" },
  { title: "RPA Professional", provider: "Automation Anywhere (2023)" },
];

const CertificationsTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
      <p className="text-indigo-600 font-bold uppercase text-2xl md:text-3xl text-center">
        Certifications & Achievements
      </p>

      {/* Certification Stats */}
      <div className="flex justify-center items-center gap-4">
        <CertificationInfo title="6+" provider="Certifications Earned" />
        <p className="font-bold text-4xl text-indigo-600">-</p>
        <CertificationInfo title="10+" provider="Technologies Mastered" />
      </div>

      {/* Certifications Description */}
      <p className="text-center text-gray-600">
        Certified in{" "}
        <span className="font-bold text-indigo-600">
          AI, Cloud Computing, and Enterprise Application Development
        </span>
        , showcasing expertise in modern technologies.
      </p>

      {/* Certifications List */}
      <div className="flex flex-col gap-4">
        {certifications.map((cert, index) => (
          <CertificationInfo key={index} title={cert.title} provider={cert.provider} />
        ))}
      </div>
    </div>
  );
};

export default CertificationsTopLeft;
