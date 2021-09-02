import { useState } from "react";

import Input from "./Input";
import Table from "./Table";
import classes from "./Form.module.css";

let data = {};

const Form = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [username, setUserName] = useState("");
	const [hasError, setHasError] = useState(false);

	const usernameChangeHandler = (event) => {
		if (event.target.value === "") {
			setHasError(true)
		} else {
			setHasError(false);
			setUserName(event.target.value);
		}
	}

	const formSubmitHandler = async (event) => {
		try {
			setIsLoading(true);
			event.preventDefault();
			const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
			const starsResponse = await fetch(`https://api.github.com/users/${username}/starred`);
			if (reposResponse.status !== 200 || starsResponse.status !== 200) {
				throw new Error("Something went wrong!");
			}
			const repos = await reposResponse.json();
			const stars = await starsResponse.json();

			data = { repos, stars }
			setIsLoading(false);
		} catch (err) {
			setHasError(true);
		}
	}

	return <div>
		<form className={classes.form} onSubmit={formSubmitHandler}>
			<Input onChange={usernameChangeHandler} />
			{hasError && <p className={classes.error}>Enter a valid username</p>}
			<button disabled={hasError} className="btn btn-success" type="submit">Get details</button>
		</form>
		{isLoading && <h4 className={classes.center}>Please wait while loading.......</h4>}
		{!isLoading && Object.keys(data).length !== 0 && <Table data={data} />}
	</div>
}

export default Form;