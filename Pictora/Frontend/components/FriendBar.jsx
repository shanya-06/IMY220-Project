
function FriendBar({ userId }) {

    const dummyUsers = [
  {
    id: 101,
    username: "photoFan99",
    profilePic: "/assets/users/user1.png",
    friends: [102, 103, 104] // references other user IDs
  },
  {
    id: 102,
    username: "urbanExplorer",
    profilePic: "/assets/users/user2.png",
    friends: [101, 105, 106]
  },
  {
    id: 103,
    username: "foodieQueen",
    profilePic: "/assets/users/user3.png",
    friends: [101, 104, 107]
  },
  {
    id: 104,
    username: "volleyStar",
    profilePic: "/assets/users/user4.png",
    friends: [101, 103, 108]
  },
  {
    id: 105,
    username: "animeLover",
    profilePic: "/assets/users/user5.png",
    friends: [102, 109, 110]
  },
  {
    id: 106,
    username: "dogTrainer",
    profilePic: "/assets/users/user6.png",
    friends: [102, 107, 110]
  },
  {
    id: 107,
    username: "catWhisperer",
    profilePic: "/assets/users/user7.png",
    friends: [103, 106, 109]
  },
  {
    id: 108,
    username: "makeupGuru",
    profilePic: "/assets/users/user8.png",
    friends: [104, 110]
  },
  {
    id: 109,
    username: "musicFan",
    profilePic: "/assets/users/user9.png",
    friends: [105, 107]
  },
  {
    id: 110,
    username: "fashionista",
    profilePic: "/assets/users/user10.png",
    friends: [105, 106, 108]
  }
];


  // Find the user by ID
  const user = dummyUsers.find((u) => u.id === userId);

  if (!user) {
    return <p>User not found.</p>;
  }

  // Get the friend objects by matching IDs
  const friends = dummyUsers.filter((u) => user.friends.includes(u.id));

  return (
    <section style={{ padding: "1rem" }}>
      <h2>{user.username}'s Friends</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {friends.map((friend) => (
          <div
            key={friend.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "120px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "0.5rem"
            }}
          >
            <img
              src={friend.profilePic}
              alt={friend.username}
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            />
            <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
              {friend.username}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FriendBar;
