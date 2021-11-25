import './StatsData.style.css'

const StatsData = ({darkMode, title, data}) => {
	return(
		<p className={darkMode?"StatsData":"StatsData StatsLight"}>{title}<br /><span>{data?data:0}</span></p>	
	)
}

export default StatsData
