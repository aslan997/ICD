const ActionButtons = () => {
  return (
    <div className="flex justify-between mt-8">
      <button className="bg-gray-800 text-white text-14 py-2 px-4 rounded-md shadow-button hover:bg-gray-700">
        Save and Exit
      </button>
      <button className="bg-gold text-white text-14 py-2 px-4 rounded shadow-button">
        Submit
      </button>
    </div>
  );
};

export default ActionButtons;
