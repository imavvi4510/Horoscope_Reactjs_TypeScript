
import { useNavigate } from "react-router-dom"
import MyForm from '../components/MyForm';

export default function Home(){
  const navigate = useNavigate()
  return (
    <div>
    <h1>Daily HoroScope</h1>

    <MyForm />
  </div>
  )
};

