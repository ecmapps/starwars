import React from "react";
import "../../styles/home.css";
import { Characters } from "./characters";
import injectContext from "../store/appContext";

export const Home = () => (
	<div>
		<Characters />
	</div>
);
