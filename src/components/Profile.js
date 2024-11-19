import React, { useState } from 'react';

const Profile = () => {
  const [email, setEmail] = useState('Zibekeonwabe@gmail.com');
  const [password, setPassword] = useState('********');
  const [profileImage, setProfileImage] = useState('/user.png');
  const [language, setLanguage] = useState('IsXhosa');
  const [customLanguage, setCustomLanguage] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    if (e.target.value !== 'Other') {
      setCustomLanguage('');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white shadow rounded-lg p-8">
        <div className="flex items-center mb-8">
          <img
            className="w-32 h-32 rounded-full mr-8"
            src={profileImage}
            alt="User Profile"
          />
          <div>
            <h1 className="text-3xl font-bold">Zibeke Onwabe</h1>
            <p className="text-sm text-gray-600">{email} - Junior React Developer</p>
            <p className="text-sm text-gray-600 mt-2 hidden">
              Avatar by <a href="https://gravatar.com" className="text-blue-500">gravatar.com</a>. Or upload your own...
            </p>
            <label className="block mt-4">
              <span className="sr-only">Upload Image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <button className="bg-black text-white px-4 py-2 rounded">
                Upload Image
              </button>
            </label>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-semibold mb-4">Account</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                value="Zibeke Onwabe"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Full name</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                value="Zibeke Onwabe"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                value="Junior React Developer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Language</label>
              <select
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="IsXhosa">IsXhosa</option>
                <option value="IsZulu">IsZulu</option>
                <option value="Afrikaans">Afrikaans</option>
                <option value="English">English</option>
                <option value="Sesotho">Sesotho</option>
                <option value="Setswana">Setswana</option>
                <option value="Sepedi">Sepedi</option>
                <option value="IsiNdebele">IsiNdebele</option>
                <option value="Tshivenda">Tshivenda</option>
                <option value="Xitsonga">Xitsonga</option>
                <option value="Siswati">Siswati</option>
                <option value="Other">Other</option>
              </select>
              {language === 'Other' && (
                <input
                  type="text"
                  className="mt-4 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Please specify your language"
                  value={customLanguage}
                  onChange={(e) => setCustomLanguage(e.target.value)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;