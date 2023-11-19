import './App.css'
import Title from './component/Title'

function App() {
    const testTitle = 'tamar wellcome'
  return (
    <>
      <div>
        <Title title='first title'/>
        <Title title='second title'/>
        <Title title='third title'/>
        <Title title={testTitle}/>
      </div>
    </>
  )
}

export default App
