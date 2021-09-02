const Input = (props) => {
	return (
		<div className="mb-3">
			<label htmlFor="username" className="form-label">Enter Gihub username</label>
			<input onChange={props.onChange} type="text" className="form-control" id="username" placeholder="Pijush Chakraborty(pen-pusher)"></input>
		</div>
	)
}

export default Input;