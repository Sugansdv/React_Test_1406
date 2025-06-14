export const fetchProperties = () => {
  return Promise.resolve({
    data: [
      {
        id: 1,
        title: "Modern Apartment in Tokyo",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        thumbnailUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=150"
      },
      {
        id: 2,
        title: "Luxury Villa in Bali",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        thumbnailUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=150"
      },
      {
        id: 3,
        title: "Cozy Studio in Lisbon",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
        thumbnailUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=150"
      },
      {
        id: 4,
        title: "Beachside Cottage in Phuket",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        thumbnailUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=150"
      },
      {
        id: 5,
        title: "Traditional Home in Kyoto",
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
        thumbnailUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=150"
      },
      {
        id: 6,
        title: "Duplex in Cape Town",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        thumbnailUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=150"
      },
      {
        id: 7,
        title: "Countryside House in Tuscany",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
        thumbnailUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=150"
      },
      {
        id: 8,
        title: "Eco-Lodge in Costa Rica",
        image: "https://images.unsplash.com/photo-1468413253725-0d5181091126",
        thumbnailUrl: "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=150"
      },
      {
        id: 9,
        title: "Studio Loft in Berlin",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        thumbnailUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=150"
      },
      {
        id: 10,
        title: "Mountain Cabin in Aspen",
        image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
        thumbnailUrl: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=150"
      },
      {
        id: 11,
        title: "Floating Villa in Bora Bora",
        image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04",
        thumbnailUrl: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=150"
      },
      {
        id: 12,
        title: "Business Suite in Dubai",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
        thumbnailUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=150"
      }
    ]
  });
};

export const fetchPropertyById = (id) => {
  const all = fetchProperties();
  return all.then((res) => {
    const match = res.data.find((p) => p.id === parseInt(id));
    return { data: match };
  });
};