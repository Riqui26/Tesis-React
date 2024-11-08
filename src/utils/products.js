const productos = [
    //PANTALONES
    {
        id: 1,
        title: "PANTALON MOM CARGO RAFAEL",
        size: "S | M | L | XL | XXL",
        stock: 50,
        type: "Pantalones",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/19c78f09-6ed1-4f0f-b717-42952a10cfcc-9ad2abbe3cc0b3b71417279721667221-480-0.webp",
        price: 30560,
    },

    {
        id: 2,
        title: "PANTALON CHINO SARDEGNA",
        size: "S | M | L | XL ",
        stock: 40,
        type: "Pantalones",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/d541a3e5-4e5a-4bd9-95a6-29d659815727-18ea86c145c51b889817296160502463-1024-1024.webp",
        price: 39760,
    },

    {
        id: 3,
        title: "PANTALON SKINNY AREQUIPA",
        size: "M | L | XL | XXL",
        stock: 20,
        type: "Pantalones",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/cec45ba9-0de1-4bdb-a684-9af3cf027002-deb258f4c01c91cfff17296160266254-1024-1024.webp",
        price: 34800,
    },

    {
        id: 4,
        title: "PANTALON MOM CORDEROY RINGO",
        size: "S | L | XL | XXL",
        stock: 40,
        type: "Pantalones",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/3f003dd0-25ef-49c5-b0d6-f20e5c18dd6f-0701646605e6c66b9017259000159329-1024-1024.webp",
        price: 52560,
    },

    {
        id: 5,
        title: "PANTALON CHINO SLIM FIT",
        size: "S | M | L | XL | XXL",
        stock: 35,
        type: "Pantalones",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/17256fc1-2dd2-4ff1-b72a-775060889cf2-f28a87c396fb21ea2c17303302005520-1024-1024.webp",
        price: 39280,
    },


    //REMERAS
    {
        id: 6,
        title: "REMERA OVER VOYAGE",
        size: "M | L ",        
        stock: 30,
        type: "Remeras",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/15a86211-5f01-4e45-a959-f6d5ab3b54e9-f416624e32e16924b917284046917751-1024-1024.webp",
        price: 40160,      
    },

    {
        id: 7,
        title: "REMERA OVER PEACE",
        size: "M | L | XL ",        
        stock: 25,
        type: "Remeras",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/3594077b-2ebf-4b5a-81ba-0dd02dfea2e7-7219890cbf235254f817305653753129-1024-1024.webp",
        price: 32880,      
    },

    {
        id: 8,
        title: "REMERA OVER PHOENIX",
        size: " M | XL ",        
        stock: 30,
        type: "Remeras",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/eaf9ce7e-317e-4807-b78d-e3d047f435da-a79955cbf65f37e38b17296971814369-1024-1024.webp",
        price: 24320,      
    },

    {
        id: 9,
        title: "REMERA OVER HUMAN",
        size: "S |M | L ",        
        stock: 30,
        type: "Remeras",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/6a768e95-8c0a-4f07-bf7c-b7b4b60f0c4c-20b94fa3410e1d1da117273907565365-1024-1024.webp",
        price: 23360,      
    },


    //ABRIGOS
    {
        id: 10  ,
        title: "BUZO MARSALA",
        size: " M | L ",        
        stock: 25,
        type: "Buzos",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/73a47599-1711-4293-b07b-fcf9151b968b-fced50e14cbf932f9517301245895402-640-0.webp",
        price: 50960,      
    },

    {
        id: 11,
        title: "BUZO WASHED",
        size: " M | L | XL",        
        stock: 1,
        type: "Buzos",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/9333e3bd-d2c4-4ab9-85d7-01726fe52889-009c4d73205364692917301258040893-320-0.webp",
        price: 63680,      
    },

    {
        id: 12,
        title: "CAMPERA WINDSOR",
        size: " M | L | XL",        
        stock: 18,
        type: "Buzos",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/ea6310a0-be3b-400b-a688-b96aad80478f-fba102f77fe909100b17301245709617-640-0.webp",
        price: 122480,      
    },

    {
        id: 13,
        title: "CAMPERA RALPH",
        size: "L | XL",        
        stock: 26,
        type: "Buzos",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/c7aed83e-79f7-42b5-b575-4b15f4e6d81e-2c257411ef6550192e17301245596487-640-0.webp",
        price: 49690,      
    },


    //Bermudas
    {
        id: 14,
        title: "BERMUDA BAGGY MATTER",
        size: "M | L | XL",        
        stock: 35,
        type: "Bermudas",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/abc3a940-35fa-4f7a-b134-09f6a564ec4a-bcde70155ad4c7779d17296972485921-320-0.webp",
        price: 31000,      
    },

    {
        id: 15,
        title: "BERMUDA MOM CARGO BOTTEGA",
        size: "M | L | XL",
        stock: 7,
        type: "Bermudas",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/de5b3f30-c2b4-4586-ac6d-7c9baa0cb8d2-9445112dac6a45ac1017296972015465-640-0.webp",
        price: 21520,      
    },

    {
        id: 16,
        title: "SHORT DE BAÑO CAMUFLADA SIKS",
        size: "M | L | XL",        
        stock: 7,
        type: "Bermudas",
        imageProduct: "https://acdn.mitiendanube.com/stores/462/392/products/254ccbf0-727a-4482-b2f6-b7209fd2a360-8a73991cd2626fb6d517297844701557-640-0.webp",
        price: 31600,      
    },
]

export default productos;