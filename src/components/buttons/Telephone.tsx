const Telephone = () => {
  const phoneNumber = '+7 (977) 576-76-09';

  return (
    <a
      href={`tel:${phoneNumber.replace(/([\s+()-])/g, '')}`}
      className="px-4 py-2 bg-yaring-orange text-white rounded-full max-w-fit">
      {phoneNumber}
    </a>
  );
};

export default Telephone;
