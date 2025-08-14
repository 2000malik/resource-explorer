import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Chip,
  IconButton,
  Stack,
} from "@mui/material";
import { useFavorites } from "@/src/store/useFavorite";
import { colors } from "@/src/theme/color";
import { Typography } from "@/src/components";

export default function CharacterDetail({
  character,
}: {
  character: CharacterType;
}) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.includes(character.id);

  return (
    <Stack spacing={4}>
      <Typography variant="lg" fontWeight={600}>
        Name: {character.name}
      </Typography>

      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          p: 2,
          gap: 2,
        }}
      >
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          sx={{
            width: { xs: "100%", md: 300 },
            height: "auto",
            borderRadius: 2,
            objectFit: "cover",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        />

        <CardContent sx={{ flex: 1, p: 0 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="xl" fontWeight={600}>
              Character Info
            </Typography>
            <IconButton
              onClick={() => toggleFavorite(character.id)}
              sx={{
                color: isFav ? colors.primary.main : colors.primary.secondary,
                fontWeight: 600,
                fontSize: 14,
                "&:hover": {
                  background: "transparent",
                },
              }}
            >
              Add to favorites
            </IconButton>
          </Box>

          <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
            <Chip
              label={`Status: ${character.status}`}
              sx={{
                color: colors.white,
                bgcolor: colors.primary.main,
                boxShadow: 2,
                fontSize:12,
                fontWeight:600
              }}
            />
            <Chip
              label={`Species: ${character.species}`}
              sx={{
                bgcolor: colors.white,
                color: colors.primary.main,
                boxShadow: 2,
                fontSize:12,
                fontWeight:600
              }}
            />
            <Chip
              label={`Gender: ${character.gender}`}
              sx={{
                bgcolor: colors.white,
                color: colors.primary.main,
                boxShadow: 2,
                fontSize:12,
                fontWeight:600
              }}
            />
          </Stack>

          <Stack spacing={1}>
            <Typography variant="md">
              <strong>Origin:</strong> {character.origin.name}
            </Typography>
            <Typography variant="md">
              <strong>Location:</strong> {character.location?.name}
            </Typography>
            <Typography variant="md">
              <strong>Episodes:</strong> {character.episode.length}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
