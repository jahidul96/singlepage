import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './reuse.css'
import { CardData, CardImageData } from '../data/Data';


export const ShowCase = () => {
    return (
        <div className='showcaseContainer'>
            <div className='textContainer'>
                <h1 >Hey let's <span style={{ color: "blue" }}>travel</span> together.. </h1>
                <div className='textWrapper'>
                    <p>we are some travel lover and we want to explore some place</p>
                    <p>together and want to make some memories..</p>
                    <button className='btn'>Explore More</button>
                </div>
            </div>

        </div>
    )
}

export const TextComp = (props) => (
    <div>
        <h2 style={{ color: "tomato" }}>{props.title}</h2>
        <p style={{ marginTop: "10px", color: "#bbb" }}>{props.text}</p>
        <p style={{ marginTop: "10px", color: "#bbb" }}>{props.subtext}</p>
    </div>
)

export const CardComp = (props) => {
    return (
        <Card sx={{ maxWidth: 500, marginBottom: "30px" }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>

                <Typography variant="body2" style={{ marginTop: "10px" }}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export const ImageCard = () => {
    return (
        <>
            {
                CardData.map(item => (
                    <Card sx={{ maxWidth: 300, marginBottom: "30px" }} key={item.id}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={item.img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Cox's bazar are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))
            }
        </>
    )
}


export const ImageCardTwo = () => {
    return (
        <>
            {
                CardImageData.map(item => (
                    <Card sx={{ maxWidth: 220, marginBottom: "30px", marginLeft: "15px" }} key={item.id}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={item.img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Cox's bazar are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))
            }
        </>
    )
}