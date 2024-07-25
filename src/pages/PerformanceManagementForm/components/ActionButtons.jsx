function ActionButtons() {
  return (
    <div className="flex justify-between mt-8">
      <button className="bg-gray-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-700">
        Save and Exit
      </button>
      <button className="bg-yellow-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-yellow-500">
        Submit
      </button>
    </div>
  );
}

export default ActionButtons;
