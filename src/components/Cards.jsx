import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function Cards({ item }) {
  return (
    <Card sx={{ width: 345 }}>
      <CardHeader
        avatar={<AutoAwesomeIcon color="warning" fontSize="large" />}
        title={item.title}
        subheader={`${item.creationAt.split("T")[0]} ${item.creationAt.split("T")[1].split(".")[0]}`}
      />
      <CardMedia
        className="h-[194px] text-center bg-[#f0f0f0] text-[50px] text-[#a09090]"
        component="img"
        height="194"
        image={item.images[0]}
        alt={"No product"}
      />
      <CardContent>
        <Typography
          className="line-clamp-4"
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
