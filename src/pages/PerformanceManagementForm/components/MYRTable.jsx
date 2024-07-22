import React, { useRef, useState, useEffect } from "react";

const MYRTable = () => {
  const contentRef = useRef(null);
  const [minHeight, setMinHeight] = useState(0);

  // Update minimum height of table as per parent td element
  const updateMinHeight = () => {
    if (contentRef?.current) {
      setMinHeight(contentRef?.current?.scrollHeight);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      updateMinHeight();
    };

    handleResize(); // Initial calculation
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <td className="align-top p-0" ref={contentRef}>
      <table
        className="min-w-full"
        style={{
          minHeight: `${minHeight}px`,
        }}
      >
        <thead>
          <tr>
            <th className="bg-frostee p-2 text-left text-14 font-head border border-c1efc8">
              AA
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 text-14 border border-c1efc8">
              ed do eiusmod tempor incididunt ut labore et
            </td>
          </tr>
          <tr>
            <td className="bg-green-200 p-2 text-left text-14 font-head border border-c1efc8">
              EMP Comments
            </td>
          </tr>
          <tr>
            <td className="p-2 text-14 border border-c1efc8">
              ed do eiusmod tempor incididunt ut labore et
            </td>
          </tr>
          <tr>
            <td className="bg-green-200 p-2 text-left text-14 font-head border border-c1efc8">
              LM Comments
            </td>
          </tr>
          <tr>
            <td className="p-2 text-14 border border-c1efc8">
              ed do eiusmod tempor incididunt ut labore et
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default MYRTable;