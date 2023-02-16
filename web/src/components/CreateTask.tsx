import { Grid, TextField, Button } from "@mui/material";

export const CreateTask = () => {
  return (
    <Grid
      container
      direction="column"
      gap={1}
      maxWidth="40rem"
      border={1}
      borderColor="white"
      borderRadius={2}
      padding={2}
    >
      <h1 className="text-white text-lg tracking-wide font-bold">
        Create a new task
      </h1>

      <TextField required variant="outlined" className="bg-white rounded-lg" />

      <Button variant="contained">Salvar</Button>
    </Grid>
  );
};
