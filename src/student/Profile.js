// src/student/Profile.js
import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { getStudentProfile } from "./studentAPI";
import { onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { toast } from "react-toastify";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = await getStudentProfile(user.uid);
        if (data) {
          setProfile(data);
          setName(data.name);
        } else {
          console.error("❌ Profile not found in Firestore");
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleUpdate = async () => {
    try {
      const docRef = doc(db, "students", profile.uid);
      await updateDoc(docRef, {
        name: name,
      });
      toast.success("✅ Profile updated!");
      setProfile({ ...profile, name });
      setEditMode(false);
    } catch (err) {
      toast.error("❌ Update failed");
      console.error(err);
    }
  };

  if (loading) return <div className="profile-container">🔄 Loading profile...</div>;
  if (!profile) return <div className="profile-container">❌ Profile not found.</div>;

  return (
    <div className="profile-container">
      <h2>🙋 Student Profile</h2>

      <div className="profile-field">
        <strong>Name:</strong>{" "}
        {editMode ? (
          <input value={name} onChange={(e) => setName(e.target.value)} />
        ) : (
          profile.name
        )}
      </div>

      <div className="profile-field">
        <strong>Email:</strong> {profile.email}
      </div>

      <div className="profile-field">
        <strong>Joined:</strong>{" "}
        {profile.createdAt?.seconds
          ? new Date(profile.createdAt.seconds * 1000).toLocaleString()
          : "N/A"}
      </div>

      {/* ✅ New Section: Stats */}
      <div className="profile-stats">
        <p><strong>🪙 Coins:</strong> {profile.coins || 0}</p>
        <p><strong>🧪 Tests Taken:</strong> {profile.testsTaken || 0}</p>
        <p><strong>🏆 Rank:</strong> {profile.rank || "N/A"}</p>
      </div>

      {editMode ? (
        <>
          <button className="save-btn" onClick={handleUpdate}>💾 Save</button>
          <button className="cancel-btn" onClick={() => setEditMode(false)}>❌ Cancel</button>
        </>
      ) : (
        <button className="edit-btn" onClick={() => setEditMode(true)}>Update Profile</button>
      )}
    </div>
  );
}

export default Profile;
