const PagePagination = () => {
  return (
    <>
      <div className="block absolute bottom-4 left-5 transform -translate-x-1/2 text-gray-600 text-sm pulse-animation">
        <p>&lt;&lt;&lt;</p>
      </div>
      <div className="block absolute bottom-4 right-5 transform -translate-x-1/2 text-gray-600 text-sm pulse-animation">
        <p>&gt;&gt;&gt;</p>
      </div>
    </>
  );
};

export default PagePagination;
