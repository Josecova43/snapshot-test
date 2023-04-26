import {render, screen, waitFor } from '@testing-library/react'
import renderer from 'react-test-renderer'
import GitHubCard from './GitHubCard'


 const DEFAULT_MOCK_DATA ={
    name: 'jose',
    avatar_url: 'https://avatars.githubusercontent.com/u/116780029?v=4',
    bio: 'Pretty cool guy '
}

const DEFAULT_AVATAR_ALT= 'Github avatar'

describe('Test GitHUbCard for features when', () =>{
    beforeEach(()=>{
     
        fetch.mockResponseOnce(JSON.stringify(DEFAULT_MOCK_DATA))
        render(<GitHubCard />)
    })
    afterEach(()=> {
        fetch.resetMocks();
    })

    test('it contains a photo of the github user', async () => {
        const avatarImage= await waitFor( () => screen.getByAltText('Github avatr'));
        expect(avatarImage).toHaveAttribute('src', 
        expect.stringContaining(DEFAULT_MOCK_DATA.avatar_url))
    });

    test('it contain a name of the gthub user', async () => {
        const userName = await waitFor(()=>screen.getByRole('heading', {level: 2}));
        expect(userName).toHaveTextContent(DEFAULT_MOCK_DATA.name)

    });


    test('it contain a blurb of the gthub user', async () => {
        const blurb = await waitFor(() => screen.getByRole('paragraph'));
        expect(blurb).toHaveTextContent(DEFAULT_MOCK_DATA.bio)

    });

    test('it renders a snapshot',  () => {
        const tree = renderer.create(<GitHubCard />).toJSON();
        expect(tree).toMatchSnapshot();

    });
})