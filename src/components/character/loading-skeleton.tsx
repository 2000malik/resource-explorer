import { Skeleton, Grid } from "@mui/material";

export function LoadingSkeleton() {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: 12 }).map((_, i) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
          <Skeleton variant="rectangular" height={250} />
        </Grid>
      ))}
    </Grid>
  );
}
