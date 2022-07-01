import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function MediaCard(props) {
  const { name, url } = props;

  const [cardData, setCardData] = React.useState({});
  const [pokedexDesc, setPokedexDesc] = React.useState({});

  const fetchInfo = async (uri) => {
    const response = await axios.get(uri);

    setCardData(response.data);

    return;
  };

  React.useEffect(() => {
    fetchInfo(url);
  }, [url]);

  //

  const searchDetail = async () => {
    const response = await axios.get(cardData?.species?.url);

    setPokedexDesc(response.data);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "0.5em 0.7em" }}>
      {console.log(cardData)}
      <CardMedia
        component="img"
        height="140"
        image={cardData?.sprites?.other["official-artwork"].front_default}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pokedexDesc?.flavor_text_entries?.[0].flavor_text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button onClick={() => searchDetail()} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
