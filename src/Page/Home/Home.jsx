import {useState} from "react";

const HomePage = ({token}) => {

    const [ liste, setListe ] = useState(null);
    const [ nextLink, setNext ] = useState(null);
    const [ prevLink, setPrev ] = useState(null);

    if (token && !liste) {
        try {
            fetch('http://127.0.0.1:8000/api/pokemon', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            })
            // console.log(login.statusText)
            .then(response => response.json())
            .then(data => {
              // Handle the data
            //   console.log(data);
                setListe(data['hydra:member'].map((item, index) => (
                <li key={index}>
                    <img src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`} alt={item.name} />
                    {item.name}
                </li>
                )));
                    
                if (data['hydra:view']['hydra:next']) {
                    setNext(data['hydra:view']['hydra:next']);
                } else {
                    setNext(null);
                }

                if (data['hydra:view']['hydra:previous']) {
                    setPrev(data['hydra:view']['hydra:previous']);
                } else {
                    setPrev(null);
                }
                
            })

        } catch (error) {
            console.log(error);
            // message
        }

    }

    const prevPage = () => {
        if (liste && prevLink) {
            try {
                fetch('http://127.0.0.1:8000'+prevLink, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                })
                // console.log(login.statusText)
                .then(response => response.json())
                .then(data => {
                  // Handle the data
                //   console.log(data);
                    setListe(data['hydra:member'].map((item, index) => (
                    <li key={index}>
                        <img src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`} alt={item.name} />
                        {item.name}
                    </li>
                    )));

                    if (data['hydra:view']['hydra:next']) {
                        setNext(data['hydra:view']['hydra:next']);
                    } else {
                        setNext(null);
                    }

                    if (data['hydra:view']['hydra:previous']) {
                        setPrev(data['hydra:view']['hydra:previous']);
                    } else {
                        setPrev(null);
                    }
                    
                })
    
            } catch (error) {
                console.log(error);
                // message
            }
        } else {
            console.log('Nothing more');
        }
    };

    const nextPage = () => {
        if (liste && nextLink) {
            try {
                fetch('http://127.0.0.1:8000'+nextLink, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                })
                // console.log(login.statusText)
                .then(response => response.json())
                .then(data => {
                  // Handle the data
                //   console.log(data);
                    setListe(data['hydra:member'].map((item, index) => (
                    <li key={index}>
                        <img src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`} alt={item.name} />
                        {item.name}
                    </li>
                    )));
                    
                    if (data['hydra:view']['hydra:next']) {
                        setNext(data['hydra:view']['hydra:next']);
                    } else {
                        setNext(null);
                    }

                    if (data['hydra:view']['hydra:previous']) {
                        setPrev(data['hydra:view']['hydra:previous']);
                    } else {
                        setPrev(null);
                    }
                    
                })
    
            } catch (error) {
                console.log(error);
                // message
            }
        } else {
            console.log('Nothing more');
        }
    };
    

    return(
        <>
            <div>
                Home page
            </div>
            {token ? 
            <div className="liste">
                <ul>
                    {liste}
                </ul>
            </div> 
            : 
            <div>Nothing here</div>}

            {liste ? 
            <div class="paginator">

                {prevLink ?
                <button onClick={prevPage} id="prev">Previous</button>
                : <></>}

                {nextLink ?
                <button onClick={nextPage} id="next">Next</button>
                : <></>}

            </div>
            : <></>}

        </>
    )
}

export default HomePage;