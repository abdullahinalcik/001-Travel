import Card from "./Card";
import "./Main.scss";
import data from "../../helper/data"

const Main = () => {
  console.log(data);
  return (
    
    <main>
      <div className="header">
        <span> Where would you want to visit ?</span>
      </div>
      {data.map(({id,title,desc,image})=>( <Card key={id} title={title} desc={desc} image={image} />))}
     
    </main>
  );
};

export default Main;
