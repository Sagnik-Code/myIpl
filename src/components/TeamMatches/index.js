import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamMatches: [], latestMatch: [], recentMatch: [], isTrue: true}

  componentDidMount() {
    this.fetchingData()
  }

  fetchingData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const updateLatest = {
      id: updatedData.latestMatchDetails.id,
      umpires: updatedData.latestMatchDetails.umpires,
      result: updatedData.latestMatchDetails.result,
      manOfTheMatch: updatedData.latestMatchDetails.man_of_the_match,
      date: updatedData.latestMatchDetails.date,
      venue: updatedData.latestMatchDetails.venue,
      competingTeam: updatedData.latestMatchDetails.competing_team,
      competingTeamLogo: updatedData.latestMatchDetails.competing_team_logo,
      firstInnings: updatedData.latestMatchDetails.first_innings,
      secondInnings: updatedData.latestMatchDetails.second_innings,
      matchStatus: updatedData.latestMatchDetails.match_status,
    }
    const recentMat = {
      id: updatedData.recentMatches.id,
      umpires: updatedData.recentMatches.umpires,
      result: updatedData.recentMatches.result,
      manOfTheMatch: updatedData.recentMatches.man_of_the_match,
      date: updatedData.recentMatches.date,
      venue: updatedData.recentMatches.venue,
      competingTeam: updatedData.recentMatches.competing_team,
      competingTeamLogo: updatedData.recentMatches.competing_team_logo,
      firstInnings: updatedData.recentMatches.first_innings,
      secondInnings: updatedData.recentMatches.second_innings,
      matchStatus: updatedData.recentMatches.match_status,
    }

    this.setState({
      teamMatches: updatedData,
      latestMatch: updateLatest,
      recentMatch: recentMat,
      isTrue: false,
    })
  }

  renderTeamItems = () => {
    const {teamMatches, latestMatch, recentMatch} = this.state
    const {teamBannerUrl} = teamMatches

    return (
      <div>
        <img src={teamBannerUrl} alt="team banner" />
        <p>Latest Matches</p>
        <ul>
          {latestMatch.map(eachItem => (
            <LatestMatch perItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
        <ul>
          {recentMatch.map(eachVal => (
            <MatchCard everyItem={eachVal} key={eachVal.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isTrue} = this.state
    return (
      <div>
        {isTrue ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderTeamItems()
        )}
      </div>
    )
  }
}
export default TeamMatches
