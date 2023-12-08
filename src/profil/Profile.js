import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Navigation from "../navigation/Navigation"; // Import your Navigation component
import Suggestions from "../suggestions/Suggestions"; // Import your Suggestions component
import "./Profile.css";

const dummyUser = {
  username: "Toto38",
  fullName: "John Doe",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  followers: 100,
  following: 200,
  posts: [
    {
      id: 1,
      imageUrl: "https://placekitten.com/200/200",
      caption: "A beautiful cat!",
    },
    {
      id: 2,
      imageUrl: "https://placekitten.com/201/201",
      caption: "Another adorable cat!",
    },
    {
      id: 3,
      imageUrl: "https://placekitten.com/201/201",
      caption: "Another adorable cat!",
    },
  ],
};
const Profile = () => {
  const [user, setUser] = useState(dummyUser);

  return (
    <div className="profile-container">
      <Grid container spacing={3}>
        {/* Navigation component on the left */}
        <Grid item xs={12} md={3}>
          <Navigation />
        </Grid>

        {/* Profile component in the center */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Avatar
                alt={user.username}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkn1jq7Y_no3d4KLY3w9y4aOwSWtoenBPKw&usqp=CAU"
                sx={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4">Toto38</Typography>
              <Typography variant="subtitle1">{user.fullName}</Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                {user.bio}
              </Typography>
              <Button variant="outlined" sx={{ marginTop: 2 }}>
                Modifier le profil
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={4}>
              <Typography variant="h6">{user.posts.length}</Typography>
              <Typography variant="subtitle2">Publications</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">{user.followers}</Typography>
              <Typography variant="subtitle2">Abonnés</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">{user.following}</Typography>
              <Typography variant="subtitle2">Abonnement</Typography>
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                {user.posts.map((post) => (
                  <Grid item xs={4} key={post.id}>
                    <img
                      src={post.imageUrl}
                      alt={`Post ${post.id}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Suggestions component on the right */}
        <Grid item xs={12} md={3}>
          <Suggestions />
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
