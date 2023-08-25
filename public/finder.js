// Replace these with actual API credentials and endpoints
const apiUrl = "https://api.example-social-media.com";
const accessToken = "YOUR_ACCESS_TOKEN";

// Function to fetch geolocation data for friends
async function getFriendsGeolocation() {
  try {
    const response = await fetch(`${apiUrl}/friends/geolocation`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const friendsData = await response.json();
    return friendsData;
  } catch (error) {
    console.error("Error fetching friends' geolocation:", error);
    return [];
  }
}

// Main function to display friends' geolocation
async function displayFriendsGeolocation() {
  const friendsGeolocation = await getFriendsGeolocation();

  if (friendsGeolocation.length === 0) {
    console.log("No friends' geolocation data available.");
    return;
  }

  console.log("Friends' Geolocation:");
  friendsGeolocation.forEach((friend) => {
    console.log(`${friend.name}: Lat ${friend.latitude}, Long ${friend.longitude}`);
  });
}

// Call the main function to display friends' geolocation
displayFriendsGeolocation();
