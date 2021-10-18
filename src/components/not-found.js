import React from "react";
import { Link } from "react-router-dom";
import Hero from "./hero";

const NotFound = () => {
	return(
		<div>
			<Hero text="404: Page Not Found" />
			<Link to="/">Go Home</Link>
		</div>

	)
}

export default NotFound;