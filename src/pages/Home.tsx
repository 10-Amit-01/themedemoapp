import axios, { Axios } from "axios";
import CardList from "../components/CardList";
import { useLoaderData } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  images: string[];
}

const Home = () => {
  const data= useLoaderData() as Product[];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Welcome to Theme Switcher App</h2>
      <p className="mb-4">This is a demo app with 3 different themes.</p>
      <CardList productList={data}/>
    </div>
  );
};

export const loader = async () => {
  const api = "https://api.escuelajs.co/api/v1/products";
  try {
    const response = await axios.get<Product[]>(api);
    return response.data;
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Could not fetch Products" }),
      {
        status: 500,
      }
    );
  }
};

export default Home;
