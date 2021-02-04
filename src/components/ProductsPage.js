import React, {useState} from 'react';
import Product from './Product'

const ProductsPage = () => {
    const [products] = useState([
        {   name: "ASUKA",
            description: "Fly Me To The Moon",
            price: 7.77,
            image: "images/assuka.png"
            },
        {   
            name: "FLOATY",
            description: "Sun's Out, Buns Out",
            price: 8.88,
            image: "images/floaty.png"
            },
        {   name: "REI",
            description: "Fly Me To The Moon",
            price: 7.77,
            image: "images/reii.png"
            },
        {   name: "SINNER",
            description: "Chicken Dinner",
            price: 33.33,
            image: "images/sinnerEXAMPLE.png"
            },
        {   name: "JJ",
            description: "You cruisin' for a bruisin'?",
            price: 5.55,
            image: "images/JJ.png"
            },
        {   name: "UNREQUITED",
            description: "it's not me, it's you.",
            price: 33.33,
            image: "images/unrequitedEXAMPLE.png"
            },
        {   name: "HER",
            description: "ooo la-la",
            price: 8.88,
            image: "images/her.png"
            },    
        {   name: "HER",
            description: "ooo la-la",
            price: 8.88,
            image: "images/herPURP.png"
            },    
        {   name: "HER",
            description: "ooo la-la",
            price: 8.88,
            image: "images/herRED.png"
            },
        {   name: "FORGET",
            description: "Just a memory",
            price: 6.66,
            image: "images/FORGET.png"
            },  
        {   name: "R",
            description: "Who is this? This is me.",
            price: 8.88,
            image: "./images/reicut.png"
            },    
        {   name: "ANA",
            description: "House of Balloons",
            price: 8.88,
            image: "images/wknd.png"
            },          
    ]);

    console.log('products :: ',products);
    return(
         <div class="flexbox_container">
             {
                 products.map((product, index) => <Product product={product} productNumber={index +1} />)
             }
         </div>
           );
}

export default ProductsPage;