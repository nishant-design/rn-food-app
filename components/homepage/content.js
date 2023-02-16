import PizzaCategory from '../../assets/categories/pizza.jpg';
import AsianCategory from '../../assets/categories/asian.jpg';
import BurgerCategory from '../../assets/categories/burger.jpg';
import RollsCategory from '../../assets/categories/rolls.jpg';
import ThaiCategory from '../../assets/categories/thai.jpg';

export const CATEGORY_CONTENT = [
  {
    title: "Pizza",
    imgUrl: PizzaCategory,
  },
  {
    title: "Thai",
    imgUrl: ThaiCategory,
  },
  {
    title: "Burger",
    imgUrl: BurgerCategory,
  },
  {
    title: "Asian",
    imgUrl: AsianCategory,
  },
  
  {
    title: "Rolls",
    imgUrl: RollsCategory,
  },
]

export const FEATURES_ROWS_DATA = [
  {
    title: "Featured",
    desc: "Paid placements from our partners",
    restaurants: [
      {
        id: 1,
        name: "Nando's",
        imgUrl: "https://b.zmtcdn.com/data/pictures/chains/6/8776/c4a9652f2eebb28a3174f20653f81760.jpg",
        rating: "4.6",
        location: "Nearby . Rajouri",
        category: "Indian",
        dishes: [
          {
            name: "Chicken Tikka",
            desc: "Chicken tikka is a chicken dish originating in the Indian subcontinent during the Mughal era",
            price: "650",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeP09h2GbIofrDnD6XprgS3CMv4gVhGU-aZA&usqp=CAU"
          },
          {
            name: "Gulab Jamun",
            desc: "fried balls of a dough made from milk solids and semolina, soaked with an aromatic syrup with green cardamom, rose water, saffron.",
            price: "150",
            imgUrl: "https://thebellyrulesthemind.net/wp-content/uploads/2021/02/Gulab-Jamun-2-720x720.jpg"
          },
          {
            name: "Dal Makhni",
            desc: "Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils.",
            price: "250",
            imgUrl: "https://geekrobocook.com/wp-content/uploads/2021/01/Dal-makhani-1200x900.jpg"
          },
        ]
      },
      {
        id: 2,
        name: "McDonald's",
        imgUrl: "https://content.jdmagicbox.com/comp/mumbai/43/022p8405343/catalogue/mcdonald-s-lower-parel-mumbai-fast-food-1mjre3rus0.jpg",
        rating: "4.6",
        location: "Nearby . Rajouri",
        category: "Fast Food",
        dishes: [
          {
            name: "Chicken Tikka",
            desc: "Chicken tikka is a chicken dish originating in the Indian subcontinent during the Mughal era",
            price: "650",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeP09h2GbIofrDnD6XprgS3CMv4gVhGU-aZA&usqp=CAU"
          }
        ]
      },
      {
        id: 3,
        name: "Domino's",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrXLcLLHiKh1dgBOWm7pJzqqwA6vjeB1iFQ&usqp=CAU",
        rating: "4.6",
        location: "Nearby . Rajouri",
        category: "Fast Food",
        dishes: [
          {
            name: "Chicken Tikka",
            desc: "Chicken tikka is a chicken dish originating in the Indian subcontinent during the Mughal era",
            price: "650",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeP09h2GbIofrDnD6XprgS3CMv4gVhGU-aZA&usqp=CAU"
          }
        ]
      }
    ]
  },
  {
    title: "Tasty Discounts",
    desc: "Everyone's been enjoying these juicy discounts",
    restaurants: [
      {
        id: 1,
        name: "RollsKing",
        imgUrl: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2017/02/28110001/280217RollsKing_03.jpg",
        rating: "4.6",
        location: "Nearby . Punjabi Bagh",
        category: "Fast Food",
        dishes: [
          {
            name: "Chicken Tikka",
            desc: "Chicken tikka is a chicken dish originating in the Indian subcontinent during the Mughal era",
            price: "650",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeP09h2GbIofrDnD6XprgS3CMv4gVhGU-aZA&usqp=CAU"
          }
        ]
      },
      {
        id: 2,
        name: "MomoKing",
        imgUrl: "https://i.pinimg.com/originals/5b/cc/21/5bcc218288ab71dd7746d6bd2b721c82.jpg",
        rating: "4.6",
        location: "Nearby . Rajouri",
        category: "Chinese",
        dishes: [
          {
            name: "Chicken Tikka",
            desc: "Chicken tikka is a chicken dish originating in the Indian subcontinent during the Mughal era",
            price: "650",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeP09h2GbIofrDnD6XprgS3CMv4gVhGU-aZA&usqp=CAU"
          }
        ]
      },
      {
        id: 3,
        name: "KFC",
        imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg",
        rating: "4.6",
        location: "Nearby . Rajouri",
        category: "Chicken",
        dishes: [
          {
            name: "Chicken Tikka",
            desc: "Chicken tikka is a chicken dish originating in the Indian subcontinent during the Mughal era",
            price: "650",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeP09h2GbIofrDnD6XprgS3CMv4gVhGU-aZA&usqp=CAU"
          }
        ]
      }
    ]
  },
  {
    title: "Offers Near You!",
    desc: "Why not support your local restaurant tonight",
    restaurants: [
      {
        id: 1,
        name: "Dunkin Donuts",
        imgUrl: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/p6i5fwilqqhuq9gubncr",
        rating: "4.6",
        location: "Nearby . Tagore Garden",
        category: "Fast Food",
        dishes: [
          {
            name: "Chicken Tikka",
            desc: "Chicken tikka is a chicken dish originating in the Indian subcontinent during the Mughal era",
            price: "650",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeP09h2GbIofrDnD6XprgS3CMv4gVhGU-aZA&usqp=CAU"
          }
        ]
      },
      {
        id: 2,
        name: "Ironhill",
        imgUrl: "https://www.brewer-world.com/wp-content/uploads/2021/03/Ironhill-5.jpg",
        rating: "4.6",
        location: "Nearby . Rajouri",
        category: "Brewery",
        dishes: [
          {
            name: "Chicken Tikka",
            desc: "Chicken tikka is a chicken dish originating in the Indian subcontinent during the Mughal era",
            price: "650",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeP09h2GbIofrDnD6XprgS3CMv4gVhGU-aZA&usqp=CAU"
          }
        ]
      },
      {
        id: 3,
        name: "Pizza Hut",
        imgUrl: "https://content3.jdmagicbox.com/comp/bangalore/e8/080pxx80.xx80.190307194507.r6e8/catalogue/pizza-hut-bellandur-bangalore-pizza-outlets-z4nu7uuhth.jpg",
        rating: "4.6",
        location: "Nearby . Rajouri",
        category: "Fast Food",
        dishes: [
          {
            name: "Chicken Tikka",
            desc: "Chicken tikka is a chicken dish originating in the Indian subcontinent during the Mughal era",
            price: "650",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeP09h2GbIofrDnD6XprgS3CMv4gVhGU-aZA&usqp=CAU"
          }
        ]
      }
    ]
  },
]