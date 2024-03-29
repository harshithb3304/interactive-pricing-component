import Card from "./Card";

function App() {
  return (
    <main className="h-screen">
      <h1 className="bg-[url('/src/assets/pattern-circles.svg')] bg-no-repeat bg-center bg-[length:230px_230px] md lg:bg-[length:250px_250px]  font-manrope font-bold text-2xl md:text-3xl lg:text-4xl  flex justify-center items-center min-h-[300px] md:min-h-[350px] lg:min-h-[350px] mb-3">
        Simple, traffic-based pricing
      </h1>
      <div className="font-manrope font-semibold text-xl md:text-xl lg:text-xl flex flex-col lg:flex-row justify-center items-center mt-[-9rem] text-[color:hsl(225,20%,60%)]">
        {/*Used a hsl to hex code converter*/}
        <p className="mr-1">Sign up for our 30-day trial.</p>
        <p>No credit card required</p>
      </div>
      <div className=" mt-[-3rem] md:mt[-10rem] lg:mt-[-11rem]">
        <Card />
      </div>
    </main>
  );
}

export default App;
