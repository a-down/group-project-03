


import React, { useState } from 'react';

export default function MyComponent() {
  // Defines state variables for Signup form
  const [signupData, setSignupData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  // Defines state variables for Login form
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  // Defines state variables for Add Post form
  const [postData, setPostData] = useState({
    image1: '',
    image2: '',
    code1: '',
    code2: '',
    text: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to a server
  };

  // Event handler for Signup form input changes
  const handleSignupInputChange = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  // Event handler for Login form input changes
  const handleLoginInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // Event handler for Add Post form input changes
  const handlePostInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  return (
<div>
   


<div className="flex h-screen">
      {/* Sidebar */}
      <div className="flex flex-col items-center w-16 pb-4 border-r border-gray-300">
        {/* Sidebar items */}
        <a className="sidebar-item" href="#">
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* Icon */}
          </svg>
        </a>
        {/* More sidebar items */}
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Top Header */}
        <div className="flex items-center h-16 px-8 border-b border-gray-300">
          <h1 className="text-lg font-medium">Page Title</h1>
          <button className="action-button">
            Action 1
          </button>
          <button className="action-button">
            Action 2
          </button>
          {/* More action buttons */}
        </div>

        {/* Content */}
        <div className="flex-grow p-6 overflow-auto bg-gray-200">
          <div className="grid grid-cols-3 gap-6">
            {/* Grid items */}
            <div className="col-span-1 grid-item">
              {/* Grid item content */}
              {/* Your content here */}
              <div className="bg-white shadow-lg rounded-lg p-4">
                <form>
                  <h2 className="text-red-400">Signup Form</h2>
                  <div>
                    <label>Username:</label>
                    <input
                      type="text"
                      name="username"
                      value={signupData.username}
                      onChange={handleSignupInputChange}
                    />
                  </div>
                  <div>
                    <label>Password:</label>
                    <input
                      type="password"
                      name="password"
                      value={signupData.password}
                      onChange={handleSignupInputChange}
                    />
                  </div>
                  <div>
                    <label>Confirm Password:</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={signupData.confirmPassword}
                      onChange={handleSignupInputChange}
                    />
                  </div>
                  <button>Signup</button>
                </form>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
                <form>
                  <h2>Login Form</h2>
                  <div>
                    <label>Username:</label>
                    <input
                      type="text"
                      name="username"
                      value={loginData.username}
                      onChange={handleLoginInputChange}
                    />
                  </div>
                  <div>
                    <label>Password:</label>
                    <input
                      type="password"
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginInputChange}
                    />
                  </div>
                  <button>Login</button>
                </form>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
                <form onSubmit={handleSubmit}>
                  <h2>Add Post</h2>
                  <div>
                    <label>Image 1:</label>
                    <input
                      type="file"
                      accept="image/*"
                      name="image1"
                      value={postData.image1}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label>Image 2:</label>
                    <input
                      type="file"
                      accept="image/*"
                      name="image2"
                      value={postData.image2}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label>Code 1:</label>
                    <input
                      type="text"
                      name="code1"
                      value={postData.code1}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label>Code 2:</label>
                    <input
                      type="text"
                      name="code2"
                      value={postData.code2}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label>Text:</label>
                    <input
                      type="text"
                      name="text"
                      value={postData.text}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button type="submit">Add Post</button>
                </form>
              </div>
            </div>
            {/* More grid items */}
          </div>
        </div>
      </div>
    </div>



</div>

    
  );
}