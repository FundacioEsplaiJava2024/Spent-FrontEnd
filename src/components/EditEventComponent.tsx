import { Box, Button, CardContent, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Event } from "../types/types";

interface EditEventProps {
  event: Event;
  handleSubmitEdit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const EditEvent = React.forwardRef(({ event, handleSubmitEdit  }: EditEventProps, ref) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
  };


  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [address, setAddress] = useState(event.address);

  const handleTitleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDescription(e.target.value);
  };

  const handleAddressChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAddress(e.target.value);
  };

  return (
    <>
      <Box ref={ref} sx={style}>
        <React.Fragment>
          <CardContent>
            <Typography component="h1" variant="h3">
              Edit Event{" "}
            </Typography>
            <Typography component="h6" variant="h6">
              Edit one field or many.
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmitEdit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                autoFocus
                value={title}
                onChange={handleTitleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                autoFocus
                multiline
                rows={4}
                value={description}
                onChange={handleDescriptionChange}
              />

              <TextField
                margin="normal"
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                autoFocus
                value={address}
                onChange={handleAddressChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, backgroundColor: "black" }}
              >
                Modify Event
              </Button>
            </Box>
          </CardContent>
        </React.Fragment>
      </Box>
    </>
  );
});

export default EditEvent;
