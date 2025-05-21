import './App.css'
import LazyNewsCard from './components/LazyNewsCard.jsx';

function App() {

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 40, padding: 20 }}>
        <LazyNewsCard
          type="breaking"
          image="https://placehold.co/400x400"
          title="Breaking News: Huge Event!"
          description="A major event has occurred in the world of something very important. Stay tuned."
          link="#"
        />
  
        <LazyNewsCard
          type="currently"
          image="https://placehold.co/200x200"
          title="Live: Current Situation Unfolds"
        />
  
        <LazyNewsCard
         type="sectionHeader"
          image="https://placehold.co/100x100"
          description="Top Stories in Technology for This Week"
        />
  
        <LazyNewsCard
          type="sectionItem"
          image="https://placehold.co/50x50"
          title="Quick News Flash"
        />
      </div>
    </>
  )
}

export default App
