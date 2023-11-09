const MatchCard = props => {
  const {everyItem} = props
  return (
    <div>
      <img src={everyItem.competingTeamLogo} alt={everyItem.competing_team} />
      <p>{everyItem.competing_team}</p>
      <p>{everyItem.results}</p>
      <p>{everyItem.matchStatus}</p>
    </div>
  )
}
export default MatchCard
