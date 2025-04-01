import Image from "next/image";

const CertificationsTopMiddle = () => {
  return (
    <div className="w-full max-w-md mx-auto lg:max-w-none lg:w-[35%]">
      <Image
        src="/images/certifications-image.png"
        alt="My Certifications"
        width={500}  // Adjust as needed
        height={300} // Adjust as needed
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default CertificationsTopMiddle;
