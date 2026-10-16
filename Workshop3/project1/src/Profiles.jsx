import { useEffect, useState } from "react";

async function getProfiles() {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    return data.users;
}

function Profiles() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        getProfiles().then((users) => {
            setProfiles(users);
        });
    }, []);

    // instagram stories cards carousel
    return (
        <div className="profiles">
            {profiles.map((profile) => (
                <div key={profile.id} className="profile-card">
                    <img src={profile.image} alt={profile.firstName} />
                    <h3>{profile.firstName} {profile.lastName}</h3>
                </div>
            ))}
        </div>
    );
}

export default Profiles