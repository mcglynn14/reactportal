import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav'; // Import the Nav component
import Hero from '../../components/Hero'; // Import the Hero component
import Gcwhicon from '../../components/Gcwhicon'; // Import the Gcwhicon component
import Footer from '../../components/Footer'; // Import the Footer component
import profileImg from '../../../public/assets/img/profileimg.webp'; // Import default profile image
import './profile.css'; // Import profile page styles
import Userinformation from '../../components/Userinformation'; // Import the Userinformation component

/**
 * Represents the user profile page.
 */
const Profile = () => {
  const user = Userinformation(); // Get user information from the Userinformation component
  const [dob, setDob] = useState(''); // State for date of birth
  const [fullName, setFullName] = useState(''); // State for full name
  const [parentName, setParentName] = useState(''); // State for parent name
  const [departmentName, setDepartmentName] = useState(''); // State for department name
  const [Notes , setNotes] = useState(''); // State for notes
  const [profileImage, setProfileImage] = useState(null); // State for profile image
  const [isLoading, setIsLoading] = useState(false); // State for loading status

  // Effect to set user data when the component mounts or user data changes
  useEffect(() => {
    setIsLoading(true); // Set loading state to true

    if (user) {
      setDob(formatDate(user.dob) || ''); // Format and set date of birth
      setFullName(`${user.forename || ''} ${user.surname || ''}`); // Concatenate and set full name
      setParentName(user.guardian_name || ''); // Set parent name
      setDepartmentName(user.department_id.name || ''); // Set department name
      setNotes(user.notes || ''); // Set notes
    }

    setIsLoading(false); // Set loading state to false
  }, [user]);

  /**
   * Formats the date to "yyyy-MM-dd" format.
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
   * @param {Event} event - The file input change event for the profile picture upload.
   */
  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    setProfileImage(file); // Set the profile image state
  };

  /**
   * Handles the save profile action.
   */
  const handleSaveProfile = async () => {
    // Implement saving logic here (e.g., send data to backend)
    try {
      const formData = new FormData();
      formData.append('profileImage', profileImage); // Append profile image
      formData.append('dob', dob); // Append date of birth
      formData.append('fullName', fullName); // Append full name

      // Make a POST request to save the changes
      const response = await fetch('/api/saveProfile', {
        method: 'POST',
        body: formData,
      });

      // Handle response (e.g., show success message)
      console.log('Profile changes saved successfully!');
    } catch (error) {
      console.error('Error saving profile changes:', error); // Handle errors
    }
  };

  return (
    <>
      <header>
        <Nav /> {/* Render the Nav component */}
      </header>
      <Hero title="Profile" /> {/* Render the Hero component with a title */}
      <section className="profile-section">
        <div className="img-div">
          <img
            src={profileImage ? URL.createObjectURL(profileImage) : profileImg} // Display profile image or default image
            alt="Profile"
            className="profile-img"
          />
          <label htmlFor="profilePicture" className="uploadprofile-btn btn">
            Upload Profile Picture
            <input
              type="file"
              accept="image/*"
              id="profilePicture"
              onChange={handleProfilePictureUpload} // Handle profile picture upload
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
            value={dob} // Bind date of birth state
            onChange={(e) => setDob(e.target.value)} // Handle date of birth change
            disabled={isLoading} // Disable input if loading
          />
          <label htmlFor="fullName" className="username-label">Child Full Name</label>
          <input
            className="login-input mb-12 border border-black py-2 px-3"
            type="text"
            id="fullName"
            value={fullName} // Bind full name state
            onChange={(e) => setFullName(e.target.value)} // Handle full name change
            disabled={isLoading} // Disable input if loading
          />
          <label htmlFor="parentName" className="username-label">Parent Name</label>
          <input
            className="login-input mb-12 border border-black py-2 px-3"
            type="text"
            id="parentName"
            value={parentName} // Bind parent name state
            onChange={(e) => setParentName(e.target.value)} // Handle parent name change
            disabled={isLoading} // Disable input if loading
          />
          <label htmlFor="departmentName" className="username-label">Department</label>
          <input
            className="login-input mb-12 border border-black py-2 px-3"
            type="text"
            id="departmentName"
            value={departmentName} // Bind department name state
            onChange={(e) => setDepartmentName(e.target.value)} // Handle department name change
            disabled={isLoading} // Disable input if loading
          />
          <label htmlFor="notes" className="username-label">Notes</label>
          <input
            className="login-input mb-12 border border-black py-2 px-3"
            type="text"
            id="notes"
            value={Notes} // Bind notes state
            onChange={(e) => setNotes(e.target.value)} // Handle notes change
            disabled={isLoading} // Disable input if loading
          />
          <button className="btn save-profile-btn" onClick={handleSaveProfile} disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Save'} {/* Show 'Saving...' if loading, else show 'Save' */}
          </button>
        </div>
      </section>
      <Gcwhicon /> {/* Render the Gcwhicon component */}
      <Footer /> {/* Render the Footer component */}
    </>
  );
};

export default Profile;
