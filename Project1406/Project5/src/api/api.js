export const fetchProperties = () => {
  return Promise.resolve({
    data: [
      {
        id: 1,
        title: "Modern Apartment in New York",
        image: "/Modern Apartment.jpeg",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      },
      {
        id: 2,
        title: "Luxury Villa in California",
        image: "/Luxury Villa.jpg",
        thumbnailUrl: "https://via.placeholder.com/150/771796"
      },
      {
        id: 3,
        title: "Cozy Studio in Paris",
        image: "/Maldives Beach.jpeg",
        thumbnailUrl: "https://via.placeholder.com/150/24f355"
      },
      {
        id: 4,
        title: "Beachside Cottage in Goa",
        image: "/Swiss Alps.jpeg",
        thumbnailUrl: "https://via.placeholder.com/150/d32776"
      },
      
      {
        id: 5,
        title: "Traditional Home in Kerala",
        image: "/Modern Apartment.jpeg",
        thumbnailUrl: "https://via.placeholder.com/150/197d29"
      },
      {
        id: 6,
        title: "Duplex in Sydney",
        image: "/Luxury Villa.jpg",
        thumbnailUrl: "https://via.placeholder.com/150/61a65"
      },
      {
        id: 7,
        title: "Countryside House in France",
        image: "/Swiss Alps.jpeg",
        thumbnailUrl: "https://via.placeholder.com/150/f9cee5"
      },
      {
        id: 8,
        title: "Eco-Lodge in Amazon",
        image: "/Luxury Villa.jpg",
        thumbnailUrl: "https://via.placeholder.com/150/fdf73e"
      },
      {
        id: 9,
        title: "Studio Loft in Barcelona",
        image: "/Maldives Beach.jpeg",
        thumbnailUrl: "https://via.placeholder.com/150/9c184f"
      },
      {
        id: 10,
        title: "Mountain Cabin in Manali",
        image: "/Santorini, Greece.jpeg",
        thumbnailUrl: "https://via.placeholder.com/150/d45682"
      },
      {
        id: 11,
        title: "Floating Villa in Maldives",
        image: "/Swiss Alps.jpeg",
        thumbnailUrl: "https://via.placeholder.com/150/7c5a9c"
      },
      {
        id: 12,
        title: "Business Suite in Singapore",
        image: "/Modern Apartment.jpeg",
        thumbnailUrl: "https://via.placeholder.com/150/9b2b59"
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
