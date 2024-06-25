import { Link } from 'react-router-dom'
export const Navigation = () => {
	return (
		<div style={{
			display : "flex",
			flexDirection : "column"
		}}>
			<Link to="/">
				Home
			</Link>
			<Link to="/sbb">
				SBB Advice
			</Link>
			
		</div>
	)
}