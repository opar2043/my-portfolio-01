import { useParams } from "react-router-dom"


const ProDetail = () => {
    const {id} = useParams();

    console.log(id);
  return (
    <div>ProDetail</div>
  )
}

export default ProDetail