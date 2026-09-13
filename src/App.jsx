import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";


function App() { 

  function handleSelect(title){
    alert('you have picked ' +  title)
  }
    function handleFavourite(title){
    alert('your favourite is ' +  title)
  }
 
 
  return (
    <>
    
      <div>
        <Navbar/>
        <main>
        <Hero/>
       <CourseCard title="React" description="Frontend Library" duration={8} onSelect={handleSelect} onFavourite={handleFavourite}/>
       <CourseCard title="Node" description="AI/ML" duration={10} onSelect={handleSelect} onFavourite={handleFavourite}/>
       <CourseCard title="SQL" description="Database" duration={9} onSelect={handleSelect} onFavourite={handleFavourite}/>
      </main>
      <Footer/>

    
      </div>
    </>
  );
}

export default App;
