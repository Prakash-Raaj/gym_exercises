import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import bodyPartImage from "../assets/icons/body-part.png";
import targetImage from "../assets/icons/target.png";
import equipmentImage from "../assets/icons/equipment.png";

const Details = ({ exerciseDetail }) => {
  const { name, target, gifUrl, equipment, bodyPart } = exerciseDetail;

  const extraDetail = [
    {
      icon: bodyPartImage,
      name: bodyPart,
    },
    {
      icon: targetImage,
      name: target,
    },
    {
      icon: equipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} bup is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack id={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
