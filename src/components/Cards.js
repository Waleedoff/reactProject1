import React from 'react'

const Cards = ({props}) => {


    const cards = props.map(({title,description,rating,src,link},index)=>(  //mapping

    <div className="row">
    <div class="col-md-3">
      <div class="card">
        <img src={src}/> 
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <strong class="rating">{rating}</strong>
          <br/>
          <hr/>
          <br/>
          <a href={link} class="btn btn-dark">watch</a>
        </div>
      </div>
    </div>
  </div>



));
    return <div>{cards}</div>
};

export default Cards;