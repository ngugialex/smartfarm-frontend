import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { toast } from 'react-toastify';

const Profile = () => {
  const [profile, setProfile] = useState({
    username: 'JohnDoe', // Dummy data
    email: 'john.doe@example.com' // Dummy data
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3030/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        toast.error('Failed to fetch profile');
        setLoading(false); // Ensure loading state is false if API call fails
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <div className="">
        <Navbar />
        <Sidebar />
      </div>
      
      <div className="ml-80 -mt-[610px] p-4">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p className="mb-2">Username: {profile.username}</p>
            <p className="mb-2">Email: {profile.email}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
