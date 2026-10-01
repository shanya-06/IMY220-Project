function Profile( {id} ) {

    const profiles = [
        {
            id: 1,
            name: shanya
        },
        {
            id: 2,
            name: kiara
        }
    ]

    {const profile = profiles.filter((profile.id = id));}

    return (
        <div>

            

            <p>{profile.id}</p>
            <p>{profile.name}</p>
        </div>
    );
}

export default Profile;