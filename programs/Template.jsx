import laptop1 from './laptop1.jpeg'
import './style.css'
function Template() {
  return (
    
    <div className="container">
       <div className="header">
        <div className="heading"> KL UNIVERSITY</div>
        <div className="menu">
            <span>home </span>
            <span>about </span>
            <span>portfolio </span>
            <span> login</span>
        </div>
       </div>
       <div className="main">
        <figure>
        <div className="plogo"> <img src={laptop1} title='hp victus' /></div>
        <figcaption> victus</figcaption>
        </figure>
        <br />
        <br />   
        <br />   

     <div className='features'>
            <p> <strong>victus</strong></p>
           
            <p>70000</p>
            
            <p>bought in 2023</p>
            
        </div>
        
       </div>
       <div className='footer'>
        <div className='logos'>
        <i class="fa fa-apple"></i>
        <i class="fa fa-bitbucket"></i>
        <i class="fa fa-bluetooth"></i>
        <i class="fa fa-cc-stripe"></i>
        </div>

       </div>

    </div>
    
  )
}

export default Template