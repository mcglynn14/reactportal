import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Gcwhicon from '../../components/Gcwhicon';
import Footer from '../../components/Footer';
import profileImg from '../../../public/assets/img/profileimg.webp'; // Import default profile image
import './profile.css';
import Userinformation from '../../components/Userinformation'; // Import the Userinformation component

/**
 * Represents the user profile page.
 *
 */
const Profile = () => {
  const user = Userinformation(); // Get user information from the Userinformation component
  const [dob, setDob] = useState('');
  const [fullName, setFullName] = useState('');
  const [parentName, setParentName] = useState(''); // Add parent name state
  const [departmentName, setDepartmentName] = useState(''); // Add department name state
  const [Notes , setNotes] = useState(''); // Add notes state
  const [profileImage, setProfileImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    if (user) {
      setDob(formatDate(user.dob) || ''); // Format the date here
      setFullName(`${user.forename || ''} ${user.surname || ''}`); // Concatenate forename and surname
      setParentName(user.guardian_name || ''); // Set parent name
      setDepartmentName(user.department_id.name || ''); // Set department name
      setNotes(user.notes || ''); // Set notes
    }

    setIsLoading(false);
  }, [user]);

  /**
   * Formats the date to "yyyy-MM-dd" format.
   * @ - The date string to be formatted.
   *  The formatted date string.
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  /**
   * Handles the profile picture upload event.
   * The file input change event. for the profile picture upload.
   */
  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);
  };

  /**
   * Handles the save profile action.
   */
  const handleSaveProfile = async () => {
    // Implement saving logic here (e.g., send data to backend)
    try {
      const formData = new FormData();
      formData.append('profileImage', profileImage);
      formData.append('dob', dob);
      formData.append('fullName', fullName);

      // Make a POST request to save the changes
      const response = await fetch('/api/saveProfile', {
        method: 'POST',
        body: formData,
      });

      // Handle response (e.g., show success message)
      console.log('Profile changes saved successfully!');
    } catch (error) {
      console.error('Error saving profile changes:', error);
    }
  };

  return (
    <>
      <header>
        <Nav />
      </header>
      <Hero title="Profile" />
      <section className="profile-section">
        <div className="img-div">
          <img
            src={profileImage ? URL.createObjectURL(profileImage) : profileImg}
            alt="Profile"
            className="profile-img"
          />
          <label htmlFor="profilePicture" className="uploadprofile-btn btn">
            Upload Profile Picture
            <input
              type="file"
              accept="image/*"
              id="profilePicture"
              onChange={handleProfilePictureUpload}
              style={{ display: 'none' }}
            />
          </label>
        </div>
        <div className="profile-input">
          <label htmlFor="dob" className="username-label">Date of Birth</label>
          <input
            className="login-input mb-12 border border-black py-2 px-3"
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            disabled={isLoading}
          />
          <label htmlFor="fullName" className="username-label">Child Full Name</label>
          <input
            className="login-input mb-12 border border-black py-2 px-3"
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isLoading}
          />
          <label htmlFor="fullName" className="username-label">Parent name</label>
          <input
            className="login-input mb-12 border border-black py-2 px-3"
            type="text"
            id="fullName"
            value={parentName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isLoading}
          />
          <label htmlFor="fullName" className="username-label">Department</label>
          <input
            className="login-input mb-12 border border-black py-2 px-3"
            type="text"
            id="fullName"
            value={departmentName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isLoading}
          />
           <label htmlFor="fullName" className="username-label">here for notes</label>
           <label htmlFor="fullName" className="username-label">{Notes}</label>
          <button className="btn save-profile-btn" onClick={handleSaveProfile} disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </section>
      <Gcwhicon />
      <Footer />
    </>
  );
};

export default Profile;
