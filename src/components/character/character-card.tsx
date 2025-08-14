import { Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { useFavorites } from "@/src/store/useFavorite";
import { Typography } from "../typography";
import { colors } from "@/src/theme/color";

export function CharacterCard({ character }: { character: CharacterType }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.includes(character.id);

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={character?.image}
        alt={character?.name}
      />
      <CardContent>
        <Typography variant="h6" sx={{ color: colors.grey.secondary }}>
          {character.name}
        </Typography>
        <Typography variant="body2" sx={{ color: colors.grey.secondary }}>
          {character.species}
        </Typography>
        <IconButton
          onClick={() => toggleFavorite(character.id)}
          sx={{
            color: isFav ? colors.primary.main : colors.primary.secondary,
            fontSize: 14,
            fontWeight: 600,
            padding: 0,
            "&:hover": {
              background: "transparent",
            },
          }}
        >
          Add to favorites
        </IconButton>
      </CardContent>
    </Card>
  );
}
