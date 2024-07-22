import React from "react";

const LoginFooter = () => {
  return (
    <div className="text-center mt-6">
      <p className="text-gray-500 text-14">
        Don't have an account?{" "}
        <a href="pages-register.html" className="text-gold hover:underline">
          Signup Now
        </a>
      </p>
    </div>
  );
};

export default LoginFooter;
