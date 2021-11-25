import './Link.style.css'

const Link = ({darkMode, data, img, type}) => {
	return(
    <div className={darkMode?"LinkDark":"LinkLight"}>
      <div className={data?"Link LinkTrue":"Link LinkFalse"}>
    	  <div>
      	  <img src={img} alt="Company Logo" />
     	  </div>
        {data?type === "link"?<a rel="noreferrer" target="_blank" href={data}>{data}</a>:<p>{data}</p>:<p>Not Avaliable</p>}
      </div>
    </div>
	)
}

export default Link
