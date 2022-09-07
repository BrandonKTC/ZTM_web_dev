import Link from 'next/link'

const Robots = (props) => (
	<div>
		<h1>Robots</h1>
		<div>
			{props.robots.map((robot) => (
				<li key={robot.id}>
					<Link href={`robots/${robot.id}`}>
						<a>{robot.name}</a>
					</Link>
				</li>
			))}
		</div>
		<Link href='/'>
			<button>Home</button>
		</Link>
	</div>
)

Robots.getInitialProps = async function () {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()
	// console.log(data)
	return {
		robots: data,
	}
}

export default Robots
