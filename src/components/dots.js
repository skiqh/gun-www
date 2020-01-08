import React from "react"

const Dots = ({ a = "#ff003d", b = "#fdff14", c = "#46ffe6" }) => {
	return (
		<svg className="dots" height="7" viewBox="0 0 45 11">
			<circle cx="5.5" cy="5.5" r="5.5" fill={a} />
			<circle cx="22.5" cy="5.5" r="5.5" fill={b} />
			<circle cx="39.5" cy="5.5" r="5.5" fill={c} />
		</svg>
	)
}

export default Dots
