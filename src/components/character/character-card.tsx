import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { useFavorites } from "@/src/store/useFavorite";

export  function CharacterCard({
  character,
}: {
  character: CharacterType;
}) {
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
        <Typography variant="h6">{character.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {character.species}
        </Typography>
        <IconButton
          onClick={() => toggleFavorite(character.id)}
          color={isFav ? "error" : "default"}
        >
          Add to favorites
        </IconButton>
      </CardContent>
    </Card>
  );
}
