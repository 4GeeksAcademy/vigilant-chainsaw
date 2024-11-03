import React from 'react'

function Card (){

return <div className="card col-md-6 col-lg-3 col-sm-10 col-12">
<img src="https://www.afm-records.de/images/Artists/Lordi/Bandbanner/Lordi_2020.jpg" class="card-img-top"></img>
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <a href="#" class="btn btn-primary">Find Out More!</a>
</div>
</div>
}

export default Card