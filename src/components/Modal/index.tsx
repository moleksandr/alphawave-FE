export const Modal = ({ isOpen, onClose, setIsModalOpen, children }: any) => {

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="fixed inset-0 transition-opacity">
            <div
              className="absolute inset-0 bg-black opacity-75"
              onClick={closeModal}
            ></div>
          </div>
          <div className="relative z-50 bg-white w-2/5 rounded-xl shadow-lg">
            {children}
          </div>
        </div>
      )}
    </>
  );
};
