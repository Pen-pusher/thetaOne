const Row = (props) => {
	return <div className="alert alert-success row">
		<div className="col-lg-6 col-md-6">
			name : {props.name}
		</div>
		{props.stars !== false &&
			<div className="col-lg-6 col-md-6">
				stars : {props.stars}
			</div>}
	</div>
}

export default Row;