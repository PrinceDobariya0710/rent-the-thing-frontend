import img1 from "./ecommerce-photos/shopping1.jpg"

export const RenterAddress = [
	{
		"id": 1,
		"userDetails": {
			"userDetailsId": 2,
			"userId": 2,
			"firstName": "Aditi",
			"lastName": "Shelat",
			"orgName": "test Organization",
			"website": "www.testweb.com",
			"dob": "1998-05-05"
		},
		"flatNo": "Ah-2",
		"street": "testStreet2",
		"landmark": "test landmark2",
		"city": {
			"cityId": 2,
			"cityName": "Pune"
		},
		"state": {
			"stateId": 1,
			"stateName": "Gujarat"
		},
		"country": {
			"countryId": 1,
			"countryName": "India"
		},
		"pincode": 411005
	}
]

export const Contact=[
	{
		"id": 1,
		"userDetails": {
			"userDetailsId": 1,
			"userId": 5,
			"firstName": "Aditi",
			"lastName": "Shelat",
			"orgName": "test Organization",
			"website": "www.testweb.com",
			"dob": "1998-05-05"
		},
		"primaryContact": 9601010101,
		"secondaryContact": 8200812148
	}
]
export const Product = [
    {
        "id": 1,
        "attributeValue": "M",
        "product": {
            "id": 1,
            "userDetailsId": {
                "userDetailsId": 4,
                "userId": 4,
                "firstName": "Rachel",
                "lastName": "Green",
                "orgName": null,
                "website": null,
                "dob": "1997-03-23"
            },
            "Rating":3,
            "productName": "Wedding-Lehenga",
            "value_duration": 9000,
            "product_image": img1,
            "product_description": "A fine ambroidery lehenga for weddingfnd ced mekj nefk fenkjvef  jednckjfe efklfen fe,edlkenmckle clkemlm",
            "deposit": 2000,
            "available_pieces": 10,
            "product_rate": 60000,
            "subcategory": {
                "id": 1,
                "subCategory_name": "Wedding Wear",
                "cateGory": {
                    "id": 1,
                    "category_name": "clothing"
                }
            },
            "productDurationRates": {
                "id": 2,
                "duration": "1 week"
            }
        },
        "attribute": {
            "id": 1,
            "attributeTitle": "size",
            "attributeDescription": "it will describe size of the product"
        }
    },
];




export const sliderItems = [
    {
      id: 1,
      img: "https://i.ibb.co/ZVkgwyW/1-removebg-preview.png",
      title: "WEDDING WEAR",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "f5fafd",
    },
    {
      id: 2,
      img: "https://i.ibb.co/mS3Vw0n/2-removebg-preview.png",
      title: "SUITS",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fcf1ed",
    },
    {
      id: 3,
      img: "https://i.ibb.co/5TYSB4T/3-removebg-preview.png",
      title: "PARTY WEAR",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fbf0f4",
    },
  ];
export const products = [
  {
    id:1,
    img:"https://i.ibb.co/TrZMYx5/1.jpg",
    name: "Wedding Lehenga" ,
    amount:"7000",
  },
  {
    id:2,
    img:"https://i.ibb.co/hBVTnsD/2.jpg",
    name: "Wedding Lehenga" ,
    amount:"7000",
  },
  {
    id:3,
    img:"https://i.ibb.co/SyhvK1f/3.jpg",
    name: "Wedding Lehenga" ,
    amount:"7000",
  },
  {
    id:4,
    img:"https://i.ibb.co/NYyn1nc/4.jpg",
    name: "Saree" ,
    amount:"7000",
  },
  {
    id:5,
    img:"https://i.ibb.co/LnZvwYQ/5.jpg",
    name: "Wedding Lehenga" ,
    amount:"7000",
  },
  {
    id:6,
    img:"https://i.ibb.co/j5JyHk9/6.jpg",
    name: "Party Dress" ,
    amount:"7000",
  }
]
  export const categories = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "SHIRT STYLE!",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "LOUNGEWEAR LOVE",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "LIGHT JACKETS",
    },
  ];

  export const popularProducts = [
    {
      id:1,
      img:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    },
    {
      id:2,
      img:"https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
    },
    {
      id:3,
      img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    },
    {
      id:4,
      img:"https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    },
    {
      id:5,
      img:"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    },
    {
      id:6,
      img:"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    },
    {
      id:7,
      img:"https://www.vintageindustries.nl/download_front/qympzk1762/2217_Arrow_Jacket_Forest.png",
    },
    {
      id:8,
      img:"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    },
  ]