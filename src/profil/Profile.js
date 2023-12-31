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
  username: "Lisa",
  fullName: "Lisa Audray",
  bio: "Grenoble/Miami",
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
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoK-tBv0-KGf7hdi071x2_i1JDrxfAjuNzQ&usqp=CAU",
      caption: "Another adorable cat!",
    },
    {
      id: 3,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3yKpj2245AncvenEYiOSatOLez8KqeQOCA&usqp=CAU",
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
                src="data:image/jpeg;base64,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"
                sx={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4">Lisa</Typography>
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
