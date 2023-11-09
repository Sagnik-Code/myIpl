import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachCardItem} = props
  const {id, name, teamImageUrl} = eachCardItem

  return (
    <Link to={`/team-matches/${id}`}>
      <li>
        <img src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
