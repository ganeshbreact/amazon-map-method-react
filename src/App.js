const arr =[{img:"https://images-eu.ssl-images-amazon.com/images/I/81eFIz5HZBL._AC_UL600_SR600,400_.jpg",
  movieName:"Blade Runner 2049 - A Denis Villeneuve Film",
  actorName:"Harrison Ford",
  quality:"Blu-ray",
  price:"₹3,999.00",
},
{img:"https://images-eu.ssl-images-amazon.com/images/I/81FeWBnht7L._AC_UL600_SR600,400_.jpg",
  movieName:"Blade Runner: The Final Cut - A Ridley Scott Film (1982) ",
  actorName:"Harrison Ford",
  quality:"Blu-ray",
  price:"₹4,999.00",
},
{img:"https://images-eu.ssl-images-amazon.com/images/I/71OP8gOVMEL._AC_UL600_SR600,400_.jpg",
  movieName:"Godzilla x Kong: The New Empire",
  actorName:"Brian Tyree Henry",
  quality:"Blu-ray",
  price:"₹5,499.00",
},
{img:"https://images-eu.ssl-images-amazon.com/images/I/61xOSBjjWvL._AC_UL600_SR600,400_.jpg",
  movieName:"Guess Who's Coming to Dinner (1967) ",
  actorName:"Spencer Tracy",
  quality:"Blu-ray",
  price:"₹5,499.00",
},
{img:"https://images-eu.ssl-images-amazon.com/images/I/71ZNyTPaV1L._AC_UL600_SR600,400_.jpg",
  movieName:"Dune: Part Two",
  actorName:"Zendaya",
  quality:"Blu-ray",
  price:"₹5,499.00",
},
{img:"https://images-eu.ssl-images-amazon.com/images/I/71xagWGOdoL._AC_UL600_SR600,400_.jpg",
  movieName:"Dune 2-Film Collection",
  actorName:"Zendaya",
  quality:"Blu-ray",
  price:"₹8,499.00",
},
{img:"https://images-eu.ssl-images-amazon.com/images/I/71xagWGOdoL._AC_UL600_SR600,400_.jpg",
  movieName:"Midway (2019)",
  actorName:"Ed Skrein",
  quality:"Blu-ray",
  price:"₹3,499.00",
},
{img:"https://images-eu.ssl-images-amazon.com/images/I/5117O5ReCLL._AC_UL600_SR600,400_.jpg",
  movieName:"History: Roots (2016)",
  actorName:"Jonathan Rhys Meyers",
  quality:"Blu-ray",
  price:"₹3,499.00",
},
{img:"https://images-eu.ssl-images-amazon.com/images/I/81Sgvinf8qL._AC_UL600_SR600,400_.jpg",
  movieName:"Taxi Driver",
  actorName:"Robert De Niro",
  quality:"Blu-ray",
  price:"₹1,499.00",
},
{img:"https://images-eu.ssl-images-amazon.com/images/I/81oQ7QS6U4L._AC_UL600_SR600,400_.jpg",
  movieName:"Jaws (1975)",
  actorName:"Roy Scheider",
  quality:"Blu-ray",
  price:"₹5,499.00",
},

]

function App() {
  return (
    <div
    style={{
      display: "flex",
      flexWrap:"wrap",
      gap:"20px"
    }}
    >

      {arr.map(card => (
        <div>
          { 
          <div  style={{width:"400px",height:"500px", border:"2px solid black"}}>
            <img style={{width:"400px", height:"300px"}} src={card.img} alt="MovieImage" />

            <h3>{card.movieName}</h3>

            <h5>{card.actorName}</h5>

            <p>{card.quality}</p>

            <h3>{card.price}</h3>

          </div>
          }


        </div>
      ))}
      
    </div>
  );
}

export default App;
