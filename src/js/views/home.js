import React from "react";
import "../../styles/home.css";
import { Characters } from "./characters";
import { Planets } from "./planets";
import { Vehicles } from "./vehicles";
import injectContext from "../store/appContext";

export const Home = () => (
	<div>
		<div className='twinkling'></div>
		<Characters />
		<Planets />
		<Vehicles />
	</div>
);
