import './App.css'
// import WindowSize from './components/windowSize/WindowSize'
// import CountdownTimer from './components/countdownTimer/CountdownTimer'
// import TitleTask from './components/titleTask/TitleTask';
// import Practice from './components/practice/Practice';
import UserPosts from './components/userPosts/UserPosts';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';



function App() {
 
  return (
    <>
    <Container>
      <Grid>
      <UserPosts />

      </Grid>

    {/* < TitleTask />
    <br />
    <br />
    <br />
    < CountdownTimer />
    <br />
    <br />
    <br />
    <WindowSize />
    <Practice/> */}


    </Container>
    </>
  )
}




export default App



















