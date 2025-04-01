const CertificationInfo = ({ title, provider }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <p className="font-bold text-2xl text-white mb-2">{title}</p>
      <p className="font-medium text-lg text-gray-400 uppercase">
        {provider}
      </p>
    </div>
  );
};

export default CertificationInfo;
