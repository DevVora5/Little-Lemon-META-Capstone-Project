import { useNavigate } from 'react-router-dom';
import { Button, Heading } from '../../../../components';
import './Hero.css';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="LL-Hero">
      <div className="LL-Hero-left">
        <Heading tag="h1" size="2xl">
          Little Lemon
        </Heading>
        <p className="subtitle">Mumbai</p>
        <p id="LL-Hero-desc">
        Where tradition meets innovation in North Indian vegetarian cuisine, offering an exquisite family fine dining experience.
        </p>
        <Button
          ariaLabel="Reserve a Table"
          id="LL-Hero-btn"
          primary
          onClick={() => navigate('/bookings')}
        >
          Reserve a Table
        </Button>
      </div>
      <div className="LL-Hero-right">
        <img
          src="https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2019/Vegetable_Makhanwala_Recipe_North_Indian_Punjabi_1_400.jpg"
          alt="Little Lemon - Mix Veg"
        />
      </div>
    </section>
  );
};
