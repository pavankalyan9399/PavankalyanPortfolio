const SingleCertification = ({ certification }) => {
  return (
    <a
      href={certification.link}
      target="_blank"
      rel="noopener noreferrer"
      className="certification-card flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white"
    >
      {/* Badge Image with Highlight Effect */}
      <div className="certification-badge mb-4">
        <img
          src={certification.badge}
          alt={`${certification.provider} Badge`}
          className="w-20 h-20 sm:w-60 sm:h-40 object-contain"
        />
      </div>

    </a>
  );
};

export default SingleCertification;
