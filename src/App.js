
import './App.css';

function App() {

  const data=[
    {
    status:"FREE",
    price:"$0",
    month:"/month",
    user:"✔ Single User",
    storage:"✔ 5GB storage",
    project:"✔ Unlimited Public project",
    access:"✔ Connunity Access",
    pro:"✖ Unlimited Private Project",
    phone:"✖ Dedicated Phone support",
    free:"✖ Free Subdomain",
    report:"✖ Monthly Status Report",
    },
    {
      status:"PLUS",
      price:"$9",
      month:"/month",
      user:"✔ Single User",
      storage:"✔ 5GB storage",
      project:"✔ Unlimited Public project",
      access:"✔ Connunity Access",
      pro:"✔ Unlimited Private Project",
      phone:"✔ Dedicated Phone support",
      free:"✔ Free Subdomain",
      report:"✖ Monthly Status Report",
      },
      {
        status:"PRO",
        price:"$49",
        month:"/month",
        user:"✔ Single User",
        storage:"✔ 5GB storage",
        project:"✔ Unlimited Public project",
        access:"✔ Connunity Access",
        pro:"✔ Unlimited Private Project",
        phone:"✔ Dedicated Phone support",
        free:"✔ Free Subdomain",
        report:"✔ Monthly Status Report",
        }
  ]

  return (
    <div className="App">
      {data.map((item,idx)=>(
        <Card 
        key={idx}
        status={item.status}
        price={item.price}
        month={item.month}
        user={item.user}
        storage={item.storage}
        project={item.project}
        access={item.access}
        pro={item.pro}
        phone={item.phone}
        free={item.free}
        report={item.report}
        />
      ))}
    </div>
  );
}

export default App;



function Card(props){

  return(
    <div className='container'>
      <div className='status'>{props.status}</div>
      <span className='price'>{props.price}</span><span className='month'>{props.month}</span>
      <hr/>
      <p>{props.user}</p>
      <p>{props.storage}</p>
      <p>{props.project}</p>
      <p>{props.access}</p>
      <p>{props.pro}</p>
      <p>{props.phone}</p>
      <p>{props.free}</p>
      <p>{props.report}</p>
      <div>
      <button className='button' type="submit">BUTTON</button> 
      </div>
      

      
    </div>
    
  )
}