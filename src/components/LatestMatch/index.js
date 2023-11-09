const LatestMatch = props => {
  const {perItem} = props

  return (
    <div>
      <p>{perItem.competingTeam}</p>
      <p>{perItem.date}</p>
      <p>{perItem.venue}</p>
      <p>{perItem.result}</p>
      <img src={perItem.competingTeamLogo} alt={perItem.competingTeam} />
      <p>First Innings</p>
      <p>{perItem.firstInnings}</p>
      <p>Second Innings</p>
      <p>{perItem.secondInnings}</p>
      <p>Man Of The Match</p>
      <p>{perItem.manOfTheMatch}</p>
      <p>Umpires</p>
      <p>{perItem.umpires}</p>
    </div>
  )
}
export default LatestMatch
