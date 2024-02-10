import { Heading, Stack } from '../../../../components';
import './About.css';

export const About = () => {
  return (
    <section id="about">
      <Stack className="about-columns" justify="space-between">
        <Stack.Item
          className="about-left-column"
          vertical
          gap="2.25rem"
          basis="50%"
        >
          <Stack.Item vertical>
            <Heading>Little Lemon</Heading>
            <p>Mumbai</p>
          </Stack.Item>

          <p id="a">
          Nestled amidst Mumbai's vibrant streets, Little Lemon stands as a beacon of culinary excellence, specializing in top-tier North Indian vegetarian cuisine. With its sophisticated ambiance and commitment to family fine dining, Little Lemon offers an unparalleled experience where every dish is a masterpiece crafted with precision and passion. From the harmonious blend of aromatic spices to the inviting warmth of its decor, each visit promises an unforgettable journey into the heart of Indian gastronomy. More than just a restaurant, Little Lemon serves as a culinary sanctuary, where families gather to create cherished memories and celebrate the timeless traditions of shared meals. Welcome to Little Lemon—a haven where culinary mastery and familial warmth converge to create moments of pure delight in the heart of Mumbai.
          </p>
        </Stack.Item>

        <section className="about-right-column">
          <section id="about-images">
            <div id="about-first-image">
              <img
                src="https://media.istockphoto.com/id/1309964339/photo/rajma-chawal-an-indian-food.jpg?s=612x612&w=0&k=20&c=16jGWMYDvRVyTIOv-xBjH_JToctwIji_bomw2nl_JcE="
                alt="Little Lemon - Rajma Naan"
              />
            </div>
            <div id="about-second-image">
              <img
                src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/06/restaurant-style-dal-tadka.jpg"
                alt="Little Lemon - Dal Tadka"
              />
            </div>
          </section>
        </section>
      </Stack>
    </section>
  );
};
