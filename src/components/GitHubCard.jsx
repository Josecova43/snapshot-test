import { Card } from "react-bootstrap"
import { useState, useEffect } from "react"

export default function GitHubCard() {
    const [githubData, setGithubData]= useState({
        name:'',
        avatar_url: '',
        bio: '',
        });

        useEffect( async () => {
             await fetch(`https://api.github.com/users/Josecova41`)
            .then(response => response.json())
            .then(data => setGithubData(data))

        });



    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Img 
                    variant="top"
                    src={githubData.avatar_url}
                    alt="Github avatar"
                    />

                    <Card.Title>
                        <h2>{githubData.name}       </h2>
                    </Card.Title>
                    <Card.Text>
                        {
                            githubData.bio
                        }
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>

    )
}