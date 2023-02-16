import { Grid, Button } from '@mui/material';

type ItemProps = {
  title: string;
  completed?: boolean;
  id: string;
};

export const Item = ({ title, completed = false }: ItemProps) => {
  return (
    <Grid
      container
      direction="row"
      width="100%"
      bgcolor="white"
      borderRadius={2}
      paddingY={1}
      paddingX={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <h3>{title}</h3>

      <Grid item>
        {completed || (
          <>
            <Button variant="text">concluir</Button>
            <Button variant="text">editar</Button>
          </>
        )}
        <Button variant="text">excluir</Button>
      </Grid>
    </Grid>
  );
};
