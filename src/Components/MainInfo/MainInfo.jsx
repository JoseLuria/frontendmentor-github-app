import './MainInfo.style.css'

const MainInfo = ({darkMode, img, user, name, jointed}) => {

  let jointedFormated = ""

  const handleJointed = () => {
    if(jointed){
      if(jointed.length > 1){
        const jointedData = jointed.slice(0, 10)
        const jointedArray = jointedData.split("-")
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
        jointedFormated = `Joined ${jointedArray[2]} ${months[jointedArray[1] - 1]} ${jointedArray[0]}`
      }
    }
  }

  handleJointed() 

	return(
    <div className={darkMode?"MainInfo MainDarkInfo":"MainInfo MainLightInfo"}>
    	<img src={img} alt="User" />

      <div className="InfoUser">
        <div>
          <h1>{name}</h1>
          <p>@{user}</p>
        </div>
      	<p>{jointedFormated}</p>
      </div>
		</div>
	)
}

export default MainInfo
