import CertificationsTopLeft from "./CertificationsTopLeft";
import CertificationsTopMiddle from "./CertificationsTopMiddle";
import CertificationsTopRight from "./CertificationsTopRight";

const CertificationsTop = () => {
  return (
    <section
      aria-label="Top Certifications Section"
      className="flex flex-wrap lg:flex-nowrap gap-6 items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <CertificationsTopLeft />
      <CertificationsTopMiddle />
      <CertificationsTopRight />
    </section>
  );
};

export default CertificationsTop;
