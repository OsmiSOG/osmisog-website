import React from 'react'
import { Card, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import Link from '../components/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function CardProject({project}) {
  return (
    <Card>
        <CardMedia
            component="img"
            image={project.img}
            alt={project.name}
        />
        <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant='h4'>
                {project.name}
                {
                    project.links.map((link, index) => (
                        <Link type="link" target="_blank" href={link.url} key={index}>
                            {
                                link.type === 'page' ? <OpenInNewIcon fontSize="small"/> : <GitHubIcon fontSize="small"/>
                            }
                        </Link>
                    ))
                }
            </Typography>
            <Typography sx={{ lineHeight: "1" }}>
                {project.description}
            </Typography>

            <br></br>
            <Divider variant="fullWidth"/>
            
            <Typography sx={{ lineHeight: "1" }}>
                {`${project.technology_stack.description} ${project.technology_stack.technologies.join(', ')}`}
            </Typography>
        </CardContent>
    </Card>
  )
}
