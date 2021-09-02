import Row from "./Row";
import classes from "./Table.module.css"

const Table = (props) => {

	const repos = props.data.repos.map((repo) => <Row key={repo.id} name={repo.full_name} stars={repo.watchers_count} />);
	const stars = props.data.stars.map((starredRepo) => <Row key={starredRepo.id} name={starredRepo.full_name} stars={false} />)

	return <div className={classes.table}>
		<h4>Public Repositories</h4>
		{repos}
		<h4>Starred Repositories</h4>
		{stars}
	</div>
}

export default Table;